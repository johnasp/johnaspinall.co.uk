---
id: 96
title: How to centre a DIV using CSS
date: 2010-11-19T12:01:07+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=86
permalink: /how-to-centre-a-div-using-css/
categories:
  - Coding a Website
tags:
  - css
  - html
---
&#8220;How do I centre a DIV?&#8221; is rather a common question but surprising there isnt much information out there about how to do it &#8211; well here&#8217;s how!   If you want to centre a DIV (or any other block element) in CSS do the following:

<!--more-->

  1. Set a width for the DIV block.
  2. Make both its left and right margins to auto.

Both steps are necessary &#8212; that is, you cannot just set the margins to auto without specifying the width of the block and expect this method to work.

The technique works because when both margins are set to auto, web browsers are required by the CSS standard to give them equal width.

For example, if you want your div block to have a width of 700 pixels, the following code will centre the block.

#content {
  
width: 700px ;
  
margin-left: auto ;
  
margin-right: auto ;
  
}

Incidentally, the width doesn&#8217;t need to be in pixels. Other units like em or percentage will work just as well.