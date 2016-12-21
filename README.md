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