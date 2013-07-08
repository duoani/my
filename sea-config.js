seajs.config({
    base:"/",
    alias:{
		//Engine
		"boot": "root/js/boot",
		"base": "root/js/my/base/base",
		"ImageLoader": "root/js/my/util/ImageLoader",
		"scriptloader": "root/js/my/util/ScriptLoader",
		"Dom": "root/js/my/util/Dom",
		"Component": "root/js/my/component/Component",
		"ViewPort": "root/js/my/component/ViewPort",
		"Animation": "root/js/my/component/Animation",
		"DisplayObject": "root/js/my/component/DisplayObject",
		"Bitmap": "root/js/my/component/Bitmap",
		"DisplayObjectContainer": "root/js/my/component/DisplayObjectContainer",
		"Game": "root/js/my/component/Game",
		"Layer": "root/js/my/component/Layer",
		"Sprite": "root/js/my/component/Sprite",
		"AStar": "root/js/my/ai/AStar",
		"Maths": "root/js/my/util/Maths",
		"KeyEvent": "root/js/my/util/KeyEvent",
		
		//Game APP
		"main": "root/js/main",
		"PigJump": "root/js/class/PigJump",
		"UI": "root/js/class/UI",
		"resource": "root/js/config/resource",
		"frame": "root/js/config/frame",
		"setting": "root/js/config/setting"
    },
    preload:[
    ],
	paths: {
		root: "file:///D:/wamp/www/my"
	}
});