montageDefine("b02206b","core/logger",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i,s,o,u,a,f,l,c,h;s=t.loggers={},f=function(e){var t=f.caller.caller,n;return n=t.name,n===""&&(n="anonymous"),n},l=function(e){if(e.getHours){var t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();return(t.length===1?"0"+t:t)+":"+(n.length===1?"0"+n:n)+":"+(r.length===1?"0"+r:r)+"."+e.getMilliseconds()}},a=function(){},o=function(){console.log(arguments)},u=function(){var e=arguments[0],t=e._montage_metadata,n=new Date;t?([].shift.call(arguments),[].unshift.call(arguments,t.objectName+"."+f(e)+"()"),this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)):this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)},i=t.Logger=r.create(r,{init:{value:function(e,t){this.name=e,this._storeState=!t;if(this._storeState&&h){var n=h.getItem("_montage_logger_"+e);n&&(this.isDebug=n==="true")}return this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var e=this.buffer,t,n;for(n=0;t=e[n];n++)console.debug.apply(console,t);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==a},set:function(e){e?this.debug=u:this.debug=a}},isError:{get:function(){return this.error!==a},set:function(e){e?this.error=u:this.error=a}},debug:{value:a},error:{value:a},toTimeString:{value:l},_storeState:{value:null}}),t.logger=function(e,t){var n;return(n=s[e])==null&&(n=r.create(i).init(e,t),r.defineProperty(s,e,{value:n})),n},c=r.create(r,{init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(e){e.which==17&&(this.isCtrl=!1),e.which==18&&(this.isAlt=!1)}},keydown:{value:function(e){e.which==17&&(this.isCtrl=!0),e.which==18&&(this.isAlt=!0);if(e.which==76&&this.isCtrl===!0&&this.isAlt===!0)return this.shown?this.hideInspector():this.showInspector(),!1}},change:{value:function(e){var t=e.target.checked,n=e.target.value,r=s[n];r.isDebug=t,r._storeState&&h&&h.setItem("_montage_logger_"+n,t)}},mouseup:{value:function(e){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var e=0,t,n,r,i,o,u,a,f,l,c,p;this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",n=document.createElement("div"),this.inspectorElement.appendChild(n),i=document.createElement("div"),n.appendChild(i),r=document.createElement("h1"),r.className="_montage_logger_inspector-title",r.textContent="Logger Inspector",this.titleHeader=r,i.appendChild(r),l=Object.keys(s);for(e=0;t=s[l[e]];e++)o=document.createElement("label"),u=document.createElement("input"),p=document.createElement("span"),o.className="_montage_logger_inspector-content",p.textContent=t.name,o.appendChild(u),o.appendChild(p),u.value=t.name,u.type="checkbox",u.checked=!!t.isDebug,f="_montage_logger_"+t.name,t._storeState&&h&&(a=h.getItem(f),a==null&&h.setItem(f,t.isDebug)),i.appendChild(o);c=document.createElement("style");var d="#_montage_logger_inspector {";d+="    border: 1px solid rgba(15,15,15,0.4);",d+="    position: fixed;",d+="    right: 25px;",d+="    top: 25px;",d+="    -webkit-border-radius: 5px;",d+="    color: #dddddd;",d+='    font: 10px "Lucida Grande","Lucida Sans", sans;',d+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",d+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",d+="    width: 250px;",d+="}",d+="#_montage_logger_inspector div {",d+="    -webkit-border-radius: 5px;",d+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",d+="}",d+="#_montage_logger_inspector div div {",d+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",d+="    padding: 7px 10px;",d+="    -webkit-border-radius: 3px;",d+="    overflow-x: hidden;",d+="}",d+="._montage_logger_inspector-title {",d+="    color: rgba(255,255,255,0.9);",d+="    font-size: 13px;",d+="    margin: 0 0 11px 0;",d+="    padding: 0 0 0 5px;",d+="}",d+="._montage_logger_inspector-content {",d+="    padding: 0 0 0 20px;",d+="    margin: 0;",d+="    display: block;",d+="}",c.textContent=d,document.head.appendChild(c)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(e){this[e.type]&&this[e.type](e)}}});var p=function(){c.create().init()};typeof window!="undefined"&&(h=window.localStorage,window.loggers=s,window.localStorage&&p())}})