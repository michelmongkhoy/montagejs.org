montageDefine("1b6c26a","core/meta/binder",{dependencies:["montage","core/promise","core/serialization","core/meta/binder-manager","core/meta/blueprint","core/logger"],factory:function(e,n){"use strict";var t=e("montage").Montage,s=e("core/promise").Promise,a=e("core/serialization").Deserializer,r=e("core/meta/binder-manager").BinderManager,o=e("core/meta/blueprint");e("core/logger").logger("blueprint");var i=null,l=n.Binder=t.specialize({constructor:{value:function l(){return this.super(),this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithNameAndRequire:{value:function(e,n){if(!e)throw Error("name is required");if(!n)throw Error("require is required");return this._name=e,this._require=n,l.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this.blueprints.length>0&&e.setProperty("blueprints",this.blueprints),e.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var n=e.getProperty("blueprints");n&&(this._blueprints=n),this.binderInstanceModuleId=e.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},_require:{value:null},require:{get:function(){return this._require}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},getBinderWithModuleId:{value:function(e,n){var t=s.defer();return n||(n=this.require),n.async(e).then(function(s){try{(new a).initWithObjectAndRequire(s,n,e).deserializeObject(function(n){n?(n.binderInstanceModuleId=e,l.manager.addBinder(this),t.resolve(n)):t.reject(Error("No Binder found "+e))},n)}catch(r){t.reject(Error("Error deserializing Binder "+e+" "+JSON.stringfy(r)))}},t.reject),t.promise}},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(e){if(null!==e){var n=this.blueprints.indexOf(e);if(0>n){null!==e.binder&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var t=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[t]=e}}return e}},removeBlueprint:{value:function(e){if(null!==e){var n=this.blueprints.indexOf(e);if(n>=0){this.blueprints.splice(n,1),e.binder=null;var t=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[t]}}return e}},addBlueprintNamed:{value:function(e,n){return this.addBlueprint((new o.Blueprint).initWithNameAndModuleId(e,n))}},blueprintForPrototype:{value:function(e,n){var t=n+"."+e,s=this._blueprintForPrototypeTable[t];if(s===void 0){var a,r;for(r=0;(a=this.blueprints[r])!==void 0;r++)if(a.prototypeName===e&&a.moduleId===n){s=a;break}this._blueprintForPrototypeTable[t]=s}return s}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=l.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor},{manager:{get:function(){return null===i&&(i=new r),i}}})}});