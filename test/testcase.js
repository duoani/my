define(function( require, exports ){
	var QUnit = require('QUnit');
	var Maths = require("Maths");
	
	QUnit.test('Maths Test Case:', function(assert){
		for( var i=0; i<10; i++ ){
			//Maths.rand()
			assert.equal(Maths.rand(0), 0, "rand(0) === 0");
			assert.equal(Maths.rand(0,0), 0, "rand(0,0) === 0");
			assert.equal(Maths.rand(1,1), 1, "rand(1,1) === 1");
			assert.ok( Maths.rand(5, 1) > 1 && Maths.rand(5, 1) < 5, "should rand(1, 5) return (1, 5)" );
			assert.ok( Maths.rand(1, 5) > 1 && Maths.rand(1, 5) < 5, "should rand(5, 1) return (1, 5)" );
			assert.ok( Maths.rand(-5, 5) > -5 && Maths.rand(-5, 5) < 5, "should rand(-5,5) return (-5, 5)" );
			assert.ok( Maths.rand(5, -5) > -5 && Maths.rand(5, -5) < 5, "should rand(5,-5) return (-5, 5)" );
			assert.ok( Maths.rand(5) > 0 && Maths.rand(5) < 5, "should rand(5) return (0, 5)" );
			assert.ok( Maths.rand(-5) > -5 && Maths.rand(-5) < 0, "should rand(-5) return (-5, 0)" );
			
			//Maths.randInt()
			assert.equal(Maths.randInt(0), 0, "randInt(0) === 0");
			assert.equal(Maths.randInt(0,0), 0, "randInt(0,0) === 0");
			assert.equal(Maths.randInt(1,1), 1, "randInt(1,1) === 1");
			assert.ok( Maths.randInt(5, 1) >= 1 && Maths.randInt(5, 1) <= 5, "should randInt(1, 5) return [1, 5]" );
			assert.ok( Maths.randInt(1, 5) >= 1 && Maths.randInt(1, 5) <= 5, "should randInt(5, 1) return [1, 5]" );
			assert.ok( Maths.randInt(-5, 5) >= -5 && Maths.randInt(-5, 5) <= 5, "should randInt(-5,5) return [-5, 5]" );
			assert.ok( Maths.randInt(5, -5) >= -5 && Maths.randInt(5, -5) <= 5, "should randInt(5,-5) return [-5, 5]" );
			assert.ok( Maths.randInt(5) >= 0 && Maths.randInt(5) <= 5, "should randInt(5) return [0, 5]" );
			assert.ok( Maths.randInt(-5) >= -5 && Maths.randInt(-5) <= 0, "should randInt(-5) return [-5, 0]" );
		}
	});
	
	//ImageLoader
//	var ImagerLoader = require("ImageLoader");
//	QUnit.asyncTest("ImageLoader Test Case", function(assert){
//		console.log("assert:", assert)
//		var arr = [
//			{id:"1", src:"/images/apple-1.png"},
//			{id:"2", src:"/images/apple-2.png"},
//			{id:"3", src:"/images/apple.png"},
//			{id:"4", src:"/images/banana-1.png"},
//			{id:"5", src:"/images/banana-2.png"},
//			{id:"6", src:"/images/banana.png"}
//		];
//		ImagerLoader.load(arr, function(i, total){
//			console.log(i)
//		});
//		assert.ok( true )
//	});
	
//	var KeyEvent = require("KeyEvent");
//	KeyEvent.on();
	
//	QUnit.test("UI Test Case:", 4, function( assert ){
//		
//		var UI = require("UI");
//		console.log(UI)
//		var ui = new UI();
//		ui.onSoundOpen = function(){
//			assert.ok( true, "onSoundOpen" )
//		};
//		
//		ui.onSoundClose = function(){
//			assert.ok( true, "onSoundClose" )
//		};
//		
//		ui.onPlay = function(){
//			assert.ok( true, "onPlay" )
//		};
//		ui.onPause = function(){
//			assert.ok( true, "onPause" )
//		};
//	});
});
