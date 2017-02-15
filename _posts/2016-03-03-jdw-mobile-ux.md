---
layout: portfolio
title: JD Williams mobile website UX
category: UX
tag: portfolio
excerpt: A write up of my role and achievements on mobile UX project for JD Williams.
--- 
<div class="featured"><img src="/img/jdw-latest.jpg" alt="Collage of screents of my JDW mobile designs"></div>

<table class="overview cols">
  <tr>
    <td>Project:</td>
    <td>Product search and navigation UX redesign on mobile specific website</td>  
  </tr>  
    <tr>
    <td>My role:</td>
    <td>UX/UI Designer</td>
  </tr> 
  <tr>
    <td>Client:</td>
    <td>JD Williams</td>  
  </tr> 
  <tr>
    <td>Tasks:</td>
    <td>Competitor analysis, user journeys, user testing, wireframes, visual design, prototypes, front-end build (HTML,CSS, JQuery), stakeholder management. </td>
  </tr> 
</table>


## Project overview

Analytics data revealed that on JD Williams' suite of mobile specific websites, the product refine and search user journeys had an unacceptably high add to bag abandonment rate.  I was assigned the role of UX design lead on a project to grow conversion rates and revenues via improvements to the product search and navigation user experience.   

### Problem 1

Users were often abandoning the *product search user journey* when looking for a product.

### Problem 2 

An unacceptably high number of users were dropping out of the *product refine user journey* when trying to refine facets of a product.  

## 1. User Research & Testing

Although we had data to tell us where the problems were, I needed to verify exactly the reasons why.  To achieve this I conducted some user research and testing using pre-existing user personas.

I mapped out the probablematic user journies and wrote user tasks which were to be performed on the existing mobile site by real users in remote user testing sessions.  I booked sessions with users whose demographic came in the persona groups for the clients "Power Brands" (JD WIlliams, Jacamo and Simply Be).  For the remote user testing I used a company called "What Users Do" 

## 2. Discovery

In the user research & testing sessions, I observed users often struggled to both find and also refine, facets of products they were asked to find.  

### Drop down menu refinements

The results of the user testing session revealed that the the product refinements user interface was causing a lot of problems.  To refine the facets of a product, the user had to operate a series of unintuitive drop down menus and I observed a lot of users struggling with this, in addition to actually listening to the user audibly describe that they didn't know what to do at this stage in the journey!

I recorded a video of myself navigating products and making refinements to illustrate this:

<iframe width="640" height="480" src="https://www.youtube.com/embed/5TQih57yXrE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

##### VIDEO - Old JD Williams mobile website in operation

### Button blindness

"Button category browsing " was the businesses preferred route for users to search for products, as this method yielded the user with more accurate results, which ultimately led to higher add to bag conversions. 

My user testing observations also revealed that when a user was told to search for a particular product i.e. "red dress", they tended to rely on the typed search box and appeared to be blind to the browse categories button (in 85% of tests, users ignored the button and relied on typed search.) and due to the search results algorithm ingrained in the platform, typed search results did not always provide the user with accurate results. 

## 3. Competitor Benchmarking

<div class="no-margin"><img src="/img/portfolio/competition-wall.jpg" alt="Competitor research wall" /></div>

To gain an understanding of how other mobile ecommerce websites approached search and navigation, I compiled a list of industry key competitors and decided to benchmark user test our user journies on their sites, again with real users via the  WhatUserDo service. 

This enabled me to learn from their positives and also avoid their negatives and all with reports from real users in our target demographic.  I then presented these screen recording to project stakeholders, along with users comments and my observations.   

<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PLb837OBwsGkXV0Cd-W7hb-EaKUBl2bgVq" frameborder="0" allowfullscreen></iframe>

##### VIDEO - Competitors screen recording play-list

## 4. Decisions

A combination of my user research, comepitor analysis and benchmarking, coupled with feedback from stakeholders, helped craft a short list of interface design patterns pursue in our product.

The key changes I therefore wanted to make on the new product were:

1. Introduce an industry standard “burger” site menu to house the list of product categories and other navigational links.  This site menu would initially be hidden off screen (to the left) and animate in to view upon touch.
2. Completely change the refinement interface, remove the drop down menus and implement a refinement grid where users could easily add and remove multiple facet refinements by a single touch.  This menu would also be initially hidden off screen (to the right) and animate into view upon touch.

## Visual design & prototype

The next step was to design concepts of to bring my vision of the product to the screen. I subsequently designed visual concepts of all the relevant screens for the new product (using Adobe Fireworks), samples of which can viewed below:

<ul id="visual-designs">
  <li>
    <a href="#slide1"><img src="/img/portfolio/home.jpg" alt="Product list page and off canvas site menu"></a>
  </li>
  <li>
    <a href="#slide2"><img src="/img/portfolio/list-page.jpg"  alt="One column list and filter results pages"></a>
  </li>
  <li>
    <a href="#slide3"><img src="/img/portfolio/filter-page.jpg" alt="Refinements off canvas menu"></a>
  </li>
  <li>
    <a href="#slide4"><img src="/img/portfolio/filters-made.gif" alt="Refinements menu with selection made"></a>
  </li>
</ul>

I felt that viewing the screens in the context in which they were designed for (i.e. a mobile device) would help give stakeholders a better appreciation of what the designs would look and behave like on a device, so I created a click-able visual prototype out of the screens using Invision.  

[The visual prototype](https://invis.io/7K22HIYXS) was extremely well received as it gave a clear indication to the mobile look and feel, as I was able to animate transitions, off-canvas menus, sticky headers and the like.

Follow the journey below to interact with the [visual prototype](https://invis.io/7K22HIYXS). 

1. Select a red dress
2. Refine the results to sizes 14 and 16 
3. Remove size 16 refinement
4. View the results again

<iframe src="//invis.io/9Z1SDBZTD" width="396" height="770" frameborder="0" allowfullscreen="allowfullscreen" class="invision"></iframe> 


## Working prototype

I have learnt through experience that the only way to accurately see how a mobile web page will both look and perform on a mobile web browser, is to view a complete coded web page direct on a mobile device.  With this in mind, I decided to code a production ready prototype written in HTML, CSS (SASS) and Jquery, whilst utilising Grunt for a build system and Github for source control and Github pages for web hosting. 

You can view a video demo of the prototype in action below or [access this live URL which houses the fully coded prototype](http://johnasp.github.io/search_nav_proto/). 

NB - If viewing the live demo in a desktop browser, resize your browser window to a mobile viewport size to get a mobile look & feel. 

<iframe width="640" height="480" src="https://www.youtube.com/embed/V0m_-bVFMFs" frameborder="0" allowfullscreen></iframe>

##### Video demo of the fully coded prototype

I published each iteration of the coded prototype to a Github pages URL, which could then be accessed direct on a mobile device web browser.  The prototype URL was then sent to bith project stakeholders and our target users (again via WhatUsersDo!) for feedback testing after each interface development iteration milestone.

This work-flow formed a User Centred Design (UCD) feedback loop, as I got the product into the hands of the users at the first stage of development and requested feedback after each development iteration until sign off.   

The front end code I wrote was used directly in the final product.  I had to pair program with a Java developer who integrated my front end code into the Websphere shop application. 

## The final result £££

Three months following release, analytics data revealed that our changes had indeed had a positive effect on the product search on mobile journies. There had been the following changes in the product search user journey:

* A marked decrease in bounce rate (drops offs)  
* More add to bag journey completions
* Increased number of multiple products added to bag

Figures released from the project business analyst revealed the following financial benefits from the implemented UX improvements:

1. The new off canvas product search menu was directly attributed to an increase of revenue to the figure of £322,000 (at the accepted demand level).
2. The new product refinement system was  estimated to have yielded an increase of £2,960,000 per annum, at the accepted demand level. 

The project was therefore deemed a great financial success and the users liked it too! 

<a href="http://www.jdwilliams.co.uk/">[View the live mobile site here]</a> - please note you need to be viewing this link on a mobile device or via a mobile emulator on a desktop/laptop.





