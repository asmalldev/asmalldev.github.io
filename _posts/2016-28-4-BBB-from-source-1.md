---
layout: post
title:  "BeagleBone Black from Source:<br>Setting Up the Toolchain"
date:   2016-05-02
author: "Austin"
read_time: "< 5 min"
article_overview: "Part one in a series of posts about building and installing the main software components required to run Linux on the BeagleBone Black single-board computer."
image: <img class="post_overview_img" src="/img/BBB/BBB.jpg" alt="BeagleBone Black">
---
<div class="center_imgs"><img class="post_img_large" src="/img/BBB/BBB.jpg" alt="BeagleBone Black"></div>

### The BeagleBone Black
The Beaglebone Black (BBB) is an open-source single-board computer that runs Linux. Starting with this post, I'll be going over how to build the major software components needed to run Linux on the BeagleBone Black. This includes the bootloader, kernel, and rootfs. Building these components from source is the first step towards customizing them- a major part of taking advantage of the flexibility of embedded linux and tailoring the BBB's software for your use case.

### Why build these from source?
The out-of-the-box Linux installation on the BeagleBone Black does a good job of providing a standard Linux experience while also letting you take advantage of the board's more specific hardware (using software like [the BoneScript Node.js library](http://beagleboard.org/support/bonescript)). But to *really* tailor the system to your specific needs, you'll probably need to get your hands dirty and compile a custom kernel or root file system from source.

### Why write about this?
There's good documentation out there on how to build these components for the BeagleBone Black, but it can be disparate and difficult to track down. My goal in these next few posts is to comprehensively record the process and also throw in my own knowledge. Once you can build these components from source, it's up to you to decide what modifications *you* want to build into them! (In the future I'll also post about some specific examples of what you can change, but for now I'll just post the general process for reference.)

All right, here we go!

## Setting Up a Toolchain for Cross Compiling (The Easy Way)
In order to build software for the BBB, we need to compile source code into ARM archetecture binaries. The host machine used for compilation is most likely x86 archetecture, so this requires a cross toolchain or cross compiler. Setting up a toolchain for cross compilation can be complicated if you choose to build it yourself. The software tools you need as part of the toolchain (gcc,binutils, etc) are dependent upon specific versions of each other and it can get a little tricky. To avoid this, we will simply use a prebuilt toolchain from the [Linaro group](http://www.linaro.org/). Once set up, the toolchain will allow us to compile code for the BBB from an x86 machine (your typical computer).

1. Grab the prebuilt toolchain from Linaro and extract it:

        wget https://releases.linaro.org/components/toolchain/binaries/5.2-2015.11/arm-linux-gnueabihf/gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf.tar.xz
        tar -xvf gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf.tar.xz

2. Store the path to the toolchain binaries + the shared target triplet in a variable, called CC:

        export CC=`pwd`/gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-

    Take note that you must include the target triplet of the binaries after the path (`arm-linux-gnueabihf-`) this is a prefix shared by all the binaries and allows us to reference different ones but just changing the suffix (which you'll see later).

3. Do a quick version check to make sure the path is correct:

        ${CC}gcc --version -dumpmachine

    If this outputs the target triplet mentioned before (in this case, `arm-linux-gnueabihf`) you are done and can refer to the CC variable during future build processes. We'll start using this to build software for the BBB in the next post!
