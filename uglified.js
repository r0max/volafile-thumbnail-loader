!function(a){"use strict";function b(a,b){a.parentNode.insertBefore(b,a.nextSibling)}function c(a){var b,c,d,e,f,g,h,i,j;for(b=a.lastIndexOf("."),c=a.substr(b+1,a.length-b-1),d=["png","jpg","bmp","gif","jpeg"],e=0,f=d.length;f>e;e++)d.push(d[e].toUpperCase());return-1!==d.indexOf(c)?(g="/get/",h=a.indexOf(g),i=a.lastIndexOf("/"),j=a.substring(h+g.length,i),"/get_asset/thumb/"+j):null}function d(a,b){a.parentNode.className===b?a.parentNode.style.height="auto":d(a.parentNode,b)}!function(){var e,f,g,h,i,j;for(g=a.getElementsByClassName("file_name"),e=0,f=g.length;f>e;e++)h=g[e].href,i=c(h),i&&(j=a.createElement("div"),j.style.display="block",j.innerHTML='<img src="'+i+'" />',d(g[e],"filelist_file"),b(g[e],j))}()}(document);