montageDefine("1b6c26a","core/geometry/point",{dependencies:["montage"],factory:function(n,s){var e=n("montage").Montage;s.Point=e.specialize({init:{enumerable:!1,value:function(n,s){return this.x=null===n?0:n,this.y=null===s?0:s,this}},x:{enumerable:!0,value:0},y:{enumerable:!0,value:0}},{interpolate:{enumerable:!1,value:function(n,e,a,t){var o,p;return o=e.x+(a.x-e.x)*n,p=e.y+(a.y-e.y)*n,t>0&&(o=Math.round(o*t)/t,p=Math.round(p*t)/t),(new s.Point).init(o,p)}}})}});