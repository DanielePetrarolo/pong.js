pong.js
==============
Pong game powered by JavaScript. :)



Introduction
=============
Pong.js is a simple JavaScript library to let you add a custom pong game on your web applications.
Just set up some basic option and let the library do the job.

A ``<canvas>`` tag moved by ``requestAnimationFrame`` will be append on our document and the game will begin.

To move the paddle we can use the keybord arrows, to start the game just press ENTER and to pause the game push the space bar.
We can start a new game or change the level game using the menu.



How it works?
=============
- First step, include the pong.js file in your web project. The best place to put it is inside your ``<head>`` tag.
```html
<script src="[PATH_TO_JS_FOLDER]/pong.js"></script>
```
- Create a new PongGame istance and give it your favourite options to customize it:
```javascript
var pongGame = new PongGame({
	level: 2,
   	width: 600,
	height: 600,
});
```
- Finally, let's initialize it!
```javascript
pongGame.init();
```



Options
==========
<table>
	<tr>
		<td><strong>Name</strong></td>
		<td><strong>Type</strong></td>
		<td width="200"><strong>Default values</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td><strong>width</strong></td>
		<td>integer</td>
		<td>window.innerWidth</td>
		<td>Set the width of canvas in pixels.</td>
	</tr>
	<tr>
		<td><strong>height</strong></td>
		<td>integer</td>
		<td>window.innerHeight</td>
		<td>Set the height of canvas in pixels.</td>
	</tr>
	<tr>
		<td><strong>level</strong></td>
		<td>integer</td>
		<td>1</td>
		<td>Set the difficult of the game. Values: 1 to 5</td>
	</tr>
	<tr>
		<td><strong>background</strong></td>
		<td>color</td>
		<td>'#000000'</td>
		<td>Set the background color of the canvas.</td>
	</tr>
	<tr>
		<td><strong>field</strong></td>
		<td>object</td>
		<td>{<br />'background' : '#000000',<br />'color' : '#FFFFFF'<br />}</td>
		<td>Object that define custom setting for the field of the pong game.</td>
	</tr>
	<tr>
		<td><strong>paddle</strong></td>
		<td>object</td>
		<td>{ <br />'width': 50, <br />'height': 10, <br />'color': '#FFFFFF' <br />}</td>
		<td>Object that define custom setting for the paddles of the pong game.</td>
	</tr>
	<tr>
		<td><strong>ball</strong></td>
		<td>object</td>
		<td>{<br /> 'radius': 5,<br /> 'color': '#FFFFFF' <br />}</td>
		<td>Object that define custom setting for the ball of the pong game.</td>
	</tr>
	<tr>
		<td><strong>theme</strong></td>
		<td>string</td>
		<td>null</td>
		<td>Set the theme of the pong game. You can choose beetween 'dark', 'light' and 'matrix'. If you choose a theme, it overrides the colors settings seen before.</td>
	</tr>
	<tr>
		<td><strong>onInit</strong></td>
		<td>function</td>
		<td>null</td>
		<td>Callback function called the first time the game is initialized and ready to play.</td>
	</tr>
	<tr>
		<td><strong>onPlay</strong></td>
		<td>function</td>
		<td>null</td>
		<td>Callback function called everytime the game is playing.</td>
	</tr>
	<tr>
		<td><strong>onPause</strong></td>
		<td>function</td>
		<td>null</td>
		<td>Callback function called everytime the game is paused.</td>
	</tr>
</table>
				
				
To do list - (work in progress)
==========
- Utility callbacks
- Additional public methods like reInit, newGame, pause, update, etc..
- Polish

		

License
=============
MIT License

Copyright (c) 2017 Daniele Petrarolo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
