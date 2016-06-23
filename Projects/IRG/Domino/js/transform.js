
$(function () {
'use strict';
    var counter = 0;
    $('.controls__left').click(function () {
    
        counter -= 90;
        $('.domino-box').css('transform', 'rotate(' + counter + 'deg)');
        var speed = document.getElementById("speed").value;
        $('.domino-box').css('transition', + speed + 's linear');
    });
    
    $('.controls__right').click(function () {
    
        counter += 90;
        $('.domino-box').css('transform', 'rotate(' + counter + 'deg)');
        
        var speed = document.getElementById("speed").value;
        $('.domino-box').css('transition', + speed + 's linear');
    });
});


