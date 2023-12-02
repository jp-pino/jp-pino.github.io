@extends('_layouts.main')

@section('body')
<div class="flex flex-row -mx-12">
    <div class="basis-9/12 pr-6">
        @foreach ($posts->where('featured', true) as $featuredPost)
        <div class="w-full mb-6">
            @if ($featuredPost->cover_image)
            <img src="{{ $featuredPost->cover_image }}" alt="{{ $featuredPost->title }} cover image" class="mb-6 mx-auto">
            @endif

            <p class="text-gray-700 font-medium my-2">
                {{ $featuredPost->getDate()->format('F j, Y') }}
            </p>

            <h2 class="text-3xl mt-0">
                <a href="{{ $featuredPost->getUrl() }}" title="Read {{ $featuredPost->title }}" class="text-gray-900 font-extrabold">
                    {{ $featuredPost->title }}
                </a>
            </h2>

            <p class="mt-0 mb-4">{!! $featuredPost->getExcerpt() !!}</p>

            <a href="{{ $featuredPost->getUrl() }}" title="Read - {{ $featuredPost->title }}" class="uppercase tracking-wide mb-4">
                Read
            </a>
        </div>

        @if (! $loop->last)
        <hr class="border-b my-6">
        @endif
        @endforeach
    </div>
    <div class="basis-3/12">
        <div class="border-2 rounded-md p-4">
            <h2 class="text-2xl font-bold mb-4">Projects</h2>
            <div id="project-list" class="flex flex-col items-center h-[50vh] overflow-y-auto">
                @include('projects')
            </div>
        </div>
    </div>
</div>


@include('_components.newsletter-signup')

@foreach ($posts->where('featured', false)->take(6)->chunk(2) as $row)
<div class="flex flex-col md:flex-row md:-mx-6">
    @foreach ($row as $post)
    <div class="w-full md:w-1/2 md:mx-6">
        @include('_components.post-preview-inline')
    </div>

    @if (! $loop->last)
    <hr class="block md:hidden w-full border-b mt-2 mb-6">
    @endif
    @endforeach
</div>

@if (! $loop->last)
<hr class="w-full border-b mt-2 mb-6">
@endif
@endforeach
@stop