montageDefine("f9c294b","bootstrap",{dependencies:[],factory:function(){(function(e){"use strict";var t,n=function(t){function n(){document.removeEventListener("DOMContentLoaded",n,!0),c=!0,l()}function s(e){if(!f[e]&&m[e]){var t=f[e]={};f[e]=m[e](s,t)||t}return f[e]}function o(){h=s("promise"),p=s("require"),u=s("mini-url"),l()}function l(){c&&p&&t(p,h,u)}var c,p,h,u;a(),document.addEventListener("DOMContentLoaded",n,!0),"interactive"===document.readyState&&n();var d={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload)for(var g in d)i(d[g]);var m={};e.bootstrap=function(t,n){m[t]=n,delete d[t];for(var t in d)return;delete e.bootstrap,o()},e.bootstrap("mini-url",function(e,t){t.resolve=r});var f={}},a=function(){var e,n,a,s,i,o,l;if(!t){t={};var c=document.getElementsByTagName("script");for(e=0;c.length>e;e++)if(s=c[e],s.src&&(a=s.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(i=a[1]),s.hasAttribute("data-mr-location")&&(i=r(window.location,s.getAttribute("data-mr-location"))),i){if(s.dataset)for(l in s.dataset)t[l]=s.dataset[l];else if(s.attributes)for(n=0;s.attributes.length>n;n++)o=s.attributes[n],a=o.name.match(/^data-(.*)$/),a&&(t[a[1]]=o.value);s.parentNode.removeChild(s),t.mrLocation=i;break}}return t},s=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),a=document.createElement("a");return function(s,r){if(t||n.appendChild(e),s+="",!/^[\w\-]+:/.test(s))throw Error("Can't resolve "+JSON.stringify(r)+" relative to "+JSON.stringify(s));var i=e.href;e.href=s,a.href=r;var o=a.href;return e.href=i,t||n.removeChild(e),o}},r=s(),i=function(e){var t=a(),n=document.createElement("script");n.src=r(t.mrLocation,e),n.onload=function(){n.parentNode.removeChild(n)},document.querySelector("head").appendChild(n)};n(function(t,n,s){var r=a(),o={},l=s.resolve(window.location,r.package||"."),c=r.module||"";if(e.preload){var p={},h=function(e){return p[e]=p[e]||n.defer()};e.bundleLoaded=function(e){h(e).resolve()};var u=n.defer();o.preloaded=u.promise;var d=n.resolve();e.preload.forEach(function(e){d=d.then(function(){return n.all(e.map(function(e){return i(e),h(e).promise}))})}),u.resolve(d.then(function(){delete e.preload,delete e.bundleLoaded}))}t.loadPackage({location:r.mrLocation,hash:r.mrHash},o).then(function(e){return e.inject("mini-url",s),e.inject("promise",n),e.inject("require",t),e.loadPackage({name:"q",location:r.qLocation,hash:r.qHash}).then(function(t){return t.inject("q",n),"autoPackage"in r&&e.injectPackageDescription(l,{}),e.loadPackage({location:l,hash:r.applicationHash}).invoke("async",c)})}).done()})})(this)}});