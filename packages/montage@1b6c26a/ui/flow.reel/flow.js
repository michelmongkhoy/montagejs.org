var Montage=require("montage").Montage,Component=require("ui/component").Component,observeProperty=require("frb/observers").observeProperty,FlowBezierSpline=require("ui/flow.reel/flow-bezier-spline").FlowBezierSpline,RangeController=require("core/range-controller").RangeController,Flow=exports.Flow=Component.specialize({constructor:{value:function(){Component.constructor.call(this),this._visibleIndexes=[],this._slideOffsets={},this.defineBinding("_numberOfIterations",{"<-":"_frustrumController.content.length"}),this.addOwnPropertyChangeListener("_numberOfIterations",this)}},slotContent:{serializable:!0,value:null},_flowTranslateComposer:{value:null},_scrollingMode:{value:"linear"},scrollingMode:{serializable:!0,get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{seriazable:!0,get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_repetition:{value:null},momentumDuration:{serializable:!0,value:650},_splinePaths:{value:null},splinePaths:{enumerable:!1,get:function(){return this._splinePaths||(this._splinePaths=[]),this._splinePaths},set:function(e){this._splinePaths=e}},_appendPath:{value:function(e){var t,n,s=new FlowBezierSpline,a=e.knots,i=e.knots.length,r=[],o=[],l=[],p=[];s.parameters={};for(t in e.units)s.parameters[t]={data:[],units:e.units[t]};for(t=0;i>t;t++){r[t]=a[t].knotPosition,l[t]=a[t].previousHandlerPosition,o[t]=a[t].nextHandlerPosition,p[t]=a[t].previousDensity;for(n in e.units)s.parameters[n].data.push(a[t][n])}s.knots=r,s.previousHandlers=l,s.nextHandlers=o,s.densities=p,s._computeDensitySummation(),this.splinePaths.push(s),e.hasOwnProperty("headOffset")||(e.headOffset=0),e.hasOwnProperty("tailOffset")||(e.tailOffset=0),this._paths.push(e),this._updateLength()}},_paths:{value:null},paths:{get:function(){var e,t,n,s,a,i,r,o=this.splinePaths.length,l=[];for(a=0;o>a;a++){for(t=this.splinePaths[a].knots.length,e={knots:[],units:{}},i=0;t>i;i++)s={knotPosition:this.splinePaths[a].knots[i]},this.splinePaths[a].nextHandlers&&this.splinePaths[a].nextHandlers[i]&&(s.nextHandlerPosition=this.splinePaths[a].nextHandlers[i]),this.splinePaths[a].previousHandlers&&this.splinePaths[a].previousHandlers[i]&&(s.previousHandlerPosition=this.splinePaths[a].previousHandlers[i]),this.splinePaths[a].densities&&this.splinePaths[a].densities[i]&&(s.previousDensity=this.splinePaths[a].densities[i],s.nextDensity=this.splinePaths[a].densities[i]),e.knots.push(s);for(i in this.splinePaths[a].parameters)for(e.units[i]=this.splinePaths[a].parameters[i].units,n=this.splinePaths[a].parameters[i].data.length,r=0;n>r;r++)e.knots[r][i]=this.splinePaths[a].parameters[i].data[r];e.headOffset=this._paths[a].hasOwnProperty("headOffset")?this._paths[a].headOffset:0,e.tailOffset=this._paths[a].hasOwnProperty("tailOffset")?this._paths[a].tailOffset:0,l.push(e)}return l},set:function(e){var t,n=e.length;for(this._splinePaths=[],this._paths=[],t=0;n>t;t++)this._appendPath(e[t]);this.needsDraw=!0}},_cameraElement:{value:null},_cameraPosition:{value:[0,0,800]},cameraPosition:{get:function(){return this._cameraPosition},set:function(e){this._cameraPosition=e,this._isCameraUpdated=!0,this.needsDraw=!0}},_cameraTargetPoint:{value:[0,0,0]},cameraTargetPoint:{get:function(){return this._cameraTargetPoint},set:function(e){this._cameraTargetPoint=e,this._isCameraUpdated=!0,this.needsDraw=!0}},_cameraFov:{value:50},cameraFov:{get:function(){return this._cameraFov},set:function(e){this._cameraFov=e,this._isCameraUpdated=!0,this.needsDraw=!0}},_cameraRoll:{value:0},cameraRoll:{get:function(){return this._cameraRoll},set:function(e){this._cameraRoll=e,this._isCameraUpdated=!0,this.needsDraw=!0}},_stride:{value:0},stride:{get:function(){return this._stride},set:function(e){this._stride=e}},_scrollingTransitionDurationMiliseconds:{value:500},_scrollingTransitionDuration:{value:"500ms"},scrollingTransitionDuration:{get:function(){return this._scrollingTransitionDuration},set:function(e){var t,n,s=e+"";s.length,(n=/^(\d+)ms$/.exec(s))?t=+n[1]:(n=/^(\d+)s$/.exec(s))?t=1e3*+n[1]:(t=+s,s+="ms"),isNaN(t)||this._scrollingTransitionDurationMiliseconds===t||(this._scrollingTransitionDurationMiliseconds=t,this._scrollingTransitionDuration=s)}},hasSelectedIndexScrolling:{value:!1},selectedIndexScrollingOffset:{value:0},_handleSelectedIndexesChange:{value:function(e){this.hasSelectedIndexScrolling&&e[0]&&this.startScrollingIndexToOffset(Math.floor(this.contentController.content.indexOf(e[0].object)/this._paths.length),this.selectedIndexScrollingOffset)}},_timingFunctions:{value:{ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}},_scrollingTransitionTimingFunctionBezier:{value:[.25,.1,.25,1]},_scrollingTransitionTimingFunction:{value:"ease"},scrollingTransitionTimingFunction:{get:function(){return this._scrollingTransitionTimingFunction},set:function(e){var t,n,s=e+"";if(this._timingFunctions.hasOwnProperty(s))this._scrollingTransitionTimingFunction=s,this._scrollingTransitionTimingFunctionBezier=this._timingFunctions[s];else if("cubic-bezier("===s.substr(0,13)&&")"===s.substr(s.length-1,1)&&(t=s.substr(13,s.length-14).split(","),4===t.length)){for(n=0;4>n;n++)if(t[n]-=0,isNaN(t[n]))return;0>t[0]?t[0]=0:t[0]>1&&(t[0]=1),0>t[2]?t[2]=0:t[2]>1&&(t[2]=1),this._scrollingTransitionTimingFunction="cubic-bezier("+t+")",this._scrollingTransitionTimingFunctionBezier=t}}},_computeCssCubicBezierValue:{value:function(e,t){var n,s,a,i=.5,r=.25;for(a=0;20>a;a++)n=i*i,s=1-i,3*(s*s*i*t[0]+s*n*t[2])+n*i>e?i-=r:i+=r,r*=.5;return n=i*i,s=1-i,3*(s*s*i*t[1]+s*n*t[3])+n*i}},_isTransitioningScroll:{value:!1},stopScrolling:{value:function(){this._isTransitioningScroll=!1}},startScrollingIndexToOffset:{value:function(e,t){this._scrollingOrigin=this.scroll,this._scrollingDestination=e-t,this._scrollingDestination>this._length?this._scrollingDestination=this._length:0>this._scrollingDestination&&(this._scrollingDestination=0),this._isScrolling=!0,this._scrollingStartTime=Date.now(),this._isTransitioningScroll=!0,this.needsDraw=!0}},_isCameraUpdated:{value:!0},_width:{value:null},_height:{value:null},_boundingBoxSize:{value:[200,200,0]},boundingBoxSize:{serializable:!0,get:function(){return this._boundingBoxSize},set:function(e){this._boundingBoxSize=e,this.elementsBoundingSphereRadius=.5*Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}},_elementsBoundingSphereRadius:{value:283},elementsBoundingSphereRadius:{get:function(){return this._elementsBoundingSphereRadius},set:function(e){this._elementsBoundingSphereRadius!==e&&(this._elementsBoundingSphereRadius=e,this.needsDraw=!0)}},_halfPI:{value:.5*Math.PI},_doublePI:{value:2*Math.PI},_computeFrustumNormals:{value:function(){var e,t,n,s,a,i,r,o,l,p=.5*this.cameraFov*this._doublePI/360,c=Math.sin(p),u=Math.cos(p),h=c*this._width/this._height,d=this.cameraTargetPoint[0]-this.cameraPosition[0],m=this.cameraTargetPoint[1]-this.cameraPosition[1],g=this.cameraTargetPoint[2]-this.cameraPosition[2],f=this._halfPI-Math.atan2(g,d),v=d*Math.sin(f)+g*Math.cos(f),b=this._halfPI-Math.atan2(v,m),y=[[u,0,h],[-u,0,h],[0,u,c],[0,-u,c]],w=[];for(l=0;4>l;l++)o=y[l],e=o[0],t=o[1]*Math.cos(-b)-o[2]*Math.sin(-b),n=o[1]*Math.sin(-b)+o[2]*Math.cos(-b),s=e*Math.cos(-f)-n*Math.sin(-f),a=t,i=e*Math.sin(-f)+n*Math.cos(-f),r=1/Math.sqrt(s*s+a*a+i*i),w.push([s*r,a*r,i*r]);return w}},_segmentsIntersection:{value:function(e,t){for(var n,s,a=0,i=0,r=[];e.length>a&&t.length>i;)e[a][0]>=t[i][1]?i++:e[a][1]<=t[i][0]?a++:(n=e[a][0]>=t[i][0]?e[a][0]:t[i][0],s=e[a][1]<=t[i][1]?e[a][1]:t[i][1],r.push([n,s]),e[a][1]<t[i][1]?a++:e[a][1]>t[i][1]?i++:(a++,i++));return r}},_computeVisibleRange:{value:function(e){var t,n,s,a,i=e._knots.length-1,r=this._cameraPosition[0],o=this._cameraPosition[1],l=this._cameraPosition[2],p=this._computeFrustumNormals(),c=[],u=[],h=[],d=this._elementsBoundingSphereRadius,m=e._knots,g=e._nextHandlers,f=e._previousHandlers,v=[],b=[];for(s=0;i>s;s++)if(t=p[0],c=e.directedPlaneBezierIntersection(r-t[0]*d,o-t[1]*d,l-t[2]*d,p[0],m[s],g[s],f[s+1],m[s+1],v),c.length&&(t=p[1],u=e.directedPlaneBezierIntersection(r-t[0]*d,o-t[1]*d,l-t[2]*d,p[1],m[s],g[s],f[s+1],m[s+1],v),u.length&&(n=this._segmentsIntersection(c,u),n.length&&(t=p[2],c=e.directedPlaneBezierIntersection(r-t[0]*d,o-t[1]*d,l-t[2]*d,p[2],m[s],g[s],f[s+1],m[s+1],v),n=this._segmentsIntersection(c,n),n.length))))for(t=p[3],c=e.directedPlaneBezierIntersection(r-t[0]*d,o-t[1]*d,l-t[2]*d,p[3],m[s],g[s],f[s+1],m[s+1],v),n=this._segmentsIntersection(c,n),a=0;n.length>a;a++)h.push([s,n[a][0],n[a][1]]);var y,w,_,E,x,T,j,M=e._densities;for(s=0;h.length>s;s++)y=M[h[s][0]],w=M[h[s][0]+1],_=h[s][0]?e._densitySummation[h[s][0]-1]:0,E=h[s][1],x=h[s][2],T=.5*(w-y)*E*E+E*y+_,j=.5*(w-y)*x*x+x*y+_,b.push([T,j]);return b}},enterDocument:{value:function(e){if(e){var t=this;window.addEventListener("resize",function(){t._isCameraUpdated=!0,t.needsDraw=!0},!1),this._repetition.addRangeAtPathChangeListener("selectedIterations",this,"_handleSelectedIndexesChange")}}},_updateVisibleIndexes:{value:function(e,t){var n,s,a=this._visibleIndexes,i=a&&!isNaN(a.length)?a.length:0,r=[];for(s=0;i>s;s++)"number"==typeof t[a[s]]?e[t[a[s]]]=null:r.push(s);for(s=n=0;r.length>n&&e.length>s;s++)null!==e[s]&&(a.set(r[n],e[s]),n++);for(n=i;e.length>s;s++)null!==e[s]&&(a.set(n,e[s]),n++)}},willDraw:{value:function(){var e,t,n,s,a,i,r,o,l,p,c,u,h,d=[],m={},g=this._paths,f=g.length,v=this.splinePaths;if(this._isTransitioningScroll&&(u=(Date.now()-this._scrollingStartTime)/this._scrollingTransitionDurationMiliseconds,h=this._computeCssCubicBezierValue(u,this._scrollingTransitionTimingFunctionBezier),1>u?this.scroll=this._scrollingOrigin+(this._scrollingDestination-this._scrollingOrigin)*h:(this.scroll=this._scrollingDestination,this._isTransitioningScroll=!1)),this._width=this._element.clientWidth,this._height=this._element.clientHeight,v.length)for(l=this._numberOfIterations%f,p=(this._numberOfIterations-l)/f,a=0;f>a;a++)for(c=p+(l>a?1:0),e=this._computeVisibleRange(v[a]),v[a]._computeDensitySummation(),i=this._scroll-g[a].headOffset,n=0;e.length>n;n++)for(r=Math.ceil(e[n][0]+i),o=Math.ceil(e[n][1]+i),0>r&&(r=0),o>c&&(o=c),s=r;o>s;s++)t=s*f+a,m[t]===void 0&&(m[t]=d.length,d.push(t));this._updateVisibleIndexes(d,m)}},draw:{value:function(e){var t,n,s,a,i,r,o,l,p,c,u,h,d,m,g=this._repetition._drawnIterations.length,f=(this._paths.length,this._visibleIndexes),v=e,b=6,y=this.lastDrawTime?.018*(v-this.lastDrawTime)*this._elasticScrollingSpeed:0,w=1-y/b,_=this._minSlideOffsetIndex,E=this._maxSlideOffsetIndex;if(this.lastDrawTime=v,this._hasElasticScrolling)for(a=0;b>a;a++){for(t=this._draggedSlideIndex-1;t>=_;t--)h=this._getSlideOffset(t),d=this._getSlideOffset(t+1),m=(h-d)*w+d,m>0&&(m=0),this._updateSlideOffset(t,m);for(t=this._draggedSlideIndex+1;E>=t;t++)h=this._getSlideOffset(t),d=this._getSlideOffset(t-1),m=(h-d)*w+d,0>m&&(m=0),this._updateSlideOffset(t,m)}if(this._isTransitioningScroll&&(this.needsDraw=!0),this._isCameraUpdated){var x,T,j=.5*Math.tan((90-.5*this.cameraFov)*this._doublePI/360)*this._height,M=this.cameraTargetPoint[0]-this.cameraPosition[0],k=this.cameraTargetPoint[1]-this.cameraPosition[1],P=this.cameraTargetPoint[2]-this.cameraPosition[2],S=Math.atan2(-M,-P);x=M*-Math.sin(-S)+P*Math.cos(-S),T=Math.atan2(-k,-x),this._element.style.webkitPerspective=j+"px",this._cameraElement.style.webkitTransform="translate3d(0,0,"+j+"px)rotateX("+T+"rad)rotateY("+-S+"rad)"+"translate3d("+-this.cameraPosition[0]+"px,"+-this.cameraPosition[1]+"px,"+-this.cameraPosition[2]+"px)",this._isCameraUpdated=!1}if(this.splinePaths.length)for(t=0;g>t;t++)u=this.offset(f[t]),o=u.pathIndex,n=u.slideTime,p=this._splinePaths[o]._convertSplineTimeToBezierIndexTime(n),i=this._repetition._drawnIterations[t],r=i.cachedFirstElement||i.firstElement,null!==p?(l=this._splinePaths[o].getPositionAtIndexTime(p),c=this._splinePaths[o].getRotationAtIndexTime(p),s="-webkit-transform:translate3d("+1e-5*(1e5*l[0]>>0)+"px,"+1e-5*(1e5*l[1]>>0)+"px,"+1e-5*(1e5*l[2]>>0)+"px)"+(c[2]?"rotateZ("+1e-5*(1e5*c[2]>>0)+"rad)":"")+(c[1]?"rotateY("+1e-5*(1e5*c[1]>>0)+"rad)":"")+(c[0]?"rotateX("+1e-5*(1e5*c[0]>>0)+"rad)":"")+";"+this._splinePaths[o].getStyleAtIndexTime(p),r.setAttribute("style",s)):r.setAttribute("style","-webkit-transform:scale3d(0,0,0);opacity:0");else for(t=0;g>t;t++)i=this._repetition._drawnIterations[t],r=i.cachedFirstElement||i.firstElement,r.setAttribute("style","-webkit-transform:scale3d(0,0,0);opacity:0");this._slideOffsetsLength&&(this.needsDraw=!0)}},_updateLength:{value:function(){if(this._paths){var e,t,n,s,a,i,r=this._paths.length,o=0;if(r>0){for(a=this._numberOfIterations%r,s=(this._numberOfIterations-a)/r,i=0;r>i;i++)e=this._paths[i],t=s+(a>i?1:0),n=t-e.tailOffset+e.headOffset-1,n>o&&(o=n);this.length=o}this.needsDraw=!0}}},_numberOfIterations:{value:0},handle_numberOfIterationsChange:{value:function(){this._updateLength()}},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new RangeController).initWithContent(e)}},contentController:{value:null},isSelectionEnabled:{value:null},selectedIndexes:{serializable:!1,value:null},activeIndexes:{serializable:!1,value:null},observeProperty:{value:function(e,t,n,s,a){return"currentIteration"!==e&&"objectAtCurrentIteration"!==e&&"contentAtCurrentIteration"!==e?observeProperty(this,e,t,n,s,a):this._repetition?this._repetition.observeProperty(e,t,n,s,a):void 0}},templateDidLoad:{value:function(){var e=this;this._repetition.willDraw=function(){e.needsDraw=!0}}},_length:{value:0},length:{get:function(){return this._length},set:function(e){this._length=0>e?0:e}},_scroll:{value:0},_elasticScrollingRange:{value:20},_hasElasticScrolling:{value:!1},hasElasticScrolling:{get:function(){return this._hasElasticScrolling},set:function(e){this._hasElasticScrolling=e?!0:!1}},_slideOffsets:{value:null},_slideOffsetsLength:{value:0},_maxSlideOffsetIndex:{value:-1},_minSlideOffsetIndex:{value:2e9},_updateSlideOffset:{value:function(e,t){var n=1e-4;e>=0&&(-n>t||t>n?(this._slideOffsets[e]===void 0&&(this._slideOffsetsLength++,this._minSlideOffsetIndex>e&&(this._minSlideOffsetIndex=e),e>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=e)),this._slideOffsets[e]=t):this._removeSlideOffset(e))}},_incrementSlideOffset:{value:function(e,t){this._updateSlideOffset(e,this._getSlideOffset(e)+t)}},_removeSlideOffset:{value:function(e){if(this._slideOffsets[e]!==void 0){var t,n,s;if(delete this._slideOffsets[e],this._slideOffsetsLength--,e===this._minSlideOffsetIndex)for(t=Object.keys(this._slideOffsets),this._minSlideOffsetIndex=2e9,n=0;t.length>n;n++)s=0|t[n],this._minSlideOffsetIndex>s&&(this._minSlideOffsetIndex=s);if(e===this._maxSlideOffsetIndex)for(t===void 0&&(t=Object.keys(this._slideOffsets)),this._maxSlideOffsetIndex=-1,n=0;t.length>n;n++)s=0|t[n],s>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=s)}}},_getSlideOffset:{value:function(e){return this._minSlideOffsetIndex>e?e=this._minSlideOffsetIndex>this._draggedSlideIndex?this._draggedSlideIndex:this._minSlideOffsetIndex:e>this._maxSlideOffsetIndex&&(e=this._maxSlideOffsetIndex<this._draggedSlideIndex?this._draggedSlideIndex:this._maxSlideOffsetIndex),this._slideOffsets[e]!==void 0?this._slideOffsets[e]:0}},scroll:{get:function(){return this._scroll},set:function(e){if(0>e&&(e=0),e>this.length&&(e=this.length),this._hasElasticScrolling&&null!==this._draggedSlideIndex){var t,n,s=this._draggedSlideIndex-this._elasticScrollingRange,a=this._draggedSlideIndex+this._elasticScrollingRange;for(s>this._minSlideOffsetIndex&&(s=this._minSlideOffsetIndex),this._maxSlideOffsetIndex>a&&(a=this._maxSlideOffsetIndex),n=e-this._scroll,0>s&&(s=0),t=s;a>=t;t++)t!==this._draggedSlideIndex?this._incrementSlideOffset(t,n):this._removeSlideOffset(t);this._scroll=e}else this._scroll=e;this.needsDraw=!0}},_isInputEnabled:{value:!0},isInputEnabled:{get:function(){return this._isInputEnabled},set:function(e){this._isInputEnabled=e?!0:!1}},_draggedSlideIndex:{value:0},draggedSlideIndex:{get:function(){return this._draggedSlideIndex},set:function(e){if(e!==this._draggedSlideIndex){if(null!==e){var t,n=this._getSlideOffset(e),s=this._minSlideOffsetIndex,a=this._maxSlideOffsetIndex;for(this._incrementSlideOffset(this._draggedSlideIndex,-n),t=s;a>=t;t++)t!==this._draggedSlideIndex&&this._incrementSlideOffset(t,-n);this._removeSlideOffset(e),this._scroll-=n,this._flowTranslateComposer._scroll=this._scroll}this._draggedSlideIndex=e,this.needsDraw=!0}}},_elasticScrollingSpeed:{value:1},elasticScrollingSpeed:{get:function(){return this._elasticScrollingSpeed},set:function(e){this._elasticScrollingSpeed=parseFloat(e)}},lastDrawTime:{value:null},offset:{enumerable:!1,value:function(e){var t=this._paths.length,n=e%t,s=Math.floor(e/t)-this._scroll+this._paths[n].headOffset;return{pathIndex:n,slideTime:s+this._getSlideOffset(e)}}},serializeSelf:{value:function(e){e.setAllProperties();for(var t,n=this.originalContent,s=0;t=n[s];s++)t.component&&e.addObject(t.component)}}});