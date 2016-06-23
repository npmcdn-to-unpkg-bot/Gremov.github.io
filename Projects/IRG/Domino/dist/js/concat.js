var defaultTopElementNumber = 1;
var defaultBottomElementNumber = 4;

// function createDominoElement(parentElement, childElement){
//   debugger
//     $(parentElement).empty();
//     // parentElement.appendChild(childElement);
//     $(parentElement).wrap(childElement.innerHTML);
// }

function createDominoElement(parentElementSelector, childElementSelector){
    var parentElement = $(parentElementSelector);
    var childElement = $(childElementSelector).html();
    parentElement.empty();
    parentElement.html(childElement);
}

function assignTopDominoElement(elementNumber) {
    var topDominoElement = document.getElementsByClassName("domino__top-part")[0];
    var topPointElement = document.getElementsByClassName("templates__item" + elementNumber)[0];
    createDominoElement(topDominoElement, topPointElement)
}

function assignBottomDominoElement(elementNumber) {
    var bottomDominoElement = document.getElementsByClassName("domino__bottom-part")[0];
    var bottomPointElement = document.getElementsByClassName("templates__item" + elementNumber)[0];
    createDominoElement(bottomDominoElement, bottomPointElement)
}

function generateRandomElementNumber() {
    return _.random(1, 6);
}

function createDefaultDomino() {
    assignTopDominoElement(defaultTopElementNumber);
    assignBottomDominoElement(defaultBottomElementNumber);
}

// function createNewDomino(){
//     assignTopDominoElement(generateRandomElementNumber());
//     assignBottomDominoElement(generateRandomElementNumber());
// }

function createNewDomino() {
    var topElementNumberValue = generateRandomElementNumber();
    var bottomElementNumberValue = generateRandomElementNumber();
    var topElementNumber = document.getElementById('topElementNumber');
    var bottomElementNumber = document.getElementById('bottomElementNumber');
    $(topElementNumber).val(topElementNumberValue);
    $(bottomElementNumber).val(bottomElementNumberValue);
    assignTopDominoElement(topElementNumberValue);
    assignBottomDominoElement(bottomElementNumberValue);
}

$(document).ready(createDefaultDomino);

function sizeDomino () {
    'use strict';
    var size = document.getElementById("size").value;
    var domino = document.getElementById("domino");
    var topElementNumber = document.getElementById('topElementNumber');
    var bottomElementNumber = document.getElementById('bottomElementNumber');
    var dominoTop = document.getElementsByClassName("templates__list-item" + topElementNumber.value)[1];
    var dominoBottom = document.getElementsByClassName("templates__list-item" + bottomElementNumber.value)[1];
    var dominoChange = 40 + 20 * size;
    $(dominoTop).width( dominoChange ).height( dominoChange );
    $(dominoBottom).width( dominoChange ).height( dominoChange );
}

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


