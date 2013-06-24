define(function( require, exports, module ){
	var base = require('base'),
		Game = require("Game");
	
	function PigJump( cfg ){
		
		PigJump.superClass.constructor.call(this, cfg);
	}
	base.inherit(PigJump, Game);
	
	PigJump.prototype.init = function(){
		
	};
});
