montageDefine("1b6c26a","core/converter/converter",{dependencies:["montage"],factory:function(e,n){var t=e("montage").Montage,s="[object Number]",a=Object.prototype.toString,o=function(e){return a.call(e)===s};n.isNumber=o;var i=function(e){return e&&e!==void 0};n.isDef=i,n.Validator=t.specialize({validate:{value:null}}),n.Converter=t.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});