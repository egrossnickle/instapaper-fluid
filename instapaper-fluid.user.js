// ==UserScript==
// @name        Instapaper for Fluid.app
// @author      Eric Grossnickle
// @namespace   http://mightydream.com
// @description Turns the Instapaper.com website into a single-column UI for better use as a Fluid app.
// @version		1.0
// @include     http*://*.instapaper.com/browse*
// @include     http*://*.instapaper.com/u*
// @include     http*://*.instapaper.com/user*
// @include     http*://*.instapaper.com/edit*
// @include     http*://*.instapaper.com/archive*
// @include     http*://*.instapaper.com/delete*
// @include     http*://*.instapaper.com/starred*
// @include     http*://*.instapaper.com/liked*
// @include     http*://*.instapaper.com/skip*
// @include     http*://*.instapaper.com/add*
// @include     http*://*.instapaper.com/
// @include     http*://*.instapaper.com
// ==/UserScript==

// To use:
//   1. Create a new Fluid app.
//   2. Enter http://instapaper.com/u as the URL and then enter a name (such as 'Instapaper').
//   3. Once the app is created, go up to the 'Scripts' menu and choose 'New Userscript…'.
//   4. Name the script whatever you want (such as 'Instapaper').
//   5. In the blank script that appears, copy/paste the entire contents of this file.
//   6. Save the script and restart the Fluid SSB.
//   7. (Optional) Open to the app's Preferences panel, go the Advanced section, and choose '[Allow] browsing to URLs mathing these patterns:' then enter the above @include patterns.

(function () {
    if (window.fluid) {
		
		//
		// Create and apply styling.
		//
		var style = document.createElement('style');
		
		style.textContent = [
			'#header, #footer, #right_column, #auto_mark_as_read_container, #adlabel, #ad, #deckpromo, #adclear, #browsedeckad { display: none !important; }',
			'body, #left_column, #bookmark_list { width: 100% !important; min-width: 550px !important; }',
			'#paginationTop { margin: 15px !important; }',
			'#categoryHeader { margin: 20px !important; }',
			'.tableViewCellFirst, #bookmark_list div:first-child, .tableViewCell { border-right-width: 0 !important; border-left-width: 0 !important; }',
			'.tableViewCellFirst, #bookmark_list div:first-child, .tableViewCellLast, #bookmark_list div:last-child { -webkit-border-radius: 0 !important; }',
			'#feature_column, #side_column { width: 100% !important; }',
			'#side_column { margin-top: 60px !important; padding-left: 0 !important; }',
			'.section_header, .story { padding-right: 20px !important; padding-left: 20px !important; }',
			'.story { padding-bottom: 15px !important; border-bottom: 1px solid #ddd; }',
			'#folders > div:not(:last-child) { font-size: 14px; }',
			'#stories_from_friends .section_header + a { padding-left: 20px; }',
			'#stories_from_friends .story { margin-bottom: 15px !important; padding-right: 20px !important; float: none !important; height: auto !important; width: auto !important; }',
			'#stories_from_friends .story .headline { font-size: 20px !important; }',
			'#stories_from_friends #more_stories_from_friends_toggle { margin: 0 20px; }'
		].join('\n');
		
		document.getElementsByTagName('head')[0].appendChild(style);
		
		//
		// If folders list exists, append link to navigation and make into a drop-down.
		//
		if (document.getElementById('folders')) {
			var header = document.getElementById('categoryHeader');
			
			var bullet = document.createElement('span');
			bullet.style.color = '#ccc';
			bullet.innerHTML = '• ';
			header.appendChild(bullet);
			
			var foldersLink = document.createElement('a');
			foldersLink.href = '#';
			foldersLink.style.fontWeight = 'normal';
			foldersLink.innerHTML = 'Folders';
			foldersLink.id = 'foldersLink';
			foldersLink.setAttribute('onclick', 'if (document.getElementById("folders").style.display == "block") { document.getElementById("foldersLink").style.fontWeight = "normal"; document.getElementById("folders").style.display = "none"; } else { document.getElementById("foldersLink").style.fontWeight = "bold"; document.getElementById("folders").style.display = "block"; }');
			header.appendChild(foldersLink);
			
			var folders = document.getElementById('folders');
			folders.style.marginTop = '10px';
			folders.style.padding = '20px';
			folders.style.backgroundColor = '#eee';
			folders.style.display = 'none';
			folders.style.minWidth = '150px';
			header.appendChild(folders);
		}
		
		//
		// Set dock badge to number of currently displayed articles, but only when in 'Unread' section.
		//
		function updateDockBadge() {
			if (window.location.pathname.substr(0, 2) == '/u') {
				var articles = document.getElementsByClassName("tableViewCell");
				window.fluid.dockBadge = articles.length;
			}
		}
		
		updateDockBadge();
		
		document.getElementsByTagName('body')[0].addEventListener('click', function(e) {
			setTimeout(updateDockBadge, 2000);
		}, false);
    }
})();