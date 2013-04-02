montageDefine("33c2b76","compile-evaluator",{dependencies:["collections/shim-object","collections/map","./operators","./scope","./parse"],factory:function(e,t,n){function a(e){return a.semantics.compile(e)}var s=e("collections/shim-object"),i=e("collections/map"),r=e("./operators"),o=e("./scope");n.exports=a;var l={literal:function(e){return function(){return e.value}},value:function(){return function(e){return e.value}},parameters:function(){return function(e){return e.parameters}},element:function(e){return function(t){return t.document.getElementById(e.id)}},component:function(e){return function(t){return t.components.getObjectByLabel(e.label)}},tuple:function(e){var t=e.args.map(this.compile,this);return function(e){return t.map(function(t){return t(e)})}},record:function(e){var t=e.args,n={};for(var a in t)n[a]=this.compile(t[a]);return function(e){var t={};for(var a in n)t[a]=n[a](e);return t}}},c={mapBlock:function(e,t){return function(n){return e(n).map(function(e){return t(o.nest(n,e))})}},filterBlock:function(e,t){return function(n){return e(n).filter(function(e){return t(o.nest(n,e))})}},someBlock:function(e,t){return function(n){return e(n).some(function(e){return t(o.nest(n,e))})}},everyBlock:function(e,t){return function(n){return e(n).every(function(e){return t(o.nest(n,e))})}},sortedBlock:function(e,t){return function(n){return e(n).sorted(Function.by(function(e){return t(o.nest(n,e))}))}},groupBlock:function(e,t){return function(n){return e(n).group(function(e){return t(o.nest(n,e))})}},groupMapBlock:function(e,t){return function(n){return new i(e(n).group(function(e){return t(o.nest(n,e))}))}},minBlock:function(e,t){return function(n){return e(n).min(Function.by(function(e){return t(o.nest(n,e))}))}},maxBlock:function(e,t){return function(n){return e(n).max(Function.by(function(e){return t(o.nest(n,e))}))}},parent:function(e){return function(t){return e(t.parent)}},"with":function(e,t){return function(n){return t(o.nest(n,e(n)))}},"if":function(e,t,n){return function(a){return e(a)?t(a):n(a)}},not:function(e){return function(t){return!e(t)}},and:function(e,t){return function(n){return e(n)&&t(n)}},or:function(e,t){return function(n){return e(n)||t(n)}},"default":function(e,t){return function(n){var a=e(n);return null==a&&(a=t(n)),a}},defined:function(e){return function(t){var n=e(t);return null!=n}},path:function(t,n){return function(s){var i=t(s),r=n(s),l=e("./parse");try{var c=l(r),p=a(c);return p(o.nest(s,i))}catch(h){}}}},p=s.clone(r,1);s.addEach(p,{property:function(e,t){return e[t]},get:function(e,t){return e.get(t)},mapContent:Function.identity,rangeContent:Function.identity,view:function(e,t,n){return e.slice(t,t+n)}}),a.semantics={compilers:l,argCompilers:c,operators:p,compile:function(e){var t=this.compilers,n=this.argCompilers,a=this.operators;if(t.hasOwnProperty(e.type))return t[e.type].call(this,e);if(n.hasOwnProperty(e.type)){var s=e.args.map(this.compile,this);return n[e.type].apply(null,s)}a.hasOwnProperty(e.type)||(a[e.type]=function(t){var n=Array.prototype.slice.call(arguments,1);if(!t[e.type])throw new TypeError("Can't call "+JSON.stringify(e.type)+" of "+t);return t[e.type].apply(t,n)});var i=a[e.type],s=e.args.map(this.compile,this);return function(e){var t=s.map(function(t){return t(e)});if(t.every(r.defined))return i.apply(null,t)}}}}});