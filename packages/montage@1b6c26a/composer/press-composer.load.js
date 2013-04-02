montageDefine("1b6c26a","composer/press-composer",{dependencies:["montage","composer/composer","core/event/mutable-event"],factory:function(n,s){var e=n("montage").Montage,a=n("composer/composer").Composer,t=n("core/event/mutable-event").MutableEvent,p=s.PressComposer=a.specialize({load:{value:function(){window.Touch?this._element.addEventListener("touchstart",this,!0):this._element.addEventListener("mousedown",this,!0)}},unload:{value:function(){window.Touch?this._element.removeEventListener("touchstart",this):this._element.removeEventListener("mousedown",this)}},delegate:{value:null},cancelPress:{value:function(){return this._state===p.PRESSED?(this._dispatchPressCancel(),this._endInteraction(),!0):!1}},addEventListener:{value:function(n,s,e){a.addEventListener.call(this,n,s,e),"longPress"===n&&(this._shouldDispatchLongPress=!0)}},UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2},_state:{enumerable:!1,value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{enumerable:!1,value:!1},_longPressThreshold:{enumerable:!1,value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(n){this._longPressThreshold!==n&&(this._longPressThreshold=n)}},_longPressTimeout:{enumberable:!1,value:null},_observedPointer:{enumerable:!1,value:null},_startInteraction:{enumerable:!1,value:function(n){if("enabled"in this.component&&!this.component.enabled||null!==this._observedPointer)return!1;var s,e=0;if("touchstart"===n.type){for(s=n.changedTouches.length;s>e;e++)if(!this.component.eventManager.componentClaimingPointer(n.changedTouches[e].identifier)){this._observedPointer=n.changedTouches[e].identifier;break}if(null===this._observedPointer)return!1;document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)}else"mousedown"===n.type&&(this._observedPointer="mouse",document.addEventListener("mouseup",this,!1),document.addEventListener("click",this,!1));this._element.addEventListener("dragstart",this,!1),this.component.eventManager.claimPointer(this._observedPointer,this),this._dispatchPressStart(n)}},_interpretInteraction:{value:function(n){var s,e,a;if(null===this._observedPointer)return this._endInteraction(n),void 0;for(s=!this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this),e=n.target;e!==this._element&&e&&e.parentNode;)e=e.parentNode;if(a=e===this._element,s&&"click"===n.type)return n.preventDefault(),this._endInteraction(n),void 0;if("mouseup"===n.type){if(!s&&a)return this._dispatchPress(n),this._endInteraction(n),void 0;if(!s&&!a)return this._dispatchPressCancel(n),this._endInteraction(n),void 0;s&&!a&&this._endInteraction(n)}}},_endInteraction:{value:function(n){n&&"touchend"!==n.type&&"touchcancel"!==n.type?n&&"click"!==n.type&&"mouseup"!==n.type||(document.removeEventListener("click",this),document.removeEventListener("mouseup",this)):(document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this)),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._state=p.UNPRESSED}},_changedTouchisObserved:{value:function(){if(null===this._observedPointer)return!1;for(var n=0,s=event.changedTouches.length;s>n;n++)if(event.changedTouches[n].identifier===this._observedPointer)return n;return!1}},surrenderPointer:{value:function(n,s){var e=this.callDelegateMethod("surrenderPointer",n,s);return e!==void 0&&e===!1?!1:(this._dispatchPressCancel(),!0)}},captureTouchstart:{value:function(n){this._startInteraction(n)}},handleTouchend:{value:function(n){return null===this._observedPointer?(this._endInteraction(n),void 0):(this._changedTouchisObserved(n.changedTouches)!==!1&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._dispatchPress(n):n.preventDefault(),this._endInteraction(n)),void 0)}},handleTouchcancel:{value:function(n){(null===this._observedPointer||this._changedTouchisObserved(n.changedTouches)!==!1)&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(n),this._endInteraction(n))}},captureMousedown:{value:function(n){this._startInteraction(n)}},handleClick:{value:function(n){this._interpretInteraction(n)}},handleMouseup:{value:function(n){this._interpretInteraction(n)}},handleDragstart:{value:function(n){this._dispatchPressCancel(n),this._endInteraction()}},_createPressEvent:{enumerable:!1,value:function(n,s){var e,a;return s||(s=document.createEvent("CustomEvent"),s.initCustomEvent(n,!0,!0,null)),e=new o,e.event=s,e.type=n,e.pointer=this._observedPointer,e.targetElement=s.target,s.changedTouches&&(a=this._changedTouchisObserved(s.changedTouches))!==!1&&(e.touch=s.changedTouches[a]),e}},_dispatchPressStart:{enumerable:!1,value:function(n){if(this._state=p.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",n)),this._shouldDispatchLongPress){var s=this;this._longPressTimeout=setTimeout(function(){s._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(n){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this.dispatchEvent(this._createPressEvent("press",n)),this._state=p.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(n){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",n)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(n){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=p.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",n))}}}),o=function(){var n,s,a,p,o,l;for(n=t.specialize({type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(n){this._event=n}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(n){this._touch=n}}}),s=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],a=["clientX","clientY","pageX","pageY","screenX","screenY","target"],p=function(n){return{get:function(){return this._event[n]}}},o=function(n){return{get:function(){return this._touch?this._touch[n]:this._event[n]}}},l=s.length-1;l>=0;l--)e.defineProperty(n,s[l],p(s[l]));for(l=a.length-1;l>=0;l--)e.defineProperty(n,a[l],o(a[l]));return n}()}});