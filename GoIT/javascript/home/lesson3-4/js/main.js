
var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);
        
        // console.log('params.inputType', params.inputType);
        
        if (params.inputType) {
            element.setAttribute('type', params.inputType);
        }
        
        if (params.className) {
            element.className = params.className;
        }
        
         if (params.idName) {
            element.setAttribute('id', params.idName);
        }
        
        if (params.value){
            element.setAttribute('value', params.value);
        }
        
        if (params.content) {
            element.innerHTML = params.content;
        }
        
        if (params.parentElement) {
            params.parentElement.appendChild(element);
        }
        
        return element;
    },
    createQuestions: function(questionsCount, responseCount) {
        
        for (var i = 0; i < questionsCount; i ++) {
            
            this.createElement({
                tagName: 'h2',
                content: (i+1) + '. ' + 'Вопрос №' + (i+1),
                parentElement: form
            });
                
          for (var j = 0; j < responseCount; j ++) {
              
                this.createElement({
                    tagName: 'label',
                    className: 'response',
                    idName: 'answers',
                    content: 'Вариант ответа №' + (j+1),
                    parentElement: form
                });
                
               this.createElement({
                    tagName: 'input',
                    className: 'box',
                    inputType: 'checkbox',
                    parentElement: form
                });
                
                label.insertAdjacentElement('afterBegin', checkbox);
          };
        };
    }
}

var body = document.querySelector('body');

body.setAttribute('id', 'fon');

app.createElement({
    tagName: 'div',
    className: 'wrapper',
    parentElement: body
});

var wrapper = document.querySelector('.wrapper');

app.createElement({
    tagName: 'h1',
    content: 'Тест по программированию',
    parentElement: wrapper
});

var form = app.createElement({
    tagName: 'form',
    parentElement: wrapper
});

app.createQuestions(3, 3);

app.createElement({
    tagName: 'input',
    inputType: 'submit',
    idName: 'checkResult',
    className: 'btn btn-default',
    value: 'Проверить мои результаты',
    parentElement: form
});