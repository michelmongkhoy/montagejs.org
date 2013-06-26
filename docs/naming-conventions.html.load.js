montageDefine("038863f","docs/naming-conventions.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Naming Conventions - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Naming Conventions<a class=anchor id=Naming-Conventions href="#Naming-Conventions"></a>\n</h1>\n\n<p>This document summarizes Montage-specific naming conventions and recommendations for modules, components, and CSS classes. </p>\n\n<h2>Modules<a class=anchor id=Modules href="#Modules"></a>\n</h2>\n\n<p>All module and package names are written in lowercase letters or numbers and delimited by dashes.</p>\n\n<h2>Components<a class=anchor id=Components href="#Components"></a>\n</h2>\n\n<p>User interface components are stored in the ui directory of your montage project and identified by a .reel extension. </p>\n\n<p>The following naming conventions apply for <code>.reel</code> directories:</p>\n\n<ul>\n<li>Component names are always spelled in lowercase letters.</li>\n<li>If an official W3C HTML element exists, the component\'s name matches the name of that element; for example, <code>button</code> (<code>button.reel</code>) for a <code>&lt;button&gt;</code>.</li>\n<li>If an official HTML equivalent does not exist, assign a name that captures the function or meaning of the component; for example, <code>toggle-switch</code>.</li>\n<li>For input elements we use a dash-delimited <code>"element-type"</code> pattern; for example, <code>input-range</code>, <code>input-radio</code>, or <code>input-color</code>.</li>\n</ul><h2>CSS Classes<a class=anchor id=CSS-Classes href="#CSS-Classes"></a>\n</h2>\n\n<p>MontageJS standardizes on a CSS class naming convention whereby the names follow a dash-delimited <code>org-Component</code> and <code>org-Component-childElement</code> pattern. For example, for the progress bar it would be: <code>montage-Progress</code> and <code>montage-Progress-bar</code>.</p>\n\n<p>More specifically, the following conventions apply:</p>\n\n<ol>\n<li>All CSS classes are prefixed with <strong>montage</strong> + <strong>dash</strong>: <code>montage-</code>.</li>\n<li>\n<p>Component names follow the namespace identifier (<code>montage-</code>) and always start with an uppercase letter; for example, <code>montage-Button</code>. </p>\n\n<p></p>\n<div class=highlight><pre><span class=o>&lt;</span><span class=n>button</span> <span class=n>data</span><span class=o>-</span><span class=n>montage</span><span class=o>-</span><span class=n>id</span> <span class=s>"button"</span> <span class=n>class</span><span class=o>=</span><span class=s>"montage-Button"</span><span class=o>&gt;</span>\n</pre></div>\n\n<p>If a component name consists of more than one word, each new word also starts with an uppercase letter, a convention commonly  referred to as <strong>upper camel case</strong> ("CamelCaps") formatting; for example, <code>montage-Button</code>, <code>montage-InputRange</code>.</p>\n</li>\n<li>\n<p>Composite components (components with children) follow this convention:</p>\n\n<ul>\n<li>If a component has a <strong>child element</strong>, the child\'s name is written in lowercase (to signal the distinction between parent and child) and follows the component’s name separated by a dash; for example, <code>montage-InputRange-thumb</code>. Be sure to use the same name for children as the native pseudo (Shadow DOM) elements if known; for example: -webkit-progress-**bar**. Angelina Fabbro put together a nice reference <a href="https://gist.github.com/3759334">list</a> of pseudo element selectors used in WebKit.</li>\n<li>If a child element consists of concatenated words, its name is written in lower camelCase; for example, <code>montage-InputRange-thumbWithSpikyEars</code>.</li>\n<li>If a component has multiple levels of child elements, each child is separated from the other by a dash; for example, <code>montage-InputRange-thumb-nobs-centerNob</code>.</li>\n</ul>\n<p><strong>Note:</strong> There is <strong>no limit</strong> as to how many levels of child elements can be used, but if the whole CSS class becomes too long, it might be a good idea to <strong>break</strong> it into subcomponents.</p>\n</li>\n<li><p>If a class name represents a <strong>state</strong> or a <strong>variation</strong>, a double-dash is used; for example, (states) <code>montage-InputRange--dragging</code>, <code>montage-Button--pressed</code> or (variations) <code>montage-Button--big</code>, <code>montage-Button--primary</code>.</p></li>\n</ol><p>We chose these conventions for the following reasons:</p>\n\n<ul>\n<li>To reduce the effort to read and understand the markup structure of our source code.</li>\n<li>To increase code usability because you can double-click each part of the code to quickly select and edit it. (Try it for yourself: <code>montage-InputRange-thumb</code> versus <code>montage_InputRange_thumb</code>.)</li>\n<li>To avoid name collisions due to multiple selectors.</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,n,s){var a,t=e.getElementsByTagName(n)[0];e.getElementById(s)||(a=e.createElement(n),a.id=s,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,n,s){var a,t=e.getElementsByTagName(n)[0];e.getElementById(s)||(a=e.createElement(n),a.id=s,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}();</script>\n\n</body>\n</html>'});