---
layout: post
title: Mobile clothing size guide UX/UI
category: UX
tag: portfolio
excerpt: Designed and built the UX and UI for a brand new size guide component for the clients' mobile specific eCommerce website. 
---  

I have been tasked with creating a responsive style guide for the suite of mobile specific website for an ecommerece client I am working with at the moment.  For shits and giggles, I thought I'd document the whole process to map out my development workflow from start to end.  

### Analyse business requirements

The first stop of any project is to obtain, analyse and understand the business requirements.  All the business requirements related to my task are in a Jira (a tool the team uses to faciliate Agile software releases) story, created by an business analyst. I simply login to Jira, look at the project board and open the ticket to access the requirements. 

![My taks in Jira](http://johnasp.github.io/img/my-jira-ticket.JPG)

![Business requirements in the Agile story](http://johnasp.github.io/img/size-guide-requirements.jpg)

Having read the requirements contained in the ticket (see above), I can deduce the clients' problem is that they currently do not have a size guide for any products on their mobile specific ecommerce websites and they want this feature adding.  As you can see, I highlighted the specifics of the story and any areas I didn't fully understand, which I then contacted the BA directly to clarify the requirment.  

At this stage I always find it useful to create an ![Evernote t0-to list ](http://www.evernote.com/l/AIEmVk5UUhRF5IC8EmhNNtuIcJxharavdEQ/) of requirements and keep this in view at all times and tick off as I go.  So for this project it is as follows:

1. A Size guide link on the product details page, with ability to toggle it on/off on a per brand basis. 
2. The size guide content will appear in a modal upon click of the link above.
3. List of size guide category panels, layed out in expand/collapse accordian. 
4. Content in each panel to be in fixed width table to be scrolled horizontally when content overflows it's container. 
5. Close modal icon.

OK so I now know what I have to do, the question now, is, the best way to approach solving the problem?  

### My approach 

We are to be presenting wide and deep tables of data to the user who we know is to be acessing the content on a mobile device.  And there are to be five seperate sections of content.  As we are limited in screen width on a mobile device, it seems to me the best way to present this content is to split up each section into an accordian, and further split each sub-section of content into tabs. 

### Sketching

I did a rough hand sketch of my idea and presented this to the business analysts. There were happy with this design pattern so my next taks is to build this out into a working prototype and get this into the hands of the business and users relatively early in the process in order to validate the product. 

!My sketch of proposed size guide modal](http://johnasp.github.io/img/size-guide-sketch.jpg)


I'll send the intial screens out early to the business for review for feedback to ensure we are "Singing from the same hymn sheet" I'm going to write the coded prototpe in Codepen and utlise the Bootstap amd Jquery frameworks for the build. 

#### Protoype

As this is only a relatively small product, rather than waste time wireframing, I'm going to delve straight into code and build a prototype in the browser, the code which I write can the be used for the production solution. Again saving more time.  

As I'm quite experienced with Bootstrap, the protototype only took a few days to put together and is embedded for below:

<p data-height="531" data-theme-id="dark" data-slug-hash="LkQWva" data-default-tab="result" data-user="johnasp" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/johnasp/pen/LkQWva/">Responsive size guide modal & accordian</a> by John Aspinall (<a href="http://codepen.io/johnasp">@johnasp</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





### BUILD BUGS

#### Scrolling tables being cut off in iOS
So this was a weird one...the scrolling tables had worked a treat on desktop and the mobiles I tested on, but then I noticed a weird bug on iOS.  The table was literally being cut in half on two of the seven tables contained in the accordians, but the scrolling still maintained itself as if the content was still there.  But it was OK on several other tables?  WTF!?  

To debug this I hooked the iPhone 6 up to my Macbook Air and fired up Safari on my Mac to use it's device web inspector tool to inspect the DOM on the iPhones render of the accordian.  Everything checked out fine, the table HTML was in the DOM, all the correct CSS was being applied, there wasn't any other Bootsrap CSS rulles causing this, in fact there was nothing obvious causing this in the code.  

The net step in situation like is to refer the problem to the developers best friend, Google, to find out what the hell was going on here.  It was actually a bit of a job to gleen some accurate results given the fact the problem was so weird to describe and I had to type tings along the lines of "overflow: scrow table cut in half iOS" and the like.  I eventually came up with something, it turns on 

<pre> Mobile Safari does not render the elements that are offscreen, or sometimes renders erratically, when using -webkit-overflow-scrolling: touch. Unless a translate3d is applied to all other elements that might go offscreen owing to that scroll, those elements will be chopped off after scrolling.</pre>

http://stackoverflow.com/questions/26176288/webkit-overflow-scrolling-touch-breaks-in-apples-ios8
http://stackoverflow.com/questions/9807620/ipad-safari-scrolling-causes-html-elements-to-disappear-and-reappear-with-a-dela


### Fixed table column
The business wants the first table to be locked when the rest of the table scrolls.  I did intitally think to the apply a postiion: fixed; attribute to the first TD, set it's wdith to 80 px and then set padding-left: 80px to the second TD in the set.  I knew in my heart of hearts this is a bit hacky and it seemed to work like a charm in Chrome but when I tested it on an iPhone the layout of the table was totally screwed, so back to the drawing board.  



