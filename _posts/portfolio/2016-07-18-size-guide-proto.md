---
layout: post
title: Mobile clothing size guide
modal-id: 2
date: 2015-06-01
img-thumb: size-guide-thumb.png
img-full: size-guide.png
alt: Screenshot of size guide prototype
project-date: 2015-06-01
client: JD Williams
role: UX/UI Designer
caption: UX/UI Design
tasks: Responsive design, bootstrap, css, html
excerpt: A clothing size guide I created using Bootstrap for JD Williams' mobile specific website. 
---

The UX and front end development process I took when designing and developing a clothing size guide for JD Williams' suite of mobile specific websites. I documented the whole UX process from start to end and have detailed this below. 

*In this project, I was directly responsible for:*

* Gathering requirements 
* Sketching
* Built working prototype in Bootstrap 
* User testing
* Wrote HTML, CSS, Jquery and SASS for the prototype.
* Integrating front end code into main shop application - in conjuction with a Java dev. 

Here is a link to <a href="http://codepen.io/johnasp/full/KrBjaq/">view the the prototype</a> and below is a deeper dive explanation around the UX work I completed on this project. 

### Requirements analysis

The first stop in any project is to obtain, analyze and understand the business requirements.  All the  requirements related to my task are in a Jira (a tool to facilitate Agile software releases) story, created by a business analyst. I simply login to Jira, look at the project board and open my ticket to access the requirements. 


<img src="{{ base }}/img/my-jira-ticket.jpg" alt="My tasks in Jira">

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

I did a rough hand sketch of my idea and presented this to the business. There were happy with this solution, so my next tasks is to build this out into a working prototype and get this into the hands of the business and users early in the process.  I feel it's crucial to get it in the hands of users early in the process in order to validate the product effectiveness and so it solves the business problem.

<img src="{{ base }}/img/size-guide-sketch.jpg" alt="My sketch of proposed size guide modal">   

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

Integrated all front end code into the main shop application by paring with a Java developer on the project and we slotted my front end code around the application logic. 

### Build bugs

#### Scrolling tables being cut off in iOS
So this was a weird one...the scrolling tables had worked a treat on desktop and the mobiles I tested on, but then I noticed a weird bug on iOS.  The table was literally being cut in half on two of the seven tables contained in the accordions, but the scrolling still maintained itself as if the content was still there.  But it was OK on several other tables?  WTF!?  

To debug this I hooked the iPhone 6 up to my Macbook Air and fired up Safari on my Mac to use it's device web inspector tool to inspect the DOM on the iPhones render of the accordion.  Everything checked out fine, the table HTML was in the DOM, all the correct CSS was being applied, there wasn't any other Bootsrap CSS rulles causing this, in fact there was nothing obvious causing this in the code.  

The next step in situation like is to refer the problem to the developers best friend, Google, to find out what the hell was going on here.  It was actually a bit of a job to glean some accurate results given the fact the problem was so weird to describe and I had to type tings along the lines of "overflow: scroll table cut in half iOS" and the like.  

*The fix*

I eventually came up with something, it turns out Mobile Safari does not render the elements that are off screen, or sometimes renders erratically, when using -webkit-overflow-scrolling: touch. Unless a translate3d is applied to all other elements that might go offscreen owing to that scroll, those elements will be chopped off after scrolling.






