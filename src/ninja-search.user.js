// ==UserScript==
// @name          Ninja Search
// @namespace     http://drnicwilliams.com/
// @description   Instant autocompletion for any <select> drop downs on any page
// @include       https://*
// @include       http://*
// @version       1.0
// ==/UserScript==

/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function() {
  var head = document.getElementsByTagName("head")[0];
  
  var flexselect_theme = function() {
    var style = document.createElement("link");
    style.setAttribute("type", "text/css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("media", "screen");
    style.setAttribute("href", "file:///Users/drnic/Documents/js/ninja-search-js/src/assets/stylesheets/flexselect.css");
    head.appendChild(style);
  };

  var require = function(src) {
    var script = document.createElement("script");
    script.setAttribute("language", "javascript");
    script.setAttribute("src", src);
    head.appendChild(script);
  };
  var load_latest_ninja_search = function() {
    if (typeof jQuery === "undefined" || jQuery === null) {
      require("file:///Users/drnic/Documents/js/ninja-search-js/src/ext/jquery.js");
    }
    require("file:///Users/drnic/Documents/js/ninja-search-js/src/ext/liquidmetal.js");
    require("file:///Users/drnic/Documents/js/ninja-search-js/src/ext/jquery.flexselect.js");
    require("file:///Users/drnic/Documents/js/ninja-search-js/src/ninja_search.js");
  };
  
  flexselect_theme();
  load_latest_ninja_search();
})();
