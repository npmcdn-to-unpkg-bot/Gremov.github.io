window.onload = function () {
    var parentElementA = document.getElementById('field-item-A');
    parentElementA.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'block')
    };

    var parentElementB = document.getElementById('field-item-B');
    parentElementB.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'block')
    };
    
    var parentElementC = document.getElementById('field-item-C');
    parentElementC.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'block')
    };
    
    var parentElementD = document.getElementById('field-item-D');
    parentElementD.onmouseover = function(e) {
        $(e.currentTarget).find('.field-link').children().css('display', 'block');
    };
    
    
    // $('li.field-link').click(function(event){
    // // 	event.stopPropagation();
    //     // debugger
    // // 	event.preventDefault();
    // });
    
    // $('a.field-link:not(:first)').click(pulseDrop);
    $('a.field-link').slice(1).click(pulseDrop);
    // document.getElementById("field-link").addEventListener("click", pulseDrop);
    
    function pulseDrop(e) {
        // $(e.currentTarget).find('.field-link').children().css('display', 'none')
        var listElement = document.getElementById("field-list");
        var itemElements = listElement.getElementsByClassName("circle-base");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };
        
        
        var itemElements = listElement.getElementsByClassName("field-link-pulse");
        for (var i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display='none';
        };
        
        // var linkElements = document.getElementsByClassName("field-list");
        var linkListElements = listElement.getElementsByClassName("field-link");
        for (var i = 0; i < linkListElements.length; i++) {
            linkListElements[i].style.display='none';
        };
    };
    
    $('#field-item-A').click(linesShow);
    function linesShow(e) {
        var lineElements = document.getElementsByClassName("field-scenario1");
        for (var i = 0; i < lineElements.length; i++) {
            lineElements[i].style.display='block';
        };
    };
    
    $('#field-item-A').click(pointNamesShow);
    // $('#field-item-A').click(function() {
    //     $( "field-text" ).delay( 2000 ).css('display', 'block');;
    // });
    // setTimeout(function(){
    //     $('#field-item-A').click(pointNamesShow);
    // }, 2000);
    
    function pointNamesShow(e) {
         var pointElementNamesShow = document.getElementsByClassName("field-text");
         for (var i = 0; i < pointElementNamesShow.length; i++) {
            pointElementNamesShow[i].style.display='block';
         };
    };

    $('#field-item-B').click(function() {
      $( ".field-scenario2BA" ).show( "slow" );
    });

    $('#field-item-C').click(function() {
      $( ".field-scenario2CA" ).show( "slow" );
    });

    $('#field-item-D').click(function() {
      $( ".field-scenario2DA" ).show( "slow" );
    });

};