
(function() {
var $animateLeft = $('.effect__left');
var $animateRight = $('.effect__right');
var $effectUp = $('.effect');
var $window = $(window);

function animateLeft() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animateLeft, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('effect__left_animated');
    } else {
      $element.removeClass('effect__left_animated');
    }
  });
}

function animateRight() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animateRight, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('effect__right_animated');
    } else {
      $element.removeClass('effect__right_animated');
    }
  });
}

function effectUp() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($effectUp, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);
 
    //check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('effect__up_animated');
    } else {
      $element.removeClass('effect__up_animated');
    }
  });
}

$window.on('scroll resize', animateLeft);
$window.on('scroll resize', animateRight);
$window.on('scroll resize', effectUp);
$window.trigger('scroll');
})();