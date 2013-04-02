montageDefine("305a0cc","apis/Montage.html",{text:'<!doctype html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: Montage</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"></script>\n    <script src="scripts/prettify/lang-css.js"></script>\n    <script src="scripts/search.js"></script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    Montage\n    </h2>\n\n</header>\n\n<article>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=Montage></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 70\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=addDependencyToProperty><span class=type-signature>&lt;static </span>addDependencyToProperty<span class=signature>(obj, independentProperty, dependentProperty)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Adds a dependent property to another property\'s collection of dependencies.\n    When the value of a dependent property changes, it generates a &lt;code&gt;change@independentProperty&lt;/code&gt; event.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>obj</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The object containing the dependent and independent properties.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>independentProperty</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the object\'s independent property.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>dependentProperty</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the object\'s dependent property.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 428\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=callDelegateMethod><span class=type-signature>&lt;static </span>callDelegateMethod<span class=signature>(name)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>/*\n    This method calls the method named with the identifier prefix if it exists.\n    Example: If the name parameter is "shouldDoSomething" and the caller\'s identifier is "bob", then\n    this method will try and call "bobShouldDoSomething"</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>name</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>string</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 726\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=create><span class=type-signature>&lt;static </span>create<span class=signature>(aPrototype, <span class=optional>propertyDescriptor</span>)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Creates a new Montage object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n		<th>Argument</th>\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>aPrototype</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n                <td class=attributes>\n\n\n\n                </td>\n\n\n\n\n            <td class="description last"><p>The prototype object to create the new object from. If not specified, the prototype is the Montage prototype.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>propertyDescriptor</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n                <td class=attributes>\n\n                    &lt;optional<br>\n\n\n\n                </td>\n\n\n\n\n            <td class="description last"><p>An object that contains the initial properties and values for the new object.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 75\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>The new object</p>\n\n</div>\n\n\n\n\n\n\n\n        <h5>Examples</h5>\n\n        <p class=code-caption>Creating a "empty" Montage object, using Montage as the prototype</p>\n\n    <pre class=prettyprint><code>    var alpha = Montage.create();\n    </code></pre>\n\n        <p class=code-caption>Creating a new Montage component with a property descriptor object.</p>\n\n    <pre class=prettyprint><code>    var Button = Montage.create(Component , {\n        state: {\n            value: null\n        }\n    });</code></pre>\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=defineProperties><span class=type-signature>&lt;static </span>defineProperties<span class=signature>(obj, properties)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Description Defines one or more new properties to an object, or modifies existing properties on the object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>obj</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The object to which the properties are added.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>properties</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>An object that contains one or more property descriptor objects.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 392\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=defineProperty><span class=type-signature>&lt;static </span>defineProperty<span class=signature>(obj, prop, descriptor)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Defines a property on a Montage object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>obj</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The object on which to define the property.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>prop</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the property to define, or modify.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>descriptor</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A descriptor object that defines the properties being defined or modified.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 130\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n        <h5>Example</h5>\n\n    <pre class=prettyprint><code>    Montage.defineProperty(Object.prototype, "_eventListenerDescriptors", {\n        enumerable: true | false,\n        serializable: "reference" | "value" | "auto" | false,\n        value: null,\n        writable: true | false\n    });</code></pre>\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=doNothing><span class=type-signature>&lt;static </span>doNothing<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>function</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 595\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=equals><span class=type-signature>&lt;static </span>equals<span class=signature>(anObject)</span><span class=type-signature> → {Boolean}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns true if two objects are equal, otherwise returns false.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anObject</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The object to compare for equality.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 714\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>Returns &lt;code&gt;true&lt;/code&gt; if the calling object and &lt;code&gt;anObject&lt;/code&gt; are identical and their &lt;code&gt;uuid&lt;/code&gt; properties are also equal. Otherwise, returns &lt;code&gt;false&lt;/code&gt;.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Boolean</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getInfoForObject><span class=type-signature>&lt;static </span>getInfoForObject<span class=signature>(object)</span><span class=type-signature> → {Object}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Get the metadata Montage has on the given object</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>object</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>An object.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 559\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>object._montage_metadata</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Object</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getPropertyAttribute><span class=type-signature>&lt;static </span>getPropertyAttribute<span class=signature>(anObject, propertyName, attributeName)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the attribute of a property belonging to an object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anObject</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A object.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>propertyName</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of a property belonging to &lt;code&gt;anObject&lt;/code&gt;.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>attributeName</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of a property\'s attribute.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 510\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>attributes array</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getPropertyAttributes><span class=type-signature>&lt;static </span>getPropertyAttributes<span class=signature>(anObject, attributeName)</span><span class=type-signature> → {Object}</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anObject</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>An object.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>attributeName</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The attribute name.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 528\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>TODO getPropertyAttributes returns description</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>Object</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=getSerializablePropertyNames><span class=type-signature>&lt;static </span>getSerializablePropertyNames<span class=signature>(anObject)</span><span class=type-signature> → {<a href=Array.html>Array</a>}</span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the names of serializable properties belonging to Montage object.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anObject</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>A Montage object.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 488\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>An array containing the names of the serializable properties belonging to &lt;code&gt;anObject&lt;/code&gt;.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type><a href=Array.html>Array</a></span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=removeDependencyFromProperty><span class=type-signature>&lt;static </span>removeDependencyFromProperty<span class=signature>(obj, independentProperty, dependentProperty)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Removes a dependent property from another property\'s collection of dependent properties.\n    When the value of a dependent property changes, it generates a &lt;code&gt;change@independentProperty&lt;/code&gt; event.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>obj</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Object</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The object containing the dependent and independent properties.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>independentProperty</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the object\'s independent property.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>dependentProperty</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The name of the object\'s dependent property that you want to remove.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 453\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=self><span class=type-signature>&lt;static </span>self<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>function</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/core.js, line 604\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>itself</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input id=index-search type=search placeholder="search for"><details open=open><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})