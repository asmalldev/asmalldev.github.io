---
layout: post
title:  "Hello World"
date:   2015-1-10 14:02
author: "asmalldev"
read_time: "4 minutes"
article_overview: "Hello World! For my first post, I thought it would be appropriate to talk about the creation process of this site and basically give a non-technical overview of/ shout out to the methods I used to create and deploy it. I wrote plain HTML and CSS for the site rather than using some sort of content management system, used git for version control, and deployed it using Jekyll and Github pages. In this post I'll go into further detail on these tools."

---

###Shout Out: HTML, CSS, and Jekyll (Oh My)
Hello World! For my first post, I thought it would be appropriate to talk about the creation process of this site and basically give a non-technical overview of/ shout out to the methods I used to create and deploy it. I wrote plain HTML and CSS for the site rather than using some sort of content management system, used git for version control, and deployed it using Jekyll and Github pages. In this post I'll go into further detail on these tools.

###Adding More Functionality to HTML and CSS While Keeping Things Lightweight
For this site, I've written HTML and CSS (with just a bit of javascript), trying to keep in mind that HTML and CSS alone provide an impressive amount of functionality and design. I opted not to use any bulky dynamic content because I think it can be quite freeing not to and because I want to keep the back end as simple as possible and easy to maintain.
In keeping with this goal of simplicity, rather than using a complicated content management system (CMS) for extra functionality (think wordpress, droopal, and the like) I use a static site generator. The static site generator I've chosen is called Jekyll (which is popular and has relatively good documentation). Jekyll is fairly simple to set up and use. This is *especially* true if you are familiar with the concept of static site generation and/or with template languages like Liquid (which is what Jekyll uses). Jekyll allows me to turn my markup, text, and styling into a static site that includes extra functionality like a blog section and the ability to consolidate sections of markup that need to appear on multiple pages.

###Jekyll and Static Site Generation
The concept of static site generation is relatively simple: raw files of CSS, HTML, javascript, and markdown go in and a pre-built site comes out, ready to be served. Bon Appetit. This approach is great for it's ease, and security. I can personally advocate for the simplicity of static site generation after building this site and while I'm not a security expert, the reasoning behind it's security benefits seems sound. 
Jekyll simply takes these local files of  HTML, CSS, etc. that are organized in a specific directory structure (posts in one directory, layouts in another, and so on) and puts them together to make a static site. Simple enough.
Static site generation like that of Jekyll is also hailed for it's security benefits. A common rule for security is if something is executing code it can be vulnerable to attack. Often this is stated as a reason that static site generation is more secure: there's no code being executed like there is with complicated CMS's, it's all done beforehand when Jekyll builds the site. The bottom line is that static sites don't execute code in the browser, and that makes them more secure. (Disclaimer: Like I said, I'm **not** a security expert.)

###Jekyll in Practice
In practice, Jekyll and Liquid (its template engine of choice) include numerous ways to make building and maintaining sites more simple and add functionality. While I do admit the nitty gritty of where to put what and how to make use of the Liquid template language can take some fiddling at times, it is undeniably more lightweight than using a CMS like wordpress while still enabling similar functionality. For some examples: in my site I make use of includes and layouts to simplify the creation and editing of site content. Includes allow me to isolate parts of HMTL or CSS and add them into the site in multiple places rather than duplicating markup or styling across many files. Layouts are similar: using layouts I can write HTML files that provide basic structure for different page types (one for a blog post, another for the about page, etc). In the case of my site, I use a master layout that contains the menu and footer that appear on all pages of the site. This allows me to edit one HTML file rather than a different one for each page (what a relief). This also ensures I don't end up with inconsistent menus or footers across different pages. Jekyll's template engine is also what enables me to have a blog section with using a database. Using Liquid, Jekyll loops through the _posts folder to generate a page that displays those posts. These simple yet powerful features of Jekyll make creating and managing my site more functional and in some ways easier than plain HTML and CSS while retaining the simplicity of having the files locally editable- just the way I like them.

### Jekyll and Github Pages: Hosting That's Easy as Pie... and Just as Delicious
<div class="center_imgs">
<img class="post_img" src="/img/octojekyll.png" alt="Jekyll and Github">
<img class="post_img" src="/img/post0/equals.png" alt="equals">
<img class="post_img" src="/img/post0/pie.png" alt="pie">
</div>
Combined with Github pages I am able to host this site in a git repository for *free*. This is the cherry on top. The simplicity that Jekyll brings to building and maintaining a site and the ease of hosting on Github pages makes the whole process a joy and basically makes me want to <s>laugh maniacally while petting a kitten</s> donate a bitcoin or two to Github and Jekyll.
Using Github and Jekyll also enables me to keep all the parts of my site locally too so I can edit them with the program of my choice and use git for version control, pushing my local repository to github in order to update my site.

### Long Story Short:
Jekyll and Github were instrumental in the making of this site and provide a simple, functional, and secure solution for site creation and deployment. I highly encourage you to check out both [Jekyll](http://www.jekyllrb.com) and [Github Pages](http://www.pages.github.com). Head over to the credits tab up above to see the other useful tools I've used for this site!