montageDefine("b02206b","ui/application",{dependencies:["core/core","ui/template","ui/component","ui/montage-window","ui/dom"],factory:function(e,t,n){var r=e("core/core").Montage,i=e("ui/template").Template,s=e("ui/component").Component,o=e("ui/montage-window").MontageWindow,u;e("ui/dom");var a=t.Application=r.create(r,{eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){var e=this;while(e.parentApplication)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return this.parentApplication==null?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){this.parentApplication==null?["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)!==-1&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(this.parentApplication==null){if(!this._windows){var e=o.create();e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=o.create();e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,t=this.windowsSortOrder;if(t=="z-order")return e[0];if(t=="reverse-z-order")return e[e.length-1];for(var n in e)if(e[n].focused)return e[n]}},addEventListener:{value:function(e,t,n){Object.getPrototypeOf(a).addEventListener.call(this,e,t,n)}},removeEventListener:{value:function(e,t,n){Object.getPrototypeOf(a).removeEventListener.call(this,e,t,n)}},delegate:{value:null},openWindow:{value:function(e,t,n){var r=this,i=o.create(),s,u,a={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},f={module:e,name:t,parent:window,callback:function(e,t){var n;s=e.document.application,i.window=e,i.application=s,i.component=t,s.window=i,r.attachedWindows.push(i),n=r.mainApplication.windowsSortOrder,n=="z-order"||n=="reverse-open-order"?r.windows.unshift(i):r.windows.push(i),u=document.createEvent("CustomEvent"),u.initCustomEvent("load",!0,!0,null),i.dispatchEvent(u)}};if(this===this.mainApplication&&!this._multipleWindow)var l=this.window;if(typeof n=="object"){var c,h,p="",d="";for(c in n)n.hasOwnProperty(c)&&(a[c]=n[c])}var v=["name"];for(c in a)v.indexOf(c)==-1&&(h=a[c],typeof h=="boolean"?h=h?"yes":"no":(h=String(h),h.match(/[ ,"]/)&&(h='"'+h.replace(/"/g,'\\"')+'"')),d+=p+c+"="+h,p=",");return window.require.loadPackage({name:"montage"}).then(function(e){var t=window.open(e.location+"ui/window-loader/index.html","_blank",d);t.loadInfo=f}).done(),i}},attachWindow:{value:function(e){var t=e.application.parentApplication,n;return t!==this&&(t&&t.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),n=this.mainApplication.windowsSortOrder,n=="z-order"||n=="reverse-open-order"?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var t,n,r=this.windows;return e===undefined&&(e=this.window),n=e.application.parentApplication,n==this?(t=this.attachedWindows.indexOf(e),t!==-1&&this.attachedWindows.splice(t,1),t=r.indexOf(e),t!==-1&&r.splice(t,1),e.application.parentApplication=null):n&&n.detachWindow(e),e}},didCreate:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(n,r){var s=i.create().initWithDocument(window.document,n),o,u=this;t.application=u,e.async("ui/component").then(function(e){o=e.__root__,o.element=document,s.instantiateWithOwnerAndDocument(null,window.document,function(){u.callDelegateMethod("willFinishLoading",u),o.needsDraw=!0,r&&r(u)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return e==="alert"||e==="confirm"||e==="notify"}},_createPopupSlot:{value:function(e){var t=document.createElement("div");document.body.appendChild(t),t.style.zIndex=e,t.style.position="absolute";var n=u.create();return n.element=t,n}},getPopupSlot:{value:function(t,n,r){var i=this;e.async("ui/slot.reel/slot").then(function(e){u=u||e.Slot,t=t||"custom";var s=i._isSystemPopup(t),o,a,f;i.popupSlots=i.popupSlots||{};if(s)switch(t){case"alert":o=9004;break;case"confirm":o=9003;break;case"notify":o=9002}else i._zIndex?i._zIndex=i._zIndex+1:i._zIndex=7e3,o=i._zIndex;f=i.popupSlots[t],f||(f=i.popupSlots[t]=i._createPopupSlot(o)),s||(f.element.style.zIndex=o),f.content=n,r.call(this,f)}).done()}},returnPopupSlot:{value:function(e){var t=this;if(t.popupSlots&&t.popupSlots[e]){var n=t.popupSlots[e];n.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var t=Object.keys(this.popupSlots);if(t&&t.length>0){var n=0,r=t.length,i;for(n=0;n<r;n++)i=this.popupSlots[t[n]],i&&i.content!==null&&e.push(i)}}return e}}})}})