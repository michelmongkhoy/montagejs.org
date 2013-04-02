function serialize(e,t){return Serializer.create().initWithRequire(t).serializeObject(e)}var Montage=require("montage").Montage,Uuid=require("core/uuid").Uuid,Deserializer=require("core/deserializer").Deserializer,logger=require("core/logger").logger("serializer"),Element;typeof window!="undefined"&&(Element=window.Element);var Serializer=Montage.create(Montage,{_INITIAL_LABEL_SEQUENCE_NUMBER:{value:2},_MONTAGE_ID_ATTRIBUTE:{value:"data-montage-id"},_serializedObjects:{value:Object.create(null)},_serializedReferences:{value:Object.create(null)},_externalObjects:{value:null},_externalElements:{value:null},_objectStack:{value:null},_objectReferences:{value:null},_objectNamesIndex:{value:null},_objectLabels:{value:null},_serializationUnits:{value:[]},_serializationUnitsIndex:{value:Object.create(null)},serializeNullValues:{value:!1},delegate:{value:null},defineSerializationUnit:{value:function(e,t){this._serializationUnits.push(this._serializationUnitsIndex[e]={name:e,funktion:t})}},initWithRequire:{value:function(e){return this._require=e,this}},serializeObject:{value:function(e){return this.serialize({root:e})}},serialize:{value:function(e){var t,n,r,i=this.serializeNullValues;this._serializedObjects=Object.create(null),this._serializedReferences=Object.create(null),this._externalObjects=Object.create(null),this._externalElements=[],this._objectNamesIndex=Object.create(null),this._objectLabels=Object.create(null),this._objectReferences=Object.create(null);for(r in e)e[r]!=null&&(this._objectLabels[e[r].uuid]=r),this._objectNamesIndex[r]=this._INITIAL_LABEL_SEQUENCE_NUMBER;for(r in e)if(e[r]!=null||i)n=this._serializeValue(e[r],null,2),r in this._serializedObjects||(this._serializedObjects[r]={value:n});return this._cleanupExternalObjects(),t=this._getSerialization(this._serializedObjects,this._externalObjects),this._require=require,this._serialization=t,t}},set:{value:function(t,n,r){var e=this._objectStack,i=e[e.length-1],s,o;i[t]=n,r==="reference"&&(o=i.uuid,s=this._objectReferences,o in s||(s[o]=Object.create(null)),s[o][t]=!0)}},setAll:{value:function(e){var t=this._objectStack.length-2,n=this._objectStack[t];e||(e=Montage.getSerializablePropertyNames(n));for(var r=0,i=e.length;r<i;r++){var s=e[r];this.set(s,n[s],Montage.getPropertyAttribute(n,s,"serializable"))}}},setProperty:{value:function(t,n,r){var e=this._objectStack,i=e[e.length-1],s,o;i.properties[t]=n,r==="reference"&&(s=this._objectReferences,o=i.properties.uuid,o in s||(s[o]=Object.create(null)),s[o][t]=!0)}},setProperties:{value:function(e){var t=this._objectStack.length-2,n=this._objectStack[t];e||(e=Montage.getSerializablePropertyNames(n));for(var r=0,i=e.length;r<i;r++){var s=e[r];this.setProperty(s,n[s],Montage.getPropertyAttribute(n,s,"serializable"))}}},setType:{value:function(e,t){if(e==="object"||e==="prototype"||e==="value"){var n=this._objectStack,r=n[n.length-1];delete r.prototype,delete r.object,delete r.value,r[e]=t}}},setUnit:{value:function(t){var e=this._objectStack,n=e[e.length-1];n._units.indexOf(t)===-1&&n._units.push(this._serializationUnitsIndex[t])}},setAllUnits:{value:function(){var e=this._objectStack,t=e[e.length-1];t._units.length=0,t._units.push.apply(t._units,this._serializationUnits)}},addObject:{value:function(e){var t=this._serializeValue(e,null,2),n=this._getObjectLabel(e);n in this._serializedObjects||(this._serializedObjects[n]={value:t})}},addObjectReference:{value:function(e){var t=this._getObjectLabel(e);return this._serializedObjects[t]||(this._externalObjects[t]=e),{"@":t}}},getObjectLabel:{value:function(e){return this._getObjectLabel(e)}},_pushContextObject:{value:function(e){this._objectStack===null?this._objectStack=[e]:this._objectStack.push(e)}},_popContextObject:{value:function(){return this._objectStack.pop()}},_peekContextObject:{value:function(){return this._objectStack[this._objectStack.length-1]}},getExternalObjects:{value:function(){return this._externalObjects}},_cleanupExternalObjects:{value:function(){var e=this._externalObjects,t=this._serializedObjects;for(var n in e){var r=e[n];t[n]&&delete e[n]}}},getExternalElements:{value:function(){return this._externalElements}},_getSerialization:{value:function(e,t){var n=[],r,i="",s;for(var o in e){s=e[o],r=[],"prototype"in s?(r.push('"prototype":'+s.prototype),delete s.prototype):"object"in s&&(r.push('"object":'+s.object),delete s.object);for(var u in s)r.push('"'+u+'":'+s[u]);n.push('"'+o+'":{\n    '+r.join(",\n    ")+"}")}for(var o in t)n.push('"'+o+'":{}');return n.length>0&&(i="{\n  "+n.join(",\n\n  ")+"\n}"),i}},_getObjectLabel:{value:function(e){var t=e.uuid,n=this._objectLabels[t];return n||(this._objectLabels[t]=n=this._generateLabelForObject(e)),n}},_labelRegexp:{enumerable:!1,value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},_generateLabelForObject:{value:function(e){var t=(this._labelRegexp.test(e.identifier)?e.identifier:null)||Montage.getInfoForObject(e).objectName.toLowerCase(),n=this._objectNamesIndex[t];return n?(this._objectNamesIndex[t]=n+1,t+n):(this._objectNamesIndex[t]=this._INITIAL_LABEL_SEQUENCE_NUMBER,t)}},_applySerializationUnits:{value:function(e,t,n){var r;n||(n=this._serializationUnits);for(var i=0,s;s=n[i];i++)r=s.funktion(t,this),typeof r!="undefined"&&(e[s.name]=this._serializeValue(r,null,2))}},_isValueType:{value:function(e){return!("getInfoForObject"in e)}},_applyTypeUnit:{value:function(e,t){if(this._isValueType(t))e.value=this._serializeValue(t);else{var n=Montage.getInfoForObject(t),r=this._require.identify(n.moduleId,n.require),i=n.objectName;this._findObjectNameRegExp.test(r);var s=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase);s===i?i=r:i=r+"["+i+"]",n.isInstance?e.prototype=this._serializeValue(i):e.object=this._serializeValue(i)}}},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},_serializeObject:{value:function(e,t,n){var r=e.uuid,i=this._serializedReferences[r],s,o,u,a,f,l,c,h;if(i)return i;a=this._getObjectLabel(e),i='{"@":"'+a+'"}';if(n==="reference")this._serializedObjects[a]||(this._externalObjects[a]=e);else{h=this.delegate,this._serializedReferences[r]=i,s=Object.create(null),u=Montage.getInfoForObject(e);if(!this._require)throw new Error("Cannot serialize Montage objects without a require function to identify the corresponding package.");f=this._require.identify(u.moduleId,u.require),l=u.objectName,this._findObjectNameRegExp.test(f),c=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase),c===l?l=f:l=f+"["+l+"]",u.isInstance?s.prototype=this._serializeValue(l):s.object=this._serializeValue(l),typeof e.serializeProperties=="function"?(this._pushContextObject(e),this._pushContextObject(Object.create(null)),e.serializeProperties(this,Montage.getSerializablePropertyNames(e)),h&&typeof h.serializeObjectProperties=="function"&&h.serializeObjectProperties(this,e,Object.keys(this._peekContextObject())),s.properties=this._serializeObjectLiteral(this._popContextObject(),null,3),this._popContextObject()):(t||(t=e,o=Montage.getSerializablePropertyNames(e)),h&&typeof h.serializeObjectProperties=="function"?(this._pushContextObject(e),this._pushContextObject(Object.create(null)),this.setAll(o),h.serializeObjectProperties(this,e,o),s.properties=this._serializeObjectLiteral(this._popContextObject(),null,3),this._popContextObject()):s.properties=this._serializeObjectLiteral(t,o,3)),this._applySerializationUnits(s,e),this._serializedObjects[a]=s}return i}},_serializeValue:{value:function(e,t,n){var n=arguments[2]||0,r=typeof e;return RegExp.isRegExp(e)?this._serializeRegExp(e):e!=null&&r==="object"||r==="function"?typeof Element!="undefined"&&Element.isElement(e)?this._serializeElement(e):Array.isArray(e)?this._serializeArray(e,n+1):e.constructor===Function?this._serializeFunction(e,n):"getInfoForObject"in e?typeof e.serializeSelf!="function"||e.uuid in this._serializedReferences||t==="reference"?this._serializeObject(e,null,t):this._customSerialization(e,n+1):this._serializeObjectLiteral(e,null,n+1):JSON.stringify(e)}},_customSerialization:{value:function(e,t){this._pushContextObject(e),this._pushContextObject({properties:Object.create(null),_units:[]});var n=e.serializeSelf(this),r=this._popContextObject();return this._popContextObject(),typeof n=="undefined"?this._serializeValueWithDescriptor(e,r,t):(this._objectLabels[n.uuid]=this._objectLabels[e.uuid],this._serializeValue(n,t))}},_serializeElement:{value:function(e){var t=e.getAttribute(this._MONTAGE_ID_ATTRIBUTE),n=t;if(n)return this._externalElements.push(e),'{"#":"'+n+'"}';logger.error("Error: Not possible to serialize a DOM element with no "+this._MONTAGE_ID_ATTRIBUTE+" assigned: "+e.outerHTML)}},_serializeRegExp:{value:function(e){return this._serializeValue({"/":{source:e.source,flags:(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")}})}},_serializeObjectLiteral:{value:function(e,t){t=t||Object.keys(e);var n=arguments[2]||0,r=t.length,i=[],s=this._objectReferences[e.uuid],o,u,a,f;for(o=0;o<r;o++)u=t[o],a=e[u],typeof a!="undefined"&&(this.serializeNullValues||a!==null)&&(f=Montage.getPropertyAttribute(e,u,"serializable")||(s&&Object.hasOwnProperty.call(s,u)?"reference":"auto"),i.push(JSON.stringify(u)+":"+this._serializeValue(a,f,n)));var l=(new Array(n+1)).join("  ");return"{\n"+l+i.join(",\n"+l)+"}"}},_serializeArray:{value:function(e){var t=arguments[1]||0,n=[];for(var r=0,i=e.length;r<i;r++)n.push(this._serializeValue(e[r],null,t));var s=(new Array(t+1)).join("  ");return"[\n"+s+n.join(",\n"+s)+"]"}},_serializeFunctionRegexp:{enumerable:!1,value:/^function[^(]*\(([^\)]+)\)\s*\{([\s\S]*)\}$/m},_serializeFunction:{value:function(e){var t=arguments[1]||0,n=(new Array(t+1)).join("  "),r=e.toString(),i=this._serializeFunctionRegexp.exec(r);return this._serializeValue({"->":{arguments:i[1].split(/\s*,\s*/),body:i[2]}},null,t)}},_serializeValueWithDescriptor:{value:function(e,t,n){var r,i=this.delegate;"prototype"in t||"object"in t||"value"in t||this._applyTypeUnit(t,e);if("value"in t)return this._serializeValue(t.value);i&&typeof i.serializeObjectProperties=="function"&&(this._pushContextObject(e),this._pushContextObject(t.properties),i.serializeObjectProperties(this,e,Object.keys(t.properties)),this._popContextObject(),this._popContextObject()),t.properties=this._serializeObjectLiteral(t.properties,null,3);var s;if(s=t._units)delete t._units,this._applySerializationUnits(t,e,s);return r=this._getObjectLabel(e),this._serializedObjects[r]=t,this._serializedReferences[e.uuid]='{"@":"'+r+'"}'}}});typeof exports!="undefined"&&(exports.Serializer=Serializer,exports.serialize=serialize)