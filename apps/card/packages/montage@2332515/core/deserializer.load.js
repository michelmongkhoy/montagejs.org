montageDefine("2332515","core/deserializer",{dependencies:["montage","core/logger","core/promise"],factory:function(require,exports,module){function deserialize(e,t,n){var r=Promise.defer();return deserializer.init(e,t,n).deserializeObject(function(e){r.resolve(e)}),r.promise}var Montage=require("montage").Montage,logger=require("core/logger").logger("deserializer"),Promise=require("core/promise").Promise,globalEval=eval,canEval=!0;try{eval("")}catch(ex){canEval=!1}var Deserializer=exports.Deserializer=Montage.create(Montage,{_MONTAGE_ID_ATTRIBUTE:{value:"data-montage-id"},_objects:{value:null},_objectStack:{value:[]},_modulesByRequire:{value:Object.create(null)},_modules:{value:null},_requiredModuleIds:{value:null},_objectLabels:{value:null},_serializationString:{value:null,enumerable:!1},_serialization:{value:null,enumerable:!1},_parseFunction:{value:null,enumerable:!1},_deserializationUnits:{value:[]},_optimizedIds:{value:Object.create(null)},_indexedDeserializationUnits:{value:Object.create(null)},__sharedDocument:{value:null},_sharedDocument:{get:function(){return this.__cachedDoc?this.__cachedDoc:this.__cachedDoc=window.document.implementation.createHTMLDocument("")}},_reset:{value:function(){this._serializationString=null,this._requiredModuleIds=null,this._areModulesLoaded=!1,this._parseFunction=null,this._serialization=null,this._compiledDeserializationFunction=null,this._compiledDeserializationFunctionString=null,this._origin=null}},_setupModulesForRequire:{value:function(e){if(e){var t=this._modulesByRequire[e.uuid];t?this._modules=t:this._modules=this._modulesByRequire[e.uuid]=Object.create(null)}}},init:{value:function(e,t,n){return typeof e!="string"&&(e=JSON.stringify(e)),this._reset(),this._serializationString=e,this._require=t,this._origin=n,this._setupModulesForRequire(t),this}},initWithString:{value:function(e,t){return this._reset(),this._serializationString=e,this._origin=t,this._setupModulesForRequire(this._require),this}},initWithObject:{value:function(e){return this._reset(),this._serializationString=JSON.stringify(e),this._setupModulesForRequire(this._require),this}},initWithObjectAndRequire:{value:function(e,t,n){return this._reset(),this._serializationString=JSON.stringify(e),this._require=t,this._origin=n,this._setupModulesForRequire(t),this}},initWithStringAndRequire:{value:function(e,t,n){return this._reset(),this._serializationString=e,this._require=t,this._origin=n,this._setupModulesForRequire(t),this}},defineDeserializationUnit:{value:function(e,t){this._deserializationUnits.push({name:e,funktion:this._indexedDeserializationUnits[e]=t})}},getObjectsFromLastDeserialization:{value:function(){var e=this._objects,t=[];for(var n in e)Object.hasOwnProperty.call(e,n)&&t.push(e[n]);return t}},chainDeserializer:{value:function(e){var t=this._chainedSerializations,n,r;t||(this._chainedSerializations=t=[]),t.push({string:e._serializationString,compiledFunction:e._compiledDeserializationFunction,compiledFunctionString:e._compiledDeserializationFunctionString}),r=e._optimizedIds;if(r){n||(this._optimizedIds=n=Object.create(null));for(var i in r)n[i]=r[i]}}},get:{value:function(e){var t=this._objectStack,n=t.length-1;return t[n][e]}},deserializeProperties:{value:function(){var e=this._objectStack,t=e.length-1,n=e[t-1],r=e[t];this._deserializeProperties(n,r.properties,!1)}},getProperty:{value:function(e){var t=this._objectStack,n=t.length-1,r=t[n];return r.properties[e]}},deserializeUnits:{value:function(){var e=this._objectStack,t=e.length-1,n=e[t];n._units=this._indexedDeserializationUnits}},deserializeUnit:{value:function(e){var t=this._objectStack,n=t.length-1,r=t[n],i;r._units?i=r._units:r._units=i=Object.create(null),i[e]=this._indexedDeserializationUnits[e]}},getType:{value:function(){var e=this._objectStack,t=e.length-1,n=e[t];return"object"in n?"object":"prototype"in n?"prototype":null}},getTypeValue:{value:function(){var e=this._objectStack,t=e.length-1,n=e[t];return n.object||n.prototype}},getObjectByLabel:{value:function(e){return this._objects[e]||this._objectLabels[e]}},_customDeserialization:{enumerable:!1,value:function(e,t){this._pushContextObject(e),this._pushContextObject(t),e.deserializeSelf(this),this._popContextObject(),this._popContextObject()}},deserializePropertiesForObject:{value:function(e,t,n){if(n)for(var r in t)Montage.getPropertyAttribute(e,r,"serializable")||(Object.getPropertyDescriptor(e,r)?console.warn('Unserializable property "'+r+'" found in the serialization of '+(e._montage_metadata?e._montage_metadata.objectName:e)+" ("+(this._origin||window.location)+")"):console.warn('Nonexistent (and therefore unserializable) property "'+r+'" found in the serialization of '+(e._montage_metadata?e._montage_metadata.objectName:e)+" ("+(this._origin||window.location)+")")),e[r]=t[r];else for(var r in t)e[r]=t[r]}},_pushContextObject:{value:function(e){this._objectStack.push(e)}},_popContextObject:{value:function(){return this._objectStack.pop()}},_require:{enumerable:!1,value:null},_defaultModuleLoader:{enumerable:!1,value:function(e,t){if(typeof require!="function"){logger.error("Deserializer: The default module loader needs the global require function to be defined.");return}var n=0,r=Object.create(null),i=this._require;e.forEach(function(s){t?i.async(s).then(function(i){r[s]=i,++n===e.length&&t(r)},function(e){console.log(e.stack)}).done():r[s]=i(s)});if(!t)return r}},_areModulesLoaded:{value:!1},_areModulesLoading:{value:!1},___loadModulesCallbacks:{value:null},_loadModules:{enumerable:!1,value:function(e,t){if(this._areModulesLoaded||e.length===0)t&&t();else if(this._areModulesLoading)this.___loadModulesCallbacks.push(t);else{var n=this,r=this._moduleLoader||this._defaultModuleLoader;this.___loadModulesCallbacks=[t],this._areModulesLoading=!0;function i(e){var t=n._modules;for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);n._areModulesLoaded=!0,n._areModulesLoading=!1,n.___loadModulesCallbacks.forEach(function(e){e&&e()}),n.___loadModulesCallbacks=null}t?r.call(this,e,i):i(r.call(this,e))}}},_prepareForDeserialization:{value:function(e){if(this._areModulesLoaded)return e();if(!this._compiledDeserializationFunctionString){try{this._serialization=JSON.parse(this._serializationString)}catch(t){if(logger.isError)return this._reportParseError(this._serializationString,this._origin),e()}this._parseForModules()}if(!(this._requiredModuleIds.length>0))return this._areModulesLoaded=!0,e();this._loadModules(this._requiredModuleIds,e)}},setModuleLoader:{value:function(e){this._moduleLoader=e}},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},_parseForModules:{value:function(){var e=this._serialization,t=this._requiredModuleIds=[],n=this._modules,r,i;for(var s in e){r=e[s],i=null;if("module"in r)i=r.module;else if("prototype"in r||"object"in r)Deserializer.parseForModuleAndName(r.prototype||r.object,r),i=r.module;i&&!n[i]&&t.indexOf(i)==-1&&t.push(i)}}},parseForModuleAndName:{value:function(e,t){var n;return typeof t=="undefined"&&(t=Object.create(null)),n=e.indexOf("["),n>0?(t.module=e.substr(0,n),t.name=e.slice(n+1,-1)):(t.module=e,Deserializer._findObjectNameRegExp.test(e),t.name=RegExp.$1.replace(Deserializer._toCamelCaseRegExp,Deserializer._replaceToCamelCase)),t}},_compile:{value:function(){return this._prepareForDeserialization(),this._compileAndDeserialize(),this._compiledDeserializationFunctionString}},optimizeForDocument:{value:function(e){var t=Deserializer._MONTAGE_ID_ATTRIBUTE,n=e.querySelectorAll("*["+t+"]"),r=this._optimizedIds=Object.create(null);for(var i=0,s;s=n[i];i++)if(!s.id){var o=s.getAttribute(t);s.setAttribute("id",r[o]="_"+t+"_"+o)}}},_labelRegexp:{enumerable:!1,value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},_compileAndDeserialize:{value:function(e,t,n,r){function x(e,t){var f,h,p,d,g,y=i._objectLabels[e],b=y!=null,w,E,S,x;if(Object.keys(t).length==0)return;if("module"in t)f=t.module,p=h=t.name;else if("prototype"in t||"object"in t)h=t.prototype||t.object,x=h.indexOf("["),x>0?(f=h.substr(0,x),p=h=h.slice(x+1,-1)):(f=h,i._findObjectNameRegExp.test(h),p=h=RegExp.$1.replace(i._toCamelCaseRegExp,function(e,t){return t.toUpperCase()}));g="object"in t,d=f+"."+h;if(r)if(b)n[e]=y;else if(g)n[e]=y=c[f][h];else{if(!(h in c[f])){console.log('Warning: Object "'+h+'" not found at "'+f+'" referenced from '+i._origin+".");return}n[e]=y=c[f][h].create(),Montage.getInfoForObject(y).label=e,Object.defineProperty(y,"_suuid",{enumerable:!1,value:i.uuid+"-"+e})}l[e]=!0,s+='if (this._objectLabels["'+e+'"]) {\n',s+="  var "+e+" = exports."+e+' = this._objectLabels["'+e+'"];\n',s+="} else if(exports."+e+") {\n",s+="  var "+e+" = exports."+e+";\n",b||(d in v?p=v[d]:(w=(m[h]||0)+1,m[h]=w,w>1&&(p+=w),v[d]=p,v.push("var "+p+' = this._modules["'+f+'"]["'+h+'"];')),s+="} else {\n",g?s+="  var "+e+" = exports."+e+" = "+p+";\n":(s+="  var "+e+" = exports."+e+" = "+p+".create();\n",s+="  Montage.getInfoForObject("+e+').label = "'+e+'";\n',s+="  Object.defineProperty("+e+', "_suuid", {enumerable: false, value: "'+i.uuid+"-"+e+'"});\n')),s+="}\n",E=T(t),u+="var "+e+"Serialization = "+E+";\n",u+=e+".isDeserializing = true;\n",a+="delete "+e+".isDeserializing;\n",u+="if (typeof "+e+'.deserializeSelf === "function") {\n',u+="  "+e+"Serialization._units = Object.create(null);\n",u+="  this._customDeserialization("+e+", "+E+");\n",u+="} else {\n",u+="  this._deserializeProperties("+e+", "+e+"Serialization.properties);\n",u+="}\n",r&&(y.isDeserializing=!0,typeof y.deserializeSelf=="function"?(t._units=Object.create(null),i._customDeserialization(y,t)):i._deserializeProperties(y,t.properties,!1)),o+="this._deserializeUnits("+e+", "+e+"Serialization);\n"}function T(s,o,u){var a=typeof s;if(a==="object")if(s instanceof Array)a="array";else{if(s===null)return"null";"#"in s?(a="elementByMontageId",s=s["#"]):"/"in s?(a="regexp",s=s["/"]):"@"in s?(a="reference",s=s["@"]):"->"in s?(a="function",s=s["->"]):"."in s&&Object.keys(s).length===1&&console.log("Warning: It's not possible to reference elements by class name anymore: '"+JSON.stringify(s)+"' in template "+i._origin+".")}switch(a){case"string":case"number":case"boolean":return JSON.stringify(s);case"object":var f=[];for(var u in s)f.push('"'+u+'": '+T(s[u],s,u));return"{"+f.join(",\n")+"}";case"array":var f=[];for(var l=0,c=s.length;l<c;l++)f.push(T(s[l],s,l));return"["+f.join(",\n")+"]";case"elementByMontageId":var p=i._optimizedIds[s],d;return p?(d=e.getElementById(p),h.push(p)):(d=e.querySelector("*["+Deserializer._MONTAGE_ID_ATTRIBUTE+'="'+s+'"]'),d||(d=e.getElementById(s),p=s)),d||console.log("Warning: Element "+Deserializer._MONTAGE_ID_ATTRIBUTE+"='"+s+"' not found in template "+i._origin),r&&(o[u]=d),p?'element.getElementById("'+p+'")':"element.querySelector('*["+Deserializer._MONTAGE_ID_ATTRIBUTE+'="'+s+"\"]')";case"regexp":return r&&(o[u]=new RegExp(s.source,s.flags)),"/"+s.source+"/"+s.flags;case"reference":var v,m=s;return s in n?v=n[s]:s in t?Object.keys(t[s]).length>0?(x(s,t[s]),v=n[s]):(v=i._objectLabels[s],s="this._objectLabels."+s):logger.error("Error: Label '"+s+"' not found in serialization at "+i._origin),o&&(o[u]=v),typeof v=="undefined"&&logger.error("Missing object in serialization: '"+m+"'"+(i._origin?" in "+i._origin:"")),s;case"function":var g="function"+(s.name?" "+s.name:"")+"("+s.arguments.join(", ")+") {\n"+s.body+"\n}";return r&&(o[u]=globalEval("("+g+")")),g}}var i=this,s="",o="",u="",a="",f,l=Object.create(null),c=this._modules,h=[],p=this._optimizedIds,d,v=[],m=Object.create(null),g,y=this._labelRegexp,b;canEval?t=this._serialization:t=JSON.parse(this._serializationString);for(g in t){if(!y.test(g))throw logger.error("Invalid label format '"+g+"' "+(this._origin?" in "+this._origin:"")),"Invalid label format: "+g;var w=t[g];if(g in l)continue;"value"in w?(f=T(w.value,w,"value"),s+="var "+g+" = exports."+g+" = "+f+";\n",r&&(n[g]=w.value,l[g]=!0),delete t[g]):x(g,w)}if(r){for(g in t)i._deserializeUnits(n[g],t[g]);for(g in n)b=n[g],b&&delete b.isDeserializing}if(h.length>0){a+='element.getElementById("'+h.join('").removeAttribute("id");\nelement.getElementById("')+'").removeAttribute("id");';for(var E=0,S;S=h[E];E++)e.getElementById(h[E]).removeAttribute("id")}return canEval&&(d="(function() {\n"+v.join("\n")+"\nreturn function(element, exports) {\n"+s+"\n\n"+u+"\n\n"+o+"\n\n"+a+"\nreturn exports;\n}}).call(this)"),logger.isDebug&&logger.debug(d),d}},_reportParseError:{value:function(e,t){require.async("core/jshint").then(function(n){var r=n.JSHINT;if(!r(e)){var i=r.errors[0],s=e.split("\n"),o="   ",u=(o+s.length).length,a=i.line-1;for(var f=0,l=s.length;f<l;f++)s[f]=(new Array(u-(f+1+"").length+1)).join(f===a?">":" ")+(f+1)+" "+s[f];logger.error("Syntax error at line "+i.line+(t?" from "+t:"")+":\n"+i.evidence+"\n"+i.reason+"\n"+s.join("\n"))}else logger.error("Syntax error in the serialization but not able to find it!\n"+e)}).done()}},_deserialize:{value:function(sourceDocument,targetDocument){var exports=this._objects=Object.create(null),chainedSerializations=this._chainedSerializations;this._compiledDeserializationFunction?this._compiledDeserializationFunction(sourceDocument,exports):this._compiledDeserializationFunctionString?(this._compiledDeserializationFunction=eval(this._compiledDeserializationFunctionString),this._compiledDeserializationFunction(sourceDocument,exports)):(this._compiledDeserializationFunctionString=this._compileAndDeserialize(sourceDocument,this._serialization,exports,!0),this._serialization=null);if(chainedSerializations)for(var i=0,serialization;serialization=chainedSerializations[i];i++)serialization.compiledFunction?serialization.compiledFunction.call(this,sourceDocument,exports):serialization.compiledFunctionString?(serialization.compiledFunction=eval(serialization.compiledFunctionString),serialization.compiledFunction.call(this,sourceDocument,exports)):(serialization.compiledFunctionString=this._compileAndDeserialize(sourceDocument,serialization.object,exports,!0),serialization.object=null);return targetDocument&&targetDocument.adoptNode(sourceDocument.body.firstChild),exports}},deserializeObject:{value:function(e){return this.deserializeWithInstancesAndDocument(null,null,function(t){e(t?t.root:undefined)})}},deserializeObjectWithElement:{value:function(e,t){return this.deserializeWithInstancesAndElementForDocument(null,e,null,function(e,n){t(e?e.root:undefined,n)})}},deserialize:{value:function(e){return this.deserializeWithInstancesAndDocument(null,null,e)}},deserializeWithInstances:{value:function(e,t){return this.deserializeWithInstancesAndDocument(e,null,t)}},deserializeWithInstancesAndElementForDocument:{value:function(e,t,n,r){var i=this;this._prepareForDeserialization(function(){var s,o=i._sharedDocument,u=o.body;i._objects=Object.create(null),i._objectLabels=e||Object.create(null),t&&u.appendChild(o.importNode(t,!0)),s=i._deserialize(o,n),i._invokeDeserializedFromSerialization(s),r(s,u)})}},deserializeWithInstancesAndDocument:{value:function(e,t,n){var r=this;this._prepareForDeserialization(function(){r._objects=Object.create(null),r._objectLabels=e||Object.create(null);var i=r._deserialize(t);r._invokeDeserializedFromSerialization(i),n(i,t)})}},_invokeDeserializedFromSerialization:{value:function(e){var t=this._objectLabels,n;for(var r in e){if(t[r]!=null)continue;n=e[r],n!==null&&typeof n.deserializedFromSerialization=="function"&&n.deserializedFromSerialization()}}},_deserializeProperties:{value:function(e,t,n){e.deserializeProperties?(this._pushContextObject(t),e.deserializeProperties(this),this._popContextObject()):this.deserializePropertiesForObject(e,t,n)}},_deserializeUnits:{value:function(e,t){var n=t._units||this._indexedDeserializationUnits;for(var r in n)r in t&&n[r](e,t[r],this)}}}),deserializer=Deserializer.create();exports.deserialize=deserialize}})