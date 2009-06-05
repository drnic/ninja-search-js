// ==UserScript==
// @name          Ninja Search
// @namespace     http://drnicwilliams.com/
// @description   Instant autocompletion for any <select> drop downs on any page
// @include       https://*
// @include       http://*
// @version       1.0
// ==/UserScript==

(function() {
  var head = document.getElementsByTagName("head")[0];
  
  var flexselect_theme = function() {
    var style = document.createElement("link");
    style.setAttribute("type", "text/css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("media", "screen");
    style.setAttribute("href", "http://ninja-search-js.local/stylesheets/flexselect.css");
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
      require("http://ninja-search-js.local/jquery.js");
    }
    require("http://ninja-search-js.local/liquidmetal.js");
    require("http://ninja-search-js.local/jquery.flexselect.js");
    require("http://ninja-search-js.local/ninja_search.js");
  };
  
  flexselect_theme();
  load_latest_ninja_search();
})();
