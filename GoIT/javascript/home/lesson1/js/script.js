
var x = +prompt('Введите число, которое будет возводиться в степень');
var n = +prompt('Введите степень, которое надо применить к числу');

function pow(x, n) {
    var result = x;
    
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    
    if ( n < 1 ) {
        
        alert('Значение данной степени некорректно, введите >= 1')
        
    } else {
        
        return result;
    }

}

var powResult = pow(x, n);

console.log( 'Результат = ', powResult );