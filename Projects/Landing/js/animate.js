
(function() {
var $tradelogos = $('.tradelogos');
var $tradelogosTreadle = $('.tradelogos__treadle');
var $moveUp = $('.moveup');
var $window = $(window);

function animateLeft() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($tradelogos, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('tradelogos__left_animated');
    } else {
      $element.removeClass('tradelogos__left_animated');
    }
  });
}

function animateRight() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($tradelogosTreadle, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('tradelogos__right_animated');
    } else {
      $element.removeClass('tradelogos__right_animated');
    }
  });
}

function moveUp() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($moveUp, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('moveup__animated');
    } else {
      $element.removeClass('moveup__animated');
    }
  });
}

$window.on('scroll resize', animateLeft);
$window.on('scroll resize', animateRight);
$window.on('scroll resize', moveUp);
$window.trigger('scroll');
})();