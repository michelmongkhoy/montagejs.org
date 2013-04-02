montageDefine("45621ff","ui/controller/array-controller",{dependencies:["montage","ui/controller/object-controller","core/change-notification","ui/controller/array-controller"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/controller/object-controller").ObjectController,s=e("core/change-notification").ChangeNotification,o=t.ArrayController=r.create(i,{didCreate:{value:function(){var e=this;this.addPropertyChangeListener("selections",function(){var t=[];e._selections.forEach(function(e,n){e&&t.push(n)}),e.selectedIndexes=t}),this.addPropertyChangeListener("content",function(){e.selectedObjects=null,e.automaticallyOrganizeObjects&&e.organizeObjects()})}},_content:{value:null},content:{get:function(){return this._content},set:function(e){if(this._content===e)return;this._content=e}},delegate:{value:null},_organizedObjects:{distinct:!0,value:[]},organizedObjects:{get:function(){return this._organizedObjects}},automaticallyOrganizeObjects:{value:!0},_sortFunction:{value:null},sortFunction:{get:function(){return this._sortFunction},set:function(e){if(this._sortFunction===e)return;this._sortFunction=e,this.automaticallyOrganizeObjects&&this.organizeObjects()}},_filterFunction:{value:null},filterFunction:{get:function(){return this._filterFunction},set:function(e){if(this._filterFunction===e)return;this._filterFunction=e,this.automaticallyOrganizeObjects&&this.organizeObjects()}},_startIndex:{value:null},startIndex:{get:function(){return this._startIndex},set:function(e){if(this._startIndex===e)return;this._startIndex=e,this.automaticallyOrganizeObjects&&this.organizeObjects()}},_endIndex:{enumerable:!1,value:null},endIndex:{get:function(){return this._endIndex},set:function(e){if(this._endIndex===e)return;this._endIndex=e,this.automaticallyOrganizeObjects&&this.organizeObjects()}},_organizedObjectsIndexes:{value:null},_rangedOrganizedObjectsIndexes:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes?this._selectedIndexes:this.selectedContentIndexes?this._selectedIndexes=this._convertIndexesFromContentToOrganized(this.selectedContentIndexes):null},set:function(e){if(this.selectedIndexes!==e){var t=e?this._convertIndexesFromOrganizedToContent(e):null,n=null;if(this.delegate&&typeof this.delegate.shouldChangeSelection=="function"){t&&(n=this.content.filter(function(e,n){return t.indexOf(n)>=0},this));if(this.delegate.shouldChangeSelection(this,n,this._selectedObjects)===!1)return}this.dispatchPropertyChange("selections","selectedContentIndexes","selectedObjects",function(){this._selectedIndexes=e,this._selectedContentIndexes=t,this._selectedObjects=null,this._selections=null})}}},_convertIndexesFromOrganizedToContent:{value:function(e){var t,n=[],r,i=e.length,s,o;r=this._rangedOrganizedObjectsIndexes?this._rangedOrganizedObjectsIndexes:this._organizedObjectsIndexes;if(r){o=r.length;for(t=0;t<i;t++)s=e[t],s<o&&s>=0&&(n[n.length]=r[s])}else for(t=0;t<i;t++)n[n.length]=e[t]+this.startIndex;return n.sort()}},_convertIndexesFromContentToOrganized:{value:function(e){var t,n=[],r,i=e.length,s;r=this._rangedOrganizedObjectsIndexes?this._rangedOrganizedObjectsIndexes:this._organizedObjectsIndexes;if(r)for(t=0;t<i;t++)s=e[t],s>=0&&(s=r.indexOf(s),s!==-1&&(n[n.length]=s));else for(t=0;t<i;t++)s=e[t]-this.startIndex,s>-1&&(this.endIndex==null||s<this.endIndex)&&(n[n.length]=s);return n.sort()}},organizeObjects:{value:function(){var e=this.content,t=this.filterFunction,n=this.sortFunction,r=0,i=0,s,o,u,a;e&&typeof t=="function"&&(s=[],e=e.filter(function(n){var o=t.call(this,n);return o&&(s[i]=r,i++),r++,o},this));if(typeof n=="function"){o=[],u=[],r=0;for(r=0;a=e[r];r++)a!==null&&typeof a=="object"?(a._montage_array_controller_index=r,u[r]=a):u[r]={_montage_array_controller_index:r,_montage_array_controller_value:a};u=u.sort(function(t,r){return t._montage_array_controller_value&&(t=t._montage_array_controller_value),r._montage_array_controller_value&&(r=r._montage_array_controller_value),n.call(this,t,r)}),e=[];for(r=0;a=u[r];r++)i=a._montage_array_controller_index,o[r]=s?s[i]:i,a._montage_array_controller_value?e[r]=a._montage_array_controller_value:(e[r]=a,delete a._montage_array_controller_index);this._organizedObjectsIndexes=o}else this._organizedObjectsIndexes=s;this._applyRangeIfNeeded(e)}},_applyRangeIfNeeded:{value:function(e){var t=this.startIndex,n=this.endIndex;e&&(typeof t=="number"||typeof n=="number")&&(t=typeof t=="number"&&t>=0?t:0,n=typeof n=="number"&&n<e.length?n:e.length,e=e.slice(t,n),this._organizedObjectsIndexes?this._rangedOrganizedObjectsIndexes=this._organizedObjectsIndexes.slice(t,n):this._rangedOrganizedObjectsIndexes=null),this.dispatchPropertyChange("organizedObjects",function(){this._organizedObjects=e?e:[]})}},_selectedObjects:{value:null},selectedObjects:{get:function(){return this._selectedObjects?this._selectedObjects:this._selectedContentIndexes?(this.content&&(this._selectedObjects=this.content.filter(function(e,t){return this._selectedContentIndexes.indexOf(t)>=0},this)),this._selectedObjects):null},set:function(e){e===null||typeof e=="undefined"?e=null:Array.isArray(e)||(e=[e]);if(this.selectedObjects===e)return;if(this.delegate&&typeof this.delegate.shouldChangeSelection=="function"&&this.delegate.shouldChangeSelection(this,e,this._selectedObjects)===!1)return;this.dispatchPropertyChange("selections","selectedContentIndexes","selectedIndexes",function(){this._selectedObjects=e,this._selectedContentIndexes=null,this._selectedIndexes=null,this._selections=null})}},_selectedContentIndexes:{value:null},selectedContentIndexes:{get:function(){if(this._selectedContentIndexes)return this._selectedContentIndexes;if(!this._selectedObjects)return null;this._selectedContentIndexes=[];var e;return this._selectedObjects.forEach(function(t){(e=this.content.indexOf(t))!==-1&&this._selectedContentIndexes.push(e)},this),this._selectedContentIndexes},set:function(e){e===null||e===!1||typeof e=="undefined"?e=null:Array.isArray(e)||(e=[e]);if(this.selectedContentIndexes===e)return;if(this.delegate&&typeof this.delegate.shouldChangeSelection=="function"){var t=e,n=null;t&&(n=this.content.filter(function(e,n){return t.indexOf(n)>=0},this));if(this.delegate.shouldChangeSelection(this,n,this._selectedObjects)===!1)return}this._selectedContentIndexes=e,this.dispatchPropertyChange("selections","selectedIndexes","selectedObjects",function(){this._selectedIndexes=null,this._selectedObjects=null,this._selections=null})}},_selections:{value:null},selections:{get:function(){if(!this._selections){this._selections=new Array(this._organizedObjects.length);if(this.selectedIndexes){var e=this._selections,t=this.selectedIndexes,n=t.length,r,i;for(r=0;r<n;r++)i=t[r],i<e.length&&(e[i]=!0)}}return this._selections}},initWithContent:{value:function(e){return this.content=e,this}},selectObjectsOnAddition:{value:!1},clearFilterFunctionOnAddition:{value:!0},add:{value:function(){var e=this.newObject();this.content.push(e),this.selectObjectsOnAddition&&(this.selectedContentIndexes=[this.content.length-1]),this.clearFilterFunctionOnAddition&&(this.filterFunction=null),this.automaticallyOrganizeObjects&&this.organizeObjects()}},addObjects:{value:function(){var e=Array.prototype.slice.call(arguments),t,n=e.length,r,i,s=this.content;s?s.push.apply(s,e):this.content=s=e;if(this.selectObjectsOnAddition){r=[],i=s.length-n;for(t=0;t<n;t++)r[t]=i++;this.selectedContentIndexes=r,this.selectedObjects=e}this.clearFilterFunctionOnAddition&&(this.filterFunction=null),this.automaticallyOrganizeObjects&&this.organizeObjects()}},remove:{value:function(){var e;return this.selectedObjects&&this.selectedObjects.length>0&&(e=this.removeObjects.apply(this,this.selectedObjects),this.automaticallyOrganizeObjects&&this.organizeObjects()),e}},removeObjects:{value:function(){var e=Array.prototype.slice.call(arguments),t;return t=this.content.filter(function(t){return e.indexOf(t)<0}),this.content=t,this.automaticallyOrganizeObjects&&this.organizeObjects(),e}},removeObjectsAtSelectedIndexes:{value:function(){return this.removeObjectsAtIndexes(this.selectedIndexes)}},removeObjectsAtIndexes:{value:function(e){var t,n;return e&&e.length>0&&(t=[],n=this.content.filter(function(n,r){return e.indexOf(r)<0?!0:(t.push(n),!1)}),this.content=n,this.automaticallyOrganizeObjects&&this.organizeObjects()),t}}})}})