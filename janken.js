
var gu = 1;
var choki = 2;
var pa = 3;

function humanhand() {
    var hum = prompt('半角で１～３の数字を入力');
    hum = parseInt(hum, 10);
    if (hum != gu && hum != choki && hum != pa) {
        return undefined;
    } else {
        return hum;
    }
}

var button = document.getElementById('button');

button.addEventListener('click', humanhand)




