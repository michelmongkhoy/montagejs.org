montageDefine("4d9067a","ui/select.reel/select",{dependencies:["montage","montage/ui/component","native/ui/select.reel"],factory:function(e,t){var n=e("montage").Montage,a=(e("montage/ui/component").Component,e("native/ui/select.reel").Select);t.Select=n.create(a,{hasTemplate:{value:!0},enterDocument:{value:function(){a.enterDocument.apply(this,arguments),this.element.classList.add("digit-Select")}}})}});