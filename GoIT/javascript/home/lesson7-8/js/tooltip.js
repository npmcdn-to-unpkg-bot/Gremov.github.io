$(function() {
    $('input')
        .on('mouseover', function() {
            $(this).siblings('.tip').addClass('open');
        })
        .on('mouseout', function() {
            $(this).siblings('.tip').removeClass('open');
        });
    $('.button')
        .on('click', function(e) {
            // return false;
            e.preventDefault();
            $('.tip').addClass('open');
        });
});
