/*
 * 
 * 	pong.js - http://www.danielepetrarolo.com/lab/pong.js
 * 	Version: 0.7.0
 * 	Author: Daniele Petrarolo - http://www.danielepetrarolo.com
 * 
 * 
 * 	MIT License
 * 	
 * 	Copyright (c) 2016 Daniele Petrarolo
 * 	
 * 	Permission is hereby granted, free of charge, to any person obtaining a copy
 * 	of this software and associated documentation files (the "Software"), to deal
 * 	in the Software without restriction, including without limitation the rights
 * 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * 	copies of the Software, and to permit persons to whom the Software is
 * 	furnished to do so, subject to the following conditions:
 * 	
 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 * 	
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * 	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * 	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * 	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * 	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 * 
 * 
 */


WebFontConfig = {
  google:{ families: ['VT323'] },
  active: function(){start();}
};
(function(){
  var wf = document.createElement("script");
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
  wf.async = 'true';
  document.head.appendChild(wf);
})();


var PongGame = function(options){
	
	var _this 	= this;
	var _opt	= options;
	
	
	window.requestAnimationFrame	= window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60); };
	window.cancelAnimationFrame 	= window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;


	// VARIABILI DI CLASSE
	var _keysDown 	= {};
	var _canvas 	= null;
	var _context	= null;
	
	var _field		= null;
	var _player 	= null;
	var _computer 	= null;
	var _ball 		= null;
	var _interface 	= null;
	var _isPlaying	= false;


	// OPTIONS
	var _level			= _opt.level || 1;
	var _theme			= _opt.theme || null;
	var _background 	= _opt.background || '#000000';
	var _fieldData		= _opt.field || { 'background' : '#000000', 'color' : '#FFFFFF'};
	var _paddleData		= _opt.paddle || { 'width': 50, 'height': 10, 'color': '#FFFFFF' };
	var _ballData		= _opt.ball || { 'radius': 5, 'color': '#FFFFFF' };
	var _width			= _opt.width || window.innerWidth;
	var _height			= _opt.height ||window.innerHeight;

	// Min level = 1 - Max level = 5
	if (_level < 1) _level = 1;
	if (_level > 5) _level = 5;
	

	// THEMES
	switch(_theme){
		
		// light
		case 'light':
			_background				= '#EEEEEE';
			_fieldData.background	= '#EEEEEE';
			_fieldData.color		= '#999999';
			_paddleData.color		= '#999999';
			_ballData.color			= '#999999';
			break;
			
			
		// matrix
		case 'matrix':
			_background 			= '#111111';
			_fieldData.background	= '#111111';
			_fieldData.color		= '#00FF00';
			_paddleData.color		= '#00FF00';
			_ballData.color			= '#00FF00';
			break;
		
		
		// dark = default
		case 'dark':
			_background 			= '#000000';
			_fieldData.background	= '#000000';
			_fieldData.color		= '#FFFFFF';
			_paddle.color			= '#FFFFFF';
			_ball.color				= '#FFFFFF';
			break;
		
	}
	
	
	
	
	
	
	/*/ --- INIT PUBBLICO --- /*/
	this.init = function(){
		
		_this.init();
		
	};
	
	
	
	
	
	/*/ METODI PRIVATI /*/
	_this.init = function () {
		
		_canvas 		= document.createElement('canvas');
		_canvas.width	= _width;
		_canvas.height 	= _height;
		
		_context = _canvas.getContext('2d');
		
		window.onload = _this.initGame;
	};
	
	_this.initGame = function(){
		
		document.body.appendChild(_canvas);
		
		_field 		= new Field();
		_player 	= new Player();
		_computer 	= new Computer();
		_ball 		= new Ball(_field.x + _field.width * 0.5, _field.height * 0.5);
		_interface 	= new Interface();
		
		_this.startGame();
	};
	
	
	_this.startGame = function(){
		
		if(_isPlaying) _this.update();
		_interface.controls();
		_this.render();
		
		window.requestAnimationFrame(_this.startGame);
	};
	_this.playGame = function(){
		_isPlaying = true;
	};
	_this.pauseGame = function(){
		_isPlaying = false;
	};
	_this.openMenu = function(){
		_interface.openMenu();
	};
	
	
	
	// UPDATE DEI MOVIMENTI, VELOCITA', ETC
	_this.update = function(){
		_player.update();
		_computer.update();
		_ball.update(_player.paddle, _computer.paddle);
	};
	_this.render = function(){
		
		// Canvas
		_context.fillStyle = _background;
		_context.fillRect(0, 0, _width, _height);
		
		// Elements
		_field.render();
		_player.render();
		_computer.render();
		_ball.render();
		_interface.render();
	};
	
	
	
	
	// INTERFACCIA UTENTE
	Interface = function(){
		_context.font = '30px VT323';
	};
	Interface.prototype.render = function(){
		this.computerScore	= String(_computer.score);
		this.playerScore 	= String(_player.score);
		
		_context.fillText(this.computerScore, 10, 30);
		_context.fillText(this.playerScore, _width - 30, _height - 10);
		
		if(!_isPlaying){
			_context.textAlign="center"; 
			_context.fillText("Press ENTER to play", _width * 0.5, _height * 0.5);
		}
	};
	Interface.prototype.controls = function(){
		for (var key in _keysDown){
			var value = Number(key);
			
			// ENTER == pause
			if(value == 13 && !_isPlaying){
				_this.playGame();
			}

			// SPACE BAR == play
			if(value == 32 && _isPlaying){
				_this.pauseGame();
			}
		}
	};
	
	
	
	// FIELD
	Field = function(){
		this.background = _fieldData.background;
		this.color 		= _fieldData.color;
		this.margin 	= 50;
		this.width 		= _width - this.margin * 2;
		this.height		= _height - this.margin * 2;
		this.x			= _width * 0.5 - this.width * 0.5;
		this.y			= _height * 0.5 - this.height * 0.5;

	};
	Field.prototype.render = function(){
		_context.fillStyle = this.background;
		_context.fillRect(this.x, this.y, this.width, this.height);

		_context.fillStyle = this.color;
		_context.fillRect(this.x - 6, this.y, 6, this.height);				// LATO SX
		_context.fillRect(this.x + this.width, this.y, 6, this.height);		// LATO DX
		
		_context.setLineDash([5, 10]);										// CENTRO
		_context.beginPath();
		_context.moveTo(_field.x, _field.y + _field.height * 0.5 - 2);
		_context.lineTo(_field.x + _field.width, _field.y + _field.height * 0.5 - 2);
		_context.strokeStyle = this.color;
		_context.stroke();
		
	};
	
	
	
	// PADDLE
	Paddle = function(x, y){
		
		this.width	= _paddleData.width;
		this.height	= _paddleData.height;
		this.x 		= x - this.width * 0.5;
		this.y		= y - this.height * 0.5;
		
		this.x_speed = 0;
		this.y_speed = 0;
	};
	Paddle.prototype.render = function(){
		_context.fillStyle = _paddleData.color;
		_context.fillRect(this.x, this.y, this.width, this.height);
	};
	Paddle.prototype.restart = function(){
		this.x 			= _field.x + _field.width * 0.5 - this.width * 0.5;
		this.x_speed 	= 0;
		this.y_speed 	= 0;
	};
	Paddle.prototype.move = function(x, y){
		this.x += x;
		this.y += y;
		this.x_speed = x;
		this.y_speed = y;
		
		if(this.x < _field.x){
			this.x = _field.x;
			this.x_speed = 0;
		} else if(this.x + this.width > _field.x + _field.width){
			this.x = _field.width + _field.x - this.width;
			this.x_speed = 0;
		}
	};
	
	
	
	
	
	// PLAYER
	Player = function(){
		var x 		= _field.x + _field.width * 0.5;
		var y 		= _field.y + _field.height;
		
		this.score	= 0;
		this.speed	= _level * _width / 400;
		this.paddle = new Paddle(x, y);
	};
	Player.prototype.render = function(){
		this.paddle.render();
	};
	Player.prototype.update = function(){
		for (var key in _keysDown){
			var value = Number(key);
			
			if(value == 37){
				// FRECCIA SINISTRA
				this.paddle.move(-this.speed, 0);
			} else if(value == 39){
				// FRECCIA DESTRA
				this.paddle.move(this.speed, 0);
			} else {
				this.paddle.move(0, 0);
			}
		}
	};
	
	
	
	

	// COMPUTER
	Computer = function(){
		var x 		= _field.x + _field.width * 0.5;
		var y 		= _field.y;
		
		this.score 	= 0;
		this.speed	= _level * _width / 400;
		this.paddle = new Paddle(x, y);
	};
	Computer.prototype.render = function(){
		this.paddle.render();
	};
	Computer.prototype.update = function(){
		var xPos 		= _ball.x;
		var difference	= -((this.paddle.x + (this.paddle.width * 0.5)) - xPos);
		
		if(difference < -this.speed){
			difference = -this.speed - 1;
		} else if(difference > this.speed){
			difference = this.speed + 1;
		}
		
		this.paddle.move(difference, 0);

	};
	
	
	
	// PALLINA
	Ball = function(x, y){
		this.x = x;
		this.y = y;
		this.radius			= _ballData.radius;
		
		this.x_speed_start	= 0;
		this.x_speed 		= this.x_speed_start;

		this.y_speed_start	= _level * _height / 200;
		this.y_speed 		= this.y_speed_start;
	};
	Ball.prototype.render = function(){
		_context.beginPath();
		_context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
		_context.fillStyle = _ballData.color;
		_context.fill();
	};
	Ball.prototype.reset = function(){
		this.x 			= _field.x + _field.width * 0.5;
		this.y	 		= _field.y + _field.height * 0.25;
		this.x_speed	= this.x_speed_start;
		this.y_speed 	= this.y_speed_start;
	};
	Ball.prototype.update = function(playerPaddle, computerPaddle){
		this.x += this.x_speed;
		this.y += this.y_speed;

		var top 	= this.y - this.radius;
		var left 	= this.x - this.radius;
		var right	= this.x + this.radius;
		var bottom	= this.y + this.radius;
		
		
		// COLPISCO LATO SINISTRO
		if(left < _field.x){
			this.x = _field.x + this.radius;
			this.x_speed = -this.x_speed;
		}
		// COLPISCO LATO DESTRO
		else if(right > _field.x + _field.width){
			this.x = _field.x + _field.width - this.radius;
			this.x_speed = -this.x_speed;
		}


		// SEGNATO UN PUNTO
		if(this.y < _field.x || this.y > _field.x + _field.height){
			this.y < _field.x ? _player.score++ : _computer.score++;
			
			_this.pauseGame();
			
			this.reset();
			playerPaddle.restart();
			computerPaddle.restart();
		}
		
		
		// COLPISCO UN PADDLE
		if(top > _field.height * 0.5) {
			// COLPISCO PADDLE PLAYER
    		if(top < (playerPaddle.y + playerPaddle.height) && bottom > playerPaddle.y && left < (playerPaddle.x + playerPaddle.width) && right > playerPaddle.x) {
	      		this.y_speed	= -this.y_speed_start;
	      		this.x_speed 	+= (playerPaddle.x_speed / 2);
	      		this.y 			+= this.y_speed;
	    	}
	  	} else {
			// COLPISCO PADDLE PLAYER
	    	if(top < (computerPaddle.y + computerPaddle.height) && bottom > computerPaddle.y && left < (computerPaddle.x + computerPaddle.width) && right > computerPaddle.x) {
	      		this.y_speed 	= this.y_speed_start;
	      		this.x_speed	+= (computerPaddle.x_speed / 2);
	      		this.y 			+= this.y_speed;
	    	}
	  	}
		
		
	};
	
	
	
	
	
	
	
	// PULSANTI PREMUTI
	window.addEventListener("keydown", function(event) { _keysDown[event.keyCode] = true; });
	window.addEventListener("keyup", function(event) { delete _keysDown[event.keyCode]; });
	

};
