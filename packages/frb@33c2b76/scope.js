function Scope(e,t,n,a,s,i){this.value=e,this.parent=t,this.parameters=n,this.document=a,this.components=s,this.beforeChange=i}module.exports=Scope,Scope.nest=function(e,t){return e=e||new Scope,new Scope(t,e,e.parameters,e.document,e.components,e.beforeChange)};