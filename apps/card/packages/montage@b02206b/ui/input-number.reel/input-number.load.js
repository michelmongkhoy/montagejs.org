montageDefine("b02206b","ui/input-number.reel/input-number",{dependencies:["montage","ui/component","ui/native/input-number.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/input-number.reel").InputNumber;t.InputNumber=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-InputNumber"),this.element.classList.add("montage-InputText")}}})}})