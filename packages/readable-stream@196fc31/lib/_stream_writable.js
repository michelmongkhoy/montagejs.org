function WriteReq(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function WritableState(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=e.decodeStrings===!1;this.decodeStrings=!a,this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){onwrite(t,e)},this.writecb=null,this.writelen=0,this.buffer=[]}function Writable(e){return this instanceof Writable||this instanceof require("./_stream_duplex")?(this._writableState=new WritableState(e,this),this.writable=!0,Stream.call(this),void 0):new Writable(e)}function writeAfterEnd(e,t,n){var a=Error("write after end");e.emit("error",a),process.nextTick(function(){n(a)})}function validChunk(e,t,n,a){var s=!0;if(!Buffer.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var i=new TypeError("Invalid non-string/buffer chunk");e.emit("error",i),process.nextTick(function(){a(i)}),s=!1}return s}function decodeChunk(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,n)),t}function writeOrBuffer(e,t,n,a,s){n=decodeChunk(t,n,a);var i=t.objectMode?1:n.length;t.length+=i;var r=t.length<t.highWaterMark;return t.needDrain=!r,t.writing?t.buffer.push(new WriteReq(n,a,s)):doWrite(e,t,i,n,a,s),r}function doWrite(e,t,n,a,s,i){t.writelen=n,t.writecb=i,t.writing=!0,t.sync=!0,e._write(a,s,t.onwrite),t.sync=!1}function onwriteError(e,t,n,a,s){n?process.nextTick(function(){s(a)}):s(a),e.emit("error",a)}function onwriteStateUpdate(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function onwrite(e,t){var n=e._writableState,a=n.sync,s=n.writecb;if(onwriteStateUpdate(n),t)onwriteError(e,n,a,t,s);else{var i=finishMaybe(e,n);i||n.bufferProcessing||!n.buffer.length||clearBuffer(e,n),a?process.nextTick(function(){afterWrite(e,n,i,s)}):afterWrite(e,n,i,s)}}function afterWrite(e,t,n,a){n||onwriteDrain(e,t),a()}function onwriteDrain(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function clearBuffer(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var a=t.buffer[n],s=a.chunk,i=a.encoding,r=a.callback,o=t.objectMode?1:s.length;if(doWrite(e,t,o,s,i,r),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function finishMaybe(e,t){return t.ending&&0===t.length&&!t.finished&&(t.finished=!0,e.emit("finish")),t.finished}function endWritable(e,t,n){t.ending=!0,finishMaybe(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}module.exports=Writable,Writable.WritableState=WritableState;var util=require("util"),assert=require("assert"),Stream=require("stream");util.inherits(Writable,Stream),Writable.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},Writable.prototype.write=function(e,t,n){var a=this._writableState,s=!1;return"function"==typeof t&&(n=t,t=null),t||(t="utf8"),"function"!=typeof n&&(n=function(){}),a.ended?writeAfterEnd(this,a,n):validChunk(this,a,e,n)&&(s=writeOrBuffer(this,a,e,t,n)),s},Writable.prototype._write=function(e,t,n){n(Error("not implemented"))},Writable.prototype.end=function(e,t,n){var a=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),a.ending||a.finished||endWritable(this,a,n)};