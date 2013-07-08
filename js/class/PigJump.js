define(function( require, exports, module ){
	var base = require('base');
	var	Game = require("Game");
	var ViewPort = require("ViewPort");
	var Layer = require("Layer");
	var setting = require("setting");
	console.log(ViewPort)
	function PigJump( cfg ){
		
		PigJump.superclass.constructor.call(this, cfg);
	}
	base.inherit(PigJump, Game);
	
	PigJump.prototype.init = function(){
		console.log('init');
		//return false;
		this.__initLayers();
		
		
		PigJump.superclass.init.call(this);
	};
	
	PigJump.prototype.__initLayers = function(){
		var viewport = new ViewPort({
			"width": setting.viewport.width,
			"height": setting.viewport.height
		});
		
		var hillLayer = new Layer({
			"viewport": viewport,
			"distance": 25
		});
		hillLayer.setCanvas('hillLayer');
		
		this.appendChild(hillLayer);
		
		this.viewport = viewport;
		this.hillLayer = hillLayer;
	};
	
	module.exports = PigJump;
});
