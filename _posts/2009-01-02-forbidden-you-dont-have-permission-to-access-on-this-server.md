---
id: 100
title: Forbidden You don’t have permission to access / on this server.
date: 2009-01-02T10:39:07+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/2009/01/02/forbidden-you-dont-have-permission-to-access-on-this-server/
permalink: /forbidden-you-dont-have-permission-to-access-on-this-server/
categories:
  - Hosting a Website
tags:
  - apache
---
Ever come across this pain in the arse error message when setting up Virtual Hosts in Apache?

<font color="#ff6666">Forbidden You don&#8217;t have permission to access / on this server.</font>

You&#8217;ve set up all default documents in your web folder AND added all
  
the &#8216;index.htm&#8217; variations under the sun into the DirectoryIndex and it still refuses to server any pages?&nbsp;
  
Yep me too, but here&#8217;s a solution. 

This has been toughened in recent
  
Apache versions, so check that your VirtualHost has a section like the
  
following:

<Directory />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Options FollowSymLinks  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AllowOverride None  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order deny,allow  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **<font color="#ff0000">allow from all</font>**  
</Directory>

Note that the last line in red says &#8216;allow from all&#8217;. The default access
  
configuration for your document root probably ends &#8216;deny from all&#8217;,
  
which will deny access to your server root, so you will need to open
  
this up within your individual Virtual Hosts.

Virtual Hosts access problem&#8230;&#8230;DONE!  
[](http://www.spiration.co.uk/post/1195/You%20don%27t%20have%20permission%20to%20access%20root%20on%20this%20serv)