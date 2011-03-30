Instapaper for Fluid.app
========================

This userscript turns the Instapaper website into a single-column UI which is more suitable when using Instapaper as a [Fluid.app](http://fluid.app) SSB. It also adds an unread count badge to the dock icon.


Usage
-----

1. Create a new Fluid app.
2. Enter `http://instapaper.com/u` as the URL and then enter a name (such as `Instapaper`).
3. Once the app is created, go up to the _Scripts_ menu and choose _New Userscript..._.
4. Name the script whatever you want (such as `Instapaper`).
5. In the blank script that appears, copy/paste the entire contents of `instapaper-fluid.js`.
6. Save the script and restart the Fluid SSB.
7. __(Optional)__ To make links open in the default browser rather than inside the Fluid app: open to the app's _Preferences_ panel, go the _Advanced_ section, and choose `[Allow] browsing to URLs mathing these patterns:` then enter the following patterns:
	- http*://*.instapaper.com/browse*
	- http*://*.instapaper.com/u*
	- http*://*.instapaper.com/user*
	- http*://*.instapaper.com/edit*
	- http*://*.instapaper.com/archive*
	- http*://*.instapaper.com/delete*
	- http*://*.instapaper.com/starred*
	- http*://*.instapaper.com/liked*
	- http*://*.instapaper.com/skip*
	- http*://*.instapaper.com/add*
	- http*://*.instapaper.com/
	- http*://*.instapaper.com


Unread Count
------------

The unread count badge only appears on the dock icon when in the _Unread_ section. Also, the unread count only reflects the number of articles on the current page (Instapaper.com shows 40 articles per page).


Icon
----

The included `.icns` file contains a custom 16-pixel icon which will appear in the Mac menubar when using the Fluid SSB in MenuExtra mode (_Instapaper Menu_ > _Convert to MenuExtra SSB..._). All other sizes in the icon file utilize the [official Instapaper icon](http://instapaper.com/images/press-kit/icon-512.png) which is a copyright of Instapaper, LLC.


Screenshot
----------

![Screenshot](http://cl.ly/5dN3/instapaper-fluid.png)