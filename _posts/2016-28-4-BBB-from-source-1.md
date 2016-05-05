---
layout: post
title:  "BeagleBone Black from Source: Part One<br>Setting Up the Toolchain"
date:   2016-05-02
author: "Austin"
read_time: "< 5 min"
article_overview: "Part one in a series of posts about building and installing the main software components of the BeagleBone Black from source."
image: <img class="post_overview_img" src="/img/BBB/BBB.jpg" alt="BeagleBone Black">
---
<div class="center_imgs"><img class="post_img_large" src="/img/BBB/BBB.jpg" alt="BeagleBone Black"></div>

The Beaglebone Black is an open-source single-board Linux computer supported by the non-profit BeagleBoard foundation and companies like Texas Instruments. In a series of posts starting with this one, I'll be going over how to build the major software components of the BeagleBone Black from source- the first step to adding-in your own changes such as a custom kernel or root filesystem.

BeagleBone Black comes pre-installed with Debian by default, but it's easy to get any number of Linux distributions (or linux-based OS's like Android) running on it. Furthermore, since the hardware and software are open-source, it's possible to taylor them to your specific needs. That's where the BeagleBone Black's niche is. It's hardware (like the 1GHz cortex-A8 processor onboard) allows it to take advantage of general-purpose operating systems like Linux but also to be simultaneously configured to fill more specific computing roles.

### PRU
A great example of this is the BeagleBone Black's PRU subsystem. PRU stands for "Programmable Real-time Unit" and this hardware subsystem allows the BeagleBone black to fit a role that would usually be filled by an embedded computer running a Real Time OS (RTOS). Using an RTOS would allow for computation with predictable latencies (allowing us to do things like operate a motor at exact times- which would be important for things like lowering landing gear on a plane, or having a robot take a step without falling on its face). But while an RTOS running on an embedded computer would be able to do those specific tasks very well, it would lack the degree of adaptability that comes with a general-purpose OS like Linux (and the ecosystem of software surrounding it). That's where the BeagleBone comes in- the cortex-A8 makes it great for running Linux, but its PRU subsystem can be set up to make it approprate for real-time applications too.

### Step One: Build From Source, Step Two: Customize, Step Three: Profit
The out-of-the-box Linux installation on the BeagleBone Black does a good job of providing a standard Linux experience while also letting you take advantage of the board's more specific hardware (using software like [the BoneScript Node.js library](http://beagleboard.org/support/bonescript)). But to really taylor the system to your specific needs, you'll probably have to get your hands a little more dirty by doing things like compiling custom kernels, creating custom root file systems, or changing the device tree.

There's a lot of good documentation out there on how to these things while working with the BeagleBone Black specifically, but they can be disparate and difficult to track down. I will be posting the processes of of to build major components of the BBB's software from source. Once you can do that, it's up to you to decide what modifications *you* want to build into them in order to fit your specific needs! In the future I'll also post about some specific examples of what you can change, but for now I'll just post the general process for referencce. All right, let's do this.

## Let's Set Up a Toolchain for Cross Compiling (The Easy Way)
Setting up a toolchain for cross compilation can be complicated if you choose to build it yourself. The packages you need to compile are dependent upon very specific versions of each other and have little standardization among their build processes. To avoid this, we will simply use a prebuilt toolchain from the Linaro group. Once set up, the toolchain will allow us to compile to the ARM architecture (for the BBB) from an x86 machine (your usual computer).

1. Grab the prebuilt toolchain from Linaro and extract it:

        wget https://releases.linaro.org/components/toolchain/binaries/5.2-2015.11/arm-linux-gnueabihf/gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf.tar.xz
        tar -xvf gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf.tar.xz

2. Store the path to the toolchain binaries + the shared target triplet in a variable, called CC:

        export CC=`pwd`/gcc-linaro-5.2-2015.11-x86_64_arm-linux-gnueabihf/bin/arm-linux-gnueabihf-

    Take note that you must include the target triplet of the binaries after the path (in this case `arm-linux-gnueabihf-`) this allows us to reference different binaries but just changing the suffix.

3. Do a quick version check to make sure the path is correct:

        ${CC}gcc --version -dumpmachine

    If this outputs the target triplet mentioned before (in this case, `arm-linux-gnueabihf`) you are done and can refer to the CC variable during future build processes. We'll start using this to build software for the BBB in the next post!
