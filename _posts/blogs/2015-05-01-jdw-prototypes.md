---
layout: post
title: eCommerce website responsive header
modal-id: 5
date: 2015-06-01
img-thumb: jdw-responsive-header-thumb.jpg
img-full: jdw-responsive-header.jpg
alt: Screenshot of responsive header prototype
project-date: June 2015
category: Portfolio
client: JD Williams
role: Front end developer
tasks: HTML, SASS, JQuery
excerpt: A fully functioning responsive header prototype to be used for the new proposed eCommerce site template. 
caption: JD Williams - Prototype
---  

Part of the workflow at JD Williams was to prototype new site components for iterative review and development, prior to launch.  I was involved in prototyping a responsive main menu navigation system and a mobile view clothing size guide. 

I decided the best way to approach the production of these prototypes was to build them in the browser and use the "mobile first" philosophy. 

### Header and Site Menu 

I took a screen recording of the final prototype in action which you can view below.  You can alternatively view the working prototype in your browser and device of choice by <a href="http://johnasp.github.io/ecommerce_responsive_header/">clicking this link</a>.  

<div style="position:relative;height:0;padding-bottom:75.0%; margin-bottom: 20px;"><iframe src="https://www.youtube.com/embed/klxQ9iTioQQ?ecver=2" width="480" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>

You can also inspect the code I wrote in the projects <a href="https://github.com/johnasp/ecommerce_responsive_header">Github repo</a>, should you be that way inclined. 

### Mobile Clothing Size Guide

The UX and front end development process I took when designing and developing a clothing size guide for JD Williams' suite of mobile specific websites. 

### My approach 
 
We are to be presenting wide and deep tables of data to the user who we know is to be accessing the content on a mobile device and there are to be five separate sections of content.  As we are limited in screen height on a mobile device, it seems to me the best way to present this content is to split up each section into an accordion, and further split each sub-section of content into tabbed panels.

### Sketching

I did a *very* rough hand sketch of my idea and presented this to the business. There were happy with this solution, so my next tasks is to build this out into a working prototype and get this into the hands of the business and users early in the process.  

<img src="{{ base }}/img/size-guide-sketch.jpg" alt="My sketch of proposed size guide modal">   

I'll now move onto building a prototype.

### Protoype

As this is only a relatively small product, I'd consider wire-framing unnecessary and ultimately a waste of time, so I'm going to delve straight into code and build a HTML prototype in the browser.  

I'm going to build the prototype with the Bootstrap and Jquery frameworks, the added bonus of using which is that the code can then be used for the final product which will shorten the development cycle.  I'm also going to build it in [Codepen](http://www.codepen.io) which is great product for building prototypes in the browser.

Codepen also facilitates having a live URL on the web also which meant I could get the prototype out and into the hands of the business and the users, directly on a mobile device.  

### Result

I built the prototype in just over a week which included the fixing a couple of device specific bugs.

The code I wrote in the prototype, paired with a Java dev and integrated it into the main shop application. 

The prototype can be viewed here:

<p data-height="531" data-theme-id="dark" data-slug-hash="LkQWva" data-default-tab="result" data-user="johnasp" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/johnasp/pen/LkQWva/">Responsive size guide modal & accordion</a> by John Aspinall (<a href="http://codepen.io/johnasp">@johnasp</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


















