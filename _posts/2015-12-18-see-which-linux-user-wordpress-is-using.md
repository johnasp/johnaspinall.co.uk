---
id: 1738
title: See which linux user WordPress is using
date: 2015-12-18T10:43:26+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1738
permalink: /see-which-linux-user-wordpress-is-using/
categories:
  - Hosting a Website
tags:
  - linux
  - user
  - wordpress
---
Add the following line to the top of your index.php file and it will print to the screen the name of the linux user on your box which WordPress is running under.

<!--more-->

This can be handy when trying to solve permissioning problems such as WordPress not being able to write software updates, install new themes, media files and the like.

When you identify the Linux user WordPress is using to try to perform the action (usually &#8216;www-data&#8217;) it&#8217;s then simply a case of giving ownership and folder (uploads, themes, etc) write permissions to the said user account which WordPress is using. 

<pre>echo(exec("whoami"));die();
</pre>

PS &#8211; Remember to either delete or comment out the line of code after you get the name!