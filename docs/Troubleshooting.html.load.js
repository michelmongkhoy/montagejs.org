montageDefine("a94d0b0","docs/Troubleshooting.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Troubleshooting - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Troubleshooting<a class=anchor id=Troubleshooting href="#Troubleshooting"></a>\n</h1>\n\n<p>If your Montage application isn’t working as expected, you can use the JavaScript console available in modern web browsers to help diagnose the problem.</p>\n\n<h2>JavaScript console<a class=anchor id=JavaScript-console href="#JavaScript-console"></a>\n</h2>\n\n<p>If you test a Montage application in the browser and don’t see what you expect, open the JavaScript console to look any for errors or warnings. Most modern web browsers include a JavaScript debugger, console, and related tools that can help debug problems with Montage applications. These tools are built-in to the latest versions of Chrome and Safari. You use the browser’s <code>console.log()</code> method to send output to the console.</p>\n\n<ul>\n<li>To open the console in Chrome, select View &gt; Developer &gt; JavaScript console.</li>\n<li>To open the console in Safari, first enable the Develop menu (Safari Preferences &gt; Advanced &gt; Show Develop menu in menu bar), then select Develop &gt; Show Error Console.</li>\n</ul><h2>Serialization errors<a class=anchor id=Serialization-errors href="#Serialization-errors"></a>\n</h2>\n\n<p>One class of error you may encounter are those that occur during the deserialization process. During this process Montage parses the serialization block and attempts to resolve references to serialized objects and components, as well as to HTML elements in the HTML document.</p>\n\n<h3>Invalid element reference<a class=anchor id=Invalid-element-reference href="#Invalid-element-reference"></a>\n</h3>\n\n<p>In the following abbreviated code, the ID of the </p><div> element referenced in the serialization (<code>"loginButton"</code>) does not match the element’s actual ID (<code>"loginBtn"</code>).\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n{\n    "loginButton": {\n        "name": "Button",\n        "module": "montage/ui/button.reel",\n        "properties": {\n            "element": {"#": "loginButton"}\n        }\n    }\n}\n<span class=nt>&lt;/script&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n   <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"loginBtn"</span><span class=nt>/&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n</pre></div>\n\n<p>At runtime, this would generate the following error message in the JavaScript console:\n</p>\n<div class=highlight><pre><span class=n>Warning</span><span class=o>:</span> <span class=n>Element</span> <span class=s2>"#loginButton"</span> <span class=n>not</span> <span class=n>found</span> <span class=k>in</span> <span class=n>template</span>\n<span class=n>http</span><span class=o>://</span><span class=n>localhost</span><span class=o>:</span><span class=mi>8081</span><span class=sr>/examples/myapp/mycomponent.reel/</span><span class=n>mycomponent</span><span class=o>.</span><span class=na>html</span>\n</pre></div>\n\n<h3>Invalid module ID or symbol name<a class=anchor id=Invalid-module-ID-or-symbol-name href="#Invalid-module-ID-or-symbol-name"></a>\n</h3>\n\n<p>If you provide an invalid value for a serialized object’s “name” property, Montage will generate an error. For example, the following serialization will generate this error, since the symbol name is misspelled “Buttonn” instead of “Button”.\n</p>\n<div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n{\n    "loginButton": {\n        "name": "Buttonn",\n        "module": "montage/ui/button.reel",\n        "properties": {\n            "element": {"#": "loginButton"}\n        }\n    }\n}\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p>This would result in the following runtime error:\n</p>\n<div class=highlight><pre><span class=n>Object</span> “<span class=n>Buttonn</span>” <span class=n>not</span> <span class=n>found</span> <span class=n>at</span> “<span class=n>montage</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>button</span><span class=p>.</span><span class=n>reel</span>” <span class=n>referenced</span> <span class=n>from</span>\n<span class=n>http</span><span class=p>:</span><span class=o>//</span><span class=n>localhost</span><span class=p>:</span><span class=mi>8081</span><span class=o>/</span><span class=n>examples</span><span class=o>/</span><span class=n>buttonerror</span><span class=o>/</span><span class=p>.</span>\n</pre></div>\n\n<p>If you provide an invalid module ID in a serialization, then the console will report a 404 error “Can’t XHR <em>module-id</em>“. For example, consider the following serialization that defines a Textfield component but the module ID is misspelled as “montage/ui/textfld.reel”.\n</p>\n<div class=highlight><pre><span class=p>{</span>\n"<span class=n>emailInput</span>"<span class=p>:</span> <span class=p>{</span>\n    "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Textfield</span>"<span class=p>,</span>\n    "<span class=n>module</span>"<span class=p>:</span> "<span class=n>montage</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>textfld</span><span class=p>.</span><span class=n>reel</span>"<span class=p>,</span>\n    "<span class=k>properties</span>"<span class=p>:</span> <span class=p>{</span>\n        "<span class=n>element</span>"<span class=p>:</span> <span class=p>{</span>"#"<span class=p>:</span> "<span class=n>email</span>"<span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>},</span>\n</pre></div>\n\n<p>In Chrome, this results in the following error:\n</p>\n<div class=highlight><pre><span class=n>GET</span> <span class=n>http</span><span class=p>:</span><span class=o>//</span><span class=n>localhost</span><span class=p>:</span><span class=mi>8081</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>textfeld</span><span class=p>.</span><span class=n>reel</span><span class=o>/</span><span class=n>textfld</span><span class=p>.</span><span class=n>js</span> <span class=mi>404</span> <span class=p>(</span><span class=n>Not</span> <span class=n>Found</span><span class=p>)</span> <span class=n>browser</span><span class=p>.</span><span class=n>js</span><span class=p>:</span><span class=mi>136</span>\n<span class=n>Can</span>’<span class=n>t</span> <span class=n>XHR</span> “<span class=n>http</span><span class=p>:</span><span class=o>//</span><span class=n>localhost</span><span class=p>:</span><span class=mi>8081</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>textfeld</span><span class=p>.</span><span class=n>reel</span><span class=o>/</span><span class=n>textfeld</span><span class=p>.</span><span class=n>js</span>”\n</pre></div>\n\n<h2>JSON formatting errors<a class=anchor id=JSON-formatting-errors href="#JSON-formatting-errors"></a>\n</h2>\n\n<p>The JSON serialization block must be well-formed for Montage to successfully parse it. Montage uses JSLint to At runtime, any JSON formatting errors are reported in the JavaScript console.</p>\n\n<h3>Serial commas<a class=anchor id=Serial-commas href="#Serial-commas"></a>\n</h3>\n\n<p>A common JSON formatting problem are “serial” commas. In valid JSON, commas are used to separate name/value pairs; a comma that follows the last (or serial) name/value pair of an object invalidates the JSON. For example, in the JSON snippet below the comma after the last name/value pair is invalid and would generate a JSON parsing errors.</p>\n\n<p></p>\n<div class=highlight><pre><span class=p>{</span>\n   "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Tim</span>"<span class=p>,</span>\n   "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Jen</span>"<span class=p>,</span>\n   "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Frank</span>"<span class=p>,</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>As another example, in the Montage serialization block below notice the comma after the “passwordInput” JSON object. At runtime, this would generate an “Unexpected comma” error as the object is the last one in the serialization.</p>\n\n<p></p>\n<div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n{\n    "emailInput": {\n        "name": "Textfield",\n        "module": "montage/ui/textfield.reel",\n        "properties": {\n            "element": {"#": "email"}\n        }\n    },\n    "passwordInput": {\n        "name": "Textfield",\n        "module": "montage/ui/textfield.reel",\n        "properties": {\n            "element": {"#": "password"}\n        }\n    },\n}\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p></p>\n<div class=highlight><pre><span class=n>Syntax</span> <span class=n>error</span> <span class=n>at</span> <span class=n>line</span> <span class=mi>16</span> <span class=n>from</span> <span class=n>http</span><span class=p>:</span><span class=o>//</span><span class=n>localhost</span><span class=p>:</span><span class=mi>8081</span><span class=o>/</span><span class=n>examples</span><span class=o>/</span><span class=n>errors</span><span class=o>/</span><span class=p>:</span>\n    <span class=p>},</span>\n<span class=n>Unexpected</span> <span class=n>comma</span><span class=p>.</span>\n    <span class=mi>1</span> \n    <span class=mi>2</span> <span class=p>{</span>\n    <span class=mi>3</span>     "<span class=n>emailInput</span>"<span class=p>:</span> <span class=p>{</span>\n    <span class=mi>4</span>         "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Textfield</span>"<span class=p>,</span>\n    <span class=mi>5</span>         "<span class=n>module</span>"<span class=p>:</span> "<span class=n>montage</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>textfield</span><span class=p>.</span><span class=n>reel</span>"<span class=p>,</span>\n    <span class=mi>6</span>         "<span class=k>properties</span>"<span class=p>:</span> <span class=p>{</span>\n    <span class=mi>7</span>             "<span class=n>element</span>"<span class=p>:</span> <span class=p>{</span>"#"<span class=p>:</span> "<span class=n>email</span>"<span class=p>}</span>\n    <span class=mi>8</span>         <span class=p>}</span>\n    <span class=mi>9</span>     <span class=p>},</span>\n   <span class=mi>10</span>     "<span class=n>passwordInput</span>"<span class=p>:</span> <span class=p>{</span>\n   <span class=mi>11</span>         "<span class=n>name</span>"<span class=p>:</span> "<span class=n>Textfield</span>"<span class=p>,</span>\n   <span class=mi>12</span>         "<span class=n>module</span>"<span class=p>:</span> "<span class=n>montage</span><span class=o>/</span><span class=n>ui</span><span class=o>/</span><span class=n>textfield</span><span class=p>.</span><span class=n>reel</span>"<span class=p>,</span>\n   <span class=mi>13</span>         "<span class=k>properties</span>"<span class=p>:</span> <span class=p>{</span>\n   <span class=mi>14</span>             "<span class=n>element</span>"<span class=p>:</span> <span class=p>{</span>"#"<span class=p>:</span> "<span class=n>password</span>"<span class=p>}</span>\n   <span class=mi>15</span>         <span class=p>}</span>\n<span class=o>&gt;&gt;&gt;</span><span class=mi>16</span>     <span class=p>},</span>\n   <span class=mi>17</span> <span class=p>}</span>\n   <span class=mi>18</span>\n</pre></div>\n\n<p>Removing the trailing comma on line 16 fixes the error.</p>\n</div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})