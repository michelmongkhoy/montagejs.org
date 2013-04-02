montageDefine("305a0cc","apis/EventManager.html",{text:'<!doctype html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: EventManager</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"></script>\n    <script src="scripts/prettify/lang-css.js"></script>\n    <script src="scripts/search.js"></script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    EventManager\n    </h2>\n\n</header>\n\n<article>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=EventManager></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 216\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Properties</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=application><span class=type-signature></span>application<span class=type-signature> :String</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The application object associated with the event manager.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 349\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=delegate><span class=type-signature></span>delegate<span class=type-signature> :String</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 328\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=isStoringMouseEventsWhileDraggingOnly><span class=type-signature></span>isStoringMouseEventsWhileDraggingOnly<span class=type-signature> :Function</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} true</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1234\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=isStoringPointerEvents><span class=type-signature></span>isStoringPointerEvents<span class=type-signature> :Function</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1196\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=registeredEventListeners><span class=type-signature></span>registeredEventListeners<span class=type-signature> :Listeners</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Registered event listeners.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{}</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 588\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n        </dl>\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=actualDOMTargetForEventTypeOnTarget><span class=type-signature></span>actualDOMTargetForEventTypeOnTarget<span class=signature>(eventType, target)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Determines the actual target to observe given a target and an eventType. This correctly decides whether to observe the element specified or to observe some other element to leverage event delegation. This should be consulted whenever starting or stopping the observation of a target for a given eventType.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>eventType</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>target</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 847\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>null || target.screen ? target.document : target.ownerDocument</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=claimPointer><span class=type-signature></span>claimPointer<span class=signature>(pointer, component)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Claims that a pointer, referred to by the specified pointer identifier, is claimed by the specified component.\n    This does not give the component exclusive use of the pointer per se, but does indicate that the component\n    is acting in a manner where it expects to be the only one performing major actions in response to this pointer.\n    Other components should respect the claimant\'s desire to react to this pointer in order to prevent an entire\n    hierarchy of components from reacting to a pointer in potentially conflicting ways.</p>\n<pre><code>If the pointer is currently claimed by another component that component is asked to surrender the pointer,\nwhich is may or may not agree to do.</code></pre>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>pointer</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The pointer identifier to claim</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>component</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The component that is claiming the specified pointer</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1110\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>boolean Whether or not the pointer was successfully claimed.</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=componentClaimingPointer><span class=type-signature></span>componentClaimingPointer<span class=signature>(pointer)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>The component claiming the specified pointer component</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>pointer</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The pointer identifier in question</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1073\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>component</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=eventHandlerForElement><span class=type-signature></span>eventHandlerForElement<span class=signature>(anElement)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anElement</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Element</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 2079\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>this._elementEventHandlerByUUID[anElement.eventHandlerUUID]</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=forfeitAllPointers><span class=type-signature></span>forfeitAllPointers<span class=signature>(component)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Forfeits all pointers from the specified component.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>component</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type><a href=Component.html>Component</a></span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1167\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=forfeitPointer><span class=type-signature></span>forfeitPointer<span class=signature>(pointer, component)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Forfeits the specified pointer identifier from the specified component.\n    The specified component must be the current claimant.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>pointer</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The pointer identifier in question</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>component</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The component that is trying to forfeit the specified pointer</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1152\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=handleEvent><span class=type-signature></span>handleEvent<span class=signature>(event)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>event</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The handled event.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1715\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=initWithWindow><span class=type-signature></span>initWithWindow<span class=signature>(aWindow)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>aWindow</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Window</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 388\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>this registerWindow(aWindow)</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=isPointerClaimedByComponent><span class=type-signature></span>isPointerClaimedByComponent<span class=signature>(pointer, component)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Whether or not the specified pointer identifier is claimed by the specified component.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>pointer</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The pointer identifier in question</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>component</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The component to interrogate regarding ownership of the specified pointer</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1085\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>boolean</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=methodNameForBubblePhaseOfEventType><span class=type-signature></span>methodNameForBubblePhaseOfEventType<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1035\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=pointerMotion><span class=type-signature></span>pointerMotion<span class=signature>(identifier)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>identifier</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>attribute</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1610\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registeredEventListenersForEventType_><span class=type-signature></span>registeredEventListenersForEventType_<span class=signature>(eventType)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns a dictionary of all listeners registered for the specified eventType, regardless of the target being observed.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>eventType</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event type.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 599\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>null || listeners</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registeredEventListenersForEventType_onTarget_><span class=type-signature></span>registeredEventListenersForEventType_onTarget_<span class=signature>(eventType, target)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the dictionary of all listeners registered for the specified eventType, on the specified target.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>eventType</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event type.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>target</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event target.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 632\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>targetRegistration ? targetRegistration.listeners : null</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registeredEventListenersOnTarget_><span class=type-signature></span>registeredEventListenersOnTarget_<span class=signature>(target)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Returns the dictionary of all listeners registered on the specified target, keyed by eventType.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>target</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event target.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 662\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>observedEventListeners</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registerEventHandlerForElement><span class=type-signature></span>registerEventHandlerForElement<span class=signature>(anElementEventHandler, anElement)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anElementEventHandler</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>anElement</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Element</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 2051\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registerEventListener><span class=type-signature></span>registerEventListener<span class=signature>(target, eventType, listener, useCapture)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>This adds the listener to the definitive collection of what targets are being observed for what eventTypes by whom and in what phases. This collection maintained by the EventManager is used throughout the discovery and distribution steps of the event handling system.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>target</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event target.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>eventType</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event type.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>listener</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event listener.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>useCapture</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event capture.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 695\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>returnResult</p>\n\n</div>\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=registerWindow><span class=type-signature></span>registerWindow<span class=signature>(aWindow)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>aWindow</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Window</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 405\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=reset><span class=type-signature></span>reset<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1001\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=unload><span class=type-signature></span>unload<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 1026\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=unregisterEventHandlerForElement><span class=type-signature></span>unregisterEventHandlerForElement<span class=signature>(anElement)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>anElement</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Element</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 2067\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=unregisterEventListener><span class=type-signature></span>unregisterEventListener<span class=signature>(target, eventType, listener, useCapture)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>This unregisters the listener.</p>\n\n    </div>\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>target</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event target.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>eventType</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event type.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>listener</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event listener.</p>\n</td>\n        </tr>\n\n\n\n        <tr>\n\n                <td class=name><code>useCapture</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Event</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The event capture.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 765\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=unregisterWindow><span class=type-signature></span>unregisterWindow<span class=signature>(aWindow)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>aWindow</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Window</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 545\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=unregisterWindows><span class=type-signature></span>unregisterWindows<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/event/event-manager.js, line 564\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input id=index-search type=search placeholder="search for"><details open=open><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})