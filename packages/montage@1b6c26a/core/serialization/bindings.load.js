montageDefine("1b6c26a","core/serialization/bindings",{dependencies:["frb","frb/parse","frb/stringify","frb/expand","frb/scope","core/serialization"],factory:function(e){var n=e("frb"),s=(e("frb/parse"),e("frb/stringify")),a=e("frb/expand"),t=e("frb/scope"),o=e("core/serialization").Serializer,i=e("core/serialization").Deserializer;o.defineSerializationUnit("bindings",function(e,o){var i,r=n.getBindings(o),p={};for(var l in r){var c=r[l],d={};if(!("serializable"in c)||c.serializable){var h=c.sourcePath,u=c.sourceSyntax;if(c.source!==o){var m=e.getObjectLabel(c.source),g=new t({type:"component",label:m});g.components=e,u=a(u,g)}var g=new t;g.components=e,h=s(u,g),c.twoWay?d["<->"]=h:d["<-"]=h,c.converter?d.converter=c.converter:(d.convert=c.convert,d.revert=c.revert),c.trace&&(d.trace=!0),p[l]=d,i=!0}}return i?p:void 0}),i.defineDeserializationUnit("bindings",function(e,s,a){for(var t in a){var o=a[t];if("object"!=typeof o)throw Error("Binding descriptor must be an object, not "+typeof o);"boundObject"in o?(o.source=e.getObjectByLabel(o.boundObject),o.oneway?o["<-"]=o.boundPropertyPath:o["<->"]=o.boundPropertyPath,delete o.boundObject,delete o.boundObjectPropertyPath,delete o.oneway):o["<<->"]&&(console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now."),o["<->"]=o["<<->"],delete o["<<->"])}n.defineBindings(s,a,{components:e})})}});