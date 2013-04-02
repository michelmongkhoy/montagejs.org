"use strict";function SortedArrayMap(e,t,n,a){return this instanceof SortedArrayMap?(t=t||Object.equals,n=n||Object.compare,a=a||Function.noop,this.contentEquals=t,this.contentCompare=n,this.getDefault=a,this.store=new SortedArraySet(null,function(e,n){return t(e.key,n.key)},function(e,t){return n(e.key,t.key)}),this.length=0,this.addEach(e),void 0):new SortedArrayMap(e,t,n,a)}var Shim=require("./shim"),SortedArraySet=require("./sorted-array-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=SortedArrayMap,Object.addEach(SortedArrayMap.prototype,GenericCollection.prototype),Object.addEach(SortedArrayMap.prototype,GenericMap.prototype),Object.addEach(SortedArrayMap.prototype,PropertyChanges.prototype),SortedArrayMap.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)};