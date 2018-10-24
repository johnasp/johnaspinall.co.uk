---
id: 575
title: How to remove an image background using Adobe Fireworks
date: 2013-04-26T09:17:11+00:00
author: John Aspinall
layout: post
excerpt: A tutorial I wrote detailing a simple and effective method to remove a background from a photograph, most importantly in a none destructive manner.
categories:
  - Designing a Website
tags:
  - fireworks
---
A very common task for any web designer (and I&#8217;m guessing for a graphic designer as well) working on designing a website mockup or comp is to place imagery within the design, and more often than not (in my experience anyway), you need to cut out the main image and make the background transparent. 

There are several ways to do this, some cruder than others, but the best method by far is to use masks to remove the background/make it transparent and maintain the original image. This is known as &#8216;non-destructive&#8217; image removal technique which means you can play around with editing vector points to fine tune the image until you are happy with with it, whilst not destroying the original JPG.

  1. Magic Wand tool and, in the Property inspector, give it a Tolerance value of **4** and set the Edge to **Anti-Alias**.  If there are any gaps in the image, select all additional whitespace gaps not picked up by the magic wand
  2. Add the background to the selection (if hasnt been already) by shift clicking
  3. **Select** menu and click **Select Inverse**
  4. **Select** menu and click **Convert Marquee To Path**.
  5. Change new vector shape fill to white
  6. Select both vector and bitmap
  7. **Modify** menu and **select Mask**, and then **Group As Mask.**
  8. If you are not happy with the result simply tweak the vector anchor points around until you are happy with the result &#8211; job done!