---
id: 494
title: Print all HTTP server variables to screen in PHP
date: 2011-02-01T11:24:14+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=494
permalink: /print-all-http-server-variables-to-screen-in-php/
categories:
  - Coding a Website
tags:
  - apache
  - cross browser
  - http headers
  - php
---
HTTP Server variables are very handy snippets of configuration information about the server your web page is hosted on.  There are a multitude of ways you can use this information which I shall cover later in the post.  Anyway without further ado, here&#8217;s the code for how to all your HTTP server header variables in PHP:

<!--more-->

<!--WCS[4]-->

Copy this code into any PHP page, run it in the browser and et voila, ever single piece of information about your server! Have a think about how you could use some of this information to make your web pages better.

One example of where I use these server variables when building a web site, is to sniff out which user agent (browser) is accessing my web page.  I then capture this information in a PHP variable and add the date to a class in the <BODY> element of  a web page.  This can then be used to tailor what CSS rules are applied to which elements depending on what user agent is accessing the page &#8211; hello cross browser compatibility via a single stylesheet!  Anyway, I shall cover this topic shortly as it is a blog post in its own right, what I wanedt to show you know is how to list every HTTP server variable in PHP.  Try it out!