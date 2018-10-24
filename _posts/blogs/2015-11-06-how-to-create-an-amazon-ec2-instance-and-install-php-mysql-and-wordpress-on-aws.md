---
id: 1702
title: How to create an Amazon EC2 instance and install PHP, MySQL and WordPress on AWS
date: 2015-11-06T12:58:46+00:00
author: John Aspinall
layout: post
guid: http://johnaspinall.co.uk/?p=1702
permalink: /how-to-create-an-amazon-ec2-instance-and-install-php-mysql-and-wordpress-on-aws/
categories:
  - Hosting a Website
tags:
  - AWS
  - EC2
  - wordpress
---
Here&#8217;s a guide I wrote (primarily for myself) with details everything you need to do to spin up an Amazon EC2 VPS instance and install and configure a WordPress to run a website on it.

<!--more-->

NB &#8211; Since I wrote this guide, I have since terminated my Amazon AWS account as I found it to have hidden costs and didn&#8217;t fancy receiving a shock hosting bill if I got a traffic spike, so have since switch my web hosting to a [Digital Ocean](http://www.digitalocean.com) VPS running a Linux Ubuntu 14.04 install.

Here&#8217;s my guide anyway as it may come in handy for someone as I spent many days and hours labouring over getting WordPress installed on an AWS EC2 instance, enjoy!

## <span style="font-weight: 400;">Create a new EC2 instance (virtual server)</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Login to AWS</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Click on EC2 in the dashboard</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Click on instances</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Click launch instance</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Click Amazon Linux AMI (most updated and community supported package).  Leave 64-bit clicked</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Select t1.micro instance </span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Configure instance details &#8211; enter 1 instance and leave the other entries as default. </span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Add storage &#8211; Leave all defaults</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Tag Instance &#8211; Leave all defaults</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Configure security groups &#8211; Click this in the left hand nav</span> <ol>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click ‘create security group’ and give it a name and description</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click the ‘inbound’ tab (should already be selected)</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click add rule</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">select SSH and source as ‘anywhere’ unless you want to lock it down to a single IP address, in which case enter that.</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click add rule</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">select HTTP and leave defaults</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click add rule</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">select HTTPS and leave defaults</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click create</span>
    </li>
  </ol>
</li>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Review Instance and click launch</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Public and Private Key screen &#8211;</span> <ol>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">select ‘create a new key pair’, give it a name and </span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click the download key pair button which will save your private key file on your computer. </span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">click launch button</span>
    </li>
  </ol>
</li>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Click view instances buttonGo back into the Instances page and you should see your new instance initialising.  At this point rename the instance to something relevant to you (this won’t be used anywhere, its just a name for you.</span>
</li>

## **Install PHP & MySQL**

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Lock down access to your private key. The server will not allow you to have access with your private key with it’s current default permissions as it’s permissions are open by default and you will get a message saying “warning: unprotected private key file”.  To change to more secure permissions type the following command:</span>
</li>

  * ****chmod 400 <path to private key>****

<li style="font-weight: 400;">
  <span style="font-weight: 400;">SSH onto the server.</span> <ol>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">Open Terminal</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">Open Finder and locate the folder where your private key file (created in step 12 above) is located.  You can drag and drop the private key file from finder into Terminal in step C below to create the path to private key file.</span>
    </li>
    <li style="font-weight: 400;">
      <span style="font-weight: 400;">Enter the following command to gain access to the instance/server.  </span><span style="font-weight: 400;"><br /> </span><b>ssh -i <path to private key> ec2-user@<your public dns address></b>
    </li>
  </ol>
</li>

<li style="font-weight: 400;">
  <b>sudo su</b><span style="font-weight: 400;"> (puts you into root environment so you don’t need to type sudo before every command.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Install PHP & MySQL</span>
</li>

  * ****yum install php php-mysql****
  * **yum install mysql-server**

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Start MySQL service</span>
</li>

****service mysqld start****

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Create MySQL database</span>
</li>

  * ****mysqladmin -uroot create <database name>****

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Secure the database installation</span>
</li>

  * ****mysql\_secure\_installation****

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Press enter for none when asked for current password as none is set yet</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Enter the root password</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Remove anonymous users, select Yes</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Disallow remote root login, select Yes</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Remove test database, select Yes</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Reload privilege tables, select Yes</span>
</li>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Start Apache service</span>
</li>

  * ****service httpd start****

## Test the site is running OK

Your web server should now be setup with PHP, MySQL and Apache should both now be running and ready to go.  To test the site is serving web pages go back to the instances page in the the management console and look for the section that say “Public DNS”.  This is your current domain name URL for your site.  Cut and paste this into a web browser and if this installation has been performed correctly you should be served something that looks like the image below:



## <span style="font-weight: 400;">Install WordPress</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Switch to public_html folder on the server </span><b>cd /var/www/html</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Download WordPress repository </span><b>wget http://wordpress.org/latest.tar.gz</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Unpack the repository </span><b>tar -xzvf latest.tar.gz</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">OPTIONAL STEP &#8211; Move the installation from wordpress folder into a new directory of your choice, or if you prefer, the root folder. </span><b>mv wordpress <new location></b>
</li>

## <span style="font-weight: 400;">Connect WordPress with MySQL database</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Switch to folder where wordpress is installed </span><b>cd <location></b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Rename sample config file to actual config file used by WordPress </span><b>mv wp-config-sample.php wp-config.php</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Edit the config file with the database details created previously using the built in visual editor </span><b>vi wp-config.php </b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Navigate with the cursor to where it says ‘database_name_here’, hit </span><b>i </b><span style="font-weight: 400;">to change to text edit mode and change this to </span><b><your database name></b><span style="font-weight: 400;"> created previously.  </span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Change the username to </span><b>root</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Change the MySQL password to the one you changed it to earlier.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Press escape</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Save your change and quit the vi editor with </span><b>:wq</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Restart Apache to see changes </span><b>service httpd restart</b>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Go to a web browser enter your domain name with /wordpress at the end and you should see the WordPress installation setup screen</span> <ol>
    <li style="font-weight: 400;">
      <b><your domain name>/wordpress</b>
    </li>
  </ol>
</li>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Done.  Rock & Roll!</span>
</li>

&nbsp;