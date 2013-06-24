seajs.config({
    base:"/",
    alias:{
		//Engine
		"boot": "/js/boot",
		"base": "/js/my/base/base",
		"ImageLoader": "/js/my/util/ImageLoader",
		"scriptloader": "/js/my/util/ScriptLoader",
		"Dom": "/js/my/util/Dom",
		"Component": "/js/my/component/Component",
		"Animation": "/js/my/component/Animation",
		"DisplayObject": "/js/my/component/DisplayObject",
		"Bitmap": "/js/my/component/Bitmap",
		"DisplayObjectContainer": "/js/my/component/DisplayObjectContainer",
		"Game": "/js/my/component/Game",
		"Layer": "/js/my/component/Layer",
		"Sprite": "/js/my/component/Sprite",
		"AStar": "/js/my/ai/AStar",
		"Maths": "/js/my/util/Maths",
		"KeyEvent": "/js/my/util/KeyEvent",
		
		//Game APP
		"main": "/js/main",
		"UI": "/js/class/UI",
		"resource": "/js/config/resource"
    },
    preload:[
    ],
	paths: {
		root: "http://my.topsem.tt/"
	}
});