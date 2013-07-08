define(function( require, exports, module ){
	var KeyEvent = require("KeyEvent");
	var ImageLoader = require("ImageLoader");
	var resource = require("resource");
	var frame = require("frame");
	var PigJump = require("PigJump");
	var Dom = require("Dom");
	
	ImageLoader.load(resource.img, function(i, total){
		//load image completed
		if( i === total - 1 ){
			init();
		}
	});
	
	KeyEvent.on();
	
	function init(){
		var pigJump = new PigJump();
		pigJump.oninit = function(){
			console.log('pigJump init', this)
		};
		
		pigJump.onstart = function(){
			console.log('pigJump start', this);
		};
		
		pigJump.onstop = function(){
			console.log('pigJump stop', this);
		};
		pigJump.onupdate = function(){
			console.log('pigJump update', this)
		}
		pigJump.setFPS(10);
		pigJump.init();
		
		Dom.get("btn_start").onclick = function(){
			pigJump.start();
		};
		Dom.get("btn_stop").onclick = function(){
			pigJump.stop();
		};
	}
	
	
});
