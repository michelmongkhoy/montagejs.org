montageDefine("1b6c26a","core/geometry/cubic-bezier",{dependencies:["montage","core/geometry/point"],factory:function(n,s){var e=n("montage").Montage,a=n("core/geometry/point").Point,t=s.CubicBezier=e.specialize({init:{enumerable:!1,value:function(n){return null!==n&&(2===n.length?(this.p1=n[0],this.p2=n[1]):4===n.length&&(this.p0=n[0],this.p1=n[1],this.p2=n[2],this.p3=n[3])),this}},position:{enumerable:!1,value:function(n){if(!(0>n||n>1)){n=1-n;var s=n*n*n,e=3*n*n*(1-n),t=3*n*(1-n)*(1-n),o=(1-n)*(1-n)*(1-n);return(new a).init(this.p0.x*s+this.p1.x*e+this.p2.x*t+this.p3.x*o,this.p0.y*s+this.p1.y*e+this.p2.y*t+this.p3.y*o)}}},split:{enumerable:!1,value:function(n){return this.makeScaffolding(n),t.create(t).init([this.p0,this.p01,this.p012,this.p0123])}},splitToTimingFunction:{enumerable:!1,value:function(n){this.makeScaffolding(n);var s=this.p0123.x,e=this.p0123.y;return t.create(t).init([(new a).init(this.p01.x/s,this.p01.y/e),(new a).init(this.p012.x/s,this.p012.y/e)])}},makeScaffolding:{enumerable:!1,value:function(n){n=1-n;var s=1e6;e.defineProperty(this,"p01",{value:a.interpolate(n,this.p0,this.p1,s)}),e.defineProperty(this,"p12",{value:a.interpolate(n,this.p1,this.p2,s)}),e.defineProperty(this,"p23",{value:a.interpolate(n,this.p2,this.p3,s)}),e.defineProperty(this,"p012",{value:a.interpolate(n,this.p01,this.p12,s)}),e.defineProperty(this,"p123",{value:a.interpolate(n,this.p12,this.p23,s)}),e.defineProperty(this,"p0123",{value:a.interpolate(n,this.p012,this.p123,s)})}},p0:{enumerable:!0,value:(new a).init(0,0)},p1:{enumerable:!0,value:(new a).init(0,0)},p2:{enumerable:!0,value:(new a).init(1,1)},p3:{enumerable:!0,value:(new a).init(1,1)}})}});