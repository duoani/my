define(function( require, exports, module ){
	var KeyEvent = require("KeyEvent");
	var ImageLoader = require("ImageLoader");
	var resource = require("resource");
	
	ImageLoader.load(resource.img, function(i, total){
		//load image completed
		if( i === total - 1 ){
			init();
		}
	});
	
	KeyEvent.on();
	
	function init(){
		console.log("init start")
	}
	
	
});
