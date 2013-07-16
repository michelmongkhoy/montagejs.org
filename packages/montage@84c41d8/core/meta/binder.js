"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,Deserializer=require("core/serialization").Deserializer,BinderManager=require("core/meta/binder-manager").BinderManager,BlueprintModule=require("core/meta/blueprint"),logger=require("core/logger").logger("blueprint"),_binderManager=null,Binder=exports.Binder=Montage.specialize({constructor:{value:function Binder(){return this.super(),this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithNameAndRequire:{value:function(e,n){if(!e)throw Error("name is required");if(!n)throw Error("require is required");return this._name=e,this._require=n,Binder.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this.blueprints.length>0&&e.setProperty("blueprints",this.blueprints),e.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var n=e.getProperty("blueprints");n&&(this._blueprints=n),this.binderInstanceModuleId=e.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},_require:{value:null},require:{get:function(){return this._require}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},getBinderWithModuleId:{value:function(e,n){var t=Promise.defer();return n||(n=this.require),n.async(e).then(function(s){try{(new Deserializer).initWithObjectAndRequire(s,n,e).deserializeObject(function(n){n?(n.binderInstanceModuleId=e,Binder.manager.addBinder(this),t.resolve(n)):t.reject(Error("No Binder found "+e))},n)}catch(a){t.reject(Error("Error deserializing Binder "+e+" "+JSON.stringfy(a)))}},t.reject),t.promise}},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(e){if(null!==e){var n=this.blueprints.indexOf(e);if(0>n){null!==e.binder&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var t=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[t]=e}}return e}},removeBlueprint:{value:function(e){if(null!==e){var n=this.blueprints.indexOf(e);if(n>=0){this.blueprints.splice(n,1),e.binder=null;var t=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[t]}}return e}},addBlueprintNamed:{value:function(e,n){return this.addBlueprint((new BlueprintModule.Blueprint).initWithNameAndModuleId(e,n))}},blueprintForPrototype:{value:function(e,n){var t=n+"."+e,s=this._blueprintForPrototypeTable[t];if(s===void 0){var a,r;for(r=0;(a=this.blueprints[r])!==void 0;r++)if(a.prototypeName===e&&a.moduleId===n){s=a;break}this._blueprintForPrototypeTable[t]=s}return s}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=Binder.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor},{manager:{get:function(){return null===_binderManager&&(_binderManager=new BinderManager),_binderManager}}});