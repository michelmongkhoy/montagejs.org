montageDefine("1b6c26a","core/radio-button-controller",{dependencies:["montage","core/range-controller"],factory:function(e,n){var t=e("montage").Montage,s=e("core/range-controller").RangeController;n.RadioButtonController=t.specialize({_radioButtons:{value:null},_content:{value:null},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new s).initWithContent(e)}},contentController:{value:null},selectedRadioButton:{value:null},_value:{value:null},value:{set:function(e){this._value!==e&&(this._value=e,this._updateRadioButtons())},get:function(){return this._value}},constructor:{value:function(){this._radioButtons=[],this.addRangeAtPathChangeListener("_radioButtons.map{checked}",this,"handleRadioButtonChange"),this.defineBinding("value ",{"<->":"contentController.selection.0"})}},_updateRadioButtons:{value:function(){for(var e=this._value,n=0,t=this._radioButtons.length;t>n;n++)if(e===this._radioButtons[n].value){this._radioButtons[n].checked=!0;break}}},registerRadioButton:{value:function(e){-1===this._radioButtons.indexOf(e)&&(this._radioButtons.push(e),this._updateRadioButtons())}},unregisterRadioButton:{value:function(e){var n=this._radioButtons.indexOf(e);n>=0&&(this._radioButtons.splice(n,1),e===this.selectedRadioButton&&(this.selectedRadioButton=null))}},handleRadioButtonChange:{value:function(e,n,t){if(e[0]===!0)for(var s=0,a=this._radioButtons.length;a>s;s++)s===t?(this.selectedRadioButton=this._radioButtons[s],this.value=this.selectedRadioButton.value):this._radioButtons[s].checked=!1}}})}});