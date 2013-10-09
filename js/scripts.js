;(function($, window, undefined) {
  $.fn.LTooltip = function(args) { 
    var conf = {
      containerClass : '' // tooltipo container class
      ,attr2Text: 'data-m' // attribute will give us the text 2 display
      ,followMouse:true // tooltip follow mouseovering?
      ,mouseY: 150 // if not following mouse sets default orientation
      ,mouseX: 150 // if not following mouse sets default orientation 
      ,container : $('<div />').appendTo('body') // create our container and target
      ,that : $(this) // $(this)
      ,_this: this // this
     // ,left : true
    };
    $.extend(conf,args);
    function tooltipVisible() {
      //shows tooltip container and adds the class of your custom css was been set above
      conf.container
      .addClass(conf.containerClass)
      .stop(true, true)
      .fadeIn();
    }
    function tooltipHidden() {
      //hide tooltip
      conf.container
        .stop(true, true)
        .hide();
    }
    function followMouse(x, y) {
      // if followMouse is true the container will follow mouse current position
      if ( conf.followMouse == true )
        conf.container
        .css({
            top: y 
            ,left: x+15           
            ,display: 'inline-block'
          });
    }

    return conf._this.each(function() {
      // handling events
      conf.that.on({
          mouseenter:function(event) {
          followMouse(event.pageX, event.pageY);
          conf.container
          .html($(this).attr(conf.attr2Text));

          tooltipVisible();
        },
        mouseleave:function() {
          tooltipHidden();
        },
        mouseout:function() {
          tooltipHidden();
        },
        mousemove:function(event) {
          followMouse(event.pageX, event.pageY);
        }
      });
    });
  };
}(jQuery, window));

$(function() {
    $('.tooltip').LTooltip({containerClass: 'my-tooltip'});
});
