montageDefine("1b6c26a","ui/substitution.reel/substitution",{dependencies:["montage","ui/component","ui/slot.reel","core/promise","core/logger"],factory:function(e,n){var t=(e("montage").Montage,e("ui/component").Component,e("ui/slot.reel").Slot),a=e("core/promise").Promise;e("core/logger").logger("substitution"),n.Substitution=t.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this._switchElements=Object.create(null),this._switchComponentTreeLoaded=Object.create(null)}},_allChildComponents:{value:null},deserializedFromTemplate:{value:function(){this._allChildComponents=this.childComponents.slice(0),this.switchValue&&this._loadSwitchComponentTree(this.switchValue)}},_switchElements:{value:null},_switchComponentTreeLoaded:{value:null},addSwitchElement:{value:function(e,n){if(n.parentNode)throw Error("Can't handle elements inside the DOM.");this._switchElements[e]=n,this._findFringeComponents(n,this._allChildComponents)}},_findFringeComponents:{value:function(e,n){var t;if(n=n||[],e.component)n.push(e.component);else{t=e.children;for(var a,s=0;a=t[s];s++)this._findFringeComponents(a,n)}return n}},_drawnSwitchValue:{value:null},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){this._switchValue===e||this._isSwitchingContent||(this._switchValue=e,this._firstDraw||this.isDeserializing||this._loadContent(e))}},enterDocument:{value:function(e){var n;if(t.enterDocument.apply(this,arguments),e){n=this.getDomArgumentNames();for(var a,s=0;a=n[s];s++)this._switchElements[a]=this.extractDomArgument(a);this._loadContent(this.switchValue),this._updateComponentDom()}}},_loadContent:{value:function(e){this.content=e===this._drawnSwitchValue?this.element.children[0]:this._switchElements[e]||null,this._switchComponentTreeLoaded[e]||this._loadSwitchComponentTree(e)}},contentDidChange:{value:function(e,n){this._drawnSwitchValue&&(this._switchElements[this._drawnSwitchValue]=n),this._drawnSwitchValue=this._switchValue}},_loadSwitchComponentTree:{value:function(e){var n,t,s=this,i=this._allChildComponents,o=this._switchElements[e],r=this.element,l=this.canDrawGate,p=[];o||(o=this._getDomArgument(r,e));for(var c=0;i.length>c;c++){for(n=i[c],t=n.element;t!==o&&t!==r&&t.parentNode;)t=t.parentNode;t===o&&p.push(n.loadComponentTree())}p.length>0?(l.setField(e+"ComponentTreeLoaded",!1),a.all(p).then(function(){s._switchComponentTreeLoaded[e]=!0,l.setField(e+"ComponentTreeLoaded",!0),s._canDraw=!0,s.needsDraw=!0}).done()):(this._switchComponentTreeLoaded[e]=!0,this.needsDraw=!0)}},shouldLoadComponentTree:{value:!1},transition:{value:null}})}});