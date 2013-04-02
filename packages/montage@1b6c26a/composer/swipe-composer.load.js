montageDefine("1b6c26a","composer/swipe-composer",{dependencies:["montage","composer/composer"],factory:function(n,s){var e=(n("montage").Montage,n("composer/composer").Composer);s.SwipeComposer=e.specialize({load:{value:function(){document.addEventListener("touchstart",this,!0)}},unload:{value:function(){document.removeEventListener("touchstart",this,!0)}},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_deltaX:{enumerable:!1,value:0},_deltaY:{enumerable:!1,value:0},_threshold:{enumerable:!1,value:50},_thresholdSwipeAngle:{enumerable:!1,value:20},_startTimestamp:{enumerable:!1,value:0},captureTouchstart:{value:function(n){this._reset();var s=n.touches,e=s[0];this._startX=e.clientX,this._startY=e.clientY,this._startTimestamp=n.timeStamp,document.addEventListener("touchmove",this,!0),document.addEventListener("touchend",this,!0),document.addEventListener("touchcancel",this,!0)}},_reset:{enumerable:!1,value:function(){this._startX=0,this._startY=0,this._deltaX=0,this._deltaY=0,this._startSwipeAngle=null}},_startSwipeAngle:{enumerable:!1,value:null},captureTouchcancel:{value:function(){document.removeEventListener("touchmove",this,!0),document.removeEventListener("touchend",this,!0),document.removeEventListener("touchcancel",this,!0)}},captureTouchmove:{value:function(n){n.preventDefault();var s,e,a=n.changedTouches[0];this._deltaX=a.clientX-this._startX,this._deltaY=a.clientY-this._startY;var t=this._deltaX,p=this._deltaY,o=this._threshold,l=this._findSwipeAngle(t,p);null!=this._startSwipeAngle&&Math.abs(this._startSwipeAngle-l)>this._thresholdSwipeAngle&&(this._startSwipeAngle=null),null==this._startSwipeAngle&&(this._startSwipeAngle=l,this._startX=a.clientX,this._startY=a.clientY,this._deltaX=0,this._deltaY=0),t>o&&p>o?e="DIAGONAL":t>o&&o>p?e=this._deltaX>0?"RIGHT":"LEFT":o>t&&p>o&&(e=this._deltaY>0?"DOWN":"UP"),(0!=t||0!=p)&&(s=document.createEvent("CustomEvent"),s.initCustomEvent("swipemove",!0,!1,null),s.direction=e,s.angle=this._startSwipeAngle,s.velocity=this._findVelocity(n.timeStamp-this._startTimestamp),s.startX=this._startX,s.startY=this._startY,s.dX=this._deltaX,s.dY=this._deltaY,this.dispatchEvent(s))}},_findSwipeAngle:{enumerable:!1,value:function(n,s){var e=-1*(180*Math.atan2(s,n)/3.14);return e.toFixed(2)}},captureTouchend:{value:function(n){if(null!=n){var s,e,a=Math.abs(this._deltaX),t=Math.abs(this._deltaY),p=this._threshold;if(p>a&&p>t)return this.captureTouchcancel(),void 0;document.removeEventListener("touchmove",this,!0),a>p&&t>p?s="DIAGONAL":a>p&&p>t?s=this._deltaX>0?"RIGHT":"LEFT":p>a&&t>p&&(s=this._deltaY>0?"DOWN":"UP"),e=document.createEvent("CustomEvent"),e.initCustomEvent("swipe",!0,!1,null),e.direction=s,e.angle=this._startSwipeAngle,e.velocity=this._findVelocity(n.timeStamp-this._startTimestamp),e.startX=this._startX,e.startY=this._startY,e.dX=this._deltaX,e.dY=this._deltaY,this.dispatchEvent(e)}}},_findVelocity:{enumerable:!1,value:function(n){return Math.sqrt(this._deltaX*this._deltaX+this._deltaY*this._deltaY)/n}}})}});