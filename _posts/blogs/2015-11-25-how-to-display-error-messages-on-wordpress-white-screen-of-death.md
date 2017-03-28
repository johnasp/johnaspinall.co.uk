---
id: 1719
title: How to display error messages on WordPress white screen of death
date: 2015-11-25T11:14:59+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1719
permalink: /how-to-display-error-messages-on-wordpress-white-screen-of-death/
categories:
  - Hosting a Website
tags:
  - white screen of death
  - wordpress
---
Ever had the dreaded WordPress &#8220;white screen of death&#8221;? Ever wondered why the F they don&#8217;t give you any indication as to what is causing the problem? Yeah me too.

<!--more-->

&nbsp;

Some kind of an error log would be nice and thankfully there is way to get these on the screen by adding the following two lines to your wp-config.php file:

<pre>error_reporting(E_ALL); ini_set('display_errors', 1);
define( 'WP_DEBUG', true);</pre>