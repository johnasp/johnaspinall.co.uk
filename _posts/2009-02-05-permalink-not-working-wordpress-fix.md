---
id: 114
title: Permalink Not Working WordPress Fix
date: 2009-02-05T11:49:03+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/2009/02/05/permalink-not-working-wordpress-fix/
permalink: /permalink-not-working-wordpress-fix/
categories:
  - Managing a Website
tags:
  - wordpress
---
I recently came across a problem with my local installation of WordPress.&nbsp; I wanted to enable Permalinks but WP/Apache was not playing ball.&nbsp; I had enabled mod_rewrite in Apache and had checked that WP had written the correct rules into the .htaccess file and Permalinks still refused to work.

After a few hours trawling the WP Codex site I came across the fix which was to have the AllowOverride directive enabled in Apache.&nbsp; Thought I would blog about it now so I don&#8217;t forget in future and hopefully help someone else who has the same problem!

[Using Permalinks « WordPress Codex](http://codex.wordpress.org/Using_Permalinks)
  


> > If your .htaccess file is being generated correctly, but Permalinks still do not function, the following might be a problem. If problems persist, post a note in the WordPress Forum&#8217;s How To section.</p> 
> > 
> > AllowOverride Not Enabled       
> > Your server may not have the AllowOverride directive enabled. If the AllowOverride directive is set to None in your Apache httpd.config file, then .htaccess files are completely ignored. In this case, the server will not even attempt to read .htaccess files in the filesystem. When this directive is set to All, then any directive which has the .htaccess Context is allowed in .htaccess files. Example of enabled AllowOverride directive in httpd.config: 
> > 
> > <directory>      
> > Options FollowSymLinks      
> > AllowOverride All   
> > </directory>
> > 
> > You may also have to enable the AllowOverride directive in your DocumentRoot:
> > 
> > <directory var="" www="" html="">      
> > \# &#8230; other directives&#8230;      
> > AllowOverride All   
> > </directory>
> > 
> > You may also have to change the AllowOverride settings for the site. This is surely the case when using Mac OS X Server, but might be likewise with other systems. Usually you can find the site configuration files in /etc/httpd/sites/ 
> > 
> > If you don&#8217;t want to set AllowOverride to all (as it is above) then your AllowOverride list must include the FileInfo directive. You must restart your Apache server for any httpd.config file changes to take effect. For more information on which overrides are allowed, read about Apache Core Features.