montageDefine("45621ff","ui/rich-text-editor/rich-text-editor.reel/rich-text-editor",{dependencies:["montage","./rich-text-editor-base","./rich-text-sanitizer","core/change-notification","core/promise"],factory:function(e,t,n){var r=e("montage").Montage,i=e("./rich-text-editor-base").RichTextEditorBase,s=e("./rich-text-sanitizer").Sanitizer,o=e("core/change-notification").ChangeNotification,u=e("core/promise").Promise;t.RichTextEditor=r.create(i,{hasFocus:{enumerable:!0,get:function(){return this._hasFocus}},innerElement:{enumerable:!0,get:function(){return this._innerElement}},focus:{enumerable:!0,value:function(){this._needsFocus=!0,this.needsDraw=!0}},isActiveElement:{enumerable:!0,get:function(){return this._isActiveElement}},readOnly:{enumerable:!0,get:function(){return this._readOnly},set:function(e){this._readOnly!==e&&(this._readOnly=e,e&&this.hideOverlay(),this.needsDraw=!0)}},value:{get:function(){var e=this._innerElement,t="",n=null,r,i;return this._dirtyValue&&!this._value_locked&&(this._value_locked=!0,e&&(n=e.querySelector(".montage-Editor-overlay"),n&&(r=n.parentNode,i=n.nextSibling,r.removeChild(n)),t=e.innerHTML),t=="<br>"&&(t=""),this._sanitizer===undefined&&(this._sanitizer=s.create()),this._sanitizer&&(t=this._sanitizer.didGetValue(t,this._uniqueId)),n&&r.insertBefore(n,i),this._value!=t&&this.dispatchPropertyChange("value",function(){this._value=t}),this._dirtyValue=!1,this._value_locked=!1),this._value},set:function(e){if(this._value!==e||this._dirtyValue)this.hideOverlay(),this._sanitizer===undefined&&(this._sanitizer=s.create()),this._sanitizer&&(e=this._sanitizer.willSetValue(e,this._uniqueId)),this._value=e,this._dirtyValue=!1,this._dirtyTextValue=!0,this._needsAssingValue=!0,this.needsDraw=!0;this._needsOriginalContent=!1}},textValue:{enumerable:!0,get:function(){var e=this._innerElement,t="",n=null,r,i;return this._dirtyTextValue&&!this._textValue_locked&&(this._textValue_locked=!0,e&&(n=e.querySelector(".montage-Editor-overlay"),n&&(r=n.parentNode,i=n.nextSibling,r.removeChild(n)),t=this._innerText(e),n&&r.insertBefore(n,i)),this._textValue!=t&&this.dispatchPropertyChange("textValue",function(){this._textValue=t}),this._dirtyTextValue=!1,this._textValue_locked=!1),this._textValue},set:function(e){if(this._textValue!==e||this._dirtyTextValue)this.hideOverlay(),this._textValue=e,this._dirtyTextValue=!1,this._dirtyValue=!0,this._needsAssingValue=!0,this.needsDraw=!0;this._needsOriginalContent=!1}},delegate:{enumerable:!0,value:null},sanitizer:{enumerable:!1,get:function(){return this._sanitizer},set:function(e){this._sanitizer=e}},overlays:{enumerable:!1,get:function(){return this._overlays},set:function(e){this.hideOverlay(),e instanceof Array?(this._overlays=e,this._callOverlays("initWithEditor",this,!0)):this._overlays=null}},activeOverlay:{get:function(){return this._activeOverlay}},showOverlay:{value:function(e){var t=this._overlaySlot,n=t?t.element:null;n&&(this._activeOverlay=e,this._innerElement.appendChild(n.parentNode?n.parentNode.removeChild(n):n),t.attachToParentComponent(),t.content=e)}},hideOverlay:{value:function(e){var t=this._overlaySlot,n=t?t.element:null;n&&(n.parentNode&&n.parentNode.removeChild(n),this._activeOverlay=null,t.content=null)}},bold:{enumerable:!0,get:function(){return this._genericCommandGetter("bold","bold")},set:function(e){this._genericCommandSetter("bold","bold",e)}},underline:{enumerable:!0,get:function(){return this._genericCommandGetter("underline","underline")},set:function(e){this._genericCommandSetter("underline","underline",e)}},italic:{enumerable:!0,get:function(){return this._genericCommandGetter("italic","italic")},set:function(e){this._genericCommandSetter("italic","italic",e)}},strikeThrough:{enumerable:!1,get:function(){return this._genericCommandGetter("strikeThrough","strikethrough")},set:function(e){this._genericCommandSetter("strikeThrough","strikethrough",e)}},baselineShift:{enumerable:!0,get:function(){return this._baselineShift=this._baselineShiftGetState(),this._baselineShift},set:function(e){var t=this._baselineShiftGetState();t!=e&&(e=="baseline"?t=="subscript"?this.doAction("subscript"):t=="superscript"&&this.doAction("superscript"):e=="subscript"?this.doAction("subscript"):e=="superscript"&&this.doAction("superscript"))}},indent:{enumerable:!0,value:function(){this.doAction("indent")}},outdent:{enumerable:!0,value:function(){this.doAction("outdent")}},listStyle:{enumerable:!0,get:function(){return this._listStyle=this._listStyleGetState(),this._listStyle},set:function(e){var t=this._listStyleGetState();t!=e&&(e=="none"?this.doAction(t=="ordered"?"insertorderedlist":"insertunorderedlist"):e=="ordered"?this.doAction("insertorderedlist"):e=="unordered"&&this.doAction("insertunorderedlist"))}},justify:{enumerable:!0,get:function(){return this._justify=this._justifyGetState(),this._justify},set:function(e){var t=this._justifyGetState();t!=e&&["left","center","right","full"].indexOf(e)!==-1&&this.doAction("justify"+e)}},fontName:{enumerable:!0,get:function(){return this._fontName=this._fontNameGetState(),this._fontName},set:function(e){this._genericCommandSetter("fontName","fontname",e)}},fontSize:{enumerable:!0,get:function(){return this._genericCommandGetter("fontSize","fontsize")},set:function(e){this._genericCommandSetter("fontSize","fontsize",e)}},backColor:{enumerable:!0,get:function(){return this._genericCommandGetter("backColor","backcolor")},set:function(e){this._genericCommandSetter("backColor","backcolor",e===null?"inherit":e)}},foreColor:{enumerable:!0,get:function(){return this._genericCommandGetter("foreColor","forecolor")},set:function(e){this._genericCommandSetter("foreColor","forecolor",e===null?"inherit":e)}},selectAll:{enumerable:!0,value:function(){this.doAction("selectall")}},selectElement:{enumerable:!0,value:function(e){var t,n;t=this._nodeOffset(e),t!==-1&&(n=document.createRange(),n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),this._selectedRange=n)}},undoManager:{enumerable:!0,get:function(){return this._undoManager},set:function(e){this._undoManager=e}},undo:{enumerable:!0,value:function(){this.undoManager?this.undoManager.undo():this._undo()}},redo:{enumerable:!0,value:function(){this.undoManager?this.undoManager.redo():this._redo()}},execCommand:{enumerable:!1,value:function(e,t,n,r){var i=document.activeElement,s=this._innerElement,o=!1;return s?(s!=i&&s.focus(),n===undefined&&(n=!1),r=r||this._execCommandLabel[e]||"Typing",this._executingCommand=!0,document.execCommand(e,t,n)?(this._executingCommand=!1,["selectall"].indexOf(e)==-1?this.undoManager&&(this._stopTyping(),this.undoManager.register(r,u.resolve([this._undo,this,r,this._innerElement]))):this.markDirty(),this.handleSelectionchange(),o=!0):this._executingCommand=!1,s!=i&&i.focus(),o):!1}},markDirty:{enumerable:!1,value:function(){var e=this,t=function(){var t,n;clearTimeout(e._forceUpdateValuesTimeout),delete e._forceUpdateValuesTimeout,clearTimeout(e._updateValuesTimeout),delete e._updateValuesTimeout,e._dirtyValue&&(n=o.getPropertyChangeDescriptor(e,"value"),n&&(t=e.value)),e._dirtyTextValue&&(n=o.getPropertyChangeDescriptor(e,"textValue"),n&&(t=e.textValue)),e._dispatchEditorEvent("editorChange")};this._needsAssingValue||(this._dirtyValue=!0,this._dirtyTextValue=!0),this._forceUpdateValuesTimeout||(this._forceUpdateValuesTimeout=setTimeout(t,1e3)),this._updateValuesTimeout&&clearTimeout(this._updateValuesTimeout),this._updateValuesTimeout=setTimeout(t,100)}}})}})