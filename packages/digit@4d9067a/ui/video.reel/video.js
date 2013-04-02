var Montage=require("montage/core/core").Montage,Component=require("montage/ui/component").Component,PressComposer=require("montage/composer/press-composer").PressComposer,MediaController=require("montage/core/media-controller").MediaController;exports.Video=Montage.create(Component,{didCreate:{value:function(){this.addPathChangeListener("controller.status",this,"handleControllerStatusChange")}},enterDocument:{value:function(e){e&&(this.setupFirstPlay(),this.addOwnPropertyChangeListener("src",this),this.addOwnPropertyChangeListener("poster",this))}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePlayAction:{value:function(){this.controller.loadMedia(),this.controller.play(),this.classList.remove("digit-Video--firstPlay")}},handleVideoPress:{value:function(){this.controller.status===this.controller.EMPTY&&(this.controller.loadMedia(),this.classList.remove("digit-Video--firstPlay"),this._pressComposer.unload(),this._pressComposer.removeEventListener("pressStart",this,!1),this._pressComposer.removeEventListener("press",this,!1),this._pressComposer.removeEventListener("pressCancel",this,!1),this._pressComposer=null)}},handleTouchstart:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("touchend",this,!1)}},handleTouchend:{value:function(){this.setHideControlsTimeout()}},handleMousedown:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("mouseup",this,!1)}},handleMouseup:{value:function(){this.setHideControlsTimeout()}},handleControllerStatusChange:{value:function(e){this.controller&&(this._firstPlay||e===this.controller.PLAYING?this._firstPlay&&e===this.controller.PLAYING&&this.doFirstPlay():(this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls")))}},handleSrcChange:{value:function(){var e=this.controller.mediaElement,t=document.createElement("video");t.className=e.className,this.element.replaceChild(t,e),this.controller.mediaElement=t,this.setupFirstPlay()}},handlePosterChange:{value:function(){this.controller.showPoster()}},src:{value:"../../ui/video.reel/video.mov"},poster:{value:"../../ui/video.reel/poster.png"},controller:{value:null},setupFirstPlay:{value:function(){this.element.removeEventListener("touchstart",this,!1),this.element.removeEventListener("mousedown",this,!1),this._firstPlay=!0,this.controller.stop(),this.classList.add("digit-Video--firstPlay"),this.classList.remove("digit-Video--showControls"),this._pressComposer=PressComposer.create(),this._pressComposer.identifier="video",this.addComposerForElement(this._pressComposer,this.controller.mediaElement),this.controller.showPoster()}},doFirstPlay:{value:function(){this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("mousedown",this,!1),this._firstPlay=!1}},setHideControlsTimeout:{value:function(){var e=this;this.clearHideControlsTimeout(),this._hideControlsTimeout=setTimeout(function(){e.classList.remove("digit-Video--showControls")},2500)}},clearHideControlsTimeout:{value:function(){this._hideControlsTimeout&&clearTimeout(this._hideControlsTimeout)}},_firstPlay:{value:!0},_hideControlsTimeout:{value:null}});