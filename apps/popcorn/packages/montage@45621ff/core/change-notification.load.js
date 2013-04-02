montageDefine("45621ff","core/change-notification",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("change-notification"),s="_",o=Object.create(null),u=Object.create(null),a=Object.create(null),f=Object.create(null),l=Object.create(null);t.__reset__=function(){o=Object.create(null),u=Object.create(null),a=Object.create(null),f=Object.create(null),l=Object.create(null)},t.__debug__=function(){console.log("_descriptorsDirectory",o),console.log("_willChangeDescriptorsDirectory",u,a),console.log("_changeDescriptorsDirectory",f,l)};var c=t.ChangeNotification=Object.create(r,{_descriptorsRegistry:{writable:!0,value:Object.create(null)},_createFunctionDescriptor:{value:function(e,t,n,r){var i,s,o=Object.create(p);typeof t=="function"?(o.listenerFunction=t,o.listenerTarget=e):(i=e.identifier,i&&(i=i.toCapitalized(),s="handle"+i+(n?"WillChange":"Change"),typeof t[s]=="function"&&(o.listenerFunctionName=s,o.listenerFunction=t[s],o.listenerTarget=t)),o.listenerFunction||(s="handle"+(n?"WillChange":"Change"),typeof t[s]=="function"&&(o.listenerFunctionName=s,o.listenerFunction=t[s],o.listenerTarget=t)));if(!o.listenerFunction)throw console.log("Could not find valid listener when installing",e,t),"Could not find valid listener when installing";return o.listensToMutation=r,o}},registerPropertyChangeListener:{value:function(e,t,n,r,i){var s=e.uuid,o=this._descriptorsRegistry,u=o[s],a;return t==null&&(t="*",i=!0),u||(u=o[s]=Object.create(null),u.propertyPathCount=0),a=u[t],a||(a=u[t]=Object.create(h).initWithTargetPath(e,t),u.propertyPathCount++),a.registerListener(n,r,i),a}},unregisterPropertyChangeListener:{value:function(e,t,n,r){var i=e.uuid,s=this._descriptorsRegistry,o=s[i],u;t==null&&(t="*"),o&&(u=o[t],u&&(u.unregisterListener(n,r),u.willChangeListenersCount===0&&u.changeListenersCount===0&&(delete o[t],--o.propertyPathCount===0&&delete s[i])))}},getPropertyChangeDescriptor:{value:function(e,t){var n=this._descriptorsRegistry[e.uuid];if(n)return t==null&&(t="*"),n[t]}},__debug__:{value:function(){console.log("_descriptorsRegistry: ",this._descriptorsRegistry)}},__reset__:{value:function(){this._descriptorsRegistry=Object.create(null)}}}),h=r.create(r,{target:{value:null},propertyPath:{value:null},willChangeListeners:{value:null},changeListeners:{value:null},willChangeListenersCount:{value:0},changeListenersCount:{value:0},isActive:{value:!1},dependencies:{value:null},hasWillChangeDependencies:{value:!1},hasChangeDependencies:{value:!1},dependentDescriptorsIndex:{value:null},mutationDependencyIndex:{value:null},mutationListenersCount:{value:0},observedDependentProperties:{value:null},initWithTargetPath:{value:function(e,t){return this.target=e,this.propertyPath=t,this}},registerListener:{value:function(e,t,n){var r=e.uuid,i;t?(i=this.willChangeListeners,i||(i=this.willChangeListeners=Object.create(null)),r in i||(i[r]=c._createFunctionDescriptor(this.target,e,t,n),this.willChangeListenersCount++,n&&this.mutationListenersCount++)):(i=this.changeListeners,i||(i=this.changeListeners=Object.create(null)),r in i||(i[r]=c._createFunctionDescriptor(this.target,e,t,n),this.changeListenersCount++,n&&this.mutationListenersCount++))}},unregisterListener:{value:function(e,t){var n=e.uuid,r;t?(r=this.willChangeListeners,r&&n in r&&(r[n].listensToMutation&&this.mutationListenersCount--,delete r[n],this.willChangeListenersCount--)):(r=this.changeListeners,r&&n in r&&(r[n].listensToMutation&&this.mutationListenersCount--,delete r[n],this.changeListenersCount--)),this.willChangeListenersCount===0&&this.changeListenersCount===0&&this.removeDependencies()}},hasListeners:{value:function(){return this.willChangeListenersCount>0||this.changeListenersCount>0}},setupDependencies:{value:function(e,t,n,r){var i=this.dependencies;if(this.hasChangeDependencies){if(this.hasWillChangeDependencies||!n)return;for(var s=0,o=i.length;s<o;s+=3)i[s].addPropertyChangeListener(i[s+1],this,!0,i[s+2]!=null)}else this.addDependency(e,t,n,r);this.hasChangeDependencies?this.hasWillChangeDependencies=!0:(n&&(this.hasWillChangeDependencies=!0),this.hasChangeDependencies=!0)}},addDependency:{value:function(e,t,n,r){var i=this,s;e.getProperty(t,null,null,function(e,t,o,u,a){s=r?a!=null:!0,n&&e.addPropertyChangeListener(t,i,!0,s),e.addPropertyChangeListener(t,i,!1,s),i.registerDependency(e,t,a)})}},removeDependencies:{value:function(){var e=this.dependencies,t,n,r;if(e){for(var i=0,s=e.length;i<s;i+=3)t=e[i],n=e[i+1],r=c.getPropertyChangeDescriptor(t,n),this.hasWillChangeDependencies&&t.removePropertyChangeListener(n,this,!0),this.hasChangeDependencies&&t.removePropertyChangeListener(n,this),r&&delete r.dependentDescriptorsIndex[this.uuid];e.length=0}}},updateDependenciesAtIndex:{value:function(e,t,n){var r=this,i=this.dependencies,s=i[e+2];t!=null&&t.getProperty(s,null,null,function(e,t,n,i,s){r.unregisterDependency(e,t,s),r.hasWillChangeDependencies&&e.removePropertyChangeListener(t,r,!0),r.hasChangeDependencies&&e.removePropertyChangeListener(t,r)}),n!=null&&n.getProperty(s,null,null,function(e,t,n,i,s){r.hasWillChangeDependencies&&e.addPropertyChangeListener(t,r,!0,s!=null),r.hasChangeDependencies&&e.addPropertyChangeListener(t,r,!1,s!=null),r.registerDependency(e,t,s)})}},updateDependencies:{value:function(e){var t=e._dependenciesIndex;if(t!=null)if(e.isMutation){for(var n=0,r=e.minus.length;n<r;n++)this.updateDependenciesAtIndex(t,e.minus[n],null);for(var n=0,r=e.plus.length;n<r;n++)this.updateDependenciesAtIndex(t,null,e.plus[n])}else this.updateDependenciesAtIndex(t,e.minus,e.plus);else this.mutationListenersCount>0&&!e.isMutation&&this.updateMutationDependency(e.plus)}},updateMutationDependency:{value:function(e){var t,n;if(this.mutationDependencyIndex!=null)var t=this.dependencies[this.mutationDependencyIndex];if(t===e)return;n=this.mutationListenersCount>0&&e!=null&&typeof e=="object",t&&(this.unregisterDependency(t,null,null),t.removePropertyChangeListener(null,this,!0),t.removePropertyChangeListener(null,this,!1),this.mutationDependencyIndex=null),n&&(this.willChangeListenersCount>0&&e.addPropertyChangeListener(null,this,!0),this.changeListenersCount>0&&e.addPropertyChangeListener(null,this,!1),this.mutationDependencyIndex=this.registerDependency(e,null,null))}},registerDependency:{value:function(e,t,n){var r=c.getPropertyChangeDescriptor(e,t),i,s,o,u;if(r)return i=r.dependentDescriptorsIndex,s=this.dependencies,o=this.uuid,s||(s=this.dependencies=[]),u=s.push(e,t,n)-3,i||(i=r.dependentDescriptorsIndex=Object.create(null)),o in i||(i[o]=u),u}},unregisterDependency:{value:function(e,t,n){var r=c.getPropertyChangeDescriptor(e,t),i=this.dependencies,s;if(r){do{s=i.indexOf(e);if(i[s+1]===t&&i[s+2]===n){i.splice(s,3);break}s=i.indexOf(e,s+1)}while(s!=-1);if(s==-1)throw"getProperty target ("+this.target.uuid+":"+t+") not found in dependencies for "+this.propertyPath;delete r.dependentDescriptorsIndex[this.uuid]}}},handleWillChange:{value:function(e){e.phase="before",this.handleChange(e,this.willChangeListeners)}},handleChange:{value:function(e,t){var n,r=this.dependentDescriptorsIndex,i=e._dependenciesIndex,s,o=this.uuid;if(e[o])return;arguments.length<2&&(t=this.changeListeners,e.phase="after",this.updateDependencies(e));if(t){e._dependenciesIndex=null,e.currentTarget=this.target,e.currentPropertyPath=this.propertyPath,s=e.isMutation;for(var u in t){n=t[u];if(s&&this.target._dependenciesForProperty&&this.target._dependenciesForProperty[this.propertyPath]||!s||n.listensToMutation)r&&(e._dependenciesIndex=r[u]),e[o]=!0,n.listenerFunction.call(n.listenerTarget,e),e[o]=!1}e._dependenciesIndex=i}}}}),p=Object.create(null,{listenerTarget:{writable:!0,value:null},listenerFunction:{writable:!0,value:null},listenerFunctionName:{writable:!0,value:null},listensToMutation:{writable:!0,value:!1}}),d=Object.create(null,{installDispatcherOnTargetProperty:{value:function(e,t){var n,r,i,s;n=Object.getPrototypeAndDescriptorDefiningProperty(e,t),r=n.propertyDescriptor,r?(i=r.set,s=n.prototype,"value"in r?this.addDispatcherToTargetProperty(e,t,r.enumerable):i&&!i.isDispatchingSetter&&this.addDispatcherToTargetPropertyWithDescriptor(e,t,r)):this.addDispatcherToTargetProperty(e,t,!0)}},uninstallDispatcherOnTargetProperty:{value:function(e,t){}},dispatcherPropertyNamePrefix:{value:"_"},addDispatcherToTargetProperty:{value:function(e,t,n){var r=this.dispatcherPropertyNamePrefix+t;m.enumerable=n,g.value=e[t],m.get=function(){return this[r]},m.set=function(i){var s=c.getPropertyChangeDescriptor(e,t),o,u;if(!s){this[r]=i;return}o=this[r];if(o===i)return;if(s.isActive&&e===s.target&&t===s.propertyPath)return;u=Object.create(y),u.target=this,u.propertyPath=t,u.minus=o,s.isActive=!0,s.handleWillChange(u),this[r]=i,u.plus=this[r],s.handleChange(u),s.isActive=!1},m.set.isDispatchingSetter=!0,delete e[t],Object.defineProperty(e,r,g),Object.defineProperty(e,t,m)}},addDispatcherToTargetPropertyWithDescriptor:{value:function(e,t,n){var r=n.set;m.enumerable=n.enumerable,g.value=e[t],m.get=n.get,m.set=function i(n){var s=c.getPropertyChangeDescriptor(e,t),o,u;if(!s){r.apply(this,arguments);return}o=this[t];if(o===n){r.apply(this,arguments);return}if(s.isActive&&e===s.target&&t===s.propertyPath&&i.caller!==r)return;u=Object.create(y),u.target=this,u.propertyPath=t,u.minus=o,u.plus=n,s.isActive=!0,s.handleWillChange(u),r.apply(this,arguments),u.plus=this[t],s.handleChange(u),s.isActive=!1},m.set.isDispatchingSetter=!0,m.set.originalSetter=r,Object.defineProperty(e,t,m)}},removeDispatcherOnTargetProperty:{value:function(e,t){}}});Object.defineProperty(Object.prototype,"dispatchPropertyChange",{value:function(){var e=arguments.length,t=e-1,n,r,i,s,o,u,a;if(e<2)throw"Affected property (or properties) and callback to effect change are required to dispatchPropertyChange";n=arguments[t];if(!n||typeof n!="function")throw"Callback to effect actual change is required to dispatchPropertyChange";o=[];for(r=0;r<t;r++)i=arguments[r],s=c.getPropertyChangeDescriptor(this,i),s&&!s.isActive&&(a=Object.create(y),o.push(i,s,a),a.target=this,a.minus=this.getProperty(i),s.isActive=!0,s.handleWillChange(a));n.call(this);for(r=0,u=o.length;r<u;r+=3)i=o[r],s=o[r+1],a=o[r+2],a.plus=this.getProperty(i),s.handleChange(a),s.isActive=!1}}),Object.defineProperty(Object.prototype,"addPropertyChangeListener",{value:function(e,t,n,r){var i,s,o,u;if(!t||!e||this.uuid!==this.uuid)return;i=c.registerPropertyChangeListener(this,e,t,n,!r);if(e.indexOf(".")!==-1)i.setupDependencies(this,e,n,!r);else{if(typeof this.automaticallyDispatchPropertyChangeListener!="function"||this.automaticallyDispatchPropertyChangeListener(e))d.installDispatcherOnTargetProperty(this,e),!r&&i.mutationListenersCount==1&&i.updateMutationDependency(this[e]);s=this._dependenciesForProperty?this._dependenciesForProperty[e]:null;if(s){i.observedDependentProperties||(i.observedDependentProperties={});for(o=0;u=s[o];o++)i.observedDependentProperties[u]||(i.observedDependentProperties[u]=!0,this.addPropertyChangeListener(u,i,n,!1),i.registerDependency(this,u,null))}}}}),Object.defineProperty(Object.prototype,"removePropertyChangeListener",{value:function(t,n,r){var i=c.getPropertyChangeDescriptor(this,t);if(!i)return;c.unregisterPropertyChangeListener(this,t,n,r),i.updateMutationDependency()}});var v=/^length$/;Object.defineProperty(String.prototype,"addPropertyChangeListener",{value:function(e,t,n,r){if(e!=null&&v.test(e))return;Object.prototype.addPropertyChangeListener.call(this,e,t,n,r)}});var m={configurable:!0},g={enumerable:!1,writable:!0,configurable:!0},y=t.PropertyChangeNotification={phase:null,target:null,propertyPath:null,minus:null,plus:null,currentTarget:null,currentPropertyPath:null,isMutation:!1},b=t.ChangeNotificationDispatchingArray=[],w=/^[0-9]+$/,E=/^length$/;Object.defineProperty(Array.prototype,"addPropertyChangeListener",{value:function(e,t,n,r){var i,s,o,u,a;if(!t)return;if(e==null||(a=e.indexOf("."))==-1){if(E.test(e))return;o=e?/\(.*\)/.test(e):!1,i=e==null,s=w.test(e)}i||s||o?(this.isDispatchingArray||(this.__proto__=b),u=c.registerPropertyChangeListener(this,o?null:e,t,n,!r),s&&!r&&u.mutationListenersCount==1&&u.updateMutationDependency(this[e])):(Object.prototype.addPropertyChangeListener.apply(this,arguments),a==-1&&(u=c.getPropertyChangeDescriptor(this,e),u.setupDependencies(this,e,n,!r)))}}),Object.defineProperty(b,"_dispatchArrayChangeNotification",{enumerable:!1,configurable:!1,value:function(e,t,n,r,i){var s=c.getPropertyChangeDescriptor(this,null),o,u,a=Object.create(y),f,l=this.length,h=i.length,p,d=this.slice(n,n+r);return a.target=this,n+r>l&&(r=l-n),f=h-r,p=l+(f>0?f:0),s&&(u=Object.create(y),u.target=this,u.minus=d,u.plus=i,u.index=n,u.isMutation=!0,s.handleWillChange(u)),this._dispatchArrayBulkWillChangeNotification(a,n,i,f,p),o=this[e].apply(this,t),s&&(u.plus=i,s.handleChange(u)),this._dispatchArrayBulkChangeNotification(a,n,d,f,p),o}}),Object.defineProperty(b,"_dispatchArrayBulkWillChangeNotification",{enumerable:!1,configurable:!1,value:function(e,t,n,r,i){var s,o,u;for(var a=0,f=n.length;a<f;a++,t++)s=c.getPropertyChangeDescriptor(this,t),s&&(o=this[t],u=n[a],o!==u&&(e.index=t,e.propertyPath=String(t),e.minus=o,s.handleWillChange(e)));if(r!=0)for(;t<i;t++)s=c.getPropertyChangeDescriptor(this,t),s&&(o=this[t],u=this[t-r],o!==u&&(e.index=t,e.propertyPath=String(t),e.minus=o,s.handleWillChange(e)))}}),Object.defineProperty(b,"_dispatchArrayBulkChangeNotification",{enumerable:!1,configurable:!1,value:function(e,t,n,r,i){var s,o,u;for(var a=0,f=n.length;a<f;a++,t++)s=c.getPropertyChangeDescriptor(this,t),s&&(o=n[a],u=this[t],o!==u&&(e.index=t,e.propertyPath=String(t),e.minus=o,e.plus=u,s.handleChange(e)));if(r!=0)for(;t<i;t++)s=c.getPropertyChangeDescriptor(this,t),s&&(o=this[t+r],u=this[t],o!==u&&(e.index=t,e.propertyPath=String(t),e.minus=o,e.plus=u,s.handleChange(e)))}}),Object.defineProperty(Array.prototype,"_setProperty",{enumerable:!1,configurable:!0,value:function(e,t){return this[e]=t}}),Object.defineProperty(Array.prototype,"setProperty",{enumerable:!1,configurable:!0,value:function(e,t){return String(e).indexOf(".")==-1?this.__proto__===b&&!isNaN(e)?this._dispatchArrayChangeNotification("_setProperty",arguments,Number(e),1,Array.prototype.slice.call(arguments,1,2)):this[e]=t:Object.prototype.setProperty.apply(this,arguments)}}),Object.defineProperty(b,"isDispatchingArray",{enumerable:!1,configurable:!1,value:!0}),Object.defineProperty(b,"_splice",{enumerable:!1,configurable:!0,value:Array.prototype.splice}),Object.defineProperty(b,"splice",{enumerable:!1,configurable:!0,value:function(e,t){return this._dispatchArrayChangeNotification("_splice",arguments,e,t,Array.prototype.slice.call(arguments,2))}}),Object.defineProperty(b,"_shift",{enumerable:!1,configurable:!0,value:Array.prototype.shift}),Object.defineProperty(b,"shift",{enumerable:!1,configurable:!0,value:function(){return this._dispatchArrayChangeNotification("_shift",arguments,0,1,[])}}),Object.defineProperty(b,"_unshift",{enumerable:!1,configurable:!0,value:Array.prototype.unshift}),Object.defineProperty(b,"unshift",{enumerable:!1,configurable:!0,value:function(){return this._dispatchArrayChangeNotification("_unshift",arguments,0,0,Array.prototype.slice.call(arguments,0))}}),Object.defineProperty(b,"_push",{enumerable:!1,configurable:!0,value:Array.prototype.push}),Object.defineProperty(b,"push",{enumerable:!1,configurable:!0,value:function(){return this._dispatchArrayChangeNotification("_push",arguments,this.length,0,Array.prototype.slice.call(arguments,0))}}),Object.defineProperty(b,"_pop",{enumerable:!1,configurable:!0,value:Array.prototype.pop}),Object.defineProperty(b,"pop",{enumerable:!1,configurable:!0,value:function(){if(this.length>0)return this._dispatchArrayChangeNotification("_pop",arguments,this.length-1,1,[])}}),Object.defineProperty(b,"_reverse",{enumerable:!1,configurable:!0,value:Array.prototype.reverse}),Object.defineProperty(b,"reverse",{enumerable:!1,configurable:!0,value:function(){var e=this.length;if(e===0)return;var t=c.getPropertyChangeDescriptor(this,null),n,r,i=Object.create(y),s,o;i.target=this,t&&(r=Object.create(y),r.target=this,r.isMutation=!0,t.handleWillChange(r));for(var u=0;u<e;u++)n=c.getPropertyChangeDescriptor(this,u),n&&(s=this[u],s!==this[e-u-1]&&(i.index=u,i.propertyPath=String(u),i.minus=s,n.handleWillChange(i)));this._reverse(),t&&(r.minus=r.plus=[],t.handleChange(r));for(var u=0;u<e;u++)n=c.getPropertyChangeDescriptor(this,u),n&&(s=this[e-u-1],o=this[u],s!==o&&(i.index=u,i.propertyPath=String(u),i.minus=s,i.plus=o,n.handleChange(i)))}}),Object.defineProperty(b,"_sortIndexArray",{enumerable:!1,configurable:!0,value:[]}),Object.defineProperty(b,"_sortDefaultCompareFunction",{enumerable:!1,configurable:!0,value:function(e,t){return String(e).localeCompare(String(t))}}),Object.defineProperty(b,"_sort",{enumerable:!1,configurable:!0,value:Array.prototype.sort}),Object.defineProperty(b,"sort",{enumerable:!1,configurable:!0,value:function(e){var t,n=this.length,r,i,s,o,u,a,f,l,h;if(n===0)return;e||(e=this._sortDefaultCompareFunction),t=this,l=b._sortIndexArray,h=l.length;if(h<n){l[n]=n-1;for(var p=h;p<n;p++)l[p]=p}f=l.slice(0,n),this._sort.call(f,function(n,r){return e(t[n],t[r])}),r=c.getPropertyChangeDescriptor(this,null),o=Object.create(y),o.target=this,r&&(s=Object.create(y),s.target=this,s.isMutation=!0,r.handleWillChange(s));for(var p=0;p<n;p++)f[p]=this[f[p]],i=c.getPropertyChangeDescriptor(this,p),i&&(u=this[p],u!==f[p]&&(o.index=p,o.propertyPath=String(p),o.minus=u,i.handleWillChange(o)));for(var p=0;p<n;p++)i=c.getPropertyChangeDescriptor(this,p),i?(u=this[p],a=f[p],this[p]=f[p],u!==a&&(o.index=p,o.propertyPath=String(p),o.minus=u,o.plus=a,i.handleChange(o))):this[p]=f[p];r&&(s.minus=s.plus=[],r.handleChange(s))}}),Object.defineProperty(b,"_clear",{enumerable:!1,configurable:!0,value:Array.prototype.clear}),Object.defineProperty(b,"clear",{enumerable:!1,configurable:!0,value:function(){return this._dispatchArrayChangeNotification("_clear",arguments,this.length,0,Array.prototype.slice.call(arguments,0)),this}}),typeof define=="function"&&Object.defineProperty(Object.prototype,"__debugChangeNotifications__",{enumerable:!1,configurable:!1,value:function(){var e=c._descriptorsRegistry[this.uuid],t,n=[];if(e){for(t in e){n.push('"'+t+'"',e[t]);var i=e[t].dependencies;if(i){n.push("\n	listens to ");for(var s=0;s<i.length;s+=3)i[s+1]==null?n.push("mutation @",i[s]):n.push('"'+i[s+1]+'" @',i[s]),n.push("\n	           ");n.pop()}var o=e[t].changeListeners,u=[];for(var a in o){var f=o[a].listenerTarget,l=o[a].listenerFunctionName,h=r.getInfoForObject(f);h.objectName==="PropertyChangeBindingListener"&&(f.bindingOrigin===this&&f.bindingPropertyPath===t?u.push('"'+f.targetPropertyPath+'" @ '+(r.getInfoForObject(f.target).objectName||"<object>")+"(",f.target,")"):u.push('"'+f.bindingPropertyPath+'" @ '+(r.getInfoForObject(f.bindingOrigin).objectName||"<object>")+"(",f.bindingOrigin,")"),u.push("\n	            "))}var p=[];(function d(e,t){var n=e.changeListeners;for(var i in n){var s=n[i].listenerTarget,o=n[i].listenerFunctionName,u=r.getInfoForObject(s);u.objectName!=="PropertyChangeBindingListener"?(e.dependentDescriptorsIndex&&i in e.dependentDescriptorsIndex?p.push('"'+s.propertyPath+'" (',s,")","-> "):p.push(o?o:"<function>","@ "+u.objectName+" (",s,")"),d(s,!0),p.push("\n	               ")):t&&p.push('"'+s.bindingPropertyPath+'" @ '+r.getInfoForObject(s.bindingOrigin).objectName+"(",s.bindingOrigin,")")}})(e[t]),p.length>0&&(p.pop(),n.push("\n	is listened by "),n.push.apply(n,p)),u.length>0&&(u.pop(),n.push("\n	is bound to "),n.push.apply(n,u)),n.push("\n\n")}console.log.apply(console,n)}else console.log("No change listeners installed.")}})}})