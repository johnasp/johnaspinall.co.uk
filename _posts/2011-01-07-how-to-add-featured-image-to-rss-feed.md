---
id: 457
title: How to add featured image to RSS feed
date: 2011-01-07T16:22:22+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=457
permalink: /how-to-add-featured-image-to-rss-feed/
categories:
  - Coding a Website
tags:
  - featured image
  - php
  - rss
  - wordpress
---
I have just connected the RSS feed for my Seasiders Podcast blog with its respective Facebook fan page wall using the [Social RSS Facebook application](http://www.facebook.com/apps/application.php?id=23798139265) and stumbled across a bit of an issue &#8211; that being, that the featured image not display in the RSS feed.   As a consequence of this issue, there was also no image in the RSS feed Facebook wall post,  which makes the wall post look a bit bland.

<!--more-->

This problem seems to have occurred as I used the  [&#8216;Featured Image&#8217; method](http://en.support.wordpress.com/featured-images/) for display post thumbnails which was introduced in version 2.9 of WordPress, which is a fantastic time saver and a more efficient end user method for displaying and inserting thumbnails into posts rather than messing about with custom fields.

Anyway, a way around this is to simply cut and paste this code into your themes functions.php file and and the code will be execute automatically using add_filter method. Hey presto, featured images wing their over to your RSS feed!  Pretty sweet. 

<!--WCS[2]-->