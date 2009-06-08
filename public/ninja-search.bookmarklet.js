// This file is embedded into <a id="bookmarklet" href="javascript:contents"> tags
// within test and public website files, by the +rake update_bookmarklet+ task

// Comments and whitespace will be stripped

// This is a modified version of ninja-search.user.js

var head = document.getElementsByTagName("head")[0];

var style = document.createElement("link");
style.setAttribute("type", "text/css");
style.setAttribute("rel", "stylesheet");
style.setAttribute("href", "http://drnic.github.com/ninja-search-js/dist/stylesheets/flexselect.css");
head.appendChild(style);

var script = document.createElement("script");
script.setAttribute("src", "http://drnic.github.com/ninja-search-js/dist/ninja_search_complete.js");
head.appendChild(script);
