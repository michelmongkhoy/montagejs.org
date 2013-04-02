montageDefine("45621ff","ui/flow-bezier-spline",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage,i=t.FlowBezierSpline=r.create(r,{didCreate:{value:function(){this._knots=[],this._densities=[]}},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e,this._parametersLength=this._parameters.length}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._densitySummation.length?this._maxTime=this._densitySummation[this._densitySummation.length-1]:this._maxTime=0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e=this.densities,t=e.length-1,n=0,r;this._densitySummation=[];for(r=0;r<t;r++)n+=(e[r]+e[r+1])/2,this._densitySummation[r]=n;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(e<0)return null;this._maxTime===null&&this.computeMaxTime();if(e>=this._maxTime)return null;var t=this._densitySummation,n=t.length,r=n-1,i=n>>1,s,o,u,a,f;while(i)r-i>=0&&t[r-i]>e?r-=i:i>>=1;return s=e-(r?t[r-1]:0),u=this._densities[r],a=this._densities[r+1],f=u-a,f<-1e-10||f>1e-10?o=(u-Math.sqrt(u*u+(a-u)*2*s))/f:o=s/u,[r,o]}},getPositionAtIndexTime:{value:function(e){var t=e[0],n=e[1],r=this._knots[t],i=this._nextHandlers[t],s=this._previousHandlers[t+1],o=this._knots[t+1],u=1-n,a=u*u*u,f=u*u*n*3,l=u*n*n*3,c=n*n*n;return[r[0]*a+i[0]*f+s[0]*l+o[0]*c,r[1]*a+i[1]*f+s[1]*l+o[1]*c,r[2]*a+i[2]*f+s[2]*l+o[2]*c]}},getRotationAtIndexTime:{value:function(e){var t=e[0],n=e[1],r,i,s,o=1-n,u=this._parameters;return typeof u.rotateX!="undefined"?r=u.rotateX.data[t]*o+u.rotateX.data[t+1]*n:r=0,typeof u.rotateY!="undefined"?i=u.rotateY.data[t]*o+u.rotateY.data[t+1]*n:i=0,typeof u.rotateZ!="undefined"?s=u.rotateZ.data[t]*o+u.rotateZ.data[t+1]*n:s=0,[r,i,s]}},getStyleAtIndexTime:{value:function(e){var t=e[0],n=e[1],r=this._parameters,i=1-n,s,o,u="";parameterKeys=Object.keys(r),parameterKeyCount=parameterKeys.length;for(s=0;s<parameterKeyCount;s++)o=parameterKeys[s],jParameter=r[o],jParameterData=jParameter.data,o!=="rotateX"&&o!=="rotateY"&&o!=="rotateZ"&&typeof jParameterData[t]!="undefined"&&typeof jParameterData[t+1]!="undefined"&&(u+=o+":"+((jParameterData[t]*i+jParameterData[t+1]*n)*1e5>>0)*1e-5+jParameter.units+";");return u}},transformVectorArray:{value:function(e,t){var n=e.length,r=[],i,s;for(s=0;s<n;s++)i=e[s],i&&(r[s]=[i[0]*t[0]+i[1]*t[4]+i[2]*t[8]+t[12],i[0]*t[1]+i[1]*t[5]+i[2]*t[9]+t[13],i[0]*t[2]+i[1]*t[6]+i[2]*t[10]+t[14]]);return r}},transform:{value:function(e){var t=i.create();return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,r,i){var s=1-i,o=s*e[0]+i*t[0],u=s*t[0]+i*n[0],a=s*n[0]+i*r[0],f=s*o+i*u,l=s*u+i*a,c=s*f+i*l,h=s*e[1]+i*t[1],p=s*t[1]+i*n[1],d=s*n[1]+i*r[1],v=s*h+i*p,m=s*p+i*d,g=s*v+i*m,y=s*e[2]+i*t[2],b=s*t[2]+i*n[2],w=s*n[2]+i*r[2],E=s*y+i*b,S=s*b+i*w,x=s*E+i*S;return[[e,[o,h,y],[f,v,E],[c,g,x]],[[c,g,x],[l,m,S],[a,d,w],r]]}},cubic:{enumerable:!1,value:function(e,t,n,r,i){return((e*i+t)*i+n)*i+r}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,r){var i=1e-100,s=Math;if(e<-i||e>i){var o=1/e,u=t*o,a=n*o,f=(3*a-u*u)*(1/9),l=(4.5*u*a-13.5*r*o-u*u*u)*(1/27),c=f*f*f+l*l;if(c>i){var h=s.sqrt(c);return[this.cubeRoot(l+h)+this.cubeRoot(l-h)+u*(-1/3)]}if(c>-i){if(l<-i||l>i){var p=this.cubeRoot(l),d=p*2+u*(-1/3),v=u*(-1/3)-p;return d<v?[d,v]:[v,d]}return[u*(-1/3)]}var m=s.acos(l/s.sqrt(-f*f*f))*(1/3),g=s.sqrt(-f),y=g*s.sin(m)*1.7320508075688772,b=u*(-1/3);return g*=s.cos(m),[b-g-y,b-g+y,b+g*2]}if(t<-i||t>i){var w=n*n-4*t*r;return w>=0?(w=s.sqrt(w),[(-n-w)/(2*t),(w-n)/(2*t)]):[]}return n<-i||n>i?[-r/n]:[]}},_halfPI:{enumerable:!1,value:Math.PI*.5},reflectionMatrix:{enumerable:!1,value:function(e,t,n,r){var i=Math,s=this._halfPI-i.atan2(t,e),o=i.sin(s),u=i.cos(s),a=this._halfPI-i.atan2(n,e*o+t*u),f=i.sin(a);return r[0]=f*o,r[1]=u*f,r[2]=i.cos(a),r}},reflectedY:{enumerable:!1,value:function(e,t,n,r){return e*r[0]+t*r[1]+n*r[2]}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,r,i,s,o,u,a){var f=this.reflectionMatrix(r[0],r[1],r[2],a),l=this.reflectedY(i[0]-e,i[1]-t,i[2]-n,f),c=this.reflectedY(s[0]-e,s[1]-t,s[2]-n,f),h=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,f),p=this.reflectedY(u[0]-e,u[1]-t,u[2]-n,f),d=(c-h)*3+p-l,v=(l+h)*3-6*c,m=(c-l)*3,g=this.cubicRealRoots(d,v,m,l),y,b=0,w,E=0,S=[];while(E<g.length&&g[E]<=0)E++;while(E<g.length&&g[E]<1)y=b,b=g[E],w=(y+b)*.5,this.cubic(d,v,m,l,w)>=0&&S.push([y,b]),E++;return w=(b+1)*.5,this.cubic(d,v,m,l,w)>=0&&S.push([b,1]),S}}})}})