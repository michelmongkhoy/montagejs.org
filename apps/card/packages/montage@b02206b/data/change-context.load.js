montageDefine("b02206b","data/change-context",{dependencies:["montage","data/store","data/blueprint","data/object-property","collections/weak-map","collections/set","core/exception","core/promise","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/store").Store,s=e("data/blueprint").Blueprint,o=e("data/object-property").ObjectProperty,u=e("collections/weak-map"),a=e("collections/set"),f=e("core/exception").Exception,l=e("core/promise").Promise,c=e("core/logger").logger("change-context"),h=t.ChangeContext=r.create(i,{_inserted:{value:new a(50),serializable:!0,distinct:!0,enumerable:!1,writable:!1},_deleted:{value:new a(50),serializable:!0,distinct:!0,enumerable:!1,writable:!1},_modified:{value:new a(50),serializable:!0,distinct:!0,enumerable:!1,writable:!1},_objectMap:{value:new u,serializable:!0,enumerable:!1,writable:!1},inserted:{get:function(){return this._inserted}},deleted:{get:function(){return this._deleted}},modified:{get:function(){return this._modified}},objectForId:{value:function(e){return this._objectMap.has(e)?this._objectMap.get(e):null}},insert:{value:function(e){if(e===null)throw f.initWithMessageTargetAndMethod("Cannot insert a null object.",this,"insert");if(typeof e.context=="undefined"){var t=r.getInfoForObject(e),n=this.blueprintForPrototype(t.objectName,t.moduleId);if(n===null)throw f.create().initWithMessageTargetAndMethod("Cannot find blueprint for: "+t.objectName+" "+t.moduleId,this,"insert");o.manager.apply(Object.getPrototypeOf(e),n)}if(e.context===null)return e.context=this,this._inserted.add(e),this.initializeObject(e,this).then(function(e){return e.context._objectMap.set(e.objectId,e),l.resolve(e)});if(e.context!==this)throw f.initWithMessageTargetAndMethod("This instance is already inserted in another context.",this,"insert")}},"delete":{value:function(e){if(e===null)throw f.initWithMessageTargetAndMethod("Cannot delete a null object.",this,"delete");if(typeof e.context=="undefined"||e.context===null)return l.resolve(e);if(e.context!==this)throw f.initWithMessageTargetAndMethod("This instance is belongs to another context.",this,"delete");return this._inserted.has(e)?(this._inserted.delete(e),typeof e.context!="undefined"&&(e.context=null)):(this._modified.has(e)&&(this._modified.delete(e),e=this._revertValues(e)),this._deleted.add(e)),this._objectMap.delete(e.objectId),l.resolve(e)}},revert:{value:function(e){if(e===null)throw f.initWithMessageTargetAndMethod("Cannot revert a null object.",this,"revert");if(typeof e.context=="undefined")return l.resolve(e);if(e.context!==null){if(e.context!==this)throw f.initWithMessageTargetAndMethod("This instance is belongs to another context.",this,"revert");this._inserted.has(e)||this._modified.has(e)&&(this._modified.delete(e),e=this._revertValues(e))}else this._deleted.has(e)&&(this._deleted.delete(e),e.context=this,e=this._revertValues(e));return l.resolve(e)}},_revertValues:{value:function(e){return l.resolve(e)}},save:{value:function(){this.hasChanges()&&this.parent.saveChangesInContext(this)}},saveChangesInContext$Implementation:{value:function(e,t){e===this&&i.saveChangesInContext$Implementation.call(this,e,t);var n=e.inserted,r=e.deleted,s=e.modified,o=null,u=null;n.forEach(function(e){var t=e.objectId,n=this.objectForId(t);n==null})}},fulfillPropertyForInstance:{value:function(e,t){}},willModifyPropertyForInstance:{value:function(e,t,n){this._modified.add(t)}},query:{value:function(e){return l.resolve(this.parent.queryInContext(e,this))}},refresh:{value:function(e){return l.resolve(this.repledgeObject(e,this))}},hasChanges:{value:function(){return this._inserted.length>0||this._modified.length>0||this._deleted.length>0}}})}})