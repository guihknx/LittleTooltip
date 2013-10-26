LittleTooltip
=============

Another jQuery plugin for tooltips

Docs
=============


```
containerClass
``` 
(string)
Our container class, used to call it

```
attr2Text 
```
(string)
Attribute will give us the text 2 display
```
followMouse
```
(bool)
Tooltips will follow mouseovering?
```
mouseY
mouseX
```
(string)
If followMouse is false, set default positions
```
container
```
(string)
Our container Element

Example of use:

```js
$(function() {
    $('.tooltip').LTooltip({
    	containerClass: 'my-tooltip'
    	,attr2text: 'data-tooltip'
    	,followMouse: true
    	,mouseY: 0
    	,mouseX: 0
    	,container: $('<span />').appendTo('body')
	});
});
```