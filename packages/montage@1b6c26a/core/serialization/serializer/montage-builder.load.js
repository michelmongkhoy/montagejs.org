montageDefine("1b6c26a","core/serialization/serializer/montage-builder",{dependencies:["montage","mousse/serialization/builder","./montage-ast"],factory:function(e,n){var s=e("montage").Montage,a=e("mousse/serialization/builder").Builder,t=e("./montage-ast"),o=s.specialize.call(a,{constructor:{value:function o(){a.call(this)}},createElementReference:{value:function(e){return(new t.ElementReference).initWithRootAndId(this._root,e)}}});n.MontageBuilder=o}});