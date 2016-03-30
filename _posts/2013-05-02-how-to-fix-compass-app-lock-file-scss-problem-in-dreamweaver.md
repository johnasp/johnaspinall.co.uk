---
id: 1461
title: How to fix Compass app lock file SCSS problem in Dreamweaver
date: 2013-05-02T14:20:03+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1461
permalink: /how-to-fix-compass-app-lock-file-scss-problem-in-dreamweaver/
categories:
  - Coding a Website
tags:
  - sass scss dreamweaver
---
If anyone out there uses the Compass app to write SASS with Dreamweaver, may notice that the SCSS files gets locked out and the only way to fix this is to reboot your PC.  Quite a big pain in the arse.

There is a way to to unlock the file using a oommand line prompt, I found this out  [thanks to this post on Github](https://github.com/handlino/CompassApp/issues/91).  It can be a laborious process to go through every time you want to unlock the file however so I have remixed this technique slightly to make the process easier to execute by turning it into a batch file.

<!--more-->

You can then add a shortcut to the dektop so you can just click the shortcut to unlock the file and you can even add a keyboard shortcut to run it to improve your workflow.

Anyway, here is my fix for the Compass app locking SCSS files problem in Dreamweaver:

  1. Dowload and install [handle.exe](http://technet.microsoft.com/en-us/sysinternals/bb896655) &#8211; make sure to use the default install path.
  2. Open notepad and create a new blank text file.
  3. Copy the following TWO lines into your text file.
  
    `C:\wamp\www\spv2.co.uk<br />
for /F "tokens=3,6 delims=: " %I IN ('handle.exe -accepteula :\wamp\www\spv2.co.uk\sass\global.scss') DO c:\handle\handle.exe -c %J -y -p %I`
  4. Replace the path to your own SCSS file eg: _wamp\www\spv2.co.uk\sass_ is the path to the SASS file on MY system, change this path to yours.
  5. Save the file to something like &#8220;unlock-sass.bat&#8221;, making sure you include the quotes otherwise the file extension will remain a text file and not a batch file.
  6. Save the file onto your desktop or where ever else you can have easy access to file.
  7. Click your batch file every time the lock happens and hey presto, the lock will have been removed.
  8. Optional stage, create a keyboard shortcut to the file so you can run the batch file from your keyboard.