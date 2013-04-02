montageDefine("45621ff","core/messageformat",{dependencies:[],factory:function(e,t,n){(function(e){function r(e,t){var n;e&&t&&(r.locale[e]=t),n=e=e||"en",t=t||r.locale[n=r.Utils.getFallbackLocale(e)];if(!t)throw new Error("Plural Function not found for locale: "+e);this.pluralFunc=t,this.locale=e,this.fallbackLocale=n}r.locale={en:function(e){return e===1?"one":"other"}},r.SafeString=function(e){this.string=e},r.SafeString.prototype.toString=function(){return this.string.toString()},r.Utils={numSub:function(e,t,n){return e.replace(/^#|[^\\]#/g,function(e){var r=e&&e.length===2?e.charAt(0):"";return r+'" + (function(){ var x = '+t+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+n+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(e){var t={"\n":"\\n",'"':'\\"'},n=/[\n"]/g,i=/[\n"]/,s=function(e){return t[e]||"&amp;"};return e instanceof r.SafeString?e.toString():e===null||e===!1?"":i.test(e)?e.replace(n,s):e},getFallbackLocale:function(e){var t=e.indexOf("-")>=0?"-":"_";while(!r.locale.hasOwnProperty(e)){e=e.substring(0,e.lastIndexOf(t));if(e.length===0)return null}return e}};var i=function(){var e={parse:function(e,t){function a(e,t,n){var r=e,i=n-e.length;for(var s=0;s<i;s++)r=t+r;return r}function f(e){var t=e.charCodeAt(0);if(t<=255)var n="x",r=2;else var n="u",r=4;return"\\"+n+a(t.toString(16).toUpperCase(),"0",r)}function l(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,f)+'"'}function c(e){if(r<s)return;r>s&&(s=r,o=[]),o.push(e)}function h(){var e="start@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=p(),s=i!==null?function(e){return{type:"program",program:e}}(i):null;if(s!==null)var o=s;else{var o=null;r=n}return u[e]={nextPos:r,result:o},o}function p(){var e="messageFormatPattern@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=r,s=T();if(s!==null){var o=[],a=d();while(a!==null){o.push(a);var a=d()}if(o!==null)var f=[s,o];else{var f=null;r=i}}else{var f=null;r=i}var l=f!==null?function(e,t){var n=[];e&&e.val&&n.push(e);for(var r in t)t.hasOwnProperty(r)&&n.push(t[r]);return{type:"messageFormatPattern",statements:n}}(f[0],f[1]):null;if(l!==null)var c=l;else{var c=null;r=n}return u[e]={nextPos:r,result:c},c}function d(){var t="messageFormatPatternRight@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r;if(e.substr(r,1)==="{"){var a="{";r+=1}else{var a=null;i&&c('"{"')}if(a!==null){var f=O();if(f!==null){var l=v();if(l!==null){var h=O();if(h!==null){if(e.substr(r,1)==="}"){var p="}";r+=1}else{var p=null;i&&c('"}"')}if(p!==null){var d=T();if(d!==null)var m=[a,f,l,h,p,d];else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}var g=m!==null?function(e,t){var n=[];return e&&n.push(e),t&&t.val&&n.push(t),{type:"messageFormatPatternRight",statements:n}}(m[2],m[5]):null;if(g!==null)var y=g;else{var y=null;r=s}return u[t]={nextPos:r,result:y},y}function v(){var t="messageFormatElement@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r,a=N();if(a!==null){var f=r;if(e.substr(r,1)===","){var l=",";r+=1}else{var l=null;i&&c('","')}if(l!==null){var h=m();if(h!==null)var p=[l,h];else{var p=null;r=f}}else{var p=null;r=f}var d=p!==null?p:"";if(d!==null)var v=[a,d];else{var v=null;r=o}}else{var v=null;r=o}var g=v!==null?function(e,t){var n={type:"messageFormatElement",argumentIndex:e};return t&&t.length?n.elementFormat=t[1]:n.output=!0,n}(v[0],v[1]):null;if(g!==null)var y=g;else{var y=null;r=s}return u[t]={nextPos:r,result:y},y}function m(){var t="elementFormat@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r,a=O();if(a!==null){if(e.substr(r,6)==="plural"){var f="plural";r+=6}else{var f=null;i&&c('"plural"')}if(f!==null){var l=O();if(l!==null){if(e.substr(r,1)===","){var h=",";r+=1}else{var h=null;i&&c('","')}if(h!==null){var p=O();if(p!==null){var d=g();if(d!==null){var v=O();if(v!==null)var m=[a,f,l,h,p,d,v];else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}var b=m!==null?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(m[1],m[5]):null;if(b!==null)var w=b;else{var w=null;r=s}if(w!==null)var E=w;else{var S=r,x=r,T=O();if(T!==null){if(e.substr(r,6)==="select"){var N="select";r+=6}else{var N=null;i&&c('"select"')}if(N!==null){var C=O();if(C!==null){if(e.substr(r,1)===","){var k=",";r+=1}else{var k=null;i&&c('","')}if(k!==null){var L=O();if(L!==null){var A=y();if(A!==null){var M=O();if(M!==null)var _=[T,N,C,k,L,A,M];else{var _=null;r=x}}else{var _=null;r=x}}else{var _=null;r=x}}else{var _=null;r=x}}else{var _=null;r=x}}else{var _=null;r=x}}else{var _=null;r=x}var D=_!==null?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(_[1],_[5]):null;if(D!==null)var P=D;else{var P=null;r=S}if(P!==null)var E=P;else var E=null}return u[t]={nextPos:r,result:E},E}function g(){var e="pluralStyle@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=b(),s=i!==null?function(e){return{type:"pluralStyle",val:e}}(i):null;if(s!==null)var o=s;else{var o=null;r=n}return u[e]={nextPos:r,result:o},o}function y(){var e="selectStyle@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=E(),s=i!==null?function(e){return{type:"selectStyle",val:e}}(i):null;if(s!==null)var o=s;else{var o=null;r=n}return u[e]={nextPos:r,result:o},o}function b(){var e="pluralFormatPattern@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=r,s=w(),o=s!==null?s:"";if(o!==null){var a=[],f=S();while(f!==null){a.push(f);var f=S()}if(a!==null)var l=[o,a];else{var l=null;r=i}}else{var l=null;r=i}var c=l!==null?function(e,t){var n={type:"pluralFormatPattern",pluralForms:t};return e?n.offset=e:n.offset=0,n}(l[0],l[1]):null;if(c!==null)var h=c;else{var h=null;r=n}return u[e]={nextPos:r,result:h},h}function w(){var t="offsetPattern@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r,a=O();if(a!==null){if(e.substr(r,6)==="offset"){var f="offset";r+=6}else{var f=null;i&&c('"offset"')}if(f!==null){var l=O();if(l!==null){if(e.substr(r,1)===":"){var h=":";r+=1}else{var h=null;i&&c('":"')}if(h!==null){var p=O();if(p!==null){var d=L();if(d!==null){var v=O();if(v!==null)var m=[a,f,l,h,p,d,v];else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}}else{var m=null;r=o}var g=m!==null?function(e){return e}(m[5]):null;if(g!==null)var y=g;else{var y=null;r=s}return u[t]={nextPos:r,result:y},y}function E(){var e="selectFormatPattern@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=[],s=S();while(s!==null){i.push(s);var s=S()}var o=i!==null?function(e){return{type:"selectFormatPattern",pluralForms:e}}(i):null;if(o!==null)var a=o;else{var a=null;r=n}return u[e]={nextPos:r,result:a},a}function S(){var t="pluralForms@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r,a=O();if(a!==null){var f=x();if(f!==null){var l=O();if(l!==null){if(e.substr(r,1)==="{"){var h="{";r+=1}else{var h=null;i&&c('"{"')}if(h!==null){var d=O();if(d!==null){var v=p();if(v!==null){var m=O();if(m!==null){if(e.substr(r,1)==="}"){var g="}";r+=1}else{var g=null;i&&c('"}"')}if(g!==null)var y=[a,f,l,h,d,v,m,g];else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}}else{var y=null;r=o}var b=y!==null?function(e,t){return{type:"pluralForms",key:e,val:t}}(y[1],y[5]):null;if(b!==null)var w=b;else{var w=null;r=s}return u[t]={nextPos:r,result:w},w}function x(){var t="stringKey@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=N(),a=o!==null?function(e){return e}(o):null;if(a!==null)var f=a;else{var f=null;r=s}if(f!==null)var l=f;else{var h=r,p=r;if(e.substr(r,1)==="="){var d="=";r+=1}else{var d=null;i&&c('"="')}if(d!==null){var v=L();if(v!==null)var m=[d,v];else{var m=null;r=p}}else{var m=null;r=p}var g=m!==null?function(e){return e}(m[1]):null;if(g!==null)var y=g;else{var y=null;r=h}if(y!==null)var l=y;else var l=null}return u[t]={nextPos:r,result:l},l}function T(){var e="string@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=r,s=O();if(s!==null){var o=[],a=r,f=O();if(f!==null){var l=C();if(l!==null){var c=O();if(c!==null)var h=[f,l,c];else{var h=null;r=a}}else{var h=null;r=a}}else{var h=null;r=a}while(h!==null){o.push(h);var a=r,f=O();if(f!==null){var l=C();if(l!==null){var c=O();if(c!==null)var h=[f,l,c];else{var h=null;r=a}}else{var h=null;r=a}}else{var h=null;r=a}}if(o!==null)var p=[s,o];else{var p=null;r=i}}else{var p=null;r=i}var d=p!==null?function(e,t){var n=[];for(var r=0;r<t.length;++r)for(var i=0;i<t[r].length;++i)n.push(t[r][i]);return{type:"string",val:e+n.join("")}}(p[0],p[1]):null;if(d!==null)var v=d;else{var v=null;r=n}return u[e]={nextPos:r,result:v},v}function N(){var t="id@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r,o=r,a=O();if(a!==null){if(e.substr(r).match(/^[a-zA-Z$_]/)!==null){var f=e.charAt(r);r++}else{var f=null;i&&c("[a-zA-Z$_]")}if(f!==null){var l=[];if(e.substr(r).match(/^[^ 	\n\r,.+={}]/)!==null){var h=e.charAt(r);r++}else{var h=null;i&&c("[^ 	\\n\\r,.+={}]")}while(h!==null){l.push(h);if(e.substr(r).match(/^[^ 	\n\r,.+={}]/)!==null){var h=e.charAt(r);r++}else{var h=null;i&&c("[^ 	\\n\\r,.+={}]")}}if(l!==null){var p=O();if(p!==null)var d=[a,f,l,p];else{var d=null;r=o}}else{var d=null;r=o}}else{var d=null;r=o}}else{var d=null;r=o}var v=d!==null?function(e,t){return e+(t?t.join(""):"")}(d[1],d[2]):null;if(v!==null)var m=v;else{var m=null;r=s}return u[t]={nextPos:r,result:m},m}function C(){var e="chars@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=r,i=k();if(i!==null){var s=[];while(i!==null){s.push(i);var i=k()}}else var s=null;var o=s!==null?function(e){return e.join("")}(s):null;if(o!==null)var a=o;else{var a=null;r=n}return u[e]={nextPos:r,result:a},a}function k(){var t="char@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r;if(e.substr(r).match(/^[^{}\\\0- 	\n\r]/)!==null){var o=e.charAt(r);r++}else{var o=null;i&&c("[^{}\\\\\\0- 	\\n\\r]")}var a=o!==null?function(e){return e}(o):null;if(a!==null)var f=a;else{var f=null;r=s}if(f!==null)var l=f;else{var h=r;if(e.substr(r,2)==="\\#"){var p="\\#";r+=2}else{var p=null;i&&c('"\\\\#"')}var d=p!==null?function(){return"\\#"}():null;if(d!==null)var v=d;else{var v=null;r=h}if(v!==null)var l=v;else{var m=r;if(e.substr(r,2)==="\\{"){var g="\\{";r+=2}else{var g=null;i&&c('"\\\\{"')}var y=g!==null?function(){return"{"}():null;if(y!==null)var b=y;else{var b=null;r=m}if(b!==null)var l=b;else{var w=r;if(e.substr(r,2)==="\\}"){var E="\\}";r+=2}else{var E=null;i&&c('"\\\\}"')}var S=E!==null?function(){return"}"}():null;if(S!==null)var x=S;else{var x=null;r=w}if(x!==null)var l=x;else{var T=r,N=r;if(e.substr(r,2)==="\\u"){var C="\\u";r+=2}else{var C=null;i&&c('"\\\\u"')}if(C!==null){var k=A();if(k!==null){var L=A();if(L!==null){var O=A();if(O!==null){var M=A();if(M!==null)var _=[C,k,L,O,M];else{var _=null;r=N}}else{var _=null;r=N}}else{var _=null;r=N}}else{var _=null;r=N}}else{var _=null;r=N}var D=_!==null?function(e,t,n,r){return String.fromCharCode(parseInt("0x"+e+t+n+r))}(_[1],_[2],_[3],_[4]):null;if(D!==null)var P=D;else{var P=null;r=T}if(P!==null)var l=P;else var l=null}}}}return u[t]={nextPos:r,result:l},l}function L(){var t="digits@"+r,n=u[t];if(n)return r=n.nextPos,n.result;var s=r;if(e.substr(r).match(/^[0-9]/)!==null){var o=e.charAt(r);r++}else{var o=null;i&&c("[0-9]")}if(o!==null){var a=[];while(o!==null){a.push(o);if(e.substr(r).match(/^[0-9]/)!==null){var o=e.charAt(r);r++}else{var o=null;i&&c("[0-9]")}}}else var a=null;var f=a!==null?function(e){return parseInt(e.join(""),10)}(a):null;if(f!==null)var l=f;else{var l=null;r=s}return u[t]={nextPos:r,result:l},l}function A(){var t="hexDigit@"+r,n=u[t];if(n)return r=n.nextPos,n.result;if(e.substr(r).match(/^[0-9a-fA-F]/)!==null){var s=e.charAt(r);r++}else{var s=null;i&&c("[0-9a-fA-F]")}return u[t]={nextPos:r,result:s},s}function O(){var e="_@"+r,t=u[e];if(t)return r=t.nextPos,t.result;var n=i;i=!1;var s=r,o=[],a=M();while(a!==null){o.push(a);var a=M()}var f=o!==null?function(e){return e.join("")}(o):null;if(f!==null)var l=f;else{var l=null;r=s}return i=n,i&&l===null&&c("whitespace"),u[e]={nextPos:r,result:l},l}function M(){var t="whitespace@"+r,n=u[t];if(n)return r=n.nextPos,n.result;if(e.substr(r).match(/^[ 	\n\r]/)!==null){var s=e.charAt(r);r++}else{var s=null;i&&c("[ 	\\n\\r]")}return u[t]={nextPos:r,result:s},s}function _(){function t(e){e.sort();var t=null,n=[];for(var r=0;r<e.length;r++)e[r]!==t&&(n.push(e[r]),t=e[r]);switch(n.length){case 0:return"end of input";case 1:return n[0];default:return n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}}var n=t(o),i=Math.max(r,s),u=i<e.length?l(e.charAt(i)):"end of input";return"Expected "+n+" but "+u+" found."}function D(){var t=1,n=1,r=!1;for(var i=0;i<s;i++){var o=e.charAt(i);o==="\n"?(r||t++,n=1,r=!1):o==="\r"|o==="\u2028"||o==="\u2029"?(t++,n=1,r=!0):(n++,r=!1)}return{line:t,column:n}}var n={_:O,"char":k,chars:C,digits:L,elementFormat:m,hexDigit:A,id:N,messageFormatElement:v,messageFormatPattern:p,messageFormatPatternRight:d,offsetPattern:w,pluralFormatPattern:b,pluralForms:S,pluralStyle:g,selectFormatPattern:E,selectStyle:y,start:h,string:T,stringKey:x,whitespace:M};if(t!==undefined){if(n[t]===undefined)throw new Error("Invalid rule name: "+l(t)+".")}else t="start";var r=0,i=!0,s=0,o=[],u={},P=n[t]();if(P===null||r!==e.length){var H=D();throw new this.SyntaxError(_(),H.line,H.column)}return P},toSource:function(){return this._source}};return e.SyntaxError=function(e,t,n){this.name="SyntaxError",this.message=e,this.line=t,this.column=n},e.SyntaxError.prototype=Error.prototype,e}();r.prototype.parse=function(){return i.parse.apply(i,arguments)},r.prototype.precompile=function(e){function s(e,o){o=o||{};var u="",a,f,l;switch(e.type){case"program":return s(e.program);case"messageFormatPattern":for(a=0;a<e.statements.length;++a)u+=s(e.statements[a],o);return i.begin+u+i.end;case"messageFormatPatternRight":for(a=0;a<e.statements.length;++a)u+=s(e.statements[a],o);return u;case"messageFormatElement":return o.pf_count=o.pf_count||0,u+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',e.output?u+='r += d["'+e.argumentIndex+'"];\n':(l="lastkey_"+(o.pf_count+1),u+="var "+l+' = "'+e.argumentIndex+'";\n',u+="var k_"+(o.pf_count+1)+"=d["+l+"];\n",u+=s(e.elementFormat,o)),u;case"elementFormat":return e.key==="select"?(u+=s(e.val,o),u+="r += (pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+" ] || pf_"+o.pf_count+'[ "other" ])( d );\n'):e.key==="plural"&&(u+=s(e.val,o),u+="if ( pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ] ) {\n',u+="r += pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ]( d ); \n',u+="}\nelse {\n",u+="r += (pf_"+o.pf_count+'[ MessageFormat.locale["'+t.fallbackLocale+'"]( k_'+(o.pf_count+1)+" - off_"+o.pf_count+" ) ] || pf_"+o.pf_count+'[ "other" ] )( d );\n',u+="}\n"),u;case"pluralFormatPattern":o.pf_count=o.pf_count||0,u+="var off_"+o.pf_count+" = "+e.offset+";\n",u+="var pf_"+o.pf_count+" = { \n",n=!0;for(a=0;a<e.pluralForms.length;++a)e.pluralForms[a].key==="other"&&(n=!1),f?u+=",\n":f=1,u+='"'+e.pluralForms[a].key+'" : '+s(e.pluralForms[a].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());u+="\n};\n";if(n)throw new Error("No 'other' form found in pluralFormatPattern "+o.pf_count);return u;case"selectFormatPattern":o.pf_count=o.pf_count||0,u+="var off_"+o.pf_count+" = 0;\n",u+="var pf_"+o.pf_count+" = { \n",n=!0;for(a=0;a<e.pluralForms.length;++a)e.pluralForms[a].key==="other"&&(n=!1),f?u+=",\n":f=1,u+='"'+e.pluralForms[a].key+'" : '+s(e.pluralForms[a].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());u+="\n};\n";if(n)throw new Error("No 'other' form found in selectFormatPattern "+o.pf_count);return u;case"string":return'r += "'+r.Utils.numSub(r.Utils.escapeExpression(e.val),"k_"+o.pf_count+" - off_"+(o.pf_count-1),o.pf_count)+'";\n';default:throw new Error("Bad AST type: "+e.type)}}var t=this,n=!1,i={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return s(e)},r.prototype.compile=function(e){return(new Function("MessageFormat","return "+this.precompile(this.parse(e))))(r)},typeof t!="undefined"?(typeof n!="undefined"&&n.exports&&(t=n.exports=r),t.MessageFormat=r):typeof define=="function"&&define.amd?define(function(){return r}):e.MessageFormat=r})(this)}})