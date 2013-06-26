montageDefine("196fc31","lib/_stream_writable",{dependencies:["util","assert","stream","./_stream_duplex"],factory:function(e,t,n){function a(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function s(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=e.decodeStrings===!1;this.decodeStrings=!a,this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){d(t,e)},this.writecb=null,this.writelen=0,this.buffer=[]}function r(t){return this instanceof r||this instanceof e("./_stream_duplex")?(this._writableState=new s(t,this),this.writable=!0,w.call(this),void 0):new r(t)}function i(e,t,n){var a=Error("write after end");e.emit("error",a),process.nextTick(function(){n(a)})}function o(e,t,n,a){var s=!0;if(!Buffer.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var r=new TypeError("Invalid non-string/buffer chunk");e.emit("error",r),process.nextTick(function(){a(r)}),s=!1}return s}function l(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,n)),t}function c(e,t,n,s,r){n=l(t,n,s);var i=t.objectMode?1:n.length;t.length+=i;var o=t.length<t.highWaterMark;return t.needDrain=!o,t.writing?t.buffer.push(new a(n,s,r)):p(e,t,i,n,s,r),o}function p(e,t,n,a,s,r){t.writelen=n,t.writecb=r,t.writing=!0,t.sync=!0,e._write(a,s,t.onwrite),t.sync=!1}function h(e,t,n,a,s){n?process.nextTick(function(){s(a)}):s(a),e.emit("error",a)}function u(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function d(e,t){var n=e._writableState,a=n.sync,s=n.writecb;if(u(n),t)h(e,n,a,t,s);else{var r=v(e,n);r||n.bufferProcessing||!n.buffer.length||f(e,n),a?process.nextTick(function(){g(e,n,r,s)}):g(e,n,r,s)}}function g(e,t,n,a){n||m(e,t),a()}function m(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function f(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var a=t.buffer[n],s=a.chunk,r=a.encoding,i=a.callback,o=t.objectMode?1:s.length;if(p(e,t,o,s,r,i),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function v(e,t){return t.ending&&0===t.length&&!t.finished&&(t.finished=!0,e.emit("finish")),t.finished}function y(e,t,n){t.ending=!0,v(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}n.exports=r,r.WritableState=s;var b=e("util");e("assert");var w=e("stream");b.inherits(r,w),r.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},r.prototype.write=function(e,t,n){var a=this._writableState,s=!1;return"function"==typeof t&&(n=t,t=null),t||(t="utf8"),"function"!=typeof n&&(n=function(){}),a.ended?i(this,a,n):o(this,a,e,n)&&(s=c(this,a,e,t,n)),s},r.prototype._write=function(e,t,n){n(Error("not implemented"))},r.prototype.end=function(e,t,n){var a=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),a.ending||a.finished||y(this,a,n)}}});