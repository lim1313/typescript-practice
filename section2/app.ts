//TODO union 유니온
{
  function combine(input1: number | string, input2: number | string) {
    //타입에 따른 런타임 확인이 필요한 경우 다음과 같이 할 수 있다.
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  const combineAges = combine(30, 26);
  console.log(combineAges);

  const combineNames = combine('max', 'anna');
  console.log(combineNames);
}

//TODO literal type
{
  function combine2(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result.toString();
  }

  const combineAges = combine2(30, 26, 'as-number');
  console.log(combineAges);

  const combineStingAges = combine2('30', '26', 'as-number');
  console.log(combineStingAges);

  const combineNames = combine2('max', 'anna', 'as-text');
  console.log(combineNames);
}

//TODO type alias 타입 별칭
{
  type Combinable = number | string;
  type ConversionDescriptor = 'as-number' | 'as-text';

  function combine3(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result.toString();
  }

  const combineAges = combine2(30, 26, 'as-number');
  console.log(combineAges);

  const combineStingAges = combine2('30', '26', 'as-number');
  console.log(combineStingAges);

  const combineNames = combine2('max', 'anna', 'as-text');
  console.log(combineNames);
}
