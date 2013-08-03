function getAttributeProperties(e,t){var n=UNDERSCORE+t+ATTRIBUTE_PROPERTIES;return e.hasOwnProperty(n)?e[n]:Object.defineProperty(e,n,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(getAttributeProperties(Object.getPrototypeOf(e),t))})[n]}require("collections/shim"),require("core/shim/object"),require("core/shim/array"),require("core/shim/string"),require("core/extras/object"),require("core/extras/date"),require("core/extras/element"),require("core/extras/function"),require("core/extras/regexp"),require("core/extras/string");var ATTRIBUTE_PROPERTIES="AttributeProperties",UNDERSCORE="_",PROTO="__proto__",VALUE="value",ENUMERABLE="enumerable",DISTINCT="distinct",SERIALIZABLE="serializable",MODIFY="modify",Array_prototype=Array.prototype,Object_prototype=Object.prototype,CONSTRUCTOR_COMPATIBILITY=!0,Montage=exports.Montage=function Montage(){};Montage.deprecate=function(e,t,n,i){var r=function(){var r=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(i?console.warn(n+" is deprecated, use "+i+" instead.",Error("").stack):console.warn(n,Error("").stack)),Error.stackTraceLimit=r,t.apply(e?e:this,arguments)};return r.deprecatedFunction=t,r},Montage.callDeprecatedFunction=function(e,t,n,i){var r,a,s=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(r=Montage.getInfoForObject(e).objectName,i?console.warn(n+" is deprecated, use "+i+" instead.",r):console.warn(n,r)),Error.stackTraceLimit=s,a=Array_prototype.slice.call(arguments,4),t.apply(e?e:this,a)};var PROTO_IS_SUPPORTED={}.__proto__===Object.prototype,PROTO_PROPERTIES_BLACKLIST={_montage_metadata:1,__state__:1},FUNCTION_PROPERTIES=Object.getOwnPropertyNames(Function);if(Object.defineProperty(Montage,"specialize",{value:function(e,t){var n,i,r,a,s,o,u,l=this,c=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?Montage.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return l.apply(this,arguments)||this},PROTO_IS_SUPPORTED)n.__proto__=l;else{r=Object.getOwnPropertyNames(l);for(var o=0;r.length>o;o++)a=r[o],PROTO_PROPERTIES_BLACKLIST.hasOwnProperty(a)||(s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(n,a,Object.getOwnPropertyDescriptor(l,a)));n.__constructorProto__=l,Montage.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(i=Object.create(this.prototype),c){for(r=Object.getOwnPropertyNames(Montage),o=0;r.length>o;o++)a=r[o],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(n,a,Object.getOwnPropertyDescriptor(Montage,a));for(r=Object.getOwnPropertyNames(Montage.prototype),o=0;r.length>o;o++)a=r[o],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(i,a,Object.getOwnPropertyDescriptor(Montage.prototype,a))}if(Montage.defineProperties(i,e),CONSTRUCTOR_COMPATIBILITY){u=function(e,t,n){function i(){return this===t&&console.warn("Deprecated - "+Montage.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties"),e.apply(this,arguments)}return i.deprecatedFunction=e,i};for(a in e)FUNCTION_PROPERTIES.has(a)?delete e[a]:(s=e[a],s.value&&"function"==typeof s.value&&!s.value.__isConstructor__?s.value=u(s.value,n,a):(s.get&&(s.get=u(s.get,n,a)),s.set&&(s.set=u(s.set,n,a))));Montage.defineProperties(n,e),Montage.defineProperty(n,"create",{value:function(){return new n},enumerable:!1}),i.hasOwnProperty("didCreate")||Montage.defineProperty(i,"didCreate",{value:n,enumerable:!1}),n.hasOwnProperty("didCreate")||Montage.defineProperty(n,"didCreate",{value:n,enumerable:!1})}return Montage.defineProperties(n,t),Montage.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),n.prototype=i,Montage.defineProperty(i,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!PROTO_IS_SUPPORTED){var originalGetPrototypeOf=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:originalGetPrototypeOf.apply(Object,arguments)}}Object.defineProperty(Montage,"create",{configurable:!0,value:function(e,t){if(void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&Montage.defineProperties(n,t),n}});var extendedPropertyAttributes=[SERIALIZABLE];extendedPropertyAttributes.forEach(function(e){Object.defineProperty(Object.prototype,UNDERSCORE+e+ATTRIBUTE_PROPERTIES,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(Montage,"defineProperty",{value:function(e,t,n){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var i=VALUE in n;if(DISTINCT in n&&!i)throw"Cannot use distinct attribute on non-value property '"+t+"'";if(PROTO in n)n.__proto__=i?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;else{var r;r=i?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;for(var a in r)a in n||(n[a]=r[a])}return n.hasOwnProperty(ENUMERABLE)||t.charAt(0)!==UNDERSCORE||(n.enumerable=!1),n.hasOwnProperty(SERIALIZABLE)||(n.enumerable?n.get&&!n.set?n.serializable=!1:n.writable===!1&&(n.serializable=!1):n.serializable=!1),SERIALIZABLE in n&&(getAttributeProperties(e,SERIALIZABLE)[t]=n.serializable),n.distinct!==!0||"object"!=typeof n.value?Object.defineProperty(e,t,n):(function(e,t,n,i){var r=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===Object_prototype?0!==Object.keys(n).length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e={};for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===Array_prototype?0!==n.length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i,a;for(e=[],i=0;(a=n[i])!==void 0;i++)e[i]=a;this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e=new n.constructor;for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}})}(t,UNDERSCORE+t,n.value,e),void 0)}}),Object.defineProperty(Montage,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var _defaultAccessorProperty={enumerable:!0,configurable:!0,serializable:!0},_defaultObjectValueProperty={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},_defaultFunctionValueProperty={writable:!0,enumerable:!1,configurable:!0,serializable:!1};Montage.defineProperty(Montage,"didCreate",{value:Function.noop});var getSuper=function(e,t){for(var n,i,r,a,s,o,u,l;u===void 0&&null!==e;){for(n=Object.getOwnPropertyNames(e),a=0,s=n.length,a;s>a;a++)if(i=n[a],r=Object.getOwnPropertyDescriptor(e,i),null!=(o=r.value)){if(o===t||o.deprecatedFunction&&o.deprecatedFunction===t){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),i),u=l?l.value:null;break}}else if(null!=(o=r.get)){if(o===t||o.deprecatedFunction&&o.deprecatedFunction===t){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),i),u=l?l.get:null;break}}else if(null!=(o=r.set)&&(o===t||o.deprecatedFunction&&o.deprecatedFunction===t)){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),i),u=l?l.set:null;break}e=Object.getPrototypeOf(e)}return u},superImplementation=function(){var e=getSuper(this,superImplementation.caller);return"function"==typeof e?getSuper(this,superImplementation.caller).bind(this):Function.noop};Montage.defineProperty(Montage,"super",{get:superImplementation}),Montage.defineProperty(Montage.prototype,"super",{get:superImplementation}),Montage.defineProperty(Montage,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var i in n)n[i]&&t.push(i);return t}}),Montage.defineProperty(Montage,"getPropertyAttribute",{value:function(e,t,n){var i=UNDERSCORE+n+ATTRIBUTE_PROPERTIES,r=e[i];return r?r[t]:void 0}}),Montage.defineProperty(Montage,"getPropertyAttributes",{value:function(e,t){var n={},i=UNDERSCORE+t+ATTRIBUTE_PROPERTIES,r=e[i];if(r){for(var a in r)n[a]=r[a];return n}}});var _instanceMetadataDescriptor={isInstance:{value:!0}},_functionInstanceMetadataDescriptor={objectName:{value:"Function"},isInstance:{value:!0}};Montage.defineProperty(Montage,"getInfoForObject",{value:function(e){var t,n;if(hasOwnProperty.call(e,"_montage_metadata"))return e._montage_metadata;t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?_functionInstanceMetadataDescriptor:_instanceMetadataDescriptor;try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(i){return e._montage_metadata=Object.create(t,n)}}});var UUID=require("core/uuid"),hasOwnProperty=Object.prototype.hasOwnProperty,uuidGetGenerator=function(){var e=UUID.generate(),t=Montage.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:uuidGetGenerator.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&VALUE in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&PROTO in this||(this._uuid=e))}catch(n){this._uuid=e}return e},defaultUuidGet=function defaultUuidGet(){return hasOwnProperty.call(this,"_uuid")?this._uuid:uuidGetGenerator.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:defaultUuidGet,set:function(){}}),Montage.defineProperty(Montage,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),Montage.defineProperty(Montage,"equals",{value:Montage.prototype.equals}),Montage.defineProperty(Montage.prototype,"callDelegateMethod",{value:function(e){var t,n,i=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),i&&"function"==typeof(n=i[t]))?(Array_prototype.shift.call(arguments),n.apply(i,arguments)):i&&"function"==typeof(n=i[e])?(Array_prototype.shift.call(arguments),n.apply(i,arguments)):void 0}});var PropertyChanges=require("collections/listen/property-changes");Object.addEach(Montage,PropertyChanges.prototype),Object.addEach(Montage.prototype,PropertyChanges.prototype),require("core/bindings"),require("core/paths"),require("core/serialization/bindings"),exports._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,i=n.lastIndexOf("/"),r=n.lastIndexOf(".");i=-1===i?0:i+1,r=-1===r?n.length:r,r=i>r?n.length:r,Montage.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,r)+".meta"})}return t._blueprintModuleId}},exports._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprint")||!t._blueprint){var n=t.blueprintModuleId;if(""===n)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(t)+"'");exports._blueprintDescriptor.BlueprintModulePromise||(exports._blueprintDescriptor.BlueprintModulePromise=require.async("core/meta/blueprint").get("Blueprint")),Montage.defineProperty(t,"_blueprint",{enumerable:!1,value:exports._blueprintDescriptor.BlueprintModulePromise.then(function(e){var i=Montage.getInfoForObject(t);return e.getBlueprintWithModuleId(n,i.require).fail(function(){var i=e.createDefaultBlueprintForObject(t);return i.blueprintInstanceModuleId=n,i})})})}return t._blueprint},set:function(e){var t,n=Montage.getInfoForObject(this),i=n&&!n.isInstance?this:this.constructor;if(null===e)t=null;else{if("function"==typeof e.then)throw new TypeError("Object blueprint should not be a promise '"+JSON.stringify(e)+"'");e.blueprintInstanceModuleId=i.blueprintModuleId,t=require("core/promise").Promise.resolve(e)}Montage.defineProperty(i,"_blueprint",{enumerable:!1,value:t})}};