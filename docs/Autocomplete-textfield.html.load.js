montageDefine("c065cef","docs/Autocomplete-textfield.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Autocomplete textfield - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Autocomplete textfield<a class=anchor id=Autocomplete-textfield href="#Autocomplete-textfield"></a>\n</h1>\n\n<p>It is becoming increasingly common for apps to offer predictive suggestions as the user types in a text field. One example of this is a search field suggesting results that match the text that the user has already typed.</p>\n\n<p>This capability is coming soon to Montage with the Autocomplete component. This has just landed in Montage master, and will likely be included in the next stable release.</p>\n\n<p>The Autocomplete component extends the Textfield native control, and inherits all its capabilities, such as data binding support for all writable attributes of the <code>input</code> element. It adds the capability to define a list of values that will be contextually displayed as suggestions based on the search term. As the user types the search results are updated to reflect the new term.</p>\n\n<h2>Using a Autocomplete component<a class=anchor id=Using-a-Autocomplete-component href="#Using-a-Autocomplete-component"></a>\n</h2>\n\n<p>As with any component, you first need to hook up your HTML element to the required component via the JSON serialization. In the case of Autocomplete, the module can be found at montage/ui/autocomplete/autocomplete.reel.</p>\n\n<h3>Specifying the options<a class=anchor id=Specifying-the-options href="#Specifying-the-options"></a>\n</h3>\n\n<p>The component has a number of options that can be set using the corresponding properties.</p>\n\n<h3>Setting the response time<a class=anchor id=Setting-the-response-time href="#Setting-the-response-time"></a>\n</h3>\n\n<p>There is a default 500ms delay before a suggestion is requested. This can be specified by setting the delay property to an integer value. The following will set a delay of 300ms:\n</p><div class=highlight><pre><span class=s2>"delay"</span><span class=err>:</span> <span class=s2>"300"</span>\n</pre></div>\n\n<h3>Number of characters before searching<a class=anchor id=Number-of-characters-before-searching href="#Number-of-characters-before-searching"></a>\n</h3>\n\n<p>By default a suggestion is not requested until two characters are entered by the user. This can be set using the minLength property. The following example sets it to 4 characters:\n</p><div class=highlight><pre><span class=s2>"minLength"</span><span class=err>:</span> <span class=s2>"4"</span>\n</pre></div>\n\n<h3>Search term delimiter<a class=anchor id=Search-term-delimiter href="#Search-term-delimiter"></a>\n</h3>\n\n<p>Individual search terms are separated by the comma character ,. When the user types a comma, the autocomplete will reset and will start matching the next term. The delimiter can be specified using the <code>separator</code> property. The following sample sets it to a space instead:\n</p><div class=highlight><pre><span class=s2>"separator"</span><span class=err>:</span> <span class=s2>" "</span>\n</pre></div>\n\n<h3>Hooking up to a data source<a class=anchor id=Hooking-up-to-a-data-source href="#Hooking-up-to-a-data-source"></a>\n</h3>\n\n<p>To auto-suggest values a data source is needed. To supply a data source you must point to a Delegate object using the delegate property in your JSON serialization:\n</p><div class=highlight><pre><span class=s2>"delegate"</span><span class=err>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"owner"</span><span class=p>}</span>\n</pre></div>\n\n<p>The <code>Delegate</code> object is a Montage object that implements a method that returns the auto-complete suggestion(s). The method name is <code>ShouldGetSuggestions</code>, prefixed by the <code>identifier</code> of the Autocomplete component (which defaults to the label of the JSON object if it is not defined).</p>\n\n<p>This is probably easier understood with an example. Suppose we have an autocomplete component with the label of <code>foo</code>, as defined below:\n</p><div class=highlight><pre><span class=s2>"foo"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage/ui/autocomplete/autocomplete.reel"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"component"</span><span class=p>},</span>\n        <span class=nt>"delay"</span><span class=p>:</span> <span class=s2>"300"</span><span class=p>,</span>\n        <span class=nt>"delegate"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"@"</span><span class=p>:</span> <span class=s2>"owner"</span><span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nt>"bindings"</span><span class=p>:</span> <span class=p>{</span>\n        <span class=nt>"value"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"&lt;-&gt;"</span><span class=p>:</span> <span class=s2>"@montageComponents"</span><span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=err>,</span>\n<span class=s2>"owner"</span><span class=err>:</span> <span class=p>{</span>\n    <span class=nt>"prototype"</span><span class=p>:</span> <span class=s2>"montage-components"</span><span class=p>,</span>\n    <span class=nt>"properties"</span><span class=p>:</span> <span class=p>{</span>\n    <span class=nt>"element"</span><span class=p>:</span> <span class=p>{</span><span class=nt>"#"</span><span class=p>:</span> <span class=s2>"autocomplete-example"</span><span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>The method name used for returning the autocomplete data would be called <code>fooShouldGetSuggestions</code>. In the above example we would define this method in the montage-components.js file (pointed to by the prototype of the owner object, which is hooked up to foo’s <code>delegate</code> property).</p>\n\n<p>If the foo object had a <code>identifier</code> property with a value of bar, the method name would become <code>barShouldGetSuggestions</code>.</p>\n\n<h3>Implementing the *ShouldGetSuggestions method<a class=anchor id="Implementing-the-*ShouldGetSuggestions-method" href="#Implementing-the-*ShouldGetSuggestions-method"></a>\n</h3>\n\n<p>This method requires two parameters. The <code>autocomplete</code> parameter is the autocomplete component instance that is requesting the suggestion data. The second parameter, <code>searchTerm</code> is the term that the user has entered into the autocomplete textfield.</p>\n\n<p>It is up to you as the developer as to how you get the suggestions. This could be from an XHR or JSONP call, a predefined list in memory, or so on. What matters is that once you get the results that match the search term, you need to set the <code>suggestions</code> property of the autocomplete instance to point it to the return results. These results will then be displayed as a drop down list for the user to select the desired result.</p>\n\n<p>The following is an example with the logic for getting the results omitted:\n</p><div class=highlight><pre><span class=nx>fooShouldGetSuggestions</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>autocomplete</span><span class=p>,</span> <span class=nx>searchTerm</span><span class=p>)</span> <span class=p>{</span>\n        <span class=c1>// do some processing such as fetching data via XHR</span>\n        <span class=nx>autocomplete</span><span class=p>.</span><span class=nx>suggestions</span> <span class=o>=</span>  <span class=nx>result</span><span class=p>;</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<h2>A quick autocomplete example<a class=anchor id=A-quick-autocomplete-example href="#A-quick-autocomplete-example"></a>\n</h2>\n\n<p>I’ve created a quick example based off the one in the Kitchen Sink. You can start typing the name of a Montage component, and it will return any component names that match after you have typed two or more characters.</p>\n\n<p>The serialization code is the same as in the above example, except the label is <code>montageComponents</code> rather than <code>foo</code>. The HTML that is required is just a simple form with a label and a text field:\n</p><div class=highlight><pre><span class=nt>&lt;form&gt;</span>\n     <span class=nt>&lt;label</span> <span class=na>for=</span><span class=s>"component"</span><span class=nt>&gt;</span>Montage component:<span class=nt>&lt;/label&gt;</span>\n     <span class=nt>&lt;input</span> <span class=na>id=</span><span class=s>"montageComponents"</span> <span class=na>data-montage-id=</span><span class=s>"montageComponents"</span> <span class=na>type=</span><span class=s>"text"</span> <span class=na>placeholder=</span><span class=s>"Component name"</span> <span class=nt>/&gt;</span>\n<span class=nt>&lt;/form&gt;</span>\n</pre></div>\n\n<p>All the JavasScript that is required can be found in the montage-components.js file, pointed to by the <code>owner</code> object.</p>\n\n<p>Behind the scenes the components are stored in an array with a key of <code>name</code>. The <code>montageComponentsShouldGetSuggestions</code> method checks to see if there are any cached results matching the search term. If so the cached result is returned, otherwise it filters the array to find and return the result, and caches the result so that the search doesn’t have to be performed again for the same search term. Finally, the <code>suggestions</code> property of the passed autocomplete object is set to the result so that it can be displayed to the user.</p>\n\n<p>You can also check out the KitchenSink for <a href="http://montagejs.github.com/montage/samples/sink/#autocomplete">additional examples</a>, such as fetching data from an external source via XHR.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})