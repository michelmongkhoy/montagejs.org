montageDefine("1b6c26a","core/extras/function",{dependencies:["./object"],factory:function(e){e("./object"),Object.defineProperty(Function,"identity",{value:function(e){return e},writable:!0,configurable:!0}),Object.defineProperty(Function,"noop",{value:function(){},writable:!0,configurable:!0}),Object.defineProperty(Function,"by",{value:function(e,n){n=n||Object.compare,e=e||Function.identity;var s=function(s,t){return n(e(s),e(t))};return s.compare=n,s.by=e,s},writable:!0,configurable:!0})}});