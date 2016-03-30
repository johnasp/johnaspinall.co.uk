---
id: 1475
title: Microsoft HTTPAPI/2.0 use Port 80 – Cannot Start WAMP Apache
date: 2013-06-12T14:20:02+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1475
permalink: /microsoft-httpapi2-0-use-port-80-cannot-start-wamp-apache/
categories:
  - Managing a Website
tags:
  - apache wamp
---
Just had a very weird problem with MAMP for Windows 7 where Apache all of sudden could not bind onto port 80 for no reason and the Apache service was refusing to startup.  I ran the port 80 test in MAMP and got the following message:

**Microsoft HTTPAPI/2.0 use Port 80 – Cannot Start WAMP Apache**

The fix for this is to find out which program or service is using port 80 and kill it.

<!--more-->

Open a command prompt and type **netstat -ao **should reveal the culprit.  You then just have to locate the PID of the process and then kill it in Task Manager.  Easy I thought, although when I looked at task manager there was no sign of PID 4 &#8211; aaaarghhh!

Anyway after much trawling of the web, I discovered that killing a service called **Branchcache **was the offending service which had bound itself to port 80.  This service &#8220;caches network content from peers on the local subnet.&#8221;  I figured this wasn&#8217;t a system show stopper so killed it and this fixed the problem.  Make sure to permanently disable the service or it will startup again on re-start.

[<img class="alignleft size-full wp-image-1478" alt="branchcache-apache-port80-fix" src="http://johnaspinall.co.uk/wp-content/uploads/2013/06/branchcache-apache-port80-fix.gif" width="714" height="708" />](http://johnaspinall.co.uk/wp-content/uploads/2013/06/branchcache-apache-port80-fix.gif)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;