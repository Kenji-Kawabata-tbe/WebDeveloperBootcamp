function singSong() {
    console.log('ド');
    console.log('レ');
    console.log('ミ');
    console.log('ファ');
    console.log('ソ');
    console.log('ラ');
    console.log('シ');
    console.log('ド');
}
singSong();

function greet(firstName) {
    console.log(`HI!, ${firstName}`);
}
greet('aya');

function shout(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
shout('hello world');

function greet2(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}
greet('Ken', 'Fukuyama');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
repeat('hi', 4);

function isSameNumbers(firstNum, secondNum) {
    if (firstNum === secondNum) {
        console.log('ゾロ目');
    } else {
        console.log('ゾロ目じゃない');
    }
}

function multiply(x, y) {
    return x * y;
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    const sum = x + y;
    return sum;
}
add(1, 2);

function isShortsWeather(temperature) {
    if (temperature >= 25) {
        return true;
    } else {
        return false;
    }
}

// 配列を受け取り、配列が空ならnullを、空でなければ最後の要素を返す
function lastElement(array) {
    if (!array.length) {
        return null;
    } else {
        return array.slice(-1)[0];
    }
}

// 文字列を受け取り、先頭の文字を大文字にして返す
function capitalize(message) {
    return message.charAt(0).toUpperCase() + message.slice(1);
}

// 数字で構成された一つの配列を引数として受け取る。そして、配列内の数字の和を返す。
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total;
}

function returnDay(number) {
    const days = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'}
    switch (number) {
        case 1:
            return days['1']
            break;
        case 2:
            return days['2']
            break;
        case 3:
            return days['3']
            break;
        case 4:
            return days['4']
            break;
        case 5:
            return days['5']
            break;
        case 6:
            return days['6']
            break;
        case 7:
            return days['7']
            break;
        default:
            return null;
        }
}
