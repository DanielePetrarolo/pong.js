pong.js
==============
Pong game powered by JavaScript. :)



Introduction
=============
Pong.js is a simple JavaScript library to let you add a custom pong game on your web applications.
Just set up some basic option and let the library do the job.



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



Options (work in progress)
==========
<table>
					<tr>
						<td><strong>Name</strong></td>
						<td><strong>Type</strong></td>
						<td><strong>Default</strong></td>
						<td><strong>Description</strong></td>
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
						<td>{ 'background' : '#000000', 'color' : '#FFFFFF'}</td>
						<td>Object that define custom setting for the field of the pong game.</td>
					</tr>
					<tr>
						<td><strong>paddle</strong></td>
						<td>object</td>
						<td>{ 'width': 50, 'height': 10, 'color': '#FFFFFF' }</td>
						<td>Object that define custom setting for the paddles of the pong game.</td>
					</tr>
					<tr>
						<td><strong>ball</strong></td>
						<td>object</td>
						<td>{ 'radius': 5, 'color': '#FFFFFF' }</td>
						<td>Object that define custom setting for the ball of the pong game.</td>
					</tr>
					<tr>
						<td><strong>theme</strong></td>
						<td>string</td>
						<td>null</td>
						<td>Set the theme of the pong game. You can choose beetween 'dark', 'light' and 'matrix'. If you choose a theme, it overrides the colors settings seen before.</td>
					</tr>
				</table>
				
				

License
=============
MIT License

Copyright (c) 2016 Daniele Petrarolo

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