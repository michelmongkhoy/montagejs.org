var Montage=require("montage").Montage,ObjectController=exports.ObjectController=Montage.specialize({objectPrototype:{enumerable:!1,value:null},newObject:{enumerable:!1,value:function(){return new this.objectPrototype}},initWithContent:{value:function(e){return this.content=e,this}},content:{enumerable:!1,value:null},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor});