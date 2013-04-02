montageDefine("1b6c26a","ui/base/abstract-radio-button",{dependencies:["montage","ui/base/abstract-control","composer/press-composer","collections/dict"],factory:function(e,n){var t=(e("montage").Montage,e("ui/base/abstract-control").AbstractControl),a=e("composer/press-composer").PressComposer;e("collections/dict");var s=n.AbstractRadioButton=t.specialize({constructor:{value:function s(){if(this.constructor===s)throw Error("AbstractRadioButton cannot be instantiated.");t.constructor.call(this),this._pressComposer=new a,this.addComposer(this._pressComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"},"classList.has('montage-RadioButton--checked')":{"<-":"checked"}})}},active:{value:!1},_checked:{value:null},checked:{set:function(e){this._checked=e},get:function(){return this._checked}},enabled:{value:!0},_radioButtonController:{value:null},radioButtonController:{set:function(e){this._radioButtonController&&this._radioButtonController.unregisterRadioButton(this),this._radioButtonController=e,e.registerRadioButton(this)},get:function(){return this._radioButtonController}},_pressComposer:{value:null},enterDocument:{value:function(e){e&&this.element.setAttribute("role","radio")}},draw:{value:function(){this.checked?this.element.setAttribute("aria-checked","true"):this.element.setAttribute("aria-checked","false")}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(){this.active=!1,this.enabled&&!this.checked&&(this.dispatchActionEvent(),this.checked=!0)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}}})}});