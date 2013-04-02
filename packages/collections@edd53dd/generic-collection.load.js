montageDefine("edd53dd","generic-collection",{dependencies:["./shim-array"],factory:function(e,t,n){"use strict";function a(){throw Error("Can't construct. GenericCollection is a mixin.")}n.exports=a,a.prototype.addEach=function(e){if(e&&Object(e)===e)if("function"==typeof e.forEach)e.forEach(this.add,this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.add(e[t],t)},this);return this},a.prototype.deleteEach=function(e,t){return e.forEach(function(e){this["delete"](e,t)},this),this},a.prototype.forEach=function(e){var t=arguments[1];return this.reduce(function(n,a,s,i,r){e.call(t,a,s,i,r)},void 0)},a.prototype.map=function(e){var t=arguments[1],n=[];return this.reduce(function(a,s,i,r,o){n.push(e.call(t,s,i,r,o))},void 0),n},a.prototype.enumerate=function(e){null==e&&(e=0);var t=[];return this.reduce(function(n,a){t.push([e++,a])},void 0),t},a.prototype.group=function(e,t,n){n=n||Object.equals;var a=[],s=[];return this.forEach(function(i,r,o){var l,r=e.call(t,i,r,o),c=s.indexOf(r,n);-1===c?(l=[],a.push([r,l]),s.push(r)):l=a[c][1],l.push(i)}),a},a.prototype.toArray=function(){return this.map(Function.identity)},a.prototype.toObject=function(){var e={};return this.reduce(function(t,n,a){e[a]=n},void 0),e},a.prototype.filter=function(e){var t=arguments[1],n=this.constructClone();return this.reduce(function(a,s,i,r,o){e.call(t,s,i,r,o)&&n.add(s)},void 0),n},a.prototype.every=function(e){var t=arguments[1];return this.reduce(function(n,a,s,i,r){return n&&e.call(t,a,s,i,r)},!0)},a.prototype.some=function(e){var t=arguments[1];return this.reduce(function(n,a,s,i,r){return n||e.call(t,a,s,i,r)},!1)},a.prototype.all=function(){return this.every(Boolean)},a.prototype.any=function(){return this.some(Boolean)},a.prototype.min=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,a){return t?(t=!1,a):0>e(a,n)?a:n},void 0)},a.prototype.max=function(e){e=e||this.contentCompare||Object.compare;var t=!0;return this.reduce(function(n,a){return t?(t=!1,a):e(a,n)>0?a:n},void 0)},a.prototype.sum=function(e){return e=void 0===e?0:e,this.reduce(function(e,t){return e+t},e)},a.prototype.average=function(e){var t=void 0===e?0:e,n=void 0===e?0:e;return this.reduce(function(e,a){t+=a,n+=1},void 0),t/n},a.prototype.concat=function(){for(var e=this.constructClone(this),t=0;arguments.length>t;t++)e.addEach(arguments[t]);return e},a.prototype.flatten=function(){var e=this;return this.reduce(function(t,n){return n.forEach(function(e){this.push(e)},t,e),t},[])},a.prototype.zip=function(){var e=Array.prototype.slice.call(arguments);return e.unshift(this),Array.unzip(e)},a.prototype.sorted=function(e,t,n){return e=e||this.contentCompare||Object.compare,e.by?(t=e.by,e=e.compare||this.contentCompare||Object.compare):t=t||Function.identity,void 0===n&&(n=1),this.map(function(e){return{by:t(e),value:e}}).sort(function(t,a){return e(t.by,a.by)*n}).map(function(e){return e.value})},a.prototype.reversed=function(){return this.constructClone(this).reverse()},a.prototype.clone=function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;var n=this.constructClone();return this.forEach(function(a,s){n.add(Object.clone(a,e-1,t),s)},this),n},a.prototype.only=function(){return 1===this.length?this.one():void 0},a.prototype.iterator=function(){return this.iterate.apply(this,arguments)},e("./shim-array")}});