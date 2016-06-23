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