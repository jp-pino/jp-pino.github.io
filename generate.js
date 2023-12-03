const fs = require('fs');

// Read environment variables
let config = {
  headers: {
    "Authorization": `token ${process.env.GITHUB_TOKEN}`
  }
};


async function getRepos() {
  let req = await fetch("https://api.github.com/users/jp-pino/repos", config);
  let json = await req.json();

  while (req.headers.get('Link') && req.headers.get('Link').includes('rel="next"')) {
    const nextUrl = req.headers.get('Link').split(';')[0].slice(1, -1);
    req = await fetch(nextUrl, config);
    json = json.concat(await req.json());
  }

  let projects = await Promise.all(json.map(async (project) => {
    let req = await fetch(project.languages_url, config);
    let langs = await req.json();
    let main_lang = Object.keys(langs)[0];

    let badge_urls = (await (await fetch(`https://api.github.com/repos/jp-pino/${project.name}/actions/workflows`, config)).json()).workflows.map((workflow) => workflow.badge_url);

    return {
      name: project.name,
      full_name: project.full_name,
      description: project.description,
      url: project.html_url,
      language: project.language,
      stars: project.stargazers_count,
      is_fork: project.fork,
      forks: project.forks_count,
      watchers: project.watchers_count,
      has_pages: project.has_pages,
      open_issues: project.open_issues_count,
      created_at: project.created_at,
      updated_at: project.updated_at,
      language: main_lang,
      badge_urls: badge_urls
    }
  }));

  projects.sort((a, b) => {
    if (a.stars > 0) return a.stars > b.stars ? -1 : 1;
    if (a.has_pages && !b.has_pages) return -1;
    return new Date(b.updated_at) > new Date(a.updated_at) ? 1 : -1;
  });
  return projects;
}

getRepos().then((projects) => {
  let html = "";

  projects.forEach((project) => {
    html += `
  <div class="group w-72 bg-gray-100 border rounded-lg border-gray-700 p-4 shadow hover:bg-gray-700 duration-200 mb-2 hover:shadow-lg">
    <a href="${project.url}" class="group flex flex-row relative">
    `;
    html += `
      <span class="text-gray-800 group-hover:text-gray-300 group-hover:hover:text-white font-semibold"><i class="fa-solid fa-star ${project.stars > 0 ? "" : "hidden"}" style="color: #fecb3e;"></i> ${project.full_name}<span>
    </a>`;


    if (project.description) {
      html += `
    <p class="text-xs text-gray-500 mt-3">
        ${project.description}
    </p>`;
    }
    html += `
    <div class="flex flex-row justify-between text-xs mt-3">
      <div>
        <i class="fa-solid fa-code-fork pr-2 pl-1 group-hover:text-gray-300 ${project.is_fork ? "" : "hidden"}"></i>`;

    if (project.language) {
      html += `
        <span class="text-xs text-gray-200 rounded-sm bg-gray-800 group-hover:bg-gray-100 group-hover:text-gray-500 py-1 px-2">
            ${project.language}
        </span>`;
    }
    html += `</div>`;
    if (project.has_pages) {
      html += `
      <a href="https://jp-pino.github.io/${project.name}" class="duration-200 text-gray-500 hover:text-gray-800 group-hover:text-gray-300 group-hover:hover:text-white py-1">
        <i class="fa-solid fa-book"></i> Docs
      </a> `;
    }
    html += `</div>`;

    if (project.badge_urls.length > 0) {
      html += `<div class='hidden group-hover:block bg-gray-300 border-gray-500 rounded-md shadow-md mt-2 border-2 p-1'>`;

      project.badge_urls.forEach((badge_url) => {
        if (badge_url.includes('pages-build-deployment')) return;
        html += `<img src="${badge_url}" class="inline-block mr-2" />`;
      });

      html += `</div>`;
    }
    html += `</div>`;
  });

  html += `</div > `;

  fs.writeFile('source/projects.blade.php', html, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

});
