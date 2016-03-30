---
id: 1500
title: Crop WordPress post thumbnails from the top
date: 2013-09-30T11:34:47+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1500
permalink: /crop-wordpress-post-thumbnails-from-the-top/
categories:
  - Wordpress Theme
tags:
  - featured image
  - wordpress
---
I have just been going through the process of auto cropping featured image sizes so they all look same size on a site I&#8217;ve been building recently.  I was using the &#8220;hard crop&#8221; parameter of the add\_image\_size function to crop all my featured post images so they adopt a king of &#8216;letterbox&#8217; shape using the dimensions 800&#215;200.

<!--more-->

The only trouble with his was that WordPress crops the image from the middle so it cut of the tops of people&#8217;s heads on some of the images and generally made other images look a bit crap.

I wanted to be able to crop the image from the top, rather the middle, but WordPress doesnt do this out of the box.  Fortunately, I stumbled across this awesome patch called [Image Crop Position in WordPress](http://bradt.ca/blog/image-crop-position-in-wordpress/){#post-9767} by Brad Touesnard.

You have to copy his code [view it on Github here](https://gist.github.com/bradt/1406471#file-wp-image-crop-position-php) into your functions.php and you can then use the new parameter called array where you can specify left or top.  See below:

add\_image\_size( &#8216;custom-1&#8217;, 800, 280, array( &#8216;left&#8217;, &#8216;top&#8217; ) );

Lovely stuff!