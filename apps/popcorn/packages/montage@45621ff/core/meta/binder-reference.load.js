montageDefine("45621ff","core/meta/binder-reference",{dependencies:["montage","core/promise","core/meta/remote-reference","core/meta/binder","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/promise").Promise,s=e("core/meta/remote-reference").RemoteReference,o=e("core/meta/binder"),u=e("core/logger").logger("blueprint");t.BinderReference=s.create(s,{identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var n=e.binderName,r=e.binderModuleId,s=i.defer(),u=o.Binder.manager.binderForName(n);if(u)s.resolve(u);else try{s=o.Binder.getBinderWithModuleId(r,t)}catch(a){s.reject("Error cannot find Blueprint Binder "+r)}return s.promise}},referenceFromValue:{value:function(e){var t={};return t.binderName=e.name,t.binderModuleId=e.binderModuleId,t}}})}})