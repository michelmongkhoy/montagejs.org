function compute(e,t,n){n.target=e,n.targetPath=t;var a=n.source=n.source||e,s=n.args,i=n.compute,r=n.parameters=n.parameters||a,o=n.document,l=n.components,c=n.trace,p=n.sourceScope=new Scope(a,null,r,o,l),h=n.targetScope=new Scope(e,null,r,o,l),u=s.map(function(e){return parse(e)}).map(function(e){if("rangeContent"===e.type){var t=compileObserver(e.args[0]);return Observers.makeRangeContentObserver(t)}if("mapContent"===e.type){var t=compileObserver(e.args[0]);return Observers.makeMapContentObserver(t)}return compileObserver(e)}),d=Observers.makeRangeContentObserver(Observers.makeObserversObserver(u)),g=Observers.makeComputerObserver(d,i,e),m=parse(t),f=compileBinder(m);return f(g,p,h,n,c?{sourcePath:s.join(", "),targetPath:t}:void 0)}var parse=require("./parse"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),Observers=require("./observers"),Scope=require("./scope");module.exports=compute;