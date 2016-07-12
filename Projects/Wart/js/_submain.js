window.onload = function () {
    // debugger;
  //ищем элемент по селектору
//   var a = document.querySelector('#ShowHide1');
    var parentElement = document.querySelector('.field-item');
  //вешаем на него события

    // parentElement.onmouseout = function(e) {
    //     // debugger
    //     // $(e.currentTarget).find('.field-link').children().css('display', 'block')
    //     // $(e.currentTarget).children().css('display', 'block')
    //     // document.getElementsByClassName( 'circle-base' )[0].style.display='block';
    //     // document.getElementsByClassName( 'field-link-pulse' )[0].style.display='block';
    // };
    
    parentElement.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'block')
        // var elem = e.currentTarget;
        // $(e.currentTarget).children().css('display', 'block')
        // document.getElementsByClassName( 'circle-base' )[0].style.display='block';
        // document.getElementsByClassName( 'field-link-pulse' )[0].style.display='block';
    };
    
    // $("#field-item-B").mouseover(function(){
    //     $('.circle-base-white').show();
    //     $('.field-link-pulse-white').show();
    // });
    
    // $("#field-item-B").mouseout(function(){
    //     $(this).show();
    //     $(this).show();
    // });

    // $('#field-link-B').hover(
    //     function() {
    //         $(this).children('.circle-base-white').stop().show();
    //     },
    //     function() {
    //         $(this).children('.circle-base-white').stop().show();
    //         console.log(this);
    // });
    var parentElementB = document.getElementById('field-item-B');
    // parentElementB.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[0].style.display='block';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[0].style.display='block';
    // };
    
    parentElementB.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[0].style.display='block';
        document.getElementsByClassName( 'field-link-pulse-white' )[0].style.display='block';
    };
    
    var parentElementC = document.getElementById('field-item-C');
    // parentElementC.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[1].style.display='block';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[1].style.display='block';
    // };
    
    parentElementC.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[1].style.display='block';
        document.getElementsByClassName( 'field-link-pulse-white' )[1].style.display='block';
    };
    
    var parentElementD = document.getElementById('field-item-D');
    // parentElementD.onmouseout = function(e) {
    //     document.getElementsByClassName( 'circle-base-white' )[2].style.display='block';
    //     document.getElementsByClassName( 'field-link-pulse-white' )[2].style.display='block';
    // };
    
    parentElementD.onmouseover = function(e) {
        document.getElementsByClassName( 'circle-base-white' )[2].style.display='block';
        document.getElementsByClassName( 'field-link-pulse-white' )[2].style.display='block';
    };

    document.getElementById("field-link").addEventListener("click", pulseDrop);
    function pulseDrop() {
        // debugger
        var listElement = document.getElementById("field-list");
        var itemElements = listElement.getElementsByClassName("circle-base");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };
        
        var itemElements = listElement.getElementsByClassName("field-link-pulse");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };

    };

};