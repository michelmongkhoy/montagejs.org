montageDefine("1b6c26a","core/bindings",{dependencies:["core/core","frb"],factory:function(e,n){var t=e("core/core").Montage,s=n.Bindings=e("frb"),a={defineBinding:{value:function(e,n,t){return s.defineBinding(this,e,n,t)}},defineBindings:{value:function(e,n){return s.defineBindings(this,e,n)}},cancelBinding:{value:function(e){return s.cancelBinding(this,e)}},cancelBindings:{value:function(){return s.cancelBindings(this)}},getBinding:{value:function(e){return s.getBinding(this,e)}},getBindings:{value:function(){return s.getBindings(this)}}};t.defineProperties(t,a),t.defineProperties(t.prototype,a)}});