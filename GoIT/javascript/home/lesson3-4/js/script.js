
// cases to study

var div = document.createElement('div');
div.classList.add('container');

var body = document.querySelector('body');

body.insertBefore(div, body.children[0]);

var h3 = document.createElement('h3');
h3.innerHTML = 'Тест по программированию';

var container = document.querySelector('.container');

container.insertBefore(h3, container.children[0]);

var ol = document.createElement('ol');
ol.classList.add('boxList');

container.insertBefore(ol, container.children[1]);

var li = document.createElement('li');
li.classList.add('ask')
li.innerHTML = 'Вопрос <span>№ 1</span>';

var ol = document.querySelector('ol');

ol.insertBefore(li, ol.children[0]);

var li2 = li.cloneNode(true);
li2.querySelector('span').innerHTML = '№ 2';

ol.insertBefore(li2, ol.children[1]);

var li3 = li.cloneNode(true);
li3.querySelector('span').innerHTML = '№ 3';

ol.insertBefore(li3, ol.children[2]);

var div = document.createElement('div');
div.classList.add('checkbox');

var ask = document.querySelector('.ask');

ask.insertBefore(div, ask.children[1]);

var checkbox = document.createElement('input');
checkbox.setAttribute("type", "checkbox");

var label = document.createElement('label');
label.innerHTML = 'Вариант ответа <span>№ 1</span>';

var checkbox = document.querySelector('.checkbox');

checkbox.insertBefore(label, checkbox.children[1]);

// var li = document.createElement('li');
// li.innerHTML = 'Вариант ответа <span>№ 1</span>';

// var response = document.querySelector('.response');

// response.insertBefore(li, response.children[0]);

