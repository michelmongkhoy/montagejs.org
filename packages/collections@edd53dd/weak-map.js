"use strict";module.exports="undefined"!=typeof WeakMap?WeakMap:function(){function e(e){return e.prototype=null,Object.freeze(e)}Object.prototype.hasOwnProperty;var t=Object.getOwnPropertyNames,n=Object.defineProperty,a={};t(Object).forEach(function(e){a[e]=Object[e]});var s="ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var i=new ArrayBuffer(25),r=new Uint8Array(i);crypto.getRandomValues(r),s="rand:"+Array.prototype.map.call(r,function(e){return(e%36).toString(36)}).join("")+"___"}n(Object,"getOwnPropertyNames",{value:function(e){return t(e).filter(function(e){return e!==s})}}),"getPropertyNames"in Object&&n(Object,"getPropertyNames",{value:function(e){return a.getPropertyNames(e).filter(function(e){return e!==s})}});var o=function(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[s];if(t&&t.key===e)return t;if(!a.isExtensible(e))return void 0;var i=[],r=[];return t={key:e,gets:i,vals:r},n(e,s,{value:t,writable:!1,enumerable:!1,configurable:!1}),t};(function(){var e=Object.freeze;n(Object,"freeze",{value:function(t){return o(t),e(t)}});var t=Object.seal;n(Object,"seal",{value:function(e){return o(e),t(e)}});var a=Object.preventExtensions;n(Object,"preventExtensions",{value:function(e){return o(e),a(e)}})})();var l=function(){function t(e,n){var a,s,l=o(e);return l?(a=l.gets.indexOf(t),s=l.vals):(a=i.indexOf(e),s=r),a>=0?s[a]:n}function n(e){var n,a=o(e);return n=a?a.gets.indexOf(t):i.indexOf(e),n>=0}function a(e,n){var a,s=o(e);s?(a=s.gets.indexOf(t),a>=0?s.vals[a]=n:(s.gets.push(t),s.vals.push(n))):(a=i.indexOf(e),a>=0?r[a]=n:(i.push(e),r.push(n)))}function s(e){var n,a=o(e);return a?(n=a.gets.indexOf(t),n>=0&&(a.gets.splice(n,1),a.vals.splice(n,1))):(n=i.indexOf(e),n>=0&&(i.splice(n,1),r.splice(n,1))),!0}var i=[],r=[];return Object.create(l.prototype,{get___:{value:e(t)},has___:{value:e(n)},set___:{value:e(a)},delete___:{value:e(s)}})};return l.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),l}();