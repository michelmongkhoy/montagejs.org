var Montage=require("montage").Montage,MontageWindow=exports.MontageWindow=Montage.specialize({_application:{value:null},application:{get:function(){return this._application},set:function(n){null===this._application&&(this._application=n,this.focused&&this._setFocusedWindow(this))}},_window:{value:null},window:{get:function(){return this._window},set:function(n){if(null===this._window){var s=n.document.body;this._window=n,n.addEventListener("beforeunload",this,!0),n.addEventListener("focus",this,!0),n.addEventListener("mousedown",this,!0),null===s.getAttribute("tabIndex")&&(s.setAttribute("tabIndex",-1),s.focus())}}},document:{get:function(){return this._window.document}},_component:{value:null},component:{get:function(){return this._component},set:function(n){null===this._component&&(this._component=n)}},title:{get:function(){return this.document.title},set:function(n){this.document.title=n}},focused:{value:!1},focus:{value:function(){this._window&&this._window.focus()}},_setFocusedWindow:{value:function(n){var s,e,a,t=this.application;if(t._multipleWindow){s=t.windows;for(a in s)e=s[a],e.window===n?e.focused!==!0&&(e.focused=!0,"z-order"==t.windowsSortOrder?(s.splice(a,1),s.unshift(e)):"reverse-z-order"==t.windowsSortOrder&&(s.splice(a,1),s.push(e))):e.focused=!1}else this.focused=!0}},closed:{get:function(){return this._window?this._window.closed:!1}},close:{value:function(){this._window&&this._window.close()}},resizeTo:{value:function(n,s){this._window&&this._window.resizeTo(n,s)}},moveTo:{value:function(n,s){this._window&&this._window.moveTo(n,s)}},captureFocus:{value:function(n){var s=this.application;if(!this.application)return this.focused=!0,void 0;if(s.parentApplication)s.mainApplication.window.captureFocus(n);else{var e=(n.target.ownerDocument?n.target.ownerDocument.defaultView:null)||n.target.defaultView||n.target;this._setFocusedWindow(e)}}},captureMousedown:{value:function(n){this.captureFocus(n)}},captureBeforeunload:{value:function(){var n,s=this.application,e=s.windows,a=s.attachedWindows;s.attachedWindows=[];for(var n in a)a[n].close();s.parentApplication&&(a=s.parentApplication.attachedWindows,n=a.indexOf(this),-1!==n&&a.splice(n,1),n=e.indexOf(this),-1!==n&&e.splice(n,1),this.window.removeEventListener("beforeunload",this,!0),this.close())}}});