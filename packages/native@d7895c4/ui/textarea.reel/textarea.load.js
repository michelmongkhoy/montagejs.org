montageDefine("d7895c4","ui/textarea.reel/textarea",{dependencies:["ui/text-input"],factory:function(e,t){var n=e("ui/text-input").TextInput,a=t.Textarea=n.specialize({select:{value:function(){this._element.select()}},textContent:{get:function(){return this.value},set:function(e){this.value=e}},enterDocument:{value:function(e){e&&null===this.textContent&&(this.textContent=this.originalElement.textContent)}}});a.addAttributes({autofocus:{dataType:"boolean"},cols:null,dirname:null,disabled:{dataType:"boolean"},form:null,maxlength:null,name:null,placeholder:null,readonly:{dataType:"boolean"},required:{dataType:"boolean"},rows:null,wrap:null})}});