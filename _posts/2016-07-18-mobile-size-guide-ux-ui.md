---
layout: portfolio
title: Mobile clothing size guide UX/UI
category: UX
tag: portfolio
excerpt: Designed and built the UX and UI for a brand new size guide component for the clients' mobile specific eCommerce website. 
---  

I have been tasked with creating a responsive style guide for the suite of mobile specific website for an ecommerce client I am working with at the moment. I thought I'd document the whole process to map out my design and development work-flow and processes, from start to end.  

### Requirements analysis

The first stop in any project is to obtain, analyze and understand the business requirements.  All the  requirements related to my task are in a Jira (a tool to facilitate Agile software releases) story, created by a business analyst. I simply login to Jira, look at the project board and open my ticket to access the requirements. 

![My taks in Jira](http://johnasp.github.io/img/my-jira-ticket.JPG)

Having read the requirements contained in the ticket, I can deduce the clients' problem is that they currently do not have a size guide for any products on their mobile specific ecommerce websites and they want this feature adding. I highlighted the specifics of the story and contacted the projects' Business Analyst to clarify the requirements I didn't fully understand.

At this stage I always find it useful to create my own "to do list" when I have fully understood the project requirements, so for this project it is, as follows:

1. A Size guide link on the product details page, with ability to toggle it on/off on a per brand basis. 
2. The size guide content will appear in a modal upon click of the link above.
3. List of size guide content category panels.
4. Content in each panel to be in fixed width table.
5. Close modal icon and button.

OK so I now know what I have to do, the question now is, what's the best way to approach solving the problem?  

### My approach 

We are to be presenting wide and deep tables of data to the user who we know is to be accessing the content on a mobile device and there are to be five separate sections of content.  As we are limited in screen height on a mobile device, it seems to me the best way to present this content is to split up each section into an accordion, and further split each sub-section of content into tabbed panels.

### Sketching

I did a rough hand sketch of my idea and presented this to the business. There were happy with this solution, so my next tasks is to build this out into a working prototype and get this into the hands of the business and users early in the process.  I feel it's crucial to get it in the hands of users early in the process in order to validate the product effectiveness and so it solves the business problem..    

![My sketch of proposed size guide modal](http://johnasp.github.io/img/size-guide-sketch.jpg)

I'll now move onto building a prototype.

### Protoype

As this is only a relatively small product, I'd consider wire-framing unnecessary and ultimately a waste of time, so I'm going to delve straight into code and build a HTML prototype in the browser.  

I'm going to build the prototype with the Bootstrap and Jquery frameworks, the added bonus of using which is that the code can then be used for the final product which will shorten the development cycle.  I'm also going to build it in [Codepen](http://www.codepen.io) which is great product for building prototypes in the browser.

Codepen also facilitates having a live URL on the web also which meant I could get the prototype out and into the hands of the business and the users, directly on a mobile device.  

A built the prototype in just over a week which I thought was a decent turnaround.  I am reasonably experienced in Bootstrap and Jquery so putting it together was pretty quick, the main time taken was fixing a couple of device specific bugs! The prototype can be viewed here:

<p data-height="531" data-theme-id="dark" data-slug-hash="LkQWva" data-default-tab="result" data-user="johnasp" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/johnasp/pen/LkQWva/">Responsive size guide modal & accordion</a> by John Aspinall (<a href="http://codepen.io/johnasp">@johnasp</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

As previously mentioned, I ran into a couple of device specific bugs on iOS, which I will detail at the end of this document.

### Testing

I sent the [Codepen live URL](http://codepen.io/johnasp/full/LkQWva/) around to the business and added to the JIRA ticket comments sections.  The business analysts then tested the product in their teams, made a few small iterative changes which I did as when they were requested.  

I also "guerrilla tested" the product by getting my Mum and partner to complete a set of user tasks, observed these tasks taking place and noted down any difficulties they had completing a particular task.  I was pleased to observe they didn't have any problems!  

### Integration

This is currently ongoing although we are almost at the end of the sprint and then product release is imminent.   I have integrated all my code into the main shop application, all testing has been completed successfully.  I'll add a link to the live version when it becomes available.  

### Build bugs

#### Scrolling tables being cut off in iOS
So this was a weird one...the scrolling tables had worked a treat on desktop and the mobiles I tested on, but then I noticed a weird bug on iOS.  The table was literally being cut in half on two of the seven tables contained in the accordions, but the scrolling still maintained itself as if the content was still there.  But it was OK on several other tables?  WTF!?  

To debug this I hooked the iPhone 6 up to my Macbook Air and fired up Safari on my Mac to use it's device web inspector tool to inspect the DOM on the iPhones render of the accordion.  Everything checked out fine, the table HTML was in the DOM, all the correct CSS was being applied, there wasn't any other Bootsrap CSS rulles causing this, in fact there was nothing obvious causing this in the code.  

The next step in situation like is to refer the problem to the developers best friend, Google, to find out what the hell was going on here.  It was actually a bit of a job to glean some accurate results given the fact the problem was so weird to describe and I had to type tings along the lines of "overflow: scroll table cut in half iOS" and the like.  I eventually came up with something, it turns out Mobile Safari does not render the elements that are off screen, or sometimes renders erratically, when using -webkit-overflow-scrolling: touch. Unless a translate3d is applied to all other elements that might go offscreen owing to that scroll, those elements will be chopped off after scrolling.

http://stackoverflow.com/questions/26176288/webkit-overflow-scrolling-touch-breaks-in-apples-ios8
http://stackoverflow.com/questions/9807620/ipad-safari-scrolling-causes-html-elements-to-disappear-and-reappear-with-a-dela


#### Fixed table column
The business wants the first table to be locked when the rest of the table scrolls.  I did initially think to the apply a position: fixed; attribute to the first TD, set it's width to 80px and then set padding-left: 80px to the second TD in the set.  I knew in my heart of hearts this is a bit hacky and it seemed to work like a charm in Chrome but when I tested it on an iPhone the layout of the table was totally screwed, so back to the drawing board!





