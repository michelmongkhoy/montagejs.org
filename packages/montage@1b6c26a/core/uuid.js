function generate(){var n,e=CHARS,s=FORMAT;return s[0]=e[15&(n=4294967296*Math.random())],s[1]=e[15&(n>>>=4)],s[2]=e[15&(n>>>=4)],s[3]=e[15&(n>>>=4)],s[4]=e[15&(n>>>=4)],s[5]=e[15&(n>>>=4)],s[6]=e[15&(n>>>=4)],s[7]=e[15&(n>>>=4)],s[9]=e[15&(n=4294967296*Math.random())],s[10]=e[15&(n>>>=4)],s[11]=e[15&(n>>>=4)],s[12]=e[15&(n>>>=4)],s[15]=e[15&(n>>>=4)],s[16]=e[15&(n>>>=4)],s[17]=e[15&(n>>>=4)],s[19]=e[8|3&(n=4294967296*Math.random())],s[20]=e[15&(n>>>=4)],s[21]=e[15&(n>>>=4)],s[22]=e[15&(n>>>=4)],s[24]=e[15&(n>>>=4)],s[25]=e[15&(n>>>=4)],s[26]=e[15&(n>>>=4)],s[27]=e[15&(n>>>=4)],s[28]=e[15&(n=4294967296*Math.random())],s[29]=e[15&(n>>>=4)],s[30]=e[15&(n>>>=4)],s[31]=e[15&(n>>>=4)],s[32]=e[15&(n>>>=4)],s[33]=e[15&(n>>>=4)],s[34]=e[15&(n>>>=4)],s[35]=e[15&(n>>>=4)],s.join("")}var CHARS="0123456789ABCDEF".split(""),FORMAT="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),Uuid=exports.Uuid=Object.create(Object.prototype,{generate:{enumerable:!1,value:generate}});exports.generate=generate;