montageDefine("33c2b76","binders",{dependencies:["./scope","./observers"],factory:function(e,t){function n(e,t,n,a,s,r){return n(y(function(n){if(!s.isActive)try{s.isActive=!0,r&&console.log("SET",r.targetPath,"TO",n,"ON",e,"BECAUSE",r.sourcePath,Error("here").stack),Array.isArray(e)&&t>>>0===t?e.set(t,n):e[t]=n}finally{s.isActive=!1}}),a)}function a(e,t){return function(n,a,s,r,i){return t(y(function(t){return null!=t?e(y(function(e){return null!=e?e.bindProperty?e.bindProperty(t,n,a,r,i):S(e,t,n,a,r,i):void 0}),s):void 0}),s)}}function s(e,t,n,a,s,r){return n(y(function(n){if(!s.isActive)try{s.isActive=!0,r&&console.log("SET FOR KEY",t,"TO",n,"ON",e,"BECAUSE",r.sourcePath,Error("here").stack),e.set(t,n)}finally{s.isActive=!1}}),a)}function r(e,t){return function(n,a,s,r,i){return e(y(function(e){return e?t(y(function(t){return null!=t?k(e,t,n,a,r,i):void 0}),s):void 0}),s)}}function i(e,t){return function(n,a,s,r,i){return e(y(function(e){return e?t(y(function(t){return n(y(function(n){if(n)(e.has||e.contains).call(e,t)||(i&&console.log("ADD",t,"TO",i.targetPath,"BECAUSE",i.sourcePath,Error("here").stack),e.add(t));else for(;(e.has||e.contains).call(e,t);)i&&console.log("REMOVE",t,"FROM",i.targetPath,"BECAUSE",i.sourcePath,Error("here").stack),(e.remove||e["delete"]).call(e,t)}),a)}),s):void 0}),s)}}function o(e,t){return function(n,a,s,r,i){return n(y(function(n){return n?(i&&console.log("BIND",i.targetPath,"TO",i.sourcePath,Error("here").stack),e(t,a,a,r,i),function(){i&&console.log("UNBIND",i.targetPath,"FROM",i.sourcePath,Error("here").stack)}):void 0}),s)}}function l(e,t,n){return function(a,s,r,i,o){return a(y(function(a){return a?e(y(function(e){function a(e,a,l){s.swap(l,a.length,e.map(function(e){var a=f.nest(r,e);return t(n,a,a,i,o)}))}if(e){var s=[],l=w(e,a,r);return function(){L(s),l()}}}),r):void 0}),s)}}function c(e,t,n,a,s,r){var i=C(a),o=M(n,i);return function(n,a,i,l,c){return n(y(function(n){if(null!=n){if(n){var a=e(s,_,i,l,c),p=t(r,_,i,l,c);return function(){a(),p()}}return e(o,i,i,l,c)}}),a)}}function p(e,t,n,a,s,r){var i=C(a),o=x(n,i);return function(n,a,i,l,c){return n(y(function(n){if(null!=n){if(n)return e(o,i,i,l,c);var a=e(s,z,i,l,c),p=t(r,z,i,l,c);return function(){a(),p()}}}),a)}}function h(e,t,n){return function(a,s,r,i,o){return e(y(function(e){return null!=e?e?t(a,s,r,i,o):n(a,s,r,i,o):void 0}),s)}}function u(e,t){return function(n,a,s,r,i){return e(y(function(e){return e?n(y(function(t){function n(t,n,a){m(e)||(i&&console.log("SWAPPING",n,"FOR",t,"AT",a,"ON",i.targetPath,Error("here").stack),e.swap?e.swap(a,n.length,t):e.add&&(e.remove||e["delete"])&&(t.forEach(e.add,e),n.forEach(e.remove||e["delete"],e)))}if(t!==e){if(!t)return e.clear(),void 0;if(!t.addRangeChangeListener)throw Error("Can't bind rangeContent() from object that does not support range content change listeners: "+t);return t.addRangeChangeListener(n),n(Array.from(t),Array.from(e),0),b(function(){t.removeRangeChangeListener(n)})}}),a):t(v.makeLiteralObserver([]),a,s,r,i)}),s)}}function d(e){return function(t,n,a,s,r){return e(y(function(e){return e?t(y(function(t){function n(t,n){if(!s.isActive)try{s.isActive=!0,void 0===t?(r&&r&&console.log("DELETED",r.targetPath,"FOR KEY",n,"ON",e,"BECAUSE",r.sourcePath,Error("here").stack),Array.isArray(e)?e.splice(n,1):e["delete"](n)):(r&&r&&console.log("SET",r.targetPath,"FOR KEY",n,"TO",t,"ON",e,"BECAUSE",r.sourcePath,Error("here").stack),e.set(n,t))}finally{s.isActive=!1}}return t?(e.clear(),t.forEach(n),t.addMapChangeListener(n)):(e.clear(),void 0)}),n):void 0}),a)}}function g(e){return function(t,n,a){return e(y(function(e){return e?t(y(function(t){function n(t,n,a){if(!m(e)){var s=e.length-a-n.length;e.swap(s,n.length,t.reversed())}}return t?(t.addRangeChangeListener(n),n(t,e,0),b(function(){t.removeRangeChangeListener(n)})):(e.clear(),void 0)}),n):void 0}),a)}}function m(e){return e.getRangeChangeDescriptor&&e.getRangeChangeDescriptor().isActive}var f=e("./scope"),v=e("./observers"),y=v.autoCancelPrevious,b=v.once,w=v.observeRangeChange,L=v.cancelEach,C=v.makeNotObserver,x=v.makeOrObserver,M=v.makeAndObserver;v.observeValue;var _=new f(!0),z=new f(!1);t.bindProperty=n;var S=n;t.makePropertyBinder=a,t.bindGet=s;var k=s;t.makeGetBinder=r,t.makeHasBinder=i,t.makeEqualityBinder=o,t.makeEveryBlockBinder=l,t.makeAndBinder=c,t.makeOrBinder=p,t.makeConditionalBinder=h,t.makeRangeContentBinder=u,t.makeMapContentBinder=d,t.makeReversedBinder=g}});