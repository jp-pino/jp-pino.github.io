---
extends: _layouts.post
section: content
title: New Features!
date: 2019-08-27
description: New features for mopiOS
cover_image: /assets/img/mopiOS.png
featured: true
categories: [projects, featured, mopiOS]
---

Big news for mopiOS!!! There are many new features for _semaphores_, _threads_, _debugging_, and so much more! Among the new features you'll find:
* Threads are now named so it is easier to identify them.
* Memory for TCBs is now dynamically allocated on the Heap.
* You can now print the jitter histogram directly from the CLI, just use `jitter -h`.
* Threads can now be killed from another thread through `killall` functionality.
* Semaphores now register on a list upon initialization, making it easier to find TCBs that are blocking inside them.
* The new command `ts` now counts the number of active threads. To list all threads with their names and status add the flag `-l`.

More is on the way! I'm currently working on a port of **rosserial_client** for mopiOS, to enable communication with the ROS platform. See the development on this port [here](https://github.com/jp-pino/rosserial-mopiOS).
