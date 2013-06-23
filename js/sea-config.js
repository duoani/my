seajs.config({
    base:"/",
    alias:{
        "test": "/test/init",
		"boot": "/js/boot",
		"base": "/js/my/base/base",
		"imageloader": "/js/my/util/imageloader",
		"scriptloader": "/js/my/util/scriptloader",
		"Component": "/js/my/component/Component",
		"Animation": "/js/my/component/Animation",
		"DisplayObject": "/js/my/component/DisplayObject",
		"Bitmap": "/js/my/component/Bitmap",
		"DisplayObjectContainer": "/js/my/component/DisplayObjectContainer",
		"Game": "/js/my/component/Game",
		"Layer": "/js/my/component/Layer",
		"Sprite": "/js/my/component/Sprite",
		"AStar": "/js/my/ai/AStar"
    },
    preload:[
    ]
});