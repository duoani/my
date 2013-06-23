define(function( require, exports ){
	var QUnit = require('QUnit');
	
	
	var Maths = require("Maths");
	QUnit.begin(function(){
		console.log('begin')
	})
	QUnit.testDone(function(){
		console.log('done')
	})
	
	QUnit.test('Maths Test Case:', function(assert){
		for( var i=0; i<1000; i++ ){
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

});
