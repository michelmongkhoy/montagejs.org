montageDefine("edd53dd","sorted-set",{dependencies:["./shim","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","./tree-log"],factory:function(e,t,n){"use strict";function a(e,t,n,s){return this instanceof a?(this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=s||Function.noop,this.root=null,this.length=0,this.addEach(e),void 0):new a(e,t,n,s)}function s(e){this.value=e,this.left=null,this.right=null,this.length=1}function i(e,t,n){if(this.set=e,this.prev=null,this.end=n,t){var a=this.set.findLeastGreaterThanOrEqual(t);a&&(this.set.splay(a.value),this.prev=a.getPrevious())}}n.exports=a,e("./shim");var r=e("./generic-collection"),o=e("./generic-set"),l=e("./listen/property-changes"),c=e("./listen/range-changes"),p=e("./tree-log");Object.addEach(a.prototype,r.prototype),Object.addEach(a.prototype,o.prototype),Object.addEach(a.prototype,l.prototype),Object.addEach(a.prototype,c.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},a.prototype.has=function(e){return this.root?(this.splay(e),this.contentEquals(e,this.root.value)):!1},a.prototype.get=function(e){return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root.value:this.getDefault(e)},a.prototype.add=function(e){var t=new this.Node(e);if(!this.root)return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],0),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],0),!0;if(this.splay(e),!this.contentEquals(e,this.root.value)){var n=this.contentCompare(e,this.root.value);if(0===n)throw Error("SortedSet cannot contain incomparable but inequal values: "+e+" and "+this.root.value);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],this.root.index),0>n?(t.right=this.root,t.left=this.root.left,this.root.left=null,this.root.touch()):(t.left=this.root,t.right=this.root.right,this.root.right=null,this.root.touch()),t.touch(),this.root=t,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],this.root.index),!0}return!1},a.prototype["delete"]=function(e){if(this.root&&(this.splay(e),this.contentEquals(e,this.root.value))){var t=this.root.index;if(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],t),this.root.left){var n=this.root.right;this.root=this.root.left,this.splay(e),this.root.right=n}else this.root=this.root.right;return this.length--,this.root&&this.root.touch(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],t),!0}return!1},a.prototype.indexOf=function(e){return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root.index:-1},a.prototype.find=function(e){return this.root&&(this.splay(e),this.contentEquals(e,this.root.value))?this.root:void 0},a.prototype.findGreatest=function(e){if(this.root){for(e=e||this.root;e.right;)e=e.right;return e}},a.prototype.findLeast=function(e){if(this.root){for(e=e||this.root;e.left;)e=e.left;return e}},a.prototype.findGreatestLessThanOrEqual=function(e){return this.root?(this.splay(e),this.root):void 0},a.prototype.findGreatestLessThan=function(e){return this.root?(this.splay(e),this.root.getPrevious()):void 0},a.prototype.findLeastGreaterThanOrEqual=function(e){if(this.root){this.splay(e);var t=this.contentCompare(e,this.root.value);return 0===t?this.root:this.root.getNext()}},a.prototype.findLeastGreaterThan=function(e){return this.root?(this.splay(e),this.contentCompare(e,this.root.value),this.root.getNext()):void 0},a.prototype.pop=function(){if(this.root){var e=this.findGreatest();return this["delete"](e.value),e.value}},a.prototype.shift=function(){if(this.root){var e=this.findLeast();return this["delete"](e.value),e.value}},a.prototype.push=function(){this.addEach(arguments)},a.prototype.unshift=function(){this.addEach(arguments)},a.prototype.slice=function(e,t){e=e||0,t=t||this.length,0>e&&(e+=this.length),0>t&&(t+=this.length);var n=[];if(this.root)for(this.splayIndex(e);t>this.root.index&&(n.push(this.root.value),this.root.right);)this.splay(this.root.getNext().value);return n},a.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},a.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var a=[];if(this.root){this.splayIndex(e);for(var s=0;t>s;s++){a.push(this.root.value);var i=this.root.getNext();if(this["delete"](this.root.value),!i)break;this.splay(i.value)}}return this.addEach(n),a},a.prototype.splay=function(e){var t,n,a,i,r,o;if(this.root){for(t=n=a=new this.Node,o=new this.Node,r=this.root;;){var l=this.contentCompare(e,r.value);if(0>l){if(!r.left)break;if(0>this.contentCompare(e,r.left.value)&&(i=r.left,r.left=i.right,r.touch(),i.right=r,i.touch(),r=i,!r.left))break;i=new s,i.right=r,i.left=o.left,o.left=i,a.left=r,a.touch(),a=r,r=r.left}else{if(!(l>0))break;if(!r.right)break;if(this.contentCompare(e,r.right.value)>0&&(i=r.right,r.right=i.left,r.touch(),i.left=r,i.touch(),r=i,!r.right))break;i=new s,i.left=r,i.right=o.right,o.right=i,n.right=r,n.touch(),n=r,r=r.right}}for(n.right=r.left,n.touch(),a.left=r.right,a.touch(),r.left=t.right,r.right=t.left;o.left;)o.left.right.touch(),o.left=o.left.left;for(;o.right;)o.right.left.touch(),o.right=o.right.right;r.touch(),this.root=r}},a.prototype.splayIndex=function(e){if(this.root){for(var t=this.root,n=this.root.index;n!==e;)if(n>e&&t.left)t=t.left,n-=1+(t.right?t.right.length:0);else{if(!(e>n&&t.right))break;t=t.right,n+=1+(t.left?t.left.length:0)}return this.splay(t.value),this.root.index===e}return!1},a.prototype.reduce=function(e,t,n){return this.root&&(t=this.root.reduce(e,t,0,n,this)),t},a.prototype.reduceRight=function(e,t,n){return this.root&&(t=this.root.reduceRight(e,t,this.length-1,n,this)),t},a.prototype.min=function(e){var t=this.findLeast(e);return t?t.value:void 0},a.prototype.max=function(e){var t=this.findGreatest(e);return t?t.value:void 0},a.prototype.one=function(){return this.root?this.root.value:void 0},a.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.toArray(),this.dispatchBeforeRangeChange([],e,0)),this.root=null,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},a.prototype.iterate=function(e,t){return new this.Iterator(this,e,t)},a.prototype.Iterator=i,a.prototype.summary=function(){return this.root?this.root.summary():"()"},a.prototype.log=function(e,t,n,a){e=e||p.unicodeRound,t=t||this.logNode,n||(n=console.log,a=console),n=n.bind(a),this.root&&this.root.log(e,t,n,n)},a.prototype.logNode=function(e,t){t(" "+e.value)},a.logCharsets=p,a.prototype.Node=s,s.prototype.reduce=function(e,t,n,a,s,i){if(i=i||0,this.left){var r=this.left.length;t=this.left.reduce(e,t,n,a,s,i+1),n+=r}return t=e.call(a,t,this.value,n,s,this,i),n+=1,this.right&&(t=this.right.reduce(e,t,n,a,s,i+1)),t},s.prototype.reduceRight=function(e,t,n,a,s,i){return i=i||0,this.right&&(t=this.right.reduce(e,t,n,a,s,i+1),n-=this.right.length),t=e.call(a,t,this.value,this.value,s,this,i),n-=1,this.left&&(t=this.left.reduce(e,t,n,a,s,i+1)),t},s.prototype.touch=function(){this.length=1+(this.left?this.left.length:0)+(this.right?this.right.length:0),this.index=this.left?this.left.length:0},s.prototype.checkIntegrity=function(){var e=1;if(e+=this.left?this.left.checkIntegrity():0,e+=this.right?this.right.checkIntegrity():0,this.length!==e)throw Error("Integrity check failed: "+this.summary());return e},s.prototype.getNext=function(){var e=this;if(e.right){for(e=e.right;e.left;)e=e.left;return e}},s.prototype.getPrevious=function(){var e=this;if(e.left){for(e=e.left;e.right;)e=e.right;return e}},s.prototype.summary=function(){var e=this.value||"-";return e+=" <"+this.length,this.left||this.right?"("+e+" "+(this.left?this.left.summary():"()")+", "+(this.right?this.right.summary():"()")+")":"("+e+")"},s.prototype.log=function(e,t,n,a){var s,i=this;s=this.left&&this.right?e.intersection:this.left?e.branchUp:this.right?e.branchDown:e.through;var r;this.left&&this.left.log(e,t,function(t){r?a(e.strafe+" "+t):(r=!0,a(e.fromBelow+e.through+t))},function(e){a("  "+e)});var o;t(this,function(t){o?n((i.right?e.strafe:" ")+t):(o=!0,n(s+t))},function(t){a((i.left?e.strafe:" ")+t)});var l;this.right&&this.right.log(e,t,function(t){l?n("  "+t):(l=!0,n(e.fromAbove+e.through+t))},function(t){n(e.strafe+" "+t)})},i.prototype.next=function(){var e;if(e=this.prev?this.set.findLeastGreaterThan(this.prev.value):this.set.findLeast(),!e)throw StopIteration;if(void 0!==this.end&&this.set.contentCompare(e.value,this.end)>=0)throw StopIteration;return this.prev=e,e.value}}});