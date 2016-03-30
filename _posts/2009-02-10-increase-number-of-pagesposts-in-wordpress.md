---
id: 116
title: Increase number of pages/posts in WordPress
date: 2009-02-10T14:44:13+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/2009/02/10/increase-number-of-pagesposts-in-wordpress/
permalink: /increase-number-of-pagesposts-in-wordpress/
categories:
  - Managing a Website
tags:
  - wordpress
---
I recently had to perform an edit to a large number of pages in WordPress but found it quite limiting only having 20 pages displayed at a time considering I have over 200 pages in a site I was building. 

I wanted to find a way of increasing this number of pages displayed and discovered this can be done via the options.php file.&nbsp; There are a lot of other cool little setting you can play around with on this file as well. 

  1. Log in to your blogs admin panel
  2. In the browser address bar enter: http://www.<yourblogurl>.com/wp-admin/options.php
  3. A huge list of options should open
  4. Find &#8220;default\_post\_edit_rows&#8221; and change the value from 10 to whatever you like
  5. Scroll to the very bottom of the page and click &#8220;Save Changes&#8221;