function janken() {
    const gu = 1;
    const choki = 2;
    const pa = 3;

    function humanhand() {
        var human = prompt('半角で１～３の数字を入力してください。\n\n' + gu + '：グー\n' + choki + '：チョキ\n' + pa + '：パー');
        human = parseInt(human, 10);
        if (human != gu && human != choki && human != pa) {
            return undefined;
        } else {
            return human;
        }
    }

    function computerhand() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function handname(number) {
        switch (number) {
            case gu:
                return 'グー';
            case choki:
                return 'チョキ';
            case pa:
                return 'パー';
        }
    }

    function result(computer, human) {
        if (human === computer) {
            return 'あいこです.';
        } else if ((computer === gu && human === pa) || (computer === choki && human === gu) || (computer === pa && human === choki)) {
            return '勝ちました.';
        } else {
            return '負けました.';
        }
    }

    function resulttext(computer, human) {
        return result(computer, human) + 'コンピュータの手は「' + handname(computer) + '」でした';
    }

    var human = humanhand();
    if (!human) {
        alert('入力値を認識できませんでした。ブラウザを再読み込みしてください。');
    } else {
        var computer = computerhand();
        alert(resulttext(computer, human));
    }


}


var button = document.getElementById('button');
button.addEventListener('click', janken)




