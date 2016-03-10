// $('.tradelogos').on('scroll', function() {
//     $(this).addClass('tradelogos__animated');
// });

// // $('.tradelogos').scroll();

// Анимируемому элементу прописыаем класс, в данном случае это .element и в последней строке 
// указываем класс анимации 'bounceInRight'. Если нам необходимо анимировать таким способом несколько элементов, 
// то каждому элементу присваивается свой класс, отличный от .element ( например .element_2 или любой другой), 
// и соответственно указывается анимация для этого элемента.
// Класс анимации выбираем из готовых шаблонов, заключенных в animate.css. Об этом можете посмотреть в статье 
// Красивые анимации на CSS3. Т.е нам необходим файл animate.css, который будем использовать и в дальнейшем.
// В строке if (imagePos < topOfWindow+200) +200 - это расстояние от верха браузера, 
// когда начинает работать анимация. Таким образом, сколько анимаций столько и script-ов. 
// Не забываем подключить библиотеку jQuery
// На практических примерах этот вариант рассматривать не будем, желающие могут сделать это самостоятельно. 
// Мы же рассмотрим другой вариант.

// $(window).scroll(function() {
//     $('.element').each(function(){
//       var imagePos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow+200) {
//         $(this).addClass('bounceInRight');
//       }
//     });
//   });

(function() {
 
var animateLogo = function(e) {
    eventsObj.preventDefault(e);
    
    var elem = eventsObj.getTarget(e),
        animateData = elem.getAttribute('data-move-logo');
        
    if ( animateData ) {
        
        if (e.type === 'click') {
            document.body.className = 'tradelogos__animated_left';
            
        } else if ( e.type === 'mouseover') {
            document.body.className = animateData;
        }
    }
};
 
eventsObj.addEvent(document, 'click', animateLogo );
eventsObj.addEvent(document, 'mouseover', animateLogo );
 
})();