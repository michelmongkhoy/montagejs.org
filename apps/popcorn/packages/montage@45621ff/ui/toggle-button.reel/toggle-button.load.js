montageDefine("45621ff","ui/toggle-button.reel/toggle-button",{dependencies:["montage","ui/component","ui/button.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/button.reel").Button,o=t.ToggleButton=r.create(s,{hasTemplate:{value:!0},_pressed:{value:!1},pressed:{get:function(){return this._pressed},set:function(e){this._pressed=!!e,this._label=this._pressed?this._pressedLabel:this._unpressedLabel,this.needsDraw=!0}},_unpressedLabel:{value:null},unpressedLabel:{get:function(){return this._unpressedLabel},set:function(e){this._unpressedLabel=e,this._pressed||(this.label=this._unpressedLabel,this.needsDraw=!0)}},_pressedLabel:{value:null},pressedLabel:{get:function(){return this._pressedLabel},set:function(e){this._pressedLabel=e,this._pressed&&(this.label=this._pressedLabel,this.needsDraw=!0)}},_pressedClass:{value:"pressed"},pressedClass:{get:function(){return this._pressedClass},set:function(e){this._pressedClass=e,this._pressed&&(this.needsDraw=!0)}},label:{get:function(){return Object.getPropertyDescriptor(s,"label").get.call(this)},set:function(e){Object.getPropertyDescriptor(s,"label").set.call(this,e),this._pressed===!0&&this._label===this._unpressedLabel?this.pressed=!1:this._pressed===!1&&this._label===this._pressedLabel&&(this.pressed=!0)}},setLabelInitialValue:{value:function(e){this._label===null&&(this._label=e)}},willPrepareForDraw:{value:function(){Object.getPrototypeOf(o).willPrepareForDraw.call(this),this._unpressedLabel===null&&this._label!==null&&(this._unpressedLabel=this._label),this._pressedLabel===null&&this._label!==null&&(this._pressedLabel=this._label)}},draw:{value:function(){Object.getPrototypeOf(o).draw.call(this),this._pressed?(this._element.classList.add(this._pressedClass),this._element.setAttribute("aria-pressed",!0)):(this._element.classList.remove(this._pressedClass),this._element.setAttribute("aria-pressed",!1))}},_dispatchActionEvent:{value:function(){this.pressed=!this._pressed,Object.getPrototypeOf(o)._dispatchActionEvent.call(this)}},toggle:{value:function(){this.pressed=!this._pressed}}})}})