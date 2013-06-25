define(function( require, exports, module ){
	var dom = require('Dom');
	
	var width = 300,
		height = 500,
		canvas = dom.get('main'),
		context = canvas.getContext('2d'),
		totalCircle = 10,
		circles = [];
	
	canvas.width = width;
	canvas.height = height;
	
	for( var i=0; i<10; i++ ){
		//[ x, y, radius, trans, speed ]
		circles[i] = [Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() / 2, Math.random() * 2];
	}
	
	var moveCircle = function( speed ){
		for( var i=0, len = circles.length; i<len; i++ ){
			var item = circles[i];
			if( item[1] - item[2] > height ){
				item[0] = Math.random() * width;
				item[1] = -item[1];
				item[2] = Math.random() * 100;
				item[3] = Math.random() / 2 ;
				
			}else{
				item[1] += item[4] * speed;
			}
		}
	};
	var drawCircle = function(){
		var item;
		for( var i=0, len=circles.length; i<len; i++ ){
			item = circles[i];
			context.beginPath();
			context.fillStyle = 'rgba(241, 12, 32, 0.2)';
			context.arc( item[0], item[1], item[2], 0, Math.PI * 2, true );
			context.fill();
			
		}
	};
	var clear = function(){
		context.fillStyle = "#123456";
		context.fillRect(0, 0, width, height);
	};
	
	var dir = 5;
	var gameloop = function(){
		clear();
		moveCircle(dir);
		drawCircle();
		setTimeout(gameloop, 1000 / 50 );
	};
	gameloop();
	
	document.onkeydown = function(e){
		if(e.which === 38){
			dir = -5;
		}else if( e.which === 40 ){
			dir = 5;
			
		}
	};
});
