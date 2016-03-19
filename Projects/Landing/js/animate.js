(function() {
    var $window = $(window);
    
    function animate(data, effectClassName){
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each(data, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass(effectClassName);
            } else {
                $element.removeClass(effectClassName);
            }
        });
    }

    function animateLeft() {
        animate($('.effect__left'), 'effect__left_animated');        
    }

    function animateRight() {
        animate($('.effect__right'), 'effect__right_animated');        
    }

    function effectUp() {
        animate($('.effect'), 'effect__up_animated');        
    }

    $window.on('scroll resize mouseover', animateLeft);
    $window.on('scroll resize mouseover', animateRight);
    $window.on('scroll resize mouseover', effectUp);
    $window.trigger('scroll');
})();