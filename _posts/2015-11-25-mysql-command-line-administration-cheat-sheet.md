---
id: 1714
title: MySQL command line administration cheat sheet for Linux
date: 2015-11-25T12:22:41+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1714
permalink: /mysql-command-line-administration-cheat-sheet/
categories:
  - Managing a Website
tags:
  - command line
  - mysql
---
I have been muddling through the world of MySQL database administration via the command line since I setup my own linux VPS web  server (with help from the good folks at [Digital Ocean](http://www.digitalocean.com)).

<!--more-->

I&#8217;m not a masochist,  I just haven&#8217;t yet got round to [I have been muddling through the world of MySQL database administration via the command line since I setup my own linux VPS web  server (with help from the good folks at [Digital Ocean](http://www.digitalocean.com)).

<!--more-->

I&#8217;m not a masochist,  I just haven&#8217;t yet got round to](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-14-04) yet and have resisted the temptation to do so for now as I felt administering the database via the command line has been a good learning exercise.

As a part of my &#8220;knowledge gathering&#8221;, I have been noting down key commands you use regularly when administering a MySQL database on the command line and have been compiling these commands into a text file so thought I could easily cut and paste the commands in, a kind of &#8220;cheat sheet&#8221; if you will. So without further ado, here it is:

BTW &#8211; This is a an organic document and will be growing over time, feel free to leave any commands in the comments if you want to add to it.

#### Login to MySql via command line

<pre>mysql -u root -p</pre>

#### Import a database

<pre>mysql -u [username] -p db-name &lt; [database name].sql</pre>

#### List all databases

<pre>show databases;</pre>

#### Delete a database

<pre>Drop database db-name;</pre>

#### Create a new database

<pre>create database db-name;</pre>

#### Show all database user accounts

<pre>select distinct User from mysql.user;</pre>

#### Change a database user password

<pre>SET PASSWORD FOR 'username'@'localhost' = PASSWORD('new-password-here');</pre>

#### SHOW PERMSSIONS GRANTED FOR USER ON DATABASES

<pre>SHOW GRANTS FOR 'username'@'localhost';</pre>

#### Delete a user

<pre>DROP USER 'username'@'localhost';</pre>