---
layout: post
title:  "Hello World"
date:   2015-3-3
author: "asmalldev"
read_time: "4 minutes"
article_overview: "Hello World! For my first post, I thought it would be appropriate to talk about the creation process of this site. In this post I'll give a brief, non-technical overview of the tools I used to create and deploy this site and my rational for using them."

---

###HTML, CSS, and Jekyll (Oh My)
Hello World! For my first post, I thought it would be appropriate to talk about the creation process of this site. In this post I'll give a brief, non-technical overview of the tools I used to create and deploy this site and my rational for using them. In short I wrote plain HTML and CSS for the site rather than using some sort of content management system, used git for version control, and deployed it using Jekyll and Github pages. I'll go into further detail on my experience with these tools.

###Maintaining Lightweight Front and Back Ends: Adding More Functionality to HTML and CSS
For this site, I've written HTML and CSS (with just a bit of javascript), trying to keep in mind that HTML and CSS alone provide an impressive amount of functionality and design. I opted not to use a lot bulky dynamic content because I think it can be quite freeing not to and because I want to keep the back end as simple as possible and easy to maintain.
In keeping with this goal of simplicity, rather than using a complicated content management system (CMS) for extra functionality and for deployment (think wordpress, droopal, and the like) I use a static site generator. The static site generator I've chosen is called Jekyll (which is popular and has relatively good documentation). There are *lots* of static site generators out there besides Jekyll, written in myriad different languages with various implementations. Jekyll is written in Ruby and uses the Liquid template engine. Jekyll is very simple to set up and use. This is *especially* true if you are familiar with the concept of static site generation and/or with template languages like Liquid. Basically, Jekyll allows me to turn my markup, markdown, and styling into a pre-generated static site with extra functionality like a blog section and the ability to consolidate sections of markup that need to appear in multiple places on the site.

###The Rational for Static Site Generation
Static site generation makes making and managing a site very easy. The concept is relatively simple: raw files of CSS, HTML, javascript, and markdown go in and a pre-built site comes out, ready to be served. Bon Appetit. This approach is praised for it's ease, and security.
Jekyll simply takes these local files of  HTML, CSS, and whatever else that are organized in a specific directory structure (posts in one directory, layouts in another, and so on) and puts them together to make a static site. Simple enough.
Static site generation like that of Jekyll is also hailed for it's security benefits. A common rule of thumb for security is if something is executing code, it can be vulnerable to attack. This is the reasoning behind static site generation being more secure: there's no code being executed server-side like there is with complicated CMS's, it's all done beforehand when Jekyll builds the site. This minimizing of server-side code makes static site generation more secure. (Disclaimer: Like I said, I'm **not** a security expert.)

###Jekyll in Practice
In practice, Jekyll and Liquid (its template engine of choice) include numerous ways to make building and maintaining sites more simple and add more functionality. While I do admit the nitty gritty of where to put what and how to make use of the Liquid template language can take some fiddling at times, it is undeniably more lightweight than using a CMS like wordpress while still enabling similar functionality (like looping through blog posts you want to display). Here's some examples: in my site I make use of what Jekyll calls "includes" and "layouts" to simplify the creation and editing of content and to eliminate what is often called the "multiple update problem" (I'll clarify this in a sec). Includes allow me to isolate parts of HMTL or CSS and add them into the site in multiple instances rather than duplicating markup or styling across many files (the multiple update problem). Layouts are similar: using layouts I can write HTML files that provide basic structure for different page types (one for a blog post, another for the about page, etc). In the case of my site, I use a master layout that contains elements that appear on all pages of the site like the header and footer. This allows me to edit one HTML file rather than a different one for each page- what a relief! This also ensures I don't end up with inconsistent menus or footers across different pages. Jekyll's template engine is also what enables me to have a blog section without using a database. Using Liquid, Jekyll loops through the _posts folder upon site generattion to put together a page that displays all those posts in the manner that I choose. These simple yet powerful features of Jekyll make creating and managing my site more functional and in many ways takes the busy work out of having only plain HTML and CSS on a site.

### Jekyll and Github Pages: Hosting That's Easy as Pie
<div class="center_imgs">
<img class="post_img" src="/img/octojekyll.png" alt="Jekyll and Github">
<img class="post_img" src="/img/post0/equals.png" alt="equals">
<img class="post_img" src="/img/post0/pie.png" alt="pie">
</div>
Combined with Github pages I am able to host this site in a git repository for *free*. This is the cherry on top. The simplicity that static site generation brings to building and maintaining a site and the ease of hosting on Github pages makes the whole process a joy and basically makes me want to <s>laugh maniacally while petting a kitten</s> donate some $ to Github and Jekyll.
Using Github and Jekyll also enables me to keep all the parts of my site locally too so I can edit them with the program of my choice and use git for version control, just the way I like it. To update the site, I simply push my local master repository to github!

### TL;DR (but let's be real, it's pretty short)
Jekyll (a static site generator written in Ruby), Github, and Git were instrumental in the making of this site and provide a simple, functional, and secure solution for site creation and deployment. I highly encourage you to check out both [Jekyll](http://www.jekyllrb.com) and [Github Pages](http://www.pages.github.com) or find another static generator that you prefer- let me know what you choose! Head over to the credits tab up above to see the other useful tools I've used for this site! Also, stay tuned for posts that are more technical than this ;)
