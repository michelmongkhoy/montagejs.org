var Montage=require("montage").Montage,Component=require("ui/component").Component,Slot=require("ui/slot.reel").Slot,Promise=require("core/promise").Promise,logger=require("core/logger").logger("substitution");exports.Substitution=Slot.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this._switchElements=Object.create(null),this._switchComponentTreeLoaded=Object.create(null)}},_allChildComponents:{value:null},deserializedFromTemplate:{value:function(){this._allChildComponents=this.childComponents.slice(0),this.switchValue&&this._loadSwitchComponentTree(this.switchValue)}},_switchElements:{value:null},_switchComponentTreeLoaded:{value:null},addSwitchElement:{value:function(e,t){if(t.parentNode)throw Error("Can't handle elements inside the DOM.");this._switchElements[e]=t,this._findFringeComponents(t,this._allChildComponents)}},_findFringeComponents:{value:function(e,t){var n;if(t=t||[],e.component)t.push(e.component);else{n=e.children;for(var i,r=0;i=n[r];r++)this._findFringeComponents(i,t)}return t}},_drawnSwitchValue:{value:null},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){this._switchValue===e||this._isSwitchingContent||(this._switchValue=e,this._firstDraw||this.isDeserializing||this._loadContent(e))}},enterDocument:{value:function(e){var t;if(Slot.enterDocument.apply(this,arguments),e){t=this.getDomArgumentNames();for(var n,i=0;n=t[i];i++)this._switchElements[n]=this.extractDomArgument(n);this._loadContent(this.switchValue),this._updateComponentDom()}}},_loadContent:{value:function(e){this.content=e===this._drawnSwitchValue?this.element.children[0]:this._switchElements[e]||null,this._switchComponentTreeLoaded[e]||this._loadSwitchComponentTree(e)}},contentDidChange:{value:function(e,t){this._drawnSwitchValue&&(this._switchElements[this._drawnSwitchValue]=t),this._drawnSwitchValue=this._switchValue}},_loadSwitchComponentTree:{value:function(e){var t,n,i=this,r=this._allChildComponents,a=this._switchElements[e],o=this.element,s=this.canDrawGate,l=[];a||(a=this._getDomArgument(o,e));for(var u=0;r.length>u;u++){for(t=r[u],n=t.element;n!==a&&n!==o&&n.parentNode;)n=n.parentNode;n===a&&l.push(t.loadComponentTree())}l.length>0?(s.setField(e+"ComponentTreeLoaded",!1),Promise.all(l).then(function(){i._switchComponentTreeLoaded[e]=!0,s.setField(e+"ComponentTreeLoaded",!0),i._canDraw=!0,i.needsDraw=!0}).done()):(this._switchComponentTreeLoaded[e]=!0,this.needsDraw=!0)}},shouldLoadComponentTree:{value:!1},transition:{value:null}});