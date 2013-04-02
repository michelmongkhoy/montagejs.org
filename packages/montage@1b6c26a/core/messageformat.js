(function(n){function s(n,e){var a;if(n&&e&&(s.locale[n]=e),a=n=n||"en",e=e||s.locale[a=s.Utils.getFallbackLocale(n)],!e)throw Error("Plural Function not found for locale: "+n);this.pluralFunc=e,this.locale=n,this.fallbackLocale=a}s.locale={en:function(n){return 1===n?"one":"other"}},s.SafeString=function(n){this.string=n},s.SafeString.prototype.toString=function(){return""+this.string},s.Utils={numSub:function(n,s,e){return n.replace(/^#|[^\\]#/g,function(n){var a=n&&2===n.length?n.charAt(0):"";return a+'" + (function(){ var x = '+s+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+e+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(n){var e={"\n":"\\n",'"':'\\"'},a=/[\n"]/g,t=/[\n"]/,o=function(n){return e[n]||"&amp;"};return n instanceof s.SafeString?""+n:null===n||n===!1?"":t.test(n)?n.replace(a,o):n},getFallbackLocale:function(n){for(var e=n.indexOf("-")>=0?"-":"_";!s.locale.hasOwnProperty(n);)if(n=n.substring(0,n.lastIndexOf(e)),0===n.length)return null;return n}};var e=function(){var n={parse:function(n,s){function e(n,s,e){for(var a=n,t=e-n.length,o=0;t>o;o++)a=s+a;return a}function a(n){var s=n.charCodeAt(0);if(255>=s)var a="x",t=2;else var a="u",t=4;return"\\"+a+e(s.toString(16).toUpperCase(),"0",t)}function t(n){return'"'+n.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,a)+'"'}function o(n){N>C||(C>N&&(N=C,S=[]),S.push(n))}function p(){var n="start@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=l(),t=null!==a?function(n){return{type:"program",program:n}}(a):null;if(null!==t)var o=t;else{var o=null;C=e}return P[n]={nextPos:C,result:o},o}function l(){var n="messageFormatPattern@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=C,t=w();if(null!==t){for(var o=[],p=i();null!==p;){o.push(p);var p=i()}if(null!==o)var l=[t,o];else{var l=null;C=a}}else{var l=null;C=a}var r=null!==l?function(n,s){var e=[];n&&n.val&&e.push(n);for(var a in s)s.hasOwnProperty(a)&&e.push(s[a]);return{type:"messageFormatPattern",statements:e}}(l[0],l[1]):null;if(null!==r)var c=r;else{var c=null;C=e}return P[n]={nextPos:C,result:c},c}function i(){var s="messageFormatPatternRight@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C;if("{"===n.substr(C,1)){var p="{";C+=1}else{var p=null;I&&o('"{"')}if(null!==p){var l=T();if(null!==l){var i=r();if(null!==i){var c=T();if(null!==c){if("}"===n.substr(C,1)){var h="}";C+=1}else{var h=null;I&&o('"}"')}if(null!==h){var d=w();if(null!==d)var m=[p,l,i,c,h,d];else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}var u=null!==m?function(n,s){var e=[];return n&&e.push(n),s&&s.val&&e.push(s),{type:"messageFormatPatternRight",statements:e}}(m[2],m[5]):null;if(null!==u)var g=u;else{var g=null;C=a}return P[s]={nextPos:C,result:g},g}function r(){var s="messageFormatElement@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C,p=y();if(null!==p){var l=C;if(","===n.substr(C,1)){var i=",";C+=1}else{var i=null;I&&o('","')}if(null!==i){var r=c();if(null!==r)var h=[i,r];else{var h=null;C=l}}else{var h=null;C=l}var d=null!==h?h:"";if(null!==d)var m=[p,d];else{var m=null;C=t}}else{var m=null;C=t}var u=null!==m?function(n,s){var e={type:"messageFormatElement",argumentIndex:n};return s&&s.length?e.elementFormat=s[1]:e.output=!0,e}(m[0],m[1]):null;if(null!==u)var g=u;else{var g=null;C=a}return P[s]={nextPos:C,result:g},g}function c(){var s="elementFormat@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C,p=T();if(null!==p){if("plural"===n.substr(C,6)){var l="plural";C+=6}else{var l=null;I&&o('"plural"')}if(null!==l){var i=T();if(null!==i){if(","===n.substr(C,1)){var r=",";C+=1}else{var r=null;I&&o('","')}if(null!==r){var c=T();if(null!==c){var m=h();if(null!==m){var u=T();if(null!==u)var g=[p,l,i,r,c,m,u];else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}var f=null!==g?function(n,s){return{type:"elementFormat",key:n,val:s.val}}(g[1],g[5]):null;if(null!==f)var v=f;else{var v=null;C=a}if(null!==v)var w=v;else{var y=C,b=C,x=T();if(null!==x){if("select"===n.substr(C,6)){var k="select";C+=6}else{var k=null;I&&o('"select"')}if(null!==k){var j=T();if(null!==j){if(","===n.substr(C,1)){var _=",";C+=1}else{var _=null;I&&o('","')}if(null!==_){var E=T();if(null!==E){var M=d();if(null!==M){var B=T();if(null!==B)var N=[x,k,j,_,E,M,B];else{var N=null;C=b}}else{var N=null;C=b}}else{var N=null;C=b}}else{var N=null;C=b}}else{var N=null;C=b}}else{var N=null;C=b}}else{var N=null;C=b}var S=null!==N?function(n,s){return{type:"elementFormat",key:n,val:s.val}}(N[1],N[5]):null;if(null!==S)var A=S;else{var A=null;C=y}if(null!==A)var w=A;else var w=null}return P[s]={nextPos:C,result:w},w}function h(){var n="pluralStyle@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=m(),t=null!==a?function(n){return{type:"pluralStyle",val:n}}(a):null;if(null!==t)var o=t;else{var o=null;C=e}return P[n]={nextPos:C,result:o},o}function d(){var n="selectStyle@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=g(),t=null!==a?function(n){return{type:"selectStyle",val:n}}(a):null;if(null!==t)var o=t;else{var o=null;C=e}return P[n]={nextPos:C,result:o},o}function m(){var n="pluralFormatPattern@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=C,t=u(),o=null!==t?t:"";if(null!==o){for(var p=[],l=f();null!==l;){p.push(l);var l=f()}if(null!==p)var i=[o,p];else{var i=null;C=a}}else{var i=null;C=a}var r=null!==i?function(n,s){var e={type:"pluralFormatPattern",pluralForms:s};return e.offset=n?n:0,e}(i[0],i[1]):null;if(null!==r)var c=r;else{var c=null;C=e}return P[n]={nextPos:C,result:c},c}function u(){var s="offsetPattern@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C,p=T();if(null!==p){if("offset"===n.substr(C,6)){var l="offset";C+=6}else{var l=null;I&&o('"offset"')}if(null!==l){var i=T();if(null!==i){if(":"===n.substr(C,1)){var r=":";C+=1}else{var r=null;I&&o('":"')}if(null!==r){var c=T();if(null!==c){var h=k();if(null!==h){var d=T();if(null!==d)var m=[p,l,i,r,c,h,d];else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}}else{var m=null;C=t}var u=null!==m?function(n){return n}(m[5]):null;if(null!==u)var g=u;else{var g=null;C=a}return P[s]={nextPos:C,result:g},g}function g(){var n="selectFormatPattern@"+C,s=P[n];if(s)return C=s.nextPos,s.result;for(var e=C,a=[],t=f();null!==t;){a.push(t);var t=f()}var o=null!==a?function(n){return{type:"selectFormatPattern",pluralForms:n}}(a):null;if(null!==o)var p=o;else{var p=null;C=e}return P[n]={nextPos:C,result:p},p}function f(){var s="pluralForms@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C,p=T();if(null!==p){var i=v();if(null!==i){var r=T();if(null!==r){if("{"===n.substr(C,1)){var c="{";C+=1}else{var c=null;I&&o('"{"')}if(null!==c){var h=T();if(null!==h){var d=l();if(null!==d){var m=T();if(null!==m){if("}"===n.substr(C,1)){var u="}";C+=1}else{var u=null;I&&o('"}"')}if(null!==u)var g=[p,i,r,c,h,d,m,u];else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}}else{var g=null;C=t}var f=null!==g?function(n,s){return{type:"pluralForms",key:n,val:s}}(g[1],g[5]):null;if(null!==f)var w=f;else{var w=null;C=a}return P[s]={nextPos:C,result:w},w}function v(){var s="stringKey@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=y(),p=null!==t?function(n){return n}(t):null;if(null!==p)var l=p;else{var l=null;C=a}if(null!==l)var i=l;else{var r=C,c=C;if("="===n.substr(C,1)){var h="=";C+=1}else{var h=null;I&&o('"="')}if(null!==h){var d=k();if(null!==d)var m=[h,d];else{var m=null;C=c}}else{var m=null;C=c}var u=null!==m?function(n){return n}(m[1]):null;if(null!==u)var g=u;else{var g=null;C=r}if(null!==g)var i=g;else var i=null}return P[s]={nextPos:C,result:i},i}function w(){var n="string@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=C,t=T();if(null!==t){var o=[],p=C,l=T();if(null!==l){var i=b();if(null!==i){var r=T();if(null!==r)var c=[l,i,r];else{var c=null;C=p}}else{var c=null;C=p}}else{var c=null;C=p}for(;null!==c;){o.push(c);var p=C,l=T();if(null!==l){var i=b();if(null!==i){var r=T();if(null!==r)var c=[l,i,r];else{var c=null;C=p}}else{var c=null;C=p}}else{var c=null;C=p}}if(null!==o)var h=[t,o];else{var h=null;C=a}}else{var h=null;C=a}var d=null!==h?function(n,s){for(var e=[],a=0;s.length>a;++a)for(var t=0;s[a].length>t;++t)e.push(s[a][t]);return{type:"string",val:n+e.join("")}}(h[0],h[1]):null;if(null!==d)var m=d;else{var m=null;C=e}return P[n]={nextPos:C,result:m},m}function y(){var s="id@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C,t=C,p=T();if(null!==p){if(null!==n.substr(C).match(/^[a-zA-Z$_]/)){var l=n.charAt(C);C++}else{var l=null;I&&o("[a-zA-Z$_]")}if(null!==l){var i=[];if(null!==n.substr(C).match(/^[^ 	\n\r,.+={}]/)){var r=n.charAt(C);C++}else{var r=null;I&&o("[^ 	\\n\\r,.+={}]")}for(;null!==r;)if(i.push(r),null!==n.substr(C).match(/^[^ 	\n\r,.+={}]/)){var r=n.charAt(C);C++}else{var r=null;I&&o("[^ 	\\n\\r,.+={}]")}if(null!==i){var c=T();if(null!==c)var h=[p,l,i,c];else{var h=null;C=t}}else{var h=null;C=t}}else{var h=null;C=t}}else{var h=null;C=t}var d=null!==h?function(n,s){return n+(s?s.join(""):"")}(h[1],h[2]):null;if(null!==d)var m=d;else{var m=null;C=a}return P[s]={nextPos:C,result:m},m}function b(){var n="chars@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=C,a=x();if(null!==a)for(var t=[];null!==a;){t.push(a);var a=x()}else var t=null;var o=null!==t?function(n){return n.join("")}(t):null;if(null!==o)var p=o;else{var p=null;C=e}return P[n]={nextPos:C,result:p},p}function x(){var s="char@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C;if(null!==n.substr(C).match(/^[^{}\\\0- 	\n\r]/)){var t=n.charAt(C);C++}else{var t=null;I&&o("[^{}\\\\\\0- 	\\n\\r]")}var p=null!==t?function(n){return n}(t):null;if(null!==p)var l=p;else{var l=null;C=a}if(null!==l)var i=l;else{var r=C;if("\\#"===n.substr(C,2)){var c="\\#";C+=2}else{var c=null;I&&o('"\\\\#"')}var h=null!==c?function(){return"\\#"}():null;if(null!==h)var d=h;else{var d=null;C=r}if(null!==d)var i=d;else{var m=C;if("\\{"===n.substr(C,2)){var u="\\{";C+=2}else{var u=null;I&&o('"\\\\{"')}var g=null!==u?function(){return"{"}():null;if(null!==g)var f=g;else{var f=null;C=m}if(null!==f)var i=f;else{var v=C;if("\\}"===n.substr(C,2)){var w="\\}";C+=2}else{var w=null;I&&o('"\\\\}"')}var y=null!==w?function(){return"}"}():null;if(null!==y)var b=y;else{var b=null;C=v}if(null!==b)var i=b;else{var x=C,k=C;if("\\u"===n.substr(C,2)){var T="\\u";C+=2}else{var T=null;I&&o('"\\\\u"')}if(null!==T){var _=j();if(null!==_){var E=j();if(null!==E){var M=j();if(null!==M){var B=j();if(null!==B)var N=[T,_,E,M,B];else{var N=null;C=k}}else{var N=null;C=k}}else{var N=null;C=k}}else{var N=null;C=k}}else{var N=null;C=k}var S=null!==N?function(n,s,e,a){return String.fromCharCode(parseInt("0x"+n+s+e+a))}(N[1],N[2],N[3],N[4]):null;if(null!==S)var A=S;else{var A=null;C=x}if(null!==A)var i=A;else var i=null}}}}return P[s]={nextPos:C,result:i},i}function k(){var s="digits@"+C,e=P[s];if(e)return C=e.nextPos,e.result;var a=C;if(null!==n.substr(C).match(/^[0-9]/)){var t=n.charAt(C);C++}else{var t=null;I&&o("[0-9]")}if(null!==t)for(var p=[];null!==t;)if(p.push(t),null!==n.substr(C).match(/^[0-9]/)){var t=n.charAt(C);C++}else{var t=null;I&&o("[0-9]")}else var p=null;var l=null!==p?function(n){return parseInt(n.join(""),10)}(p):null;if(null!==l)var i=l;else{var i=null;C=a}return P[s]={nextPos:C,result:i},i}function j(){var s="hexDigit@"+C,e=P[s];if(e)return C=e.nextPos,e.result;if(null!==n.substr(C).match(/^[0-9a-fA-F]/)){var a=n.charAt(C);C++}else{var a=null;I&&o("[0-9a-fA-F]")}return P[s]={nextPos:C,result:a},a}function T(){var n="_@"+C,s=P[n];if(s)return C=s.nextPos,s.result;var e=I;I=!1;for(var a=C,t=[],p=_();null!==p;){t.push(p);var p=_()}var l=null!==t?function(n){return n.join("")}(t):null;if(null!==l)var i=l;else{var i=null;C=a}return I=e,I&&null===i&&o("whitespace"),P[n]={nextPos:C,result:i},i}function _(){var s="whitespace@"+C,e=P[s];if(e)return C=e.nextPos,e.result;if(null!==n.substr(C).match(/^[ 	\n\r]/)){var a=n.charAt(C);C++}else{var a=null;I&&o("[ 	\\n\\r]")}return P[s]={nextPos:C,result:a},a}function E(){function s(n){n.sort();for(var s=null,e=[],a=0;n.length>a;a++)n[a]!==s&&(e.push(n[a]),s=n[a]);switch(e.length){case 0:return"end of input";case 1:return e[0];default:return e.slice(0,e.length-1).join(", ")+" or "+e[e.length-1]}}var e=s(S),a=Math.max(C,N),o=n.length>a?t(n.charAt(a)):"end of input";return"Expected "+e+" but "+o+" found."}function M(){for(var s=1,e=1,a=!1,t=0;N>t;t++){var o=n.charAt(t);"\n"===o?(a||s++,e=1,a=!1):"\r"===o|"\u2028"===o||"\u2029"===o?(s++,e=1,a=!0):(e++,a=!1)}return{line:s,column:e}}var B={_:T,"char":x,chars:b,digits:k,elementFormat:c,hexDigit:j,id:y,messageFormatElement:r,messageFormatPattern:l,messageFormatPatternRight:i,offsetPattern:u,pluralFormatPattern:m,pluralForms:f,pluralStyle:h,selectFormatPattern:g,selectStyle:d,start:p,string:w,stringKey:v,whitespace:_};if(void 0!==s){if(void 0===B[s])throw Error("Invalid rule name: "+t(s)+".")}else s="start";var C=0,I=!0,N=0,S=[],P={},A=B[s]();if(null===A||C!==n.length){var D=M();throw new this.SyntaxError(E(),D.line,D.column)}return A},toSource:function(){return this._source}};return n.SyntaxError=function(n,s,e){this.name="SyntaxError",this.message=n,this.line=s,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();s.prototype.parse=function(){return e.parse.apply(e,arguments)},s.prototype.precompile=function(n){function e(n,p){p=p||{};var l,i,r,c="";switch(n.type){case"program":return e(n.program);case"messageFormatPattern":for(l=0;n.statements.length>l;++l)c+=e(n.statements[l],p);return o.begin+c+o.end;case"messageFormatPatternRight":for(l=0;n.statements.length>l;++l)c+=e(n.statements[l],p);return c;case"messageFormatElement":return p.pf_count=p.pf_count||0,c+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',n.output?c+='r += d["'+n.argumentIndex+'"];\n':(r="lastkey_"+(p.pf_count+1),c+="var "+r+' = "'+n.argumentIndex+'";\n',c+="var k_"+(p.pf_count+1)+"=d["+r+"];\n",c+=e(n.elementFormat,p)),c;case"elementFormat":return"select"===n.key?(c+=e(n.val,p),c+="r += (pf_"+p.pf_count+"[ k_"+(p.pf_count+1)+" ] || pf_"+p.pf_count+'[ "other" ])( d );\n'):"plural"===n.key&&(c+=e(n.val,p),c+="if ( pf_"+p.pf_count+"[ k_"+(p.pf_count+1)+' + "" ] ) {\n',c+="r += pf_"+p.pf_count+"[ k_"+(p.pf_count+1)+' + "" ]( d ); \n',c+="}\nelse {\n",c+="r += (pf_"+p.pf_count+'[ MessageFormat.locale["'+a.fallbackLocale+'"]( k_'+(p.pf_count+1)+" - off_"+p.pf_count+" ) ] || pf_"+p.pf_count+'[ "other" ] )( d );\n',c+="}\n"),c;case"pluralFormatPattern":for(p.pf_count=p.pf_count||0,c+="var off_"+p.pf_count+" = "+n.offset+";\n",c+="var pf_"+p.pf_count+" = { \n",t=!0,l=0;n.pluralForms.length>l;++l)"other"===n.pluralForms[l].key&&(t=!1),i?c+=",\n":i=1,c+='"'+n.pluralForms[l].key+'" : '+e(n.pluralForms[l].val,function(){var n=JSON.parse(JSON.stringify(p));return n.pf_count++,n}());if(c+="\n};\n",t)throw Error("No 'other' form found in pluralFormatPattern "+p.pf_count);return c;case"selectFormatPattern":for(p.pf_count=p.pf_count||0,c+="var off_"+p.pf_count+" = 0;\n",c+="var pf_"+p.pf_count+" = { \n",t=!0,l=0;n.pluralForms.length>l;++l)"other"===n.pluralForms[l].key&&(t=!1),i?c+=",\n":i=1,c+='"'+n.pluralForms[l].key+'" : '+e(n.pluralForms[l].val,function(){var n=JSON.parse(JSON.stringify(p));return n.pf_count++,n}());if(c+="\n};\n",t)throw Error("No 'other' form found in selectFormatPattern "+p.pf_count);return c;case"string":return'r += "'+s.Utils.numSub(s.Utils.escapeExpression(n.val),"k_"+p.pf_count+" - off_"+(p.pf_count-1),p.pf_count)+'";\n';default:throw Error("Bad AST type: "+n.type)}}var a=this,t=!1,o={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return e(n)},s.prototype.compile=function(n){return Function("MessageFormat","return "+this.precompile(this.parse(n)))(s)},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports.MessageFormat=s):"function"==typeof define&&define.amd?define(function(){return s}):n.MessageFormat=s})(this);