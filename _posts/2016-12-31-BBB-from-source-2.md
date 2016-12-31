---
layout: post
title:  "BeagleBone Black from Source: The U-boot Bootloader"
date:   2016-12-31
author: "Austin"
read_time: "< 2 min"
article_overview: "How to build the u-boot Bootloader for BeagleBone Black. More posts about building and installing the BBB's main software components coming soon."
image: <img class="post_overview_img" src="/img/BBB/uboot.png" alt="BeagleBone Black">
---
### Let's start building things
After setting up an cross compiler that's pointed to by the env var `CC` we can go ahead and start building software for the BeagleBone Black (arm) from our own PC (x86). We'll start with the bootloader: **u-boot**.

(Make sure to set up the cross compiler according to the last post if you haven't yet.)

1. Get the code from github:

        git clone https://github.com/u-boot/u-boot && cd u-boot

3. Check out the appropriate branch:

        git checkout v2016.01 -b tmp

    The `-b` flag just creates a new temporary branch, this will make clean-up easier later.

4. Grab BBB-related patches and apply them:

        wget https://rcn-ee.com/repos/git/u-boot-patches/v2016.01/0001-am335x_evm-uEnv.txt-bootz-n-fixes.patch
        patch -p1 < 0001-am335x_evm-uEnv.txt-bootz-n-fixes.patch


5. Compile:

        make ARCH=arm CROSS_COMPILE=${CC} distclean
        make ARCH=arm CROSS_COMPILE=${CC} am335x_evm_defconfig
        make ARCH=arm CROSS_COMPILE=${CC}

    If this finishes without error, you're all done. You can find binaries and files needed to install u-boot in the current directory. Most likely the only ones you will need are called `u-boot.img` and `MLO`

    You can then install them to a non-volatile storage device (e.g. `/dev/sdX`) as follows:

1. Zero out the beginning of the device:

        dd if=/dev/zero of=/dev/sdX bs=1M count=8

2. Write the bootloader to the device:

        dd if=./MLO of=/dev/sdX count=1 seek=1 conv=notrunc bs=128k
        dd if=./u-boot.img of=/dev/sdX count=2 seek=1 conv=notrunc bs=384k
