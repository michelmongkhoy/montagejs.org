montageDefine("1b6c26a","core/meta/event-blueprint",{dependencies:["montage","core/logger"],factory:function(e,n){"use strict";var t=e("montage").Montage;e("core/logger").logger("blueprint");var s={name:"default",detailKeys:[],detailValueTypes:[],helpKey:""};n.EventBlueprint=t.specialize({constructor:{value:function(){this.super()}},initWithNameAndBlueprint:{value:function(e,n){return this._name=null!==e?e:s.name,this._owner=n,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this._owner,"reference"),this.detailKeys.length>0&&this._setPropertyWithDefaults(e,"detailKeys",this.detailKeys),this._setPropertyWithDefaults(e,"helpKey",this.helpKey)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this.detailKeys=this._getPropertyWithDefaults(e,"detailKeys"),this.helpKey=this._getPropertyWithDefaults(e,"helpKey")}},_setPropertyWithDefaults:{value:function(e,n,t){t!=s[n]&&e.setProperty(n,t)}},_getPropertyWithDefaults:{value:function(e,n){var t=e.getProperty(n);return t?t:s[n]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},_detailKeys:{value:null},detailKeys:{get:function(){return this._detailKeys?this._detailKeys:[]},set:function(e){Array.isArray(e)&&(this._detailKeys=e)}},helpKey:{value:s.helpKey},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});