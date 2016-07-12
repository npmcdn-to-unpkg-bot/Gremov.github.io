var defaultTopElementNumber = 1;
var defaultBottomElementNumber = 4;

// function createDominoElement(parentElement, childElement){
//   debugger
//     $(parentElement).empty();
//     // parentElement.appendChild(childElement);
//     $(parentElement).wrap(childElement.innerHTML);
// }

function createDominoElement(parentElementSelector, childElementSelector) {
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
