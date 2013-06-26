montageDefine("6d7a904","core/range-controller",{dependencies:["montage","core/promise","collections/generic-collection"],factory:function(e,n){var s=e("montage").Montage,t=e("core/promise").Promise,a=e("collections/generic-collection");n.RangeController=s.specialize({constructor:{value:function(){this.content=null,this._selection=[],this.selection=[],this.defineBinding("_selection.rangeContent()",{"<->":"selection.rangeContent()"}),this.sortPath=null,this.filterPath=null,this.visibleIndexes=null,this.reversed=!1,this.start=null,this.length=null,this.selectAddedContent=!1,this.deselectInvisibleContent=!1,this.clearSelectionOnOrderChange=!1,this.avoidsEmptySelection=!1,this.multiSelect=!1,this.organizedContent=[],this.organizedContent.addRangeChangeListener(this,"organizedContent"),this.defineBinding("_orderedContent",{"<-":"content.($filterPath.defined() ? filter{path($filterPath)} : ()).($sortPath.defined() ? sorted{path($sortPath)} : ()).($reversed ?? 0 ? reversed() : ())"}),this.defineBinding("organizedContent.rangeContent()",{"<-":"_orderedContent.($visibleIndexes.defined() ?$visibleIndexes.filter{<$_orderedContent.length}.map{$_orderedContent[()]} : ()).($start.defined() && $length.defined() ?view($start, $length) : ())"}),this._selection.addRangeChangeListener(this,"selection"),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addPathChangeListener("sortPath",this,"handleOrderChange"),this.addPathChangeListener("reversed",this,"handleOrderChange"),this.addOwnPropertyChangeListener("multiSelect",this),this.iterations=[]}},initWithContent:{value:function(e){return this.content=e,this}},sortPath:{value:null},reversed:{value:null},filterPath:{value:null},visibleIndexes:{value:null},start:{value:null},length:{value:null},selectAddedContent:{value:!1},deselectInvisibleContent:{value:!1},clearSelectionOnOrderChange:{value:!1},avoidsEmptySelection:{value:!1},multiSelect:{value:!1},_orderedContent:{value:null},organizedContent:{value:null},iterations:{value:null},selection:{value:null},_selection:{value:null},select:{value:function(e){!this.multiSelect&&this._selection.length>=1&&this._selection.clear(),this._selection.add(e)}},deselect:{value:function(e){(!this.avoidsEmptySelection||this._selection.length>1)&&this._selection["delete"](e)}},clearSelection:{value:function(){(!this.avoidsEmptySelection||this._selection.length>1)&&this._selection.clear()}},add:{value:function(e){var n;return this.content||(this.content=[]),n=this.content.add(e),n&&this.handleAdd(e),n}},push:{value:function(){for(var e=this.content.push.apply(this.content,arguments),n=0;arguments.length>n;n++)this.handleAdd(arguments[n]);return e}},pop:{value:function(){return this.content.pop()}},shift:{value:function(){return this.content.shift()}},unshift:{value:function(){for(var e=this.content.unshift.apply(this.content,arguments),n=0;arguments.length>n;n++)this.handleAdd(arguments[n]);return e}},splice:{value:function(){for(var e=this.content.splice.apply(this.content,arguments),n=2;arguments.length>n;n++)this.handleAdd(arguments[n]);return e}},swap:{value:function(e,n,s){for(var t=this.content.splice.apply(this.content,s),e=2;s.length>e;e++)this.handleAdd(s[e]);return t}},"delete":{value:function(e){return this.content["delete"](e)}},has:{value:function(e){return this.content?this.content.has(e):!1}},addEach:{value:a.prototype.addEach},deleteEach:{value:a.prototype.deleteEach},clear:{value:function(){this.content.clear()}},handleContentRangeChange:{value:function(e,n){n.deleteEach(e),this._selection.deleteEach(n)}},handleSelectionRangeChange:{value:function(e,n){var s=this;t.nextTick(function(){var t=s._selection.length;s.avoidsEmptySelection&&0===t?s.select(n[n.length-1]):!s.multiSelect&&t>1&&s._selection.splice(0,s._selection.length,e[e.length-1])})}},handleOrganizedContentRangeChange:{value:function(e,n){if(this.deselectInvisibleContent){var s=n.clone(1);s.deleteEach(e),this._selection.deleteEach(n)}}},handleOrderChange:{value:function(){this.clearSelectionOnOrderChange&&this._selection.clear()}},handleAdd:{value:function(e){this.selectAddedContent&&(!this.multiSelect&&this._selection.length>=1&&this._selection.clear(),this._selection.add(e))}},handleMultiSelectChange:{value:function(){var e=this._selection.length;!this.multiSelect&&e>1&&this._selection.splice(0,e-1)}},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});