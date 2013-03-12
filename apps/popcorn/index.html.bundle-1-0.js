montageDefine("07a3bed","ui/composer/flow-translate-composer",{dependencies:["montage","ui/composer/translate-composer","core/event/event-manager","core/geometry/point","ui/dom"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/translate-composer").TranslateComposer,s=e("core/event/event-manager").defaultEventManager,o=e("core/geometry/point").Point,u=e("ui/dom").convertPointFromPageToNode,a=t.FlowTranslateComposer=r.create(i,{_scrollingMode:{value:"linear"},scrollingMode:{get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_startPageX:{value:null},_startPageY:{value:null},_pageX:{value:null},_pageY:{value:null},_pointerStartX:{value:null},_pointerStartY:{value:null},_contentOffsetX:{value:null},_contentOffsetY:{value:null},_start:{value:function(e,t){var n=window.getComputedStyle(this._element,null),r=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("border-left-width")),i=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("border-top-width")),s=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("padding-left")),a=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("padding-top")),f=u(this._element,o.create().init(e,t));this._pointerStartX=this._pointerX=f.x-r-s,this._pointerStartY=this._pointerY=f.y-i-a,this._contentOffsetX=this._startPageX-this._pointerStartX,this._contentOffsetY=this._startPageY-this._pointerStartY,this._computePointedElement(),this._startPageX=this._pageX=e,this._startPageY=this._pageY=t,this._startScroll=this._scroll,this._previousScrollDelta=0,this._scrollEnd=null,this.isAnimating=!1,window.Touch?(document.addEventListener("touchend",this,!0),document.addEventListener("touchmove",this,!0)):(document.addEventListener("mouseup",this,!0),document.addEventListener("mousemove",this,!0)),this._isFirstMove=!0}},_analyzeMovement:{value:function(e){var t=e.velocity,n,r,i;if(!t)return;n=t.speed,n>=this.startTranslateSpeed?this._stealPointer():(r=this.startPageX-e.pageX,i=this.startPageY-e.pageY,r*r+i*i>this.startTranslateRadius*this.startTranslateRadius&&this._stealPointer())}},_dispatchTranslateStart:{value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent("translateStart",!0,!0,null),n.scroll=this._scroll,this.dispatchEvent(n)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.scroll=this._scroll,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.scroll=this._scroll,this.dispatchEvent(e)}},_move:{value:function(e,t){var n;this._isFirstMove&&(this._dispatchTranslateStart(),this._isFirstMove=!1),this._pageX=e,this._pageY=t,this._scrollingMode==="drag"?(this._pointerX=e-this._contentOffsetX,this._pointerY=t-this._contentOffsetY,this._updateDragScroll()):this._updateLinearScroll(),this._closerIndex!==null,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(e){this.startTime=Date.now(),this.endX=this.startX=this._pageX,this.endY=this.startY=this._pageY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this._axis!="vertical"?this.momentumX=e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):this.momentumX=0,this._axis!="horizontal"?this.momentumY=e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):this.momentumY=0,this.endX=this.startX+this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY+this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||this._dispatchTranslateEnd(),this._releaseInterest()}},handleMousewheel:{value:function(){}},_scroll:{value:0},scroll:{get:function(){return this._scroll},set:function(e){this.minScroll!==null&&e<this.minScroll&&(e=this.minScroll),this.maxScroll!==null&&e>this.maxScroll&&(e=this.maxScroll),this._scroll=e}},minScroll:{value:null},maxScroll:{value:null},_flow:{value:null},flow:{get:function(){return this._flow},set:function(e){this._flow=e,this.component=e}},_updateScroll:{value:function(){this._scrollingMode==="linear"?this._updateLinearScroll():this._updateDragScroll()}},_updateLinearScroll:{value:function(){var e=500/this._flow._height,t=(this._pageX-this._startPageX)*this._linearScrollingVector[0]*e,n=(this._pageY-this._startPageY)*this._linearScrollingVector[1]*e,r=this._linearScrollingVector[0]*this._linearScrollingVector[0]+this._linearScrollingVector[1]*this._linearScrollingVector[1],i=(t+n)/r;this.scroll+=i-this._previousScrollDelta,this._previousScrollDelta=i}},_updateDragScroll:{value:function(){var e=(this._pointerX-this._pointerStartX)*this._lineVectorX,t=(this._pointerY-this._pointerStartY)*this._lineVectorY,n=this._lineVectorX*this._lineVectorX+this._lineVectorY*this._lineVectorY,r=(e+t)/n;this.scroll+=r-this._previousScrollDelta,this._previousScrollDelta=r;var i=this._flow,s=i._cameraPosition,o=i._splinePaths,u=o.length,a=this._closerIndex%u,f=this.flow._splinePaths[a],l=Math.floor(this._closerIndex/u)-this._scroll+this._flow._paths[a].headOffset,c,h,p,d,v,m,g,y,b=null,w=null,E=0,S,x,T=this._element.clientWidth*.5,N=this._element.clientHeight*.5,e=T-this._pointerX,t=N-this._pointerY,C=i.cameraTargetPoint[0]-s[0],k=i.cameraTargetPoint[1]-s[1],L=i.cameraTargetPoint[2]-s[2],A=-Math.atan2(C,L),O,M,_=this._pointerIntersectionPosition,D,P,H,B,j,F,I,q;O=L*Math.cos(A)-C*Math.sin(A),M=-Math.atan2(k,O),B=Math.sin(A),j=Math.cos(A),F=Math.sin(M),I=Math.cos(M),P=N/Math.tan(i.cameraFov*.008726646259972),q=0,g=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<g&&(g=S,b=q)),q-=.025;while(q>-6);b+.025>0&&(b=-0.025),q=b+.025,g=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<g&&(g=S,b=q)),q-=2e-4;while(q>b-.05);q=0,y=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<y&&(y=S,w=q)),q+=.025;while(q<6);w-.025<0&&(w=.025),q=w-.025,y=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<y&&(y=S,w=q)),q+=2e-4;while(q<w+.05);b?w?b*b<w*w?E=b:E=w:E=b:w&&(E=w),E>0?E<=.05&&(this.scroll=this._scroll-E):E>=-0.05&&(this.scroll=this._scroll-E)}},frame:{value:function(e){this.isAnimating&&this._animationInterval()}},convertCssPixelsPropertyStringToNumber:{value:function(e){return typeof e=="string"?e.substr(-2)==="px"?e.substr(0,e.length-2)*1:0:0}},_rayRectangleIntersection:{value:function(e,t,n,r){var i=e[1]*r[2]-e[2]*r[1],s=e[2]*r[0]-e[0]*r[2],o=e[0]*r[1]-e[1]*r[0],u=n[0]*i+n[1]*s+n[2]*o,a=1e-10,f,l,c=!1,h,p,d;return u<-a?(f=-t[0]*i-t[1]*s-t[2]*o,f<0&&f>u&&(h=n[1]*t[2]-n[2]*t[1],p=n[2]*t[0]-n[0]*t[2],d=n[0]*t[1]-n[1]*t[0],l=e[0]*h+e[1]*p+e[2]*d,l<0&&l>u&&(c=(r[0]*h+r[1]*p+r[2]*d)/u,c<0&&(c=!1)))):u>a&&(f=-t[0]*i-t[1]*s-t[2]*o,f>0&&f<u&&(h=n[1]*t[2]-n[2]*t[1],p=n[2]*t[0]-n[0]*t[2],d=n[0]*t[1]-n[1]*t[0],l=e[0]*h+e[1]*p+e[2]*d,l>0&&l<u&&(c=(r[0]*h+r[1]*p+r[2]*d)/u,c<0&&(c=!1)))),c}},_rayRectangleIntersectionPosition:{enumerable:!1,value:function(e,t,n,r){var i=e[1]*r[2]-e[2]*r[1],s=e[2]*r[0]-e[0]*r[2],o=e[0]*r[1]-e[1]*r[0],u=n[0]*i+n[1]*s+n[2]*o,a=this._flow._boundingBoxSize,f,l,c,h,p;return f=-t[0]*i-t[1]*s-t[2]*o,c=n[1]*t[2]-n[2]*t[1],h=n[2]*t[0]-n[0]*t[2],p=n[0]*t[1]-n[1]*t[0],l=e[0]*c+e[1]*h+e[2]*p,[f*a[0]/u-a[0]*.5,l*a[1]/u-a[1]*.5,0]}},_rotateXYZ:{enumerable:!1,value:function(e,t){var n=Math.cos(t[0]),r=Math.sin(t[0]),i=Math.cos(t[1]),s=Math.sin(t[1]),o=Math.cos(t[2]),u=Math.sin(t[2]),a,f,l,c;return f=n*e[1]-r*e[2],l=r*e[1]+n*e[2],c=i*e[0]+s*l,l=-s*e[0]+i*l,a=o*c-u*f,f=u*c+o*f,[a,f,l]}},_pointerIntersectionPosition:{enumerable:!1,value:null},_closerIndex:{enumerable:!1,value:null},_computePointedElement:{value:function(){var e=this._flow._splinePaths,t=e.length;if(t){var n=this._flow,r=n.cameraTargetPoint[0]-n.cameraPosition[0],i=n.cameraTargetPoint[2]-n.cameraPosition[2],s=Math.atan2(r,i),o=i*Math.cos(-s)-r*Math.sin(-s),u=Math.atan2(n.cameraTargetPoint[1]-n.cameraPosition[1],o),a=this._element.clientWidth*.5-this._pointerX,f=this._pointerY-this._element.clientHeight*.5,l=this._element.offsetHeight*.5/Math.tan(n.cameraFov*n._doublePI*(1/720)),c,h,p=[],d=n._repetition._indexMap,v=d.length,m,g,y,b=null,w=null,E=1e100,S,x,T,N,C,k,L,A,O;h=l*Math.cos(u)-f*Math.sin(u),f=l*Math.sin(u)+f*Math.cos(u),c=h*Math.cos(s)-a*Math.sin(s),a=h*Math.sin(s)+a*Math.cos(s),L=[a,f,c];for(O=0;O<e.length;O++)p[O]=e[O].transform([1,0,0,0,0,1,0,0,0,0,1,0,-n.cameraPosition[0],-n.cameraPosition[1],-n.cameraPosition[2],1]);for(O=0;O<v;O++)A=this._flow.offset(d[O]),m=A.pathIndex,y=A.slideTime,x=p[m]._convertSplineTimeToBezierIndexTime(y),x!==null&&(pos=p[m].getPositionAtIndexTime(x),T=e[m].getRotationAtIndexTime(x),C=this._rotateXYZ([n.boundingBoxSize[0],0,0],T),k=this._rotateXYZ([0,n.boundingBoxSize[1],0],T),N=[pos[0]-(C[0]+k[0])*.5,pos[1]-(C[1]+k[1])*.5,pos[2]-(C[2]+k[2])*.5],(S=this._rayRectangleIntersection(L,N,C,k))&&S<E&&(E=S,b=d[O],this._pointerIntersectionPosition=this._rayRectangleIntersectionPosition(L,N,C,k)));this._closerIndex=b,b!==null}}},test:{enumerable:!1,value:function(){var e=this._flow,t=this._bezierValue,n=e.cameraTargetPoint[0]-e.cameraPosition[0],r=e.cameraTargetPoint[1]-e.cameraPosition[1],i=e.cameraTargetPoint[2]-e.cameraPosition[2],s=Math.atan2(n,i),o,u,a,f,l,c,h,p,d,v,m=this._pointerX,g=this._pointerY;o=i*Math.cos(-s)-n*Math.sin(-s),u=Math.atan2(r,o),f=this._element.clientWidth*.5-m,l=g-this._element.clientHeight*.5,v=c=this._element.offsetHeight*.5/Math.tan(e.cameraFov*e._doublePI*(1/720)),d=c*Math.cos(u)-l*Math.sin(u),p=c*Math.sin(u)+l*Math.cos(u),h=f,c=d*Math.cos(s)-h*Math.sin(s),f=d*Math.sin(s)+h*Math.cos(s),l=p,this.t=a=this._raycastBezierTubes(e._cameraPosition[0],e._cameraPosition[1],e._cameraPosition[2],this._computeRotationValuesToXAxis(f,l,c));if(a[0]!==null){var y=[e._splinePaths[a[0]]._knots[a[1]][0]-e._cameraPosition[0],e._splinePaths[a[0]]._knots[a[1]][1]-e._cameraPosition[1],e._splinePaths[a[0]]._knots[a[1]][2]-e._cameraPosition[2],e._splinePaths[a[0]]._nextHandlers[a[1]][0]-e._cameraPosition[0],e._splinePaths[a[0]]._nextHandlers[a[1]][1]-e._cameraPosition[1],e._splinePaths[a[0]]._nextHandlers[a[1]][2]-e._cameraPosition[2],e._splinePaths[a[0]]._previousHandlers[a[1]+1][0]-e._cameraPosition[0],e._splinePaths[a[0]]._previousHandlers[a[1]+1][1]-e._cameraPosition[1],e._splinePaths[a[0]]._previousHandlers[a[1]+1][2]-e._cameraPosition[2],e._splinePaths[a[0]]._knots[a[1]+1][0]-e._cameraPosition[0],e._splinePaths[a[0]]._knots[a[1]+1][1]-e._cameraPosition[1],e._splinePaths[a[0]]._knots[a[1]+1][2]-e._cameraPosition[2]],b=[],f,l,c,h,p,d,w,E,S,x,T;for(T=0;T<12;T+=3)b[0]=y[T+2]*Math.sin(-s)+y[T]*Math.cos(-s),b[1]=y[T+1],b[2]=y[T+2]*Math.cos(-s)-y[T]*Math.sin(-s),y[T]=b[0],y[T+1]=b[2]*Math.sin(-u)+b[1]*Math.cos(-u),y[T+2]=b[2]*Math.cos(-u)-b[1]*Math.sin(-u);c=t(y[2],y[5],y[8],y[11],a[2]),d=t(y[2],y[5],y[8],y[11],a[2]+1e-8),f=t(y[0],y[3],y[6],y[9],a[2])/c,h=t(y[0],y[3],y[6],y[9],a[2]+1e-8)/d,w=(h-f)*v/1e-8,l=t(y[1],y[4],y[7],y[10],a[2])/c,p=t(y[1],y[4],y[7],y[10],a[2]+1e-8)/d,dy=(p-l)*v/1e-8,E=Math.sqrt(w*w+dy*dy),S=Math.atan2(dy,w),x=e._splinePaths[a[0]]._densities[a[1]]*(1-a[2])+e._splinePaths[a[0]]._densities[a[1]+1]*a[2],this._lineVectorX=Math.cos(-S)*E/x,this._lineVectorY=Math.sin(-S)*E/x}}},_lineVectorX:{enumerable:!1,value:Math.cos(Math.PI-.6)*80},_lineVectorY:{enumerable:!1,value:Math.sin(Math.PI-.6)*80},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_currentX:{enumerable:!1,value:0},_currentY:{enumerable:!1,value:0},_previousScrollDelta:{enumerable:!1,value:0},_startScroll:{enumerable:!1,value:0},_bezierValue:{enumerable:!1,value:function(e,t,n,r,i){var s=1-i;return e*s*s*s+t*3*s*s*i+n*3*s*i*i+r*i*i*i}},_computeRotationValuesToXAxis:{enumerable:!1,value:function(e,t,n){var r,i,s,o,u;return e*e<1e-100&&(e=1e-50),r=e*e+t*t,i=Math.sqrt(r),s=1/i,u=e*s,o=-t*s,s=1/Math.sqrt(r+n*n),[o,u,-n*s,i*s]}},_infinite:{enumerable:!1,value:1e100},_sphereIntersection:{enumerable:!1,value:function(e,t){var n=e[0]*t[1]-e[1]*t[0],r=e[0]*t[0]+e[1]*t[1],i=n*t[2]+e[2]*t[3],s=e[3]*e[3],o,u,a;return r*r+i*i<=s?(o=n*t[3]-e[2]*t[2],u=Math.sqrt(s-r*r-i*i),a=o-u,a<0?o+u<0?this._infinite:0:a):this._infinite}},_bezierTubeBoundingSphere:{enumerable:!1,value:function(e,t){var n=e[0],r=e[1],i=e[2],s=e[0],o=e[1],u=e[2],a,f,l,c,h;return h=e[3],h<n?n=h:h>s&&(s=h),h=e[4],h<r?r=h:h>o&&(o=h),h=e[5],h<i?i=h:h>u&&(u=h),h=e[6],h<n?n=h:h>s&&(s=h),h=e[7],h<r?r=h:h>o&&(o=h),h=e[8],h<i?i=h:h>u&&(u=h),h=e[9],h<n?n=h:h>s&&(s=h),h=e[10],h<r?r=h:h>o&&(o=h),h=e[11],h<i?i=h:h>u&&(u=h),a=(s-n)*.5,f=(o-r)*.5,l=(u-i)*.5,c=Math.sqrt(a*a+f*f+l*l)+t,[n+a,r+f,i+l,c]}},_raycastBezierTubes:{enumerable:!1,value:function(e,t,n,r){var i,s,o=[],u=this._infinite,a=null,f=0,l=null,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F=0,I=this._flow._splinePaths;for(j=0;j<I.length;j++)for(B=0;B<I[j]._knots.length-1;B++)o[F]=[I[j]._knots[B][0]-e,I[j]._knots[B][1]-t,I[j]._knots[B][2]-n,I[j]._nextHandlers[B][0]-e,I[j]._nextHandlers[B][1]-t,I[j]._nextHandlers[B][2]-n,I[j]._previousHandlers[B+1][0]-e,I[j]._previousHandlers[B+1][1]-t,I[j]._previousHandlers[B+1][2]-n,I[j]._knots[B+1][0]-e,I[j]._knots[B+1][1]-t,I[j]._knots[B+1][2]-n,0,1048576,B,j],F++;B=F-1;while(B>=0)v=o[B],g=(v[0]+v[3])*.5,y=(v[3]+v[6])*.5,b=(v[6]+v[9])*.5,x=(v[1]+v[4])*.5,T=(v[4]+v[7])*.5,N=(v[7]+v[10])*.5,A=(v[2]+v[5])*.5,O=(v[5]+v[8])*.5,M=(v[8]+v[11])*.5,w=(g+y)*.5,E=(y+b)*.5,S=(w+E)*.5,C=(x+T)*.5,k=(T+N)*.5,L=(C+k)*.5,_=(A+O)*.5,D=(O+M)*.5,P=(_+D)*.5,H=v[13]>>1,c=[v[0],v[1],v[2],g,x,A,w,C,_,S,L,P,v[12],H,v[14],v[15]],i=this._bezierTubeBoundingSphere(c,this._flow._elementsBoundingSphereRadius),h=[S,L,P,E,k,D,b,N,M,v[9],v[10],v[11],v[12]+H,H,v[14],v[15]],s=this._bezierTubeBoundingSphere(h,this._flow._elementsBoundingSphereRadius),p=this._sphereIntersection(i,r),d=this._sphereIntersection(s,r),p<u?d<u?p<d?H?(o[B++]=h,o[B]=c):(u=p-1e-5,f=v[12],a=v[14],l=v[15],B--):H?(o[B++]=c,o[B]=h):(u=d-1e-5,f=v[12],a=v[14],l=v[15],B--):H?o[B]=c:(u=p-1e-5,f=v[12],a=v[14],l=v[15],B--):d<u?H?o[B]=h:(u=d-1e-5,f=v[12],a=v[14],l=v[15],B--):B--;return[l,a,f*(1/1048576)]}},_translateStride:{enumerable:!1,value:null},translateStride:{serializable:!0,get:function(){return this._translateStride},set:function(e){this._translateStride=e,this.translateStrideX=e}},startStrideTime:{enumerable:!1,value:null},_scrollEnd:{enumerable:!1,value:null},_scrollStart:{enumerable:!1,value:null},_hasMomentum:{enumerable:!1,value:!0},_animationInterval:{enumerable:!1,value:function(){var e=Date.now(),t,n,r,i,s,o=!1,u,a,f;a=this.minScroll,f=this.maxScroll,this.minScroll=null,this.maxScroll=null,this._scrollEnd===null&&(this._scrollStart=this.scroll,this._pageX=this.endX,this._pageY=this.endY,this._updateScroll(),this._scrollEnd=this.scroll,this._pageX=this.startX,this._pageY=this.startY,this._updateScroll()),this.animateMomentum?(t=e-this.startTime,t<this.__momentumDuration?(this._pageX=this.startX+(this.momentumX+this.momentumX*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this._pageY=this.startY+(this.momentumY+this.momentumY*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this._updateScroll(),this.translateStrideX&&this.startStrideXTime===null&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.scroll-this._scrollEnd)<this.translateStrideX*.75)&&(this.startStrideXTime=e,this._strideStartScroll=this._scroll)):this.animateMomentum=!1):this.startStrideXTime===null&&(this.startStrideXTime=this.startTime,this._strideStartScroll=this._scrollStart),u=this.scroll,this.startStrideXTime&&e-this.startStrideXTime>0&&(r=Math.round(this._scrollEnd/this.translateStrideX),e-this.startStrideXTime<this.translateStrideDuration?(t=this._bezierTValue((e-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),n=(e-this.startStrideXTime)/this.translateStrideDuration,u=u*(1-n)+(r*this.translateStrideX*t+this._strideStartScroll*(1-t))*n,o=!0):u=r*this.translateStrideX),this.minScroll=a,this.maxScroll=f,u<a&&(u=a,this.animateMomentum=!1,o=!1),u>f&&(u=f,this.animateMomentum=!1,o=!1),this.scroll=u,this.isAnimating=this.animateMomentum||o,this.isAnimating?this.needsFrame=!0:(this._dispatchTranslateEnd(),this._scrollEnd=null)}}})}}),montageDefine("07a3bed","ui/composer/press-composer",{dependencies:["montage","ui/composer/composer","core/event/mutable-event"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/composer").Composer,s=e("core/event/mutable-event").MutableEvent,o=t.PressComposer=r.create(i,{load:{value:function(){window.Touch?this._element.addEventListener("touchstart",this,!0):this._element.addEventListener("mousedown",this,!0)}},unload:{value:function(){window.Touch?this._element.removeEventListener("touchstart",this):this._element.removeEventListener("mousedown",this)}},delegate:{value:null},cancelPress:{value:function(){return this._state===o.PRESSED?(this._dispatchPressCancel(),this._endInteraction(),!0):!1}},addEventListener:{value:function(e,t,n){i.addEventListener.call(this,e,t,n),e==="longPress"&&(this._shouldDispatchLongPress=!0)}},UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2},_state:{enumerable:!1,value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{enumerable:!1,value:!1},_longPressThreshold:{enumerable:!1,value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){this._longPressThreshold!==e&&(this._longPressThreshold=e)}},_longPressTimeout:{enumberable:!1,value:null},_observedPointer:{enumerable:!1,value:null},_startInteraction:{enumerable:!1,value:function(e){if("disabled"in this.component&&this.component.disabled||this._observedPointer!==null)return!1;var t=0,n;if(e.type==="touchstart"){n=e.changedTouches.length;for(;t<n;t++)if(!this.component.eventManager.componentClaimingPointer(e.changedTouches[t].identifier)){this._observedPointer=e.changedTouches[t].identifier;break}if(this._observedPointer===null)return!1;document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)}else e.type==="mousedown"&&(this._observedPointer="mouse",document.addEventListener("mouseup",this,!1),document.addEventListener("click",this,!1));this._element.addEventListener("dragstart",this,!1),this.component.eventManager.claimPointer(this._observedPointer,this),this._dispatchPressStart(e)}},_interpretInteraction:{value:function(e){var t,n,r;if(this._observedPointer===null){this._endInteraction(e);return}t=!this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this),n=e.target;while(n!==this._element&&n&&n.parentNode)n=n.parentNode;r=n===this._element;if(t&&e.type==="click"){e.preventDefault(),this._endInteraction(e);return}if(e.type==="mouseup"){if(!t&&r){this._dispatchPress(e),this._endInteraction(e);return}if(!t&&!r){this._dispatchPressCancel(e),this._endInteraction(e);return}t&&!r&&this._endInteraction(e)}}},_endInteraction:{value:function(e){if(!e||e.type==="touchend"||e.type==="touchcancel")document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this);else if(!e||e.type==="click"||e.type==="mouseup")document.removeEventListener("click",this),document.removeEventListener("mouseup",this);this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._state=o.UNPRESSED}},_changedTouchisObserved:{value:function(e){if(this._observedPointer===null)return!1;var t=0,n=event.changedTouches.length;for(;t<n;t++)if(event.changedTouches[t].identifier===this._observedPointer)return t;return!1}},surrenderPointer:{value:function(e,t){var n=this.callDelegateMethod("surrenderPointer",e,t);return typeof n!="undefined"&&n===!1?!1:(this._dispatchPressCancel(),!0)}},captureTouchstart:{value:function(e){this._startInteraction(e)}},handleTouchend:{value:function(e){if(this._observedPointer===null){this._endInteraction(e);return}this._changedTouchisObserved(e.changedTouches)!==!1&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._dispatchPress(e):e.preventDefault(),this._endInteraction(e))}},handleTouchcancel:{value:function(e){if(this._observedPointer===null||this._changedTouchisObserved(e.changedTouches)!==!1)this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(e),this._endInteraction(e)}},captureMousedown:{value:function(e){this._startInteraction(e)}},handleClick:{value:function(e){this._interpretInteraction(e)}},handleMouseup:{value:function(e){this._interpretInteraction(e)}},handleDragstart:{value:function(e){this._dispatchPressCancel(e),this._endInteraction()}},_createPressEvent:{enumerable:!1,value:function(e,t){var n,r,i;return t||(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!0,!0,null)),n=u.create(),n.event=t,n.type=e,n.pointer=this._observedPointer,t.changedTouches&&(i=this._changedTouchisObserved(t.changedTouches))!==!1&&(n.touch=t.changedTouches[i]),n}},_dispatchPressStart:{enumerable:!1,value:function(e){this._state=o.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",e));if(this._shouldDispatchLongPress){var t=this;this._longPressTimeout=setTimeout(function(){t._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this.dispatchEvent(this._createPressEvent("press",e)),this._state=o.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",e)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=o.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",e))}}}),u=function(){var e,t,n,i,s,o;e=r.create(r,{type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(e){this._event=e}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(e){this._touch=e}}}),t=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],n=["clientX","clientY","pageX","pageY","screenX","screenY","target"],i=function(e){return{get:function(){return this._event[e]}}},s=function(e){return{get:function(){return this._touch?this._touch[e]:this._event[e]}}};for(o=t.length-1;o>=0;o--)r.defineProperty(e,t[o],i(t[o]));for(o=n.length-1;o>=0;o--)r.defineProperty(e,n[o],s(n[o]));return e}()}}),montageDefine("85f8fc2","ui/details.reel/details.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <link rel=stylesheet type="text/css" href=details.css>\n\n    <script type="text/montage-serialization">{"title":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"title"}},"bindings":{"value":{"<-":"@owner.data.title"}}},"description":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"description"}},"bindings":{"value":{"<-":"@owner.data.synopsis"}}},"dates":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"dates-content"}},"bindings":{"value":{"<-":"@owner.data.release_dates.theater"}}},"runtime":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"runtime-content"}},"bindings":{"value":{"<-":"@owner.data.runtime"}}},"rentButton":{"prototype":"montage/ui/button.reel","properties":{"element":{"#":"rent-button"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"trailerButton":{"prototype":"montage/ui/button.reel","properties":{"element":{"#":"trailer-button"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"audienceScore":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"audience-score-content"}},"bindings":{"value":{"<-":"@owner.data.ratings.audience_score"}}},"criticsScore":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"critics-score-content"}},"bindings":{"value":{"<-":"@owner.data.ratings.critics_score"}}},"scroller":{"prototype":"montage/ui/scroller.reel","properties":{"element":{"#":"scroller"},"hasMomentum":true}},"owner":{"properties":{"element":{"#":"details"},"cImage":{"#":"c-image"},"aImage":{"#":"a-image"}}}}</script>\n</head>\n<body>\n    <div id=details class=details>\n      <div data-montage-id=moviepopup-container class=moviepopup-container>\n\n          <section>\n              <h2 data-montage-id=title class=title></h2>\n              <p>\n                  <time data-montage-id=dates-content class=score></time>\n                  Runtime <span data-montage-id=runtime-content class=score></span>\n                  Audience <span data-montage-id=a-image class="rt-icon icon-audience"></span>\n                           <span data-montage-id=audience-score-content class=score></span>\n                  Critics <span data-montage-id=c-image class="rt-icon icon-critics"></span>\n                          <span data-montage-id=critics-score-content class=score></span>\n              </p>\n              <div data-montage-id=scroller class=scroller>\n                  <p data-montage-id=description class=description></p>\n              </div>\n          </section>\n\n          <nav class=action-buttons>\n              <button data-montage-id=trailer-button class="button button-trailer">Trailer</button>\n              <button data-montage-id=rent-button class="button button-rent">Rent</button>\n          </nav>\n\n      </div>\n    </div>\n</body>\n</html>'}),montageDefine("07a3bed","ui/flow.reel/flow.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=flow.css>\n    <script type="text/montage-serialization">{"repetition":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"montage-flow-repetition"}},"bindings":{"objects":{"<-":"@owner.objects"},"contentController":{"<-":"@owner.contentController"},"isSelectionEnabled":{"<-":"@owner.isSelectionEnabled"}}},"flowTranslateComposer":{"prototype":"ui/composer/flow-translate-composer","properties":{"flow":{"@":"owner"},"invertAxis":true,"allowFloats":true,"minScroll":0},"bindings":{"maxScroll":{"<-":"@owner.length"},"_momentumDuration":{"<-":"@owner.momentumDuration"},"translateStride":{"<-":"@owner.stride"},"scrollingMode":{"<-":"@owner.scrollingMode"},"linearScrollingVector":{"<-":"@owner.linearScrollingVector"}}},"slot":{"prototype":"ui/slot.reel","properties":{"element":{"#":"montage-flow-slot"}},"bindings":{"content":{"<->":"@owner.slotContent"}}},"owner":{"properties":{"element":{"#":"montage-flow"},"_repetition":{"@":"repetition"},"_flowTranslateComposer":{"@":"flowTranslateComposer"},"_cameraElement":{"#":"montage-flow-camera"}},"bindings":{"scroll":{"<->":"@flowTranslateComposer.scroll"},"selectedIndexes":{"<-":"@repetition.selectedIndexes"},"activeIndexes":{"<-":"@repetition.activeIndexes"},"draggedSlideIndex":{"<-":"@flowTranslateComposer._closerIndex"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-flow class=montage-Flow>\n        <div data-montage-id=montage-flow-camera class=montage-Flow-camera>\n            <div data-montage-id=montage-flow-repetition class=montage-Flow-Repetition></div>\n            <div data-montage-id=montage-flow-slot class=montage-Flow-Slot></div>\n        </div>\n    </div>\n</body>\n</html>'}),montageDefine("85f8fc2","ui/details.reel/details",{dependencies:["montage/core/core","montage/ui/component"],factory:function(e,t,n){var r=e("montage/core/core").Montage,i=e("montage/ui/component").Component;t.Details=r.create(i,{_data:{value:null},data:{set:function(e){this._data=e,this.needsDraw=!0},get:function(){return this._data}},draw:{value:function(){if(this.data){var e=this.data.ratings.audience_rating,t=this.data.ratings.critics_rating;e=="Fresh"?this.aImage.style.backgroundPosition="0px 0px":e=="Rotten"?this.aImage.style.backgroundPosition="0px -25px":e=="Certified Fresh"?this.aImage.style.backgroundPosition="0px -50px":e=="Upright"?this.aImage.style.backgroundPosition="0px -75px":e=="Spilled"?this.aImage.style.backgroundPosition="0px -125px":this.aImage.style.backgroundPosition="0px -100px",t=="Fresh"?this.cImage.style.backgroundPosition="0px 0px":t=="Rotten"?this.cImage.style.backgroundPosition="0px -25px":t=="Certified Fresh"?this.cImage.style.backgroundPosition="0px -50px":t=="Upright"?this.cImage.style.backgroundPosition="0px -75px":t=="Spilled"?this.cImage.style.backgroundPosition="0px -125px":this.cImage.style.backgroundPosition="0px -100px"}}},handleRentButtonAction:{value:function(){window.open(this.data.links.alternate)}},handleTrailerButtonAction:{value:function(){this.dispatchEventNamed("openTrailer",!0,!0,this.data.title)}}})}}),montageDefine("07a3bed","ui/scroll-bars.reel/scroll-bars.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=scroll-bars.css>\n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"montage-scroll-bars"},"_top":{"#":"top"},"_bottomClip":{"#":"bottom-clip"},"_bottom":{"#":"bottom"},"_left":{"#":"left"},"_rightClip":{"#":"right-clip"},"_right":{"#":"right"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-scroll-bars class=montage-ScrollBars>\n        <div data-montage-id=top class=montage-ScrollBars-top></div>\n        <div data-montage-id=bottom-clip class=montage-ScrollBars-bottomClip>\n            <div data-montage-id=bottom class=montage-ScrollBars-bottom></div>\n        </div>\n        <div data-montage-id=left class=montage-ScrollBars-left></div>\n        <div data-montage-id=right-clip class=montage-ScrollBars-rightClip>\n            <div data-montage-id=right class=montage-ScrollBars-right></div>\n        </div>\n    </div>\n</body>\n</html>'}),montageDefine("07a3bed","ui/dynamic-text.reel/dynamic-text",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.DynamicText=r.create(i,{hasTemplate:{value:!1},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.needsDraw=!0)}},converter:{value:null},defaultValue:{value:""},_valueNode:{value:null},_RANGE:{value:document.createRange()},prepareForDraw:{value:function(){var e=this._RANGE;e.selectNodeContents(this.element),e.deleteContents(),this._valueNode=document.createTextNode(""),e.insertNode(this._valueNode)}},draw:{value:function(){var e=this._value,t=e||0===e?e:this.defaultValue;this.converter&&(t=this.converter.convert(t)),this._valueNode.data=t}}})}}),montageDefine("85f8fc2","ui/image.reel/image.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <script type="text/montage-serialization">{"owner":{"prototype":"ui/image.reel","properties":{"element":{"#":"Image"}}}}</script>\n</head>\n<body>\n    <div id=Image class=Image></div>\n</body>\n</html>'})
bundleLoaded(undefined)