/* grid script - needs initializer and made into plugin
*/

var ratio_w = 1920;
var ratio_h = 1080;

function resize() {
  var width  = $('.grid').outerWidth();
  var height = $('.grid').outerHeight();
  var vertical = $('.grid.vertical').length;
  if (vertical) {
    $('.grid').css('width', height * (ratio_h/ratio_w));
  } else {
    $('.grid').css('height', width * (ratio_h/ratio_w));
  }
  layout_cells();
}

function layout_cells() {
  var gridw = $('.grid').outerWidth();
  var gridh = $('.grid').outerHeight();
  var vertical = $('.grid.vertical').length ? true : false;
  var cellw = vertical ? gridw/4 : gridw/5;
  var cellh = vertical ? gridh/5 : gridh/4;

  $('.cell').each(function(){
    var x = $(this).data('x');
    var y = $(this).data('y');
    var w = $(this).data('w') || 1;
    var h = $(this).data('h') || 1;
    $(this).css({
      top: y * cellh + 'px', 
      left: x * cellw + "px", 
      width: w * cellw + 'px', 
      height: h * cellh + "px"
    })
  });
}