var Montage=require("montage").Montage,Logger,loggers,consoleLog,consoleLogMontage,emptyLoggerFunction,getFunctionName,toTimeString,LoggerUI,localStorage;loggers=exports.loggers={},getFunctionName=function(){var e,n=getFunctionName.caller.caller;return e=n.name,""===e&&(e="anonymous"),e},toTimeString=function(e){if(e.getHours){var n=e.getHours(),s=e.getMinutes(),t=e.getSeconds();return(1===n.length?"0"+n:n)+":"+(1===s.length?"0"+s:s)+":"+(1===t.length?"0"+t:t)+"."+e.getMilliseconds()}},emptyLoggerFunction=function(){},consoleLog=function(){console.log(arguments)},consoleLogMontage=function(){var e=arguments[0],n=e._montage_metadata;new Date,n?([].shift.call(arguments),[].unshift.call(arguments,n.objectName+"."+getFunctionName(e)+"()"),this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)):this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)},Logger=exports.Logger=Montage.specialize({init:{value:function(e,n,s){if(this.name=e,this._onStateChange=n,this._storeState=!s,this._storeState&&localStorage){var t=localStorage.getItem("_montage_logger_"+e);t&&(this.isDebug="true"===t)}return n&&this._onStateChange("true"===t),this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var e,n,s=this.buffer;for(n=0;e=s[n];n++)console.debug.apply(console,e);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==emptyLoggerFunction},set:function(e){this.debug=e?consoleLogMontage:emptyLoggerFunction}},isError:{get:function(){return this.error!==emptyLoggerFunction},set:function(e){this.error=e?consoleLogMontage:emptyLoggerFunction}},debug:{value:emptyLoggerFunction},error:{value:emptyLoggerFunction},toTimeString:{value:toTimeString},_storeState:{value:null},_onStateChange:{value:null}}),exports.logger=function(e,n,s){var t;return null==(t=loggers[e])&&(t=(new Logger).init(e,n,s),Montage.defineProperty(loggers,e,{value:t})),t},LoggerUI=Montage.specialize({init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(e){17==e.which&&(this.isCtrl=!1),18==e.which&&(this.isAlt=!1)}},keydown:{value:function(e){return 17==e.which&&(this.isCtrl=!0),18==e.which&&(this.isAlt=!0),76==e.which&&this.isCtrl===!0&&this.isAlt===!0?(this.shown?this.hideInspector():this.showInspector(),!1):void 0}},change:{value:function(e){var n=e.target.checked,s=e.target.value,t=loggers[s];t.isDebug=n,t._onStateChange&&t._onStateChange(n),t._storeState&&localStorage&&localStorage.setItem("_montage_logger_"+s,n)}},mouseup:{value:function(){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var e,n,s,t,a,o,i,r,l,p,c,d=0;for(this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",n=document.createElement("div"),this.inspectorElement.appendChild(n),t=document.createElement("div"),n.appendChild(t),s=document.createElement("h1"),s.className="_montage_logger_inspector-title",s.textContent="Logger Inspector",this.titleHeader=s,t.appendChild(s),l=Object.keys(loggers),d=0;e=loggers[l[d]];d++)a=document.createElement("label"),o=document.createElement("input"),c=document.createElement("span"),a.className="_montage_logger_inspector-content",c.textContent=e.name,a.appendChild(o),a.appendChild(c),o.value=e.name,o.type="checkbox",o.checked=!!e.isDebug,r="_montage_logger_"+e.name,e._storeState&&localStorage&&(i=localStorage.getItem(r),null==i&&localStorage.setItem(r,e.isDebug)),t.appendChild(a);p=document.createElement("style");var h="#_montage_logger_inspector {";h+="    border: 1px solid rgba(15,15,15,0.4);",h+="    position: fixed;",h+="    right: 25px;",h+="    top: 25px;",h+="    -webkit-border-radius: 5px;",h+="    color: #dddddd;",h+='    font: 10px "Lucida Grande","Lucida Sans", sans;',h+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",h+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",h+="    width: 250px;",h+="}",h+="#_montage_logger_inspector div {",h+="    -webkit-border-radius: 5px;",h+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",h+="}",h+="#_montage_logger_inspector div div {",h+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",h+="    padding: 7px 10px;",h+="    -webkit-border-radius: 3px;",h+="    overflow-x: hidden;",h+="}",h+="._montage_logger_inspector-title {",h+="    color: rgba(255,255,255,0.9);",h+="    font-size: 13px;",h+="    margin: 0 0 11px 0;",h+="    padding: 0 0 0 5px;",h+="}",h+="._montage_logger_inspector-content {",h+="    padding: 0 0 0 20px;",h+="    margin: 0;",h+="    display: block;",h+="}",p.textContent=h,document.head.appendChild(p)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(e){this[e.type]&&this[e.type](e)}}});var setupUI=function(){(new LoggerUI).init()};"undefined"!=typeof window&&(localStorage=window.localStorage,window.loggers=loggers,window.localStorage&&setupUI());