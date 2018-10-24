---
id: 461
title: List archives for a specific category using wp_get_archives() in WordPress
date: 2011-01-18T13:03:16+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=461
permalink: /list-archives-for-a-specific-category-using-wp_get_archives-in-wordpress/
categories:
  - Coding a Website
tags:
  - php
  - wordpress
  - wp_get_archives()
---
I wanted to display a list of all the previous episodes on my podcast website.  I have assigned a category of &#8216;podcasts&#8217; to each blog post I published which contained podcast episode content.

I thought to myself, &#8220;This should be quite straighfoward to achieve by using WordPress function [wp\_get\_archives()](http://codex.wordpress.org/Function_Reference/wp_get_archives)&#8221; &#8211; wrong!!!  For some reason, this function doesn&#8217;t support this functionality (no pun intended!) of allowing us to include or exclude categories by default.

Anyway, Ive found a way around this:

<!--more-->

I  found  a plugin called [Archives for a category](http://kwebble.com/blog/2007_08_15/archives_for_a_category) which adds these capabilities to the function.

  1. Download and install the [Archives for a category](http://kwebble.com/blog/2007_08_15/archives_for_a_category) plugin
  2. Open your PHP page/post template
  3. Paste in &#8216;type=postbypost&cat=5&#8217; (with the number “5″ being the id of the category you want to include) as a parameter of the function, in between the parenthesis, it will look like this code snippet: <!--WCS[3]-->

NB &#8211; you need to add the argument &#8216;type=postbypost&#8217; to display the individual post titles or else it will just display Category Month