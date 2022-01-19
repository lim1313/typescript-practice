//TODO union 유니온
function combine(input1, input2) {
    //타입에 따른 런타임 확인이 필요한 경우 다음과 같이 할 수 있다.
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine('max', 'anna');
console.log(combineAges);
//TODO literal type
