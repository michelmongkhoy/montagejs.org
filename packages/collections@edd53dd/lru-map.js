"use strict";function LruMap(e,t,n,a,s){return this instanceof LruMap?(n=n||Object.equals,a=a||Object.hash,s=s||Function.noop,this.contentEquals=n,this.contentHash=a,this.getDefault=s,this.store=new LruSet(void 0,t,function(e,t){return n(e.key,t.key)},function(e){return a(e.key)}),this.length=0,this.addEach(e),void 0):new LruMap(e,t,n,a,s)}var Shim=require("./shim"),LruSet=require("./lru-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=LruMap,Object.addEach(LruMap.prototype,GenericCollection.prototype),Object.addEach(LruMap.prototype,GenericMap.prototype),Object.addEach(LruMap.prototype,PropertyChanges.prototype),LruMap.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},LruMap.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},LruMap.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)};