var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = prompt('Введите список из 5-ти любых имен');
}
    console.log( arr );
    
    var userName = prompt('Введите Ваше имя пользователя', '');
    
    var flag = false;
    
    for (var i = 0; i < arr.length; i++) {
        
        if ( arr[i] === userName) {
            
            flag = true;
        }
    }
            if(flag) {
                alert(userName + '- Вы успешно прошли регистрацию');
            
            } else {
 
                alert('Вы не прошли регистрацию');
            }
