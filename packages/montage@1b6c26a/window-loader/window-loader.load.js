montageDefine("1b6c26a","window-loader/window-loader",{dependencies:[],factory:function(n){var s=window.opener;n.loadPackage(s.require.location).then(function(n){var s=window.loadInfo,e=s.module,a=s.name,t=s.callback;return window.require=n,n.async("montage/ui/component").then(function(){return n.async("montage/ui/loader.reel").then(function(n){var s=n.Loader.create();s.mainModule=e,s.mainName=a,s.element=window.document.body,s.attachToParentComponent(),s.needsDraw=!0,t&&s.addEventListener("componentLoaded",function(n){s.removeEventListener("componentLoaded",arguments.callee),t(window,n.detail)})})})}).done()}});