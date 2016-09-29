---
layout: post
title: JD Williams mobile UX
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

Analytics data revealed that on JD Williams' suite of mobile specific websites, the product refine and search user journeys had an unacceptably high add to bag abandonment rate.  I was assigned the role of UX & UI designer on a project to improve conversion rates, improve the user interface and make products more easily found on the mobile web sites. 

### Problem 1

Users were often abandoning the *product search user journey* when looking for a product.

### Problem 2 

An unacceptably high number of users were dropping out of the *product refine user journey* when trying to refine facets of a product.  

## User testing

Although we had data to tell us what the problems were, I needed to verify exactly the reasons why.  To achieve this, I mapped out the two problematic user journeys and organised a user testing session to run tests on with real users.   

I setup several remote testing sessions and tasks with target users of each of the three main JD Williams "power brands".  The testing service I used was through a company called "What Users Do", which records the screen and voice 
 of the user as they go through the tasks they are set. 

Following completion of all the testing sessions, I observed users often struggled to both find and also refine, facets of products they were told to search for.  I then noted down specific pain points in the interface into a document which was circulated to the business analysts on the project. 

## Discovery

### Drop down menu refinements

The results of the user testing session revealed that the the product refinements user interface was causing a lot of problems.  To refine the facets of a product, the user had to operate a series of unintuitive drop down menus and I observed a lot of users struggling with this in user testing videos.  Analytics also reported that there was a high number of drop offs at this point in this user journey so this design pattern was the cause of the problems here. 

To illustrate these issues with the old site, I recorded a video of myself navigating products and making refinements, which can be viewed below:

<iframe width="640" height="480" src="https://www.youtube.com/embed/5TQih57yXrE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

##### VIDEO - Old JD Williams mobile website in operation

### Button blindness

My user testing observations revealed that when a user was told to search for a particular product, they tended to rely on the typed search box and appeared to be blind to the browse categories button.  

Due to the search results algorithm ingrained in the platform, typed search results did not always provide the user with the results they were looking for.Due to this fact, button searching was the businesses optimum and preferred route for users to search for products as this method yielded the user with more accurate results which ultimately led to higher add to bag conversions. 

 The results of which, were that users appeared blind to the browse categories button as in almost 85% of the cases, users ignored it and relied on typed search.

## Research

To gain an understanding of how other mobile ecommerce websites approached  search and navigation, I compiled a list of industry key players and competitors, and then followed a user search journey on each site. I screen recorded each of these sessions and also took screen prints for post analysis. 

I then presented each of these screen recording and prints to project stakeholders, along with my observations and recommendations.

A combination of my analysis coupled with feedback from stakeholders, helped  craft a short list of interface design patterns to pursue in our product. 

<iframe width="853" height="480" src="https://www.youtube.com/embed/videoseries?list=PLb837OBwsGkXV0Cd-W7hb-EaKUBl2bgVq" frameborder="0" allowfullscreen></iframe>

##### VIDEO - Competitors screen recording play-list

<div class="no-margin"><img src="/img/portfolio/competition-wall.jpg" alt="Competitor research wall" /></div>

##### IMAGE - Competitor research wall 

## Decisions

The key changes I therefore wanted to make on the new product were:

1. Introduce an industry standard “burger” site menu to house the list of product categories and other navigational links.  This site menu would initially be hidden off screen (to the left) and animate in to view upon touch.
2. Completely change the refinement interface, remove the drop down menus and implement a refinement grid where users could easily add and remove multiple facet refinements by a single touch.  This menu would also be initially hidden off screen (to the right) and animate into view upon touch.

## Visual design & prototype

The next step was to design concepts of to bring my vision of the product to life. I subsequently designed visual concepts of all the relevant screens for the new product (using Adobe Fireworks), samples of which can viewed below:

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

##### IMAGES - Selection of visual design concepts

I felt that viewing the screens in the context in which they were designed for (i.e. a mobile device) would help give stakeholders a better appreciation of what the designs would look and behave like on a device, so I created a click-able visual prototype out of the screens using Invision.  

[The visual prototype](https://invis.io/7K22HIYXS) was extremely well received as it gave a clear indication to the mobile look and feel, as I was able to animate transitions, off-canvas menus, sticky headers and the like.

Follow the journey below to interact with the [visual prototype](https://invis.io/7K22HIYXS). 

1. Select a red dress
2. Refine the results to sizes 14 and 16 
3. Remove size 16 refinement
4. View the results again

<iframe src="//invis.io/9Z1SDBZTD" width="396" height="770" frameborder="0" allowfullscreen="allowfullscreen" class="invision"></iframe> 


## Working prototype

I have learnt through experience that the only way to accurately see how a mobile web page will both look and perform on a mobile web browser, is to view a complete coded web page direct on a mobile device.

With this in mind, I decided to code a production ready prototype written in HTML, CSS (SASS) and Jquery, whilst utilising Grunt for a build system and Github for source control and Github pages for web hosting. 

You can view a video demo of the prototype in action below or [access this live URL which houses the fully coded prototype](http://johnasp.github.io/search_nav_proto/). 

NB - If viewing the live demo in a desktop browser, resize your browser window to a mobile viewport size to get a mobile look & feel. 

<iframe width="640" height="480" src="https://www.youtube.com/embed/V0m_-bVFMFs" frameborder="0" allowfullscreen></iframe>

##### Video demo of the fully coded prototype

I published each iteration of the coded prototype to a Github pages URL, which could then be accessed direct on a mobile device web browser.  The prototype URL was then sent to the project stakeholders for feedback after each development iteration. 

This work-flow formed a User Centred Design (UCD) feedback loop, as I got the product into the hands of the users (business analysts and internal testers) at the first stage of development and requested feedback after each development iteration until sign off.   

The front end code I wrote was used directly in the final product.  I had to pair program with a Java developer who integrated my front end code into the Websphere shop application. 

## The final result

Three month following release, financial figures (released from the projects' business analyst) revealed that the new burger-menu product search, yielded an annual revenue increase of £2,960,000, at the accepted demand level.

The new product refinement system was also estimated to have yielded an increase of £322,000 per annum, at the accepted demand level. 

The project was therefore deemed a great financial success as conversion rates had been measured to increase in total by £3.3 million per annum, at the accepted demand level.

[View the live mobile site here](http://www.jdwilliams.co.uk/)


