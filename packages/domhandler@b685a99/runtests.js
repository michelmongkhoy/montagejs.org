function compare(e,t){if(assert.equal(typeof e,typeof t,"types didn't match"),"object"!=typeof e||null===e)assert.strictEqual(e,t,"result doesn't equal expected");else for(var n in e)assert.ok(n in t,"result didn't contain property "+n),compare(e[n],t[n])}var fs=require("fs"),path=require("path"),assert=require("assert"),Parser=require("htmlparser2").Parser,Handler=require("./"),basePath=path.resolve(__dirname,"tests"),chunkSize=5;fs.readdirSync(basePath).filter(RegExp.prototype.test,/\.json$/).map(function(e){return path.resolve(basePath,e)}).map(require).forEach(function(e){console.log("Testing:",e.name);for(var t=new Handler(function(t,n){assert.ifError(t),compare(e.expected,n)},e.options.handler),n=e.html,a=new Parser(t,e.options.parser),s=0;n.length>s;s+=chunkSize)a.write(n.substring(s,s+chunkSize));a.done(),a.parseComplete(n)}),console.log("\nAll tests passed!");