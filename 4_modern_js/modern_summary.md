

# Summary



#### 자바스크립트의 데이터 타입

자바스크립트에는 8가지 데이터 타입이 있습니다.

1. number
2. string
3. boolean
4. undefined
5. null
6. object
7. symbol
8. bigint

#### 자바스크립트의 유연한 데이터 타입

자바스크립트는 데이터 타입이 유연한 프로그래밍 언어입니다. 맥락에 유연하게 변하는 데이터 타입의 특징은 처음엔 생소하고 혼란스러울 수 있지만, 잘 이해하고 활용한다면 좀 더 간결한 코드를 작성하고 빠르게 개발할 수 있는 장점이 될 수 있습니다!

#### Truthy 값과 Falsy 값

if, for, while 등 불린 타입의 값이 요구되는 맥락에서는 조건식이나 불린 타입의 값 뿐만아니라 다른 타입의 값도 불린 값처럼 평가될 수 있는데요. 이 때, false 처럼 평가되는 값을 falsy 값, true 처럼 평가되는 값을 truthy값이라고 부릅니다. falsy값에는 false, null, undefined, 0, NaN, ''(빈 문자열)이 있고, falsy값을 제외한 값들은 모두 truthy값이 됩니다.

만약 falsy와 truthy값을 명확하게 확인하고 싶다면 `Boolean` 함수를 사용해서 직접 boolean 타입으로 형 변환 해볼 수도 있습니다.

```js
// falsy
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean(NaN);
Boolean('');

// truthy
Boolean(true);
Boolean('codeit');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
```

truthy와 falsy의 개념은 자바스크립트에서 불린 타입으로의 형 변환을 이해할 때 핵심이되는 개념이 잘 기억해 주세요.

#### 독특한 방식으로 동작하는 논리 연산자

자바스크립트에서 AND와 OR연산자는 무조건 불린 값을 리턴하는게 아니라, 왼쪽 피연산자 값의 유형에 따라서 두 피연산자 중 하나를 리턴하는 방식으로 동작합니다. AND 연산자는 왼쪽 피연산자가 falsy값일 때 왼쪽 피연산자를, 왼쪽 피연산자가 truthy값일 때 오른쪽 피연산자를 리턴하고 반대로, OR 연산자는 왼쪽 피연산자가 falsy 일 때 오른쪽 피연산자를, 왼쪽 피연산자가 truthy 일 때 왼쪽 피연산자를 리턴합니다.

```js
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}
```

#### 자바스크립트의 다양한 변수 선언 방식

자바스크립트에는 다양한 변수 선언 키워드가 있습니다. 자바스크립트가 처음 등장할 때부터 사용되던 var와, 그리고 var의 부족함을 채우기위해 ES2015에서 새롭게 등장한 let과 const가 있는데요.

var 변수는 아래와 같은 특징이 있었습니다.

1. 변수 이름 중복선언 가능,
2. 변수 선언 전에 사용 가능(호이스팅),
3. 함수 스코프

특히나 중복된 이름으로 선언이 가능했던 특징은 여러 사람이 협업할 때 생각보다 자주 문제가 되곤 했었는데요.  이런 문제를 개선하기 위해 ES2015에서 let과 const가 등장했고, 다음과 같은 특징이 있습니다.

1. 변수 이름 중복선언 불가 (SyntaxError 발생)
2. 변수 선언 전에 사용 불가 (ReferenceError 발생)
3. 블록 스코프

덧붙여 const 키워드는 let 키워드와 다르게 값을 재할당할 수 없다는 특징도 있습니다. 그래서 ES2015 이후부터는 var보다 let과 const 키워드 사용이 권장된다는 사실도 참고해 두시면 좋을 것 같습니다.

#### 함수 스코프(function scope)와 블록 스코프(block scope)

var 키워드로 선언한 변수는 함수 스코프 let과 const 키워드로 선언한 변수는 블록 스코프를 가집니다.

함수 스코프란 말 그대로 함수를 기준으로 스코프를 구분한다는 뜻인데요. 그렇기 때문에 아래 코드처럼 함수 안에서 선언한 변수는 함수 안에서만 유효하게 됩니다.

```js
function sayHi() {
  var userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

console.log(userName); // ReferenceError
```

하지만 함수를 제외한 for, if, while 등과 같은 문법 안에서 선언한 변수는 그 문법 밖에서도 계속 유효했었기 때문에 때로는 중복선언등의 문제가 생겨나기도 했는데요. 이런 문제를 해결하기 위해 let과 const 키워드와 함께 블록 스코프가 등장하게 된 겁니다.

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 5
```

블록 스코프는 중괄호로 감싸진 코드 블록에 따라 유효 범위를 구분하게 되는데요. 아래 코드에서 볼 수 있듯이 함수와 다른 문법들 뿐만아니라, 그냥 중괄호로 감싸진 코드 블록으로도 유효 범위가 구분되는 모습을 확인할 수 있습니다.

```js
function sayHi() {
  const userName = 'codeit';
  console.log(`Hi ${userName}!`);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

{
  let language = 'JavaScript';
}

console.log(userName); // ReferenceError
console.log(i); // ReferenceError
console.log(language); // ReferenceError
```



# 함수 선언

자바스크립트에서 함수는 다양한 방식으로 선언할 수 있습니다. 가장 일반적인 방법은 `function` 키워드를 통해 함수를 선언하는 방식인데요.

```js
// 함수 선언
function sayHi() {
  console.log('Hi!');
}
```

이렇게 작성하는 방식을 함수 선언(function declaration)이라고 합니다.

# 함수 표현식

그리고 자바스크립트에서 함수는 값으로 취급될 수도 있기 때문에 변수에 할당해서 함수를 선언할 수도 있습니다.

```jsx
// 함수 표현식
const sayHi = function () {
  console.log('Hi!');
};
```

이렇게 함수를 값으로 다루는 방식을 함수 표현식 (function expression)이라고 합니다.

# 다양한 함수의 형태

자바스크립트에서 함수는 값으로 취급되는데요. 이런 특징은 코드를 작성할 때 다양한 형태로 활용될 수 있습니다.

```js
// 변수에 할당해서 활용
const printJS = function () {
  console.log('JavaScript');
};

// 객체의 메소드로 활용
const codeit = {
  printTitle: function () {
    console.log('Codeit');
  }
}

// 콜백 함수로 활용
myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});

// 고차 함수로 활용
function myFunction() {
  return function () {
    console.log('Hi!?');
  };
};
```

# 파라미터의 기본값

자바스립트에서 함수의 파라미터는 기본값을 가질 수가 있는데요. 기본값이 있는 파라미터는 함수를 호출할 때 아규먼트를 전달하지 않으면, 함수 내부의 동작은 이 파라미터의 기본값을 가지고 동작하게 됩니다.

```js
function sayHi(name = 'Codeit') {
  console.log(`Hi! ${name}`);
}

sayHi('JavaScript'); // Hi! JavaScript
sayHi(); // Hi! Codeit
```

# arguments 객체

자바스크립트 함수 안에는 `arguments`라는 독특한 객체가 존재합니다. `arguments` 객체는 함수를 호출할 때 전달한 아규먼트들을 배열의 형태로 모아둔 유사 배열 객체인데요. 특히, 함수를 호출할 때 전달되는 아규먼트의 개수가 불규칙적일 때 유용하게 활용될 수 있습니다.

```js
function printArguments() {
  // arguments 객체의 요소들을 하나씩 출력
  for (const arg of arguments) {
    console.log(arg); 
  }
}

printArguments('Young', 'Mark', 'Koby');
```

참고로 `arguments`라는 객체를 활용하고자 한다면 함수 안에서 사용할 파라미터나 변수, 함수의 이름을 `arguments`라고 짓는 것은 피하는게 좋겠죠?

# Rest Parameter

`arguments` 객체를 이용하는 것 말고도 불규칙적으로 전달되는 아규먼트를 다루는 방법이 있는데요. 파라미터 앞에 마침표 세 개를 붙여주면, 여러 개로 전달되는 아규먼트들을 배열로 다룰 수가 있게 됩니다. 그리고 `arguments`객체는 유사 배열이기 때문에 배열의 메소드를 활용할 수 없는 반면, rest parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다는 장점이 있습니다.

```js
function printArguments(...args) {
  // args 객체의 요소들을 하나씩 출력
  for (const arg of args) {
    console.log(arg); 
  }
}

printArguments('Young', 'Mark', 'Koby');
```

rest parameter는 다른 일반 파라미터들과 함께 사용될 수도 있는데요.

```js
function printRankingList(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
```

이름 그대로 앞에 정의된 이름 그대로 앞에 정의된 파라미터에 argument를 먼저 할당하고 나머지 argument를 배열로 묶는 역할을 하기 때문에 일반 파라미터와 함께 사용할 때는 반드시 가장 마지막에 작성해야 한다는 점을 꼭 기억해 주세요!

# Arrow Function

arrow function은 익명 함수를 좀 더 간결하게 표현할 수 있도록 ES2015에서 새롭게 등장한 함수 선언 방식입니다. 아래 코드와 같이 표현식으로 함수를 정의할 때 활용될 수도 있고 콜백 함수로 전달할 때 활용할 수도 있습니다.

```js
// 화살표 함수 정의
const getTwice = (number) => {
  return number * 2;
};

// 콜백 함수로 활용
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});
```

화살표 함수는 다양한 상황에 따라 축약형으로 작성될 수 있는데요. 아래 코드와 주석을 한 번 참고해 주세요!

```js
// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
};

// 파라미터를 감싸는 소괄호 생략 가능
const getTwice = number => {
  return number * 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
  return a + b;
};

// return문과 중괄호 생략 가능
const sum = (a, b) => a + b;
```

그리고 Arrow function이 일반 함수와 몇 가지 차이점이 있는데요. 가장 대표적인 차이점은 **arguments 객체가 없고, this가 가리키는 값이 일반 함수와 다르다**는 점입니다. arrow function을 사용할 땐 이런 부분을 잘 고려해야 된다는 점을 잊지 마세요!

# this

자바스크립트에는 this라는 조금 특별한 키워드가 있습니다. 웹 브라우저에서 this가 사용될 때는 전역 객체, Window 객체를 가지게 됩니다. 하지만 객체의 메소드를 정의하기 위한 함수 안에선 **메소드를 호출한 객체**를 가리키게 됩니다.

```js
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
```



# 조건부 연산자 (Conditional operator)

삼항 연산자 (Ternary operator)라고도 불리는 이 연산자는 자바스크립트에서 세 개의 피연산자를 가지는 유일한 연산자 입니다.  if문과 같은 원리로 조건에 따라 값을 결정할 때 활용되는데요.

```js
const cutOff = 80;

const passChecker = (score) => score > cutOff ? '합격입니다!' : '불합격입니다!';

console.log(passChecker(75));
```

간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현할 수 있는 장점이 있지만 내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장은 작성할 수 없다는 한계가 있기 때문에 if문을 완벽하게 대체할 수는 없다는 점. 꼭 기억해 주세요!

# Spread 구문

여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수가 있습니다.

```js
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있습니다. 참고로 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다는 부분도 잘 기억해 두시면 좋을 것 같습니다.

```js
const members = ['태호', '종훈', '우재'];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

const topic = {
  name: '모던 자바스크립트',
  language: 'JavaScript', 
}
const newArray = [...topic]; // TypeError!
```

# 모던한 프로퍼티 표기법

ES2015 이후부터는 자바스크립트에서 변수나 함수룰 활용해서 프로퍼티를 만들 때 프로퍼티 네임과 변수나 함수 이름이 같다면 다음과 같이 축약해서 사용할 수 있습니다.

```js
function sayHi() {
  console.log('Hi!');
}

const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title, 
  birth, 
  job, 
  sayHi,
};

console.log(user); // {title: "codeit", birth: 2017, job: "프로그래밍 강사", sayHi: ƒ}
```

그리고 메소드를 작성할 때도 다음과 같이 `function` 키워드를 생략할 수가 있습니다.

```js
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang
```

뿐만아니라 아래 코드와 같이 **대괄호**를 활용하면 다양한 표현식으로 프로퍼티 네임을 작성할 수도 있으니까 잘 기억해 두셨다가 유용하게 활용해 보세요!

```js
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);
```

# 구조 분해 Destructuring

배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수가 있습니다.

```js
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', '편집하는민환'];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
```

함수에서 default parater, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있습니다.

```js
// Array Destructuring
const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB 2667 MHz DDR4',
  storage: '1TB SSD 저장 장치',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}
```

#### 

# 에러와 에러 객체

자바스크립트에서 에러를 다루는 일은 굉장히 중요하다고 할 수 있는데요. 자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않기 때문입니다.

그리고 에러가 발생하면 에러에 대한 정보를 `name`과 `message`라는 프로퍼티로 담고 있는 **에러 객체**가 만들어지는데요. 대표적인 에러 객체는 SyntaxError, ReferenceError, TypeError 입니다.

에러 객체는 직접 만들 수도 있는데요. `new` 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, `throw` 키워드로 에러를 발생시킬 수 있습니다.

```js
throw new TypeError('타입 에러가 발생했습니다.');
```

# try catch문

try catch문은 자바스크립트에서 대표적인 에러 처리 방법입니다.

```js
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
}
```

try문 안에서 실행할 코드를 작성하고, try문에서 에러가 발생한 경우에 실행할 코드를 catch 문 안에 작성하면 되는데요. 이 때 try문에서 발생한 에러 객체가 catch문의 첫 번째 파라미터로 전달됩니다. 만약, try문에서 에러가 발생하지 않을 경우 catch문의 코드는 동작하지 않습니다.

그리고 try catch문에서 에러의 유무와 상관없이 항상 동작해야할 코드가 필요하다면 finally문을 활용할 수 있습니다.

```js
try {
  // 실행할 코드
} catch (error) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
```

# forEach 메소드

배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드입니다. `forEach` 메소드는 첫 번째 아규먼트로 콜백 함수를 전달받는데요. 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달됩니다. (index와 array는 생략가능)

```js
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
```

# map 메소드

`forEach`와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드 입니다. 단, 첫 번째 아규먼트로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징이 있습니다.

```js
const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]
```

# filter 메소드

`filter` 메소드는 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴하는 메소드입니다.

```js
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((element, index, array) => {
  return element.brand === 'Apple';
});

console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]
```

# find 메소드

`find` 메소드는 `filter` 메소드와 비슷하게 동작하지만, 배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료하는 메소드 입니다.

```js
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const myLaptop = devices.find((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}
```

# some 메소드

`some` 메소드는 배열 안에 콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드 입니다. 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 `false`를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하는 요소가 등장한다면 바로 `true`를 리턴하고 반복을 종료합니다.

```js
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
  return element > 5;
});

console.log(someReturn); // true;
```

# every 메소드

`every` 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드 입니다. 배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 `true`를 리턴하고, 배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하지 않는 요소가 등장한다면 바로 `false`를 리턴하고 반복을 종료합니다.

```js
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;
```

# reduce 메소드

`reduce` 메소드는 누적값을 계산할 때 활용하는 조금 독특한 메소드 입니다. `reduce` 메소드는 일반적으로 두 개의 파라미터를 활용하는데요. 첫 번째는 반복동작할 콜백함수입니다. 매번 실행되는 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫번째 파라미터로 전달되는데요. 결과적으로 마지막 콜백함수가 리턴하는 값이 `reduce` 메소드의 최종 리턴값이 되는겁니다. 이 때 `reduce` 메소드의 두 번째 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫 번째 파라미터로 전달되는 것이죠.

```js
const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll); // 10
```

처음에는 조금 복잡할 수 있지만, 원리를 잘 이해하고나면 유용하게 활용할 수 있으니 포기하지 마시고 잘 기억해 주세요!

# sort 메소드

배열에서 `sort`라는 메소드를 활용하면 배열을 정렬할 수 있습니다. `sort` 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 [유니코드](https://ko.wikipedia.org/wiki/유니코드)에 정의된 문자열 순서에 따라 정렬됩니다.

```js
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
```

그렇기 때문에 `numbers`에 `sort` 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다. 그럴 땐 `sort` 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데요.

```js
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```

`sort` 메소드를 사용할 때 한 가지 주의해야될 부분은 `메소드를 실행하는 원본 배열의 요소들을 정렬`한다는 점입니다. 그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니까, 원본 배열의 순서가 필요하다면 미리 다른 변수에 복사해두는 것이 좋겠죠!?

# reverse 메소드

`reverse` 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 입니다. `reverse` 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순이 메소드를 호출해주기만 하면 배열의 순서가 뒤집히는데요. `sort` 메소드와 마찬가지로 **원본 배열의 요소들을 뒤집어 버린다**는 점은 꼭 주의헤야 합니다.

```js
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
```

# Map

Map은 이름이 있는 데이터를 저장한다는 점에서 **객체와 비슷**합니다. 하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요. `new` 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

- map.set(key, value): key를 이용해 value를 추가하는 메소드.
- map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
- map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
- map.delete(key): key에 해당하는 값을 삭제하는 메소드.
- map.clear(): Map 안의 모든 요소를 제거하는 메소드.
- map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
```

문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

# Set

Set은 여러 개의 값을 순서대로 저장한다는 점에서 **배열과 비슷**합니다. 하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요. Map과 마찬가지로 `new` 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

- set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
- set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
- set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
- set.clear(): Set 안의 모든 요소를 제거하는 메소드.
- set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
```

한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 `get`메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요. 한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

```js
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
```

그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다. 그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요. 바로, **중복을 허용하지 않는 값들을 모을 때**입니다.

Set은 **중복되는 값을 허용하지 않는 독특한 특징**이 있는데요. Set 객체에 요소를 추가할 때 이미 Set 객체 안에 있는 값(중복된 값)을 추가하려고 하면 그 값은 무시되는 특징이 있습니다. 처음 Set을 생성할 때 아규먼트로 배열을 전달할 수가 있는데요. 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용할 수 있습니다.

```js
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
```

# 모듈

모듈은 간단하게, 자바스크립트 파일 하나라고 할 수 있습니다. 복잡하고 많은 양의 코드를 기능에 따라 각각의 파일로 나눠 관리하면

1. 코드를 좀 더 효율적으로 관리할 수 있고,
2. 비슷한 기능이 필요할 때 다른 프로그램에서 재사용 할 수도 있다는 장점이 있습니다.

# 모듈 스코프

모듈 파일 안에서 선언한 변수는 외부에서 자유롭게 접근할 수 없도록 막아야 하는데요. 다시 말해 모듈은 파일 안에서 모듈 파일만의 독립적인 스코프를 가지고 있어야 합니다.

HTML파일에서 자바스크립트 파일을 불러올 때 모듈 스코프를 갖게 하려면 `script`태그에 `type`속성을 `module`이라는 값으로 지정해 주어야 합니다.

```html
<body>
  <script type="module" src="index.js"></script>
</body>
```

# 모듈 문법

자바스크립트의 모듈 문법은 기본적으로 `export`와 `import` 입니다. 모듈 스코프를 가진 파일에서 외부로 내보내고자 하는 변수나 함수를 `export` 키워드를 통해 내보내고, 모듈 파일에서 내보낸 변수나 함수들은 다른 파일에서 `import` 키워드를 통해 가져옵니다.

```js
// printer.js
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
};
// index.js
import { title, print } from './printer.js';

print(title);
```

# 이름 바꿔 import 하기

`import` 키워드를 통해 모듈을 불러올 때 `as` 키워드를 활용하면 `import`하는 대상들의 이름을 변경할 수 있습니다. `import` 할 변수나 함수 이름을 조금 더 간결한 이름으로 바꾸거나, 혹은 더 구체적으로 바꾸고 싶을 때 활용하면 좋겠죠? 뿐만 아니라 이름을 바꿔서 `import` 하면 여러 파일에서 불러오는 대상들의 이름이 중복되는 문제를 해결할 수도 있습니다.

```js
import { title as printerTitle, print, printArr } from './printer.js';
import { title, data as members } from './members.js';

printer(title);
arrPrinter(members);
```

# 한꺼번에 import 하기

`import`할 때 **와일드카드 문자(\*)**와 `as`를 활용하면 모듈 파일에서 `export`하는 모든 대상을 하나의 객체로 불러올 수 있습니다.

```js
import * as printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```

# 한꺼번에 export 하기

변수나 함수 앞에 매번 `export` 키워드를 붙일 수도 있지만, 선언된 변수나 함수를 하나의 객체로 모아 한꺼번에 내보낼 수도 있습니다. 이때 `as` 키워드를 활용하면 이름을 변경해서 `export`할 수도 있습니다.

```js
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

function printArr(arr) {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  });
}

export { title as printerTitle, print, printArr };
```

# default export

`export`를 할 때 `default` 키워드를 함께 사용하면 모듈 파일에서 기본적으로 `export`할 대상을 정할 수 있습니다. 일반적으로 모듈 파일에서 `export` 대상이 하나라면, 이 `default` 키워드를 함께 활용하는 것이 조금 더 간결한 코드를 구성하는데 도움이 되는데요.

```js
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

export default print;
```

**default export**는 `import`할 때 기본적으로 다음과 같이 불러올 수 있지만,

```js
import { default as printerJS } from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```

다음과 같이 축약형 문법으로 `import` 할 수도 있기 때문입니다.

```js
import printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```







#### 1. 공식 문서

ECMAScript의 공식 문서가 궁금하다면 아래 링크를 참고해 보세요.

- [ECMA-International 공식 ECMA-262문서](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

#### 2. 진행 현황

지금까지 제정된 ECMAScript 표준 사항이나 과거 역사가 궁금하다면 아래 링크들을 참고해 보세요.

- [위키백과 - ECMA스크립트](https://ko.wikipedia.org/wiki/ECMA스크립트)
- [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/언어_리소스)

#### 3. 브라우저 지원 현황

각각의 문법별로 브라우저의 지원 여부를 확인하고 싶다면 아래 링크들을 참고해 보세요.

- [한눈에 확인하는 호환성 테이블](http://kangax.github.io/compat-table/es6/)
- [문법 검색으로 확인하는 호환성 테이블](https://caniuse.com/)

#### 4. 버전의 정식 표기

ES6부터는 연호를 사용해서 ES2015, ES2016이라고도 부른다는 점 배웠었죠? 개발자들 사이에서는 짧고 빠르게 소통하기 위해서 ES6, ES7이라는 용어를 사용하지만, 실제로 ECMA International에서 버전을 발표할 때 표기하는 정식 명칭은 연호를 사용해서 **ECMAScript 2015**라고 표기한다는 점! 참고해 두시면 좋을 것 같습니다.

#### 5. JavaScript vs ECMAScript

간혹 JavaScript와 ECMAScript가 똑같다고 오해하는 경우가 있는데요. 둘 사이에는 명확한 차이가 있습니다!

일단 첫 번째 차이점은, JavaScript는 **프로그래밍 언어**이고, ECMAScript는 **프로그래밍 언어의 표준**입니다.  쉽게 생각하면 ECMAScript는 JavaScript가 갖추어야 할 내용을 정리해둔 **'설명서'**이고, JavaScript는 ECMAScript를 준수해서 만들어낸 **'결과물'** 이라고 생각할 수 있는데요. 참고로 ECMAScript가 JavaScript화 하기 위해 등장하긴 했지만, ECMAScript는 JavaScript 뿐만아니라 모든 스크립트 언어(scripting languages)가 지켜야 하는 표준입니다. 만약 여러분이 자바스크립트와 같은 언어를 직접 만들고자 한다면, 이 ECMAScript를 준수해야 한다는 것이죠!

그리도 두 번째 차이점은 **JavaScript는** ECMAScript를 기반으로 하지만 ECMAScript에 정의된 내용뿐만 아니라, **다른 부가적인 기능도 있다**는 겁니다.  특히, 우리가 자바스크립트로 HTML 코드를 제어하기 위해 사용하는 DOM(Document Object Model)을 다루는 문법들은 ECMAScript에 표준화된 문법이 아니라 **WebIDL**에서 표준화된 기술이라고 할 수 있습니다.

JavaScript와 ECMAScript의 차이. 이제는 잘 구분할 수 있겠죠?





- 데이터 타입 

  엄청 유연하다. `2*"3" = 6` 이런식으로 가능. 리턴하는 값이 어떤건지 확실히 알고 있어야 한다. 

  ![data_type ](./images/data_type .png)

  - Symbol과 Bright

    지난 영상에서 Symbol과 BigInt라는 새로운 데이터 타입을 잠깐 살펴봤는데요. 특별한 경우에만 사용되기 때문에 활용 빈도가 높진 않지만, 그래도 어떤 값인지 가볍게 한 번 살펴봅시다.

    #### Symbol

    심볼(symbol)은 기본형 데이터 타입(primitive data type) 중 하나입니다. *심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용하는데요.*

    ```js
    const user = Symbol();
    ```

    일단, 이렇게 Symbol이라는 함수를 통해서 심볼 값을 만들어 낼 수 있습니다.

    ```js
    const user = Symbol('this is a user');
    ```

    그리고 괄호 안에 심볼에 대한 설명을 붙일 수도 있습니다. 이렇게 Symbol 값을 담게 된 user라는 이름의 변수는 **다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수**가 되는데요.

    ```js
    const user = Symbol('this is a user');
    
    user === 'this is user'; // false
    user === 'user'; // false
    user === 'Symbol'; // false
    user === true; // false
    user === false; // false
    user === 123; // false
    user === 0; // false
    user === null; // false
    user === undefined; // false
    ...
    ```

    심지어는 똑같은 설명을 붙인 심볼을 만들더라도 두 값을 비교하면 false가 반환됩니다.

    ```js
    const symbolA = Symbol('this is Symbol');
    const symbolB = Symbol('this is Symbol');
    
    console.log(symbolA === symbolB); // false
    ```

    #### BigInt

    BigInt는 자바스크립트에서 아주 큰 정수(Integer)를 표현하기 위해 등장한 데이터 타입입니다. 사실 자바스크립트의 숫자에는 안전한 정수 표현의 한계가 있는데요. 안전한 정수 표현이라는 게 조금 이상하죠? 자바스크립트에서 안전한 최대 정수는 `2**53 - 1`, 안전한 최소 정수는 `-(2**53 - 1)` 입니다. `2**53 - 1`은 구체적으로 9007199254740991이라는 숫자로 약 9,000조 정도의 숫자인데요. 안전한 정수 표현이라는 의미는 자바스크립트에서 이 숫자 범위를 초과하는 정숫값을 사용하려고 하면 연산에 미세한 오류가 발생한다는 뜻입니다.

    예를 들면, `9007199254740991 + 1`과 `9007199254740991 + 2`를 비교하면 true라는 결과가 리턴됩니다. 실제로 콘솔에 9007199254740991 + 2과 심지어 9007199254740993을 출력해봐도 9007199254740993이 아니라 9007199254740992가 출력되는 모습을 확인할 수 있는데요.

    ```js
    console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
    console.log(9007199254740991 + 2); /// 9007199254740992
    console.log(9007199254740993); /// 9007199254740992
    ```

    이 숫자 범위는 JavaScript가 [IEEE 754](https://ko.wikipedia.org/wiki/IEEE_754)에 기술된 [배정밀도 부동소수점 형식 숫자체계](https://ko.wikipedia.org/wiki/부동소수점)를 사용하기 때문입니다. 혹시 용어가 너무 어색하다거나 개념이 조금 어렵다면, 일단은 **자바스크립트의 숫자형(number type) 값에는 9000조 정도의 정수 표현의 한계가 존재한다.** 정도만 이해해 주세요! 사실 9,000조라는 숫자도 꽤 큰 숫자기 때문에 대부분 상황에서는 큰 문제가 되지 않는데요. 그래도 암호 관련 작업이나 계산기 관련 작업을 할 때, 아주 큰 숫자를 다루거나 혹은 굉장히 정확한 연산이 필요한 상황에서 이보다 더 큰 숫자가 필요할 수도 있겠죠?

    그럴 때 바로 BigInt라는 데이터 타입의 값을 사용하면 됩니다. BigInt 타입의 값은 일반 정수 마지막에 알파벳 n을 붙이거나 BinInt라는 함수를 사용하면 되는데요.

    ```js
    console.log(9007199254740993n); // 9007199254740993n
    console.log(BigInt(9007199254740993)); // 9007199254740993
    ```

    이렇게 BigInt 타입을 사용하면 `2**53 - 1` 보다 큰 정숫값도 안전하게 표현할 수가 있습니다. 단, BigInt 타입에는 몇 가지 주의사항이 있는데요. 일단 BigInt 타입은 말 그대로 큰 정수를 표현하기 위한 데이터 타입이기 때문에 소수 표현에는 사용할 수가 없습니다.

    ```js
    1.5n; // SyntaxError
    ```

    그래서 소수 형태의 결과가 리턴되는 연산은 소수점 아랫부분은 버려지고 정수 형태로 리턴됩니다.

    ```js
    10n / 6n; // 1n
    5n / 2n; // 2n
    ```

    그리고 BigInt 타입끼리만 연산할 수 있고, 서로 다른 타입끼리의 연산은 명시적으로 타입 변환을 해야 합니다.

    ```js
    3n * 2; // TypeError
    3n * 2n; // 6n
    Number(3n) * 2; // 6
    ```

    큰 범위의 정수를 안전하게 사용할 수 있다는 장점이 있지만, 이런 제한사항들 때문에 실제로 BigInt 타입의 값을 활용할 상황들이 그리 흔하진 않습니다. 그래도 이런 타입이 있다는 사실을 잘 기억해 두셨다가 언젠가 필요한 상황이 생겼을 때 적절히 활용하시면 좋을 것 같습니다! :)

# typeof 연산자

지금까지 계속해서 자바스크립트의 데이터 타입에 대해서 살펴보고 있는데요. 우리가 사용하는 값이 어떤 데이터 타입을 가지고 있는지 확인하려면 `typeof` 연산자를 사용해야 합니다. `typeof` 연산자는 키워드 다음에 공백(띄어쓰기)을 두고 값을 작성해도 되고, 함수를 사용하듯 괄호로 감싸서 사용할 수도 있는데요.

```js
typeof 'Codeit'; // string
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof true; // boolean
typeof(false); // boolean
typeof(123); // number
typeof(NaN); // number
typeof(456n); // bigint
typeof(undefined); // undefined
```

하지만 한 가지 주의해야 할 점은 `typeof` 연산자의 결과가 모든 타입과 1:1로 매칭되지 않는다는 점입니다.

## null이 object라고?

일단, `typeof null`을 하면 문자열 `null`이 리턴되는 게 아니라 문자열 **object**가 리턴되는데요.

```js
typeof null; // object
```

이건 자바스크립트가 처음 구현될 때의 [특별한 문법 설계](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof#null) 때문입니다. 나중에 ECMAScript에서 수정이 제안되었었지만, 이미 개발된 많은 프로젝트에 버그가 생기는 우려로 인해 반영되지 않고 있습니다.

## function?

그리고 함수에 `typeof` 연산자를 사용하면 **function**이라는 값을 리턴하는데요.

```js
function sayHi() {
  console.log('Hi!?');
}

typeof sayHi; // function
```

자바스크립트에서 함수는 객체로 취급됩니다. 그래서 간혹 object를 리턴할거라 예상하는 실수를 하기도 하는데요. `typeof` 연산자를 함수에 사용하면 **function**이 리턴된다는 점도 꼭 기억해 두시면 좋을 것 같습니다.





### Boolean

- 어떤 값이 true가 되고, 어떤 값이 false가 될까? 아래 Falsy 제외하고, 싹다 Truthy값. [], {} 이런것도 다 True. 모르겠으면, Boolean()으로 변환해서 확인해보면 되잖아. 

  ![falsy](./images/falsy.png)




### AND, OR

- ```
  console.log('Codeit' && 'Javascript')
  
  이거는 true/false가 나와야 될 것 같은데, 해보니깐 Javascript가 나온다. 
  한쪽을 선택하네?
  ```

- Why? **AND는 왼쪽이 Truthy하면 오른쪽값을 리턴하고, Falsy하면 그대로 왼쪽값을 리턴하는 방식으로 작동한다.**

  -  그래서 위에서는 Javascipt가 나왔던 것. 

- **OR**는?  **AND와 반대로, 왼쪽값이 Truthy하면 왼쪽값을 리턴하고, Falsy하면 오른쪽 값을 리턴하는 형태로 작동한다.** 

  **추가** 

  #### AND 와 OR 연산자의 연산 우선순위

  지난 시간에는 자바스크립트에서 AND와 OR 연산자의 독특한 연산 방식에 대해 알아봤는데요. 아래 코드를 봅시다.

  ```js
  function checkAnswer(value) {
    if (value < 10 && value > 0 && value !== 3) {
      return '정답입니다!';
    } 
  
    return '틀렸습니다!';
  }
  
  console.log(checkAnswer(4)); // 정답입니다!
  ```

  파라미터 value로 전달되는 값이 10보다 작으면서 0보다는 크고, 그러면서도 3은 아닐 때 '정답입니다!' 라는 문자열을 콘솔에 출력하는 함수를 정의했는데요. 코드를 작성하다 보면 다양한 상황을 고려하기 위해서 이렇게 AND나 OR 연산자를 여러 번 사용해야 할 수도 있습니다.

  그런데 한 가지 조심해야 할 부분이 있는데요. 위에 있는 코드처럼 AND 연산자나 OR 연산자 중 하나만 계속해서 사용할 때는 문제 없지만, 만약 AND 연산자와 OR 연산자를 섞어서 사용할 때는 연산의 우선순위가 존재한다는 겁니다. 쉽게 설명해서 1 + 2 + 3 처럼 계속해서 더하기 연산자만 사용한다면 왼쪽부터 차례대로 더하면 되지만, 1 + 2 * 3 처럼 더하기와 곱하기 연산자가 섞여 있다면 연산자 우선순위를 고려해야 한다는 것이죠. 곱하기 연산자가 더하기 연산자보다 연산 우선순위가 높다는 사실 모두 알고 계시죠? AND 와 OR 연산자 사이에서는 **AND 연산자의 우선순위가 더 높습니다.**

  ```js
  console.log(true || false && false); // true
  console.log((true || false) && false); // false
  
  console.log('Codeit' || NaN && false); // Codeit
  console.log(('Codeit' || NaN) && false); // false
  ```

  위 코드처럼 OR 연산자 뒤에 AND 연산자를 사용한다면, 소괄호로 OR 연산을 감쌀 때와 감싸지 않았을 때 서로 다른 결과를 보여주는 걸 확인할 수 있는데요. 프로그래밍을 하다 보면 AND와 OR 연산자뿐만 아니라 다양한 연산자들을 복합적으로 사용하게 될 텐데, 연산의 우선순위를 명확하게 하지 않으면 예상치 못한 결과를 얻을 수 있으니 잘 구분해두는 것이 중요합니다. 대부분은 코드를 작성하고 테스트도 해보면서 자연스럽게 이해되기 때문에 하나하나 시험공부 하듯 외울 필요는 없지만 간혹 우리가 의도하지 않은 연산 결과가 나타날 땐, 이 연산자 우선순위를 의심해 보시고 아래 링크의 도움을 받는 것도 좋을 것 같습니다.

  [연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/연산자_우선순위)

  하지만 여러분이 코드를 작성할 때, 특히 여러 사람과 함께 협업하는 상황에서 다양한 연산자들을 복합적으로 사용해야 한다면 소괄호를 활용해서 의도에 맞는 연산 우선순위를 명확하게 표기하는 것이 좋은 습관이라는 점도 잘 기억해 두시면 좋을 것 같습니다.

  ```js
  console.log(true || (false && false)); // true
  console.log((true || false) && false); // false
  
  console.log('Codeit' || (NaN && false)); // Codeit
  console.log(('Codeit' || NaN) && false); // false
  ```

ES2020에서 새롭게 추가된 null 병합 연산자에 대해 살펴보겠습니다. 영어로는 'Nullish coalescing operator' 라고 하는데요.





### null 병합 연산자 ??

물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자 입니다. 아래 코드를 보세요.

```js
const example1 = null ?? 'I';
const example2 = undefined ?? 'love';
const example3 = 'Codeit' ?? 'JavaScript';

console.log(example1, example2, example3); // ?
```

example1과 2를 보시면, 지금 null 병합 연산자 왼편에 각각 null과 undefined가 있죠? 이렇게 **연산자 왼편의 값이 null 이나 undefined라면 연산자 오른편의 값이 리턴**되고, example3처럼 **연산자 왼편의 값이 null 이나 undefined가 아니라면 연산자 왼편의 값이 리턴**되는 원리로 동작합니다. 결과적으로 마지막 줄에서 콘솔에 출력되는 값은 I love Codeit이 되겠죠?

```js
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit
```

## OR 연산자(||)와 비교

그런데 이렇게 보니깐 이전에 앞서 OR 연산자 (||)와 동작하는 방식이 비슷해 보입니다. 실제로도 다음과 같은 상황이라면 똑같이 동작을 하게 되는데요.

```js
const title1 = null || 'codeit';
const title2 = null ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // codeit
```

하지만 null 병합 연산자(??)는 왼편의 값이 null이나 undefined인지 확인하고 OR 연산자(||)는 왼편의 값이 falsy인지를 확인하기 때문에 아래 코드와 같이 null이나 undefined가 아닌 falsy 값을 활용할 때 결과가 서로 다르니깐, 이 부분은 꼭 기억해 두세요!

```js
const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
```





### 변수와 스코프

ES2015이전에서는 var을 썻는데, 요즘은 

let, const등이 요즘으 더 권장됨. 

```javascript
var는 선언 전에 사용이 가능했음. 
선언이 위로 올라간 듯한 느낌을 줌. 이것을 호이스팅 이라고 했음. 

console.log(title) # 에러가 아니라, undefined가 떳음.
var title;

단, 할당된 값까지 올라가지는 않음. 
console.log(title) => undefined
var title = "hi"
```

**let**이나, const는 변수 선언 이전에 접근 자체가 불가능. 

var는 중복 선언도 가능했음. 

```
var title = "Hi"
var title = "Bye"

의도치않게 위를 덮어씌울 수가 있음. 
```

let, const는 중복 선언이 불가능해서, 뒤에서 다시 선언하면 에러가 난다. 



변수의 scope의 차이가 있음. 

```
var x = 3
function myFunc(){
	var y = 4;
	console.log(x)
  console.log(y)
}
myFunc();
console.log(x) # 전역변수니깐 3이 나오지. 
console.log(y) # 함수 내부에서만 사용 가능. ERROR
```

var는 변수의 scope가 함수 단위로만 구분된다. 

그런데, `함수`단위로만 구분이 된다는 것은, 조건문/반복문에서 만들어도 다 전역변수로 나온다는 것. 

조건문/반복문에서 고유하게 사용하는 변수를 만들수가 없었음. 

**let/const는 중괄호(code block)가 기준이 된다.** 

심지어 뭐 문법 없이 아래처럼만 해도, 중괄호 기준 지역변수가 된다. **block scope**라고 한다. 

```
{

	let title ="Hi"

}
```







### 함수를 만드는 방법

```
function 함수이름 (파라미터){
	
}
```

그런데, 특이한게 함수를 변수에 할당할 수가 있음. 

```javascript
# 함수 표현식

const printCodeit = function(){
	console.log("Hi")
}
```

함수 선언을 값처럼 사용하고 있는 것. 

```javascript
이것도 두번째 파라미터로 함수 넣어주는 거라서, 함수표현식의 일종

addEventListner('click', function(){
	console.log("button is clicked")
})
```

그냥 함수와 함수 표현식은 무슨 차이가 있을까?

그냥 함수는, 사실 아래처럼 선언 전에 콜을 해도 동작을 함(호이스팅). 

```
greeting()

function greeting (파라미터){
	
}
```

그러나 함수 표현식은 선언 이전에 접근이 불가능

```javascript
printHi()

const printHi = function (){
	console.log("Hi")
}
```

scope의 차이도 있음. 

```javascript
다른 함수 안에서 선언되면 사용 불가. 

function printit(){
	function printJS(){
			console.log('Javascript')
	}
	
	console.log("it")
	print(JS)
}

printit()
printJS(); # => Reference Error
```

함수 표현식의 경우는 

```javascript
var printJS = function(){}
let printJS = function(){}
const printJS = function(){}
```



퀴즈 해설



답: 2

함수 선언과 함수 표현식의 가장 큰 차이는 호이스팅과, 스코프인데요.

**함수 선언 방식(function sayHi(){})**은 호이스팅으로 인해서 함수를 선언하기 이전에 함수를 호출해도 정상적으로 동작하는 특징이 있고, **함수 표현식(변수에 함수 넣기)**은 반드시 변수가 선언된 이후에 함수를 호출해야 정상적으로 동작하는 차이가 있습니다. `var` 키워드 변수가 호이스팅이 된다고는 하지만 선언문 자체만 호이스팅되고, 할당된 값은 변수 선언 이후에 사용할 수 있다고도 배웠었죠? 그리고 **함수 선언 방식은 함수 스코프를 가지고, 함수 표현식은 변수에 할당하는 경우에는 할당된 변수의 특성에 따라 스코프가 결정됩니다.** `var` 키워드 변수에 할당하면 함수 스코프, `let`이나 `const` 키워드 변수에 할당하면 블록 스코프를 가지겠죠?

보기 1번은 코드 블록 안에서 함수 선언 방식으로 함수를 만들었습니다. 함수 선언은 함수 스코프를 가지기 때문에 코드 블록 안에서 함수를 선언하더라도 코드 블록 밖에서 아무런 문제 없이 사용할 수가 있겠죠? 보기 2번은 코드 블록 안에서 함수 표현식으로 함수를 만들었습니다. 그런데 `let` 키워드 변수를 활용했기 때문에 블록 스코프를 가지게 되는데요. 블록 스코프를 가진 `sayHi` 함수는 코드 블록 밖에서 사용할 수 없으므로 이 코드는 **에러가 발생**합니다. 보기 3번은 함수 선언 방식으로 함수를 만들었는데요. 함수 선언 방식은 호이스팅이 되기 때문에 함수 선언 이전에 호출해도 코드가 정상적으로 동작한다는 사실, 잊지 않으셨죠? 보기 4번은 함수 표현식으로 함수를 만들었는데요. 함수를 선언한 다음 호출했으니 아무런 문제 없이 코드가 잘 동작하겠죠?

주어진 중에서 에러가 발생하는 코드는 **2번** 입니다.

![function_scope](./images/function_scope.png)



# Named Function Expression (기명 함수 표현식)

함수 표현식으로 함수를 만들 때는 선언하는 함수에 이름을 붙여줄 수도 있는데요. 이름이 있는 함수 표현식, 즉 **기명 함수 표현식**이라고 부릅니다. 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 되는데요.

```js
const sayHi = function () {
  console.log('Hi');
};

console.log(sayHi.name); // sayHi
```

이렇게 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 됩니다. 하지만 함수에 이름을 붙여주게 되면, name 속성은 함수 이름을 문자열로 갖게 되는데요.

```js
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole
```

이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수는 없습니다.

```js
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

printHiInConsole(); // ReferenceError
```

기명 함수 표현식은 일반적으로 함수 내부에서 함수 자체를 가리킬 때 사용되는데요. 아래 코드를 살펴봅시다.

```js
let countdown = function(n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

countdown(5);
```

아규먼트로 숫자 값을 전달하고 전달받은 그 값이 0이 될 때까지 하나씩 값을 줄이면서 자기 자신을 호출하는 countdown이라는 함수를 함수 표현식으로 작성해봤는데요. 이런 식으로 자기 자신을 부르는 함수를 재귀 함수(**Recursive function**)라고 부릅니다. 그런데 만약 이 함수를 복사하려고 다른 변수에 똑같이 담았다가, countdown 변수에 담긴 값이 변하게 되면 문제가 발생하는데요.

```js
let countdown = function(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError
```

![에러코드실행화면](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4493&directory=%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B5_%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE_%E1%84%91%E1%85%AD%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8_1.png&name=%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B5_%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE_%E1%84%91%E1%85%AD%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8_1.png)

마지막 줄에서 myFunction 함수를 호출했을 때, 함수가 실행되긴 하지만, 6번줄 동작을 수행할 때 호출하려는 countdown 함수가 이미 12번에서 null 값으로 변경되었기 때문에 함수가 아니라는 TypeError가 발생한 것이죠! **이런 상황을 방지하기 위해서 함수 내부에서 함수 자신을 사용하려고 하면 함수표현식에서는 반드시 기명 함수 표현식을 사용하는 것이 좋습니다.**

```js
let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작
```

![정상코드실행화면](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4493&directory=%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B5_%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE_%E1%84%91%E1%85%AD%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8_2.png&name=%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%E1%84%8B%E1%85%B5_%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE_%E1%84%91%E1%85%AD%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8_2.png)

함수 표현식을 작성할 때, 함수에 이름을 지정할 수 있다는 점과 특히 이렇게 함수 내에서 함수를 가리켜야 할 때는 꼭 함수 이름을 작성해주는 것이 안전하다는 점. 잘 기억해 두시면 좋을 것 같습니다. :)



지금까지 함수를 **선언**하는 다양한 방법에 대해 살펴봤는데요. 함수를 선언하는 것은 함수를 실행하는 것과 다르다는 사실, 모두 알고 계시죠?

```js
function sayHi() {
  console.log('Hi!');
}
  
sayHi();
```

일반적으로는 이렇게 함수를 먼저 선언한 다음,선언된 함수 이름 뒤에 소괄호를 붙여서 함수를 실행하는데요. 그런데 때로는 함수가 선언된 순간에 바로 실행을 할 수도 있습니다.



#### 즉시 실행 함수

```js
(function () {
  console.log('Hi!');
})();
```

보시는 것처럼 함수선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식인데요. 이렇게 하면 함수가 선언된 순간 바로 실행이 되는 겁니다.

이렇게 함수 선언과 동시에 즉시 실행되는 함수를 가리켜 **즉시 실행 함수 (표현)**이라고 부르는데요. 영어로는 **Immediately Invoked Function Expression**, 줄여서 **IIFE**라고 부릅니다.

```js
(function (x, y) {
  consoel.log(x + y);
})(3, 5);
```

그리고 즉시 실행 함수도 일반 함수처럼 파라미터를 작성하고, 함수를 호출할 때 아규먼트를 전달할 수도 있는데요. 한 가지 주의할 점은 즉시 실행 함수는 함수에 이름을 지어주더라도 외부에서 재사용할 수 없다는 겁니다.

```jsx
(function sayHi() {
  console.log('Hi!');
})();

sayHi(); // ReferenceError
```

그래서 일반적으로는 이름이 없는 익명 함수를 사용하는데요. 다만, [이름이 있는 함수 표현식](https://www.codeit.kr/learn/4493) 레슨에서도 살펴봤던 것처럼 함수 내부에서 자기 자신을 호출하는 재귀적인 구조를 만들고자 할 땐 이름이 필요할 수도 있으니까 이 부분은 참고해 주세요! :)

```jsx
(function countdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
})(5);
```

#### 즉시 실행 함수의 활용

즉시 실행 함수는 말 그대로 선언과 동시에 실행이 이뤄지기 때문에 일반적으로 프로그램 **초기화 기능**에 많이 활용됩니다.

```js
(function init() {
  // 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();
```

혹은 재사용이 필요 없는, 일회성 동작을 구성할 때 활용하기도 하는데요.

```jsx
const firstName = Young;
const lastName = Kang;

const greetingMessage = (function () {
  const fullName = `${firstName} ${lastName} `;

  return `Hi! My name is ${fullName}`;
})();
```

이렇게 **함수의 리턴값을 바로 변수에 할당하고 싶을 때** 활용할 수 있습니다.

그리고, 전역변수와 지역변수의 개념 알고 계시죠? 즉시 실행 함수에서 사용하는 변수들은 함수 내에서만 유효하기 때문에 이런 점을 활용하면, 일시적으로 사용할 변수의 이름들을 조금 자유롭게 작성할 수도 있다는 점. 잘 기억해 두세요! :)





#### 값으로서의 함수(First Class Function)

**함수를 출력을 해보면**, `console.dir(printJS)` 여러개의 프로퍼티를 가지는 객체의 모습을 하고 있다. 

![function](./images/function.png)

그래서, 객체나 배열의 요소로도 함수가 들어갈 수 있는 것. 심지어 다른 함수의 파라미터로 전달 할 수 있는 것. addEventListner에서 했던 것이 이것. 참고로 다른 함수의 파라미터로 전달된 함수를 **콜백함수**라고 부른다. 

반대로, 어떤 함수의 리턴값이 함수가 될 수 있다는 것. 이런 것은 고차함수라고 부른다. 





#### 파라미터

```javascript
function greeting(name) {
	console.log(`Hi! My name is ${name}!`)
}

greeting('Javascript') 
```

정확히는 위 Javascript처럼 전달하는 문자는 `Argument`라고 한다. 

```javascript
greeting()

이렇게 아무것도 전달하지 않는다면, Undefined가 된다. 

function greeting(name="기본값") {
	console.log(`Hi! My name is ${name}!`)
}

기본값을 줄 수 있다. 또한, Undefined를 전달해도 default 값이 사용된다. 
```

```javascript
신기한 건, 
function defaultTest(x, y=x+3){
 console.log(x)
 console.log(y)
}
```

```
function introduce(name = '홍길동', birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}

introduce('장동건'); // 장동건, 1443
introduce('Joy', null);  // Joy, null 
introduce(undefined, 2090); // 홍길동, 2090

```



#### Argument

```java


function printArgument(a, b, c){
  console.log(a)
  console.log(b)
  console.log(c)
}

printArgument('a', 'b', 'c')
printArgument('a') // Undefined B, C
printArgument('a', 'b') // Undefined C
printArgument('a', 'b', 'c', 'd') // D will be ignored
```

Argument를 유연하게 사용할 수는 없을까? 파라미터와 `arguments`를 사용하니깐 상관없이 전달된 요소들을 다 []안에 출력해 준다. This is 유사배열. 그래도, 갯수 확인, 인덱싱, for 등을 통해 사용이 가능하다. 

![arguments](./images/arguments.png)

```javascript
function firstWords() {
  let word = '';
  for (let arg of arguments){
    console.log(arg)
    
  }
  
  // 여기에 코드를 작성해 주세요.

  console.log(word);
}

firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');
firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');
```



#### Rest parameter

```js
rest parameter는 배열이라서, 배열의 메서드를 사용할 수 있다. 

// Rest parameter 
function printArgument(...args){
  for (const arg of args){
    console.log(arg);
  }
  console.log("-----------")
}

printArgument('나만', '없어', '고양이');
printArgument('아니', '바나나말고', '라면먹어');
printArgument('만두', '반으로', '잘라먹네', '부지런하다');
printArgument('결국', '자바스크립트가', '해피한', '지름길');
printArgument('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');
```

또한, 일반 파라미터와 같이 사용이 가능하다. 

```js
앞 두개를 argument로 사용하고 나머지를 묶는다. 
function printArgument(first, second, ...args){
  for (const arg of args){
    console.log(arg);

  }
  console.log("-----------")
}
```



#### Arrow Function 

간단하다, function 키워드 지워주고 화살표를 쓰면 됨. 

```js

const getTwice = function(number){
  return number*2
}

const getTwice = (number) => {
  return number*2
}
```

```js
myBtn.addEventListner('click', ()=>{
    console.log('button is clicked!')
  })
```

심지어 더 짧게 표현도 가능함. 

```js

const getTwice = function(number){
  return number*2
}

const getTwice = (number) => {
  return number*2
}

const getTwice = number => return number*2; 

규칙은?
1. 파라미터가 하나인 경우, 소괄호를 생략 가능
const getTwice = number => {
  return number*2
}
파라미터가 두개 이상이거나 없을 때는 소괄호 반드시 써야 한다. 
const getTwice = (a, b) => {
  return a*b
}
const getTwice = () => {
  return 2*2
}

2. 내부 동작부분이 리턴문 하나로만 이루어 져 있다면, 중괄호 생략 가능. 
const getTwice = number => return number*2;
리턴문 이외에 다른 표현들도 있으면, 생략 불가. 
리턴값이 객체인 경우도 생략 불가
const getTwice = number => {name: "Hi"};
이런 경우는 소괄호 한번 더 감싸면 되긴 함. 
const getTwice = number => ({name: "Hi"});
```

단, arrow function에서는 위 `arguments` 객체를 사용할 수 없다. 

#### this

함수 내부에서 주로 사용된다. 

```
console.log(this)

const user = {
  firstName : 'Tess', 
  lastName: 'Jang', 
  getFullName: function(){
    return `${user.firstName} ${user.lastName}`
  }
}

console.log(user.getFullName())
```

근데, 이거를 분리하고 싶다면?

```js
function getFullName(){
    return `${user.firstName} ${user.lastName}`
}

const user = {
  firstName : 'Noel', 
  lastName: 'Son', 
  getFullName: getFullName
}

const admin = {
  firstName : 'Mei', 
  lastName: 'Lee', 
  getFullName: getFullName
}

console.log(user.getFullName())
console.log(admin.getFullName())
```

결과가 이상해. 아래처럼 나온다. 사실 당연한게, getFullName은 user만 보고 있잖아. 

```
Noel Son
Noel Son
```

이런 경우가 this를 써야 되는 거네. 

```js
function getFullName(){
    return `${this.firstName} ${this.lastName}`
}

const user = {
  firstName : 'Noel', 
  lastName: 'Son', 
  getFullName: getFullName
}

const admin = {
  firstName : 'Mei', 
  lastName: 'Lee', 
  getFullName: getFullName
}

console.log(user.getFullName())
console.log(admin.getFullName())
```

즉, 자바스크립트에서 this는 함수를 호출한 객체를 가리킨다. 즉, 객체의 메서드로 호출하는 경우 매우 중요하지. 

근데 여기서 진짜 중요한게, arrow function이면, this를 어떻게 써도 그 객체를 가리키는게 아니라 window객체를 가리키게 된다. 

정확히는 window가 선언되기 직전 this와 똑같이 되는 것. 







# 자바스크립트 문법과 표현

이번 챕터를 본격적으로 시작하기 전에, 자바스크립트의 다양한 문법들을 이해할 때 알아두면 유용한 기초 개념을 한 번 짚고 넘어가고자 합니다.  바로, **문장**과 **표현식**에 대한 개념인데요. 영어로는 각각 **statements**와 **expressions**라고 부릅니다.

# 문장 (statements)

우리가 작성하는 모든 자바스크립트 코드는 모두 **문장과 표현식**으로 구성되어 있습니다.  먼저, 자바스크립트에서 문장은 **어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리**를 가리킵니다.

예를 들어서

```js
let x; 
x = 3;

if (x < 5) {
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5와 같거나 크다');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

이 코드의 첫 번째 줄도 `x`라는 변수를 선언하는 동작이 일어나는 하나의 문장이고, 두 번째 줄도 `x`에 3이라는 값을 할당하는 동작이 일어나는 하나의 문장입니다. 그리고 4번줄 부터 8번줄 까지도 하나의 문장이고 그리고 10번줄 부터 12번줄 까지도 반복 동작을 하는 문장의 예시라고 볼 수 있는데요. 선언문, 할당문, 조건문, 반복문 .. 이렇게 끝에 문이라고 붙은 이유가 모두 동작을 수행하는 문장이기 때문입니다.

# 표현식 (expressions)

표현식은 **결과적으로 하나의 값이 되는 모든 코드**를 가리킵니다. 이게 무슨 말이냐면,

```js
5 // 5

'string' // string
```

어떤 하나의 값을 그대로 작성하는 것도 표현식이지만,

```js
5 + 7 // 12

'I' + ' Love ' + 'Codeit' // I Love Codeit

true && null // null
```

이렇게 연산자를 이용한 연산식도 결국은 하나의 값이 되고,

```js
const title = 'JavaScript';
const codeit = {
  name: 'Codeit'
};
const numbers = [1, 2, 3];

typeof codeit // object
title // JavaScript
codeit.name // Codeit
numbers[3] // undefined
```

위 코드의 마지막 네 줄처럼 선언된 변수를 호출하거나, 객체의 프로퍼티에 접근하는 것도 결국에는 하나의 값으로 평가되는데요. 그래서 길이와는 상관없이 결과적으로 하나의 값이 되는 코드를 모두 **표현식**이라고 할 수가 있습니다.

# 표현식이면서 문장, 문장이면서 표현식

표현식은 보통 문장의 일부로 쓰이지만, 그 자체로 문장일 수도 있습니다. 가장 대표적인 예시가 할당식과 함수 호출인데요.

```js
문장 - 여떤 동작이 일어나게 하는 최소 단위. 
// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식이다.
title = 'JavaScript'; // JavaScript

// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식(결과적으로 하나의 값)이다.
sayHi(); // sayHi 함수의 리턴 값

// console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 표현식이다.
console.log('hi'); // undefined
```

사실은 할당연산자 자체가 할당한 값을 그대로 리턴하는 특징이 있기 때문에 연산 자체로 값이 되는 표현식(**하나의 값**)이기도 합니다. 그런ㄴ데 할당식은 왼쪽에 있는 피연산자에 오른쪽 피연산자 값을 할당하는 동작을 하기 때문에, 문장이 되기도 하죠? 그리고 함수 호출도 함수를 호출한 자리가 결국에는 하나의 리턴하는 값을 가지기 때문에 표현식이라고 할 수도 있지만 함수 내부에 정의한 코드를 실행하는 동작이기 때문에 문장이 되기도 하는 것이죠.

# 표현식인 문장 vs 표현식이 아닌 문장

결과적으로 문장은 다시 **표현식인 문장과, 표현식이 아닌 문장**으로 나눌 수 있는데요. 이 둘을 구분하는 가장 간단한 방법은 우리가 구분하고자 하는 문장을 변수에 할당하거나, 어떤 함수의 아규먼트로 전달해보는 겁니다.

```js
let x; 
x = 3;

console.log(if (x < 5) {
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5보다 크다');
});

const someloop = for (let i = 0; i < 5; i++) {
  console.log(i);
};
```

`console.log` 메소드의 아규먼트로 if문을 전달하거나 `someloop`라는 변수에 for 반복문을 할당하게 되면, Error가 발생하게 되는데요. 조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가되기 때문입니다.

# 마무리

이번 시간에는 문장과 표현식에 대해서 살펴봤는데요. 처음 프로그래밍을 공부할 때는 여러 문법들 속에 이 둘의 개념이 코드 속에 너무나도 자연스럽게 녹아있기 때문에 별로 중요하게 생각하지 않고 그냥 넘어가는 경우가 생각보다 많이 있는데요. 다른 사람들이 작성한 코드의 맥락을 이해하는데에도 도움이 되지만, 자바스크립트의 문법을 좀 더 깊이 이해하고 능숙하게 다루기 위해서도 이 문장과 표현식에 대한 개념을 명확히 해 두는 것이 좋습니다.

참고로 자바스크립트에서 특별한 경우를 제외하면 일반적으로 표현식인 문장은 세미콜론으로, 표현식이 아닌 문장은 문장 자체의 코드 블록(중괄호)로 그 문장의 범위가 구분되는데요.

```js
(3 + 4) * 2;
console.log('Hi!');

while(true) {
  x++;
}
```

그래서 다른 사람들이 작성한 코드를 볼 때도 이 세미콜론과 중괄호를 따라가 보면 좀 더 쉽게 표현식인 문장과 표현식이 아닌 문장을 구분할 수가 있는데요. 물론 우리가 코드를 작성할 때도 이런 점을 잘 구분해서 세미콜론을 사용하는 게 좋겠죠!?





## 조건을 다루는 표현식

- **if**

  ```js
  // 조건연산자 (Conditional Operator)
  if (조건) {
    // 조건이 true 일 때 동작  
  } else {
    // 조건이 false 일 때 동작
  }
  
  ```

- **switch**

  ```js
  <script>
    var 변수;
  
    switch ( 변수 )
    {
      case 상수1 :     //변수 = 상수1 이면, 실행문 A 실행
        실행문 A
        break;     //swtich { } 코드 블록 탈출
  
      case 상수2 :     //변수 != 상수1 이고, 변수 = 상수2 이면, 실행문 B 실행
        실행문 B
        break;     //swtich { } 코드 블록 탈출
  
      default :    //변수 != 상수1 이고, 변수 != 상수2 이면, 실행문 C 실행
        실행문 C
  
    }
  </script>
  
  ```

  

- `조건 ? 조건이 truthy 할 때 표현식 : 조건이 falsy 할 때 표현식`. 단 이것이 모든 것을 대체할 수는 없다. 

  ```js
    // 조건연산자 - 삼항 연산자  
    const CUT_OFF = 80;
    function passChecker(score){
      return score > CUT_OFF ? '합격!' : '불합격!';
    }
  
    console.log(passChecker(75))
  ```

### Spread 구문

- ```js
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(numbers)
  console.log(...numbers) == console.log(1, 2, 3) // 1, 2, 3, 4... 
  
  개별값으로 펼쳐진다. 
  ```

  rest파라미터 받을때도 ... 사용했었지. 

- 앞에서 말했다 시피, 객체타입은 주소값이 참조된다. 아래 보면, 같이 push 된다. 

  ```js
  const webPublishing = ['HTML', 'CSS']
  const interativeWeb = webPublishing; 
  
  interativeWeb.push('JAVASCRIPT')
  console.log(interativeWeb)
  	
  ```

  - 이런 경우,  **slice()** 활용해서, 배열 복사해야 된다고 했었다. 

    ```js
    const interativeWeb = webPublishing.slice()
    ```

    이때, spread구문 활용하면 엄청 좋지. 메서드 사용 안하고도 배열 복사 가능. 

    ```js
    const interativeWeb = [...webPublishing]
    ```

    심지어 아래처럼 요소 추가하면서 복사도 가능. 

    ```js\
    const interativeWeb = [...webPublishing, "Python"]
    ```

  - 여러 배열 합칠때도, 그냥 아래처럼 하면 끝. 

    ```js
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    
    const arr3 = [...arr1, ...arr2]
    console.log(arr3)
    ```

    

  - 함수 호출할때, argument로도 활용 가능. 

    ```js
    const introduce = (name, birth, job) => {
      console.log(name)
      console.log(birth)
      console.log(job)
    }
    
    const myArr = ['Son', '1993', 'Marketer']
    introduce(...myArr)
    ```

  - 한가지 신기한 것은, 배열을 펼쳐서 객체로 담으면?

    ```js
    const members = ['SH', 'MY', 'HI']
    const newObject = {...members}
    console.log(newObject)
    ```

    ```
    결과 => {0: 'SH', 1: 'MY', 2: 'HI'}
    ```

    지난 영상에서 Spread 구문에 대해서 살펴봤습니다. Spread 구문은 특히 배열을 다룰 때 유용하게 활용할 수 있었는데요. 그래서 사실 ES2015에서 Spread 구문이 처음 등장했을 땐 배열에서만 사용이 가능했고, 일반 객체에는 사용할 수가 없었습니다. 그러다가 ES2018에서 일반 객체에도 Spread 구문을 사용할 수있는 표준이 등장하게 되었는데요. 2018년이 훨씬 지난 지금, 대부분의 브라우저에서는 객체를 복사하거나 기존의 객체를 가지고 새로운 객체를 만들 때 Spread 구문 활용할 수가 있습니다.

    # 객체 Spread하기

    아래 코드를 살펴봅시다.

    ```js
    const codeit = { 
      name: 'codeit', 
    };
    
    const codeitClone = { 
      ...codeit, // spread 문법!
    };
    
    console.log(codeit); // {name: "codeit"}
    console.log(codeitClone); // {name: "codeit"}
    ```

    이렇게 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사할 수가 있게 됩니다.

    ```js
    const latte = {
      esspresso: '30ml',
      milk: '150ml'
    };
    
    const cafeMocha = {
      ...latte,
      chocolate: '20ml',
    }
    
    console.log(latte); // {esspresso: "30ml", milk: "150ml"}
    console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
    ```

    이런 식으로 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용할 수도 있겠죠?

    # 주의 사항

    Spread 구문을 사용해서 **새로운 배열**을 만든다거나 **함수의 아규먼트**로 **사용할 수는 없습니다.**

    ```js
    const latte = {
      esspresso: '30ml',
      milk: '150ml'
    };
    
    const cafeMocha = {
      ...latte,
      chocolate: '20ml',
    }
    
    [...latte]; // Error
    
    (function (...args) {
      for (const arg of args) {
        console.log(arg);
      }
    })(...cafeMocha); // Error
    ```

    그렇기 때문에 객체를 spread할 때는 **반드시 객체를 표현하는 중괄호 안에서 활용해야 한다는 점**. 잘 기억해 두시면 좋을 것 같습니다! :)

### 모던한 프로퍼티 표기법

- 객체에 넣을때, 기존의 변수의 이름과 해당 객체에 들어가게 될 프로퍼티의 이름이 똑같다면, 아래처럼 가능. 

  ```js
  const user = {
    title : "SON",
    birth : 1993,
    job : "Worker"
  }
  
  console.log(user)
  
  -------------------
  
  const title = "SON"
  const user = {
    title, 
    birth : 1993,
    job : "Worker"
  }
  ```

  함수도 마찬가지. 아래처럼 가능함. 

  ```js
  
  function getFulllName() {
    return `SON ${user.title}`
  }
  
  
  const user = {
    getFulllName
  }
  ```

  또한, 객체 내부에서 메서드 선언할 때, 콜론과 function 키워드 생략 가능. 

  ```js
  const user = {
    getFulllName : function() {
      return `SON ${user.title}`
    }
  }
  
  ----------아래처럼 가능. 
  
  const user = {
    getFulllName() {
      return `SON ${user.title}`
    }
  }
  ```

  또한 대괄호를 쓰면, 변수에 담긴 값 혹은 함수의 리턴 값까지도 프로퍼티 이름으로 사용할 수 있게 됨. 

  ```js
  // 표현식도 객체의 프로퍼티로 사용 가능. 
  const user = {
    ['CODE'+ "IT"] : 'value'
  }
  
  console.log(user)
  ```

  



# 옵셔널 체이닝 (Optional Chaining)

바로 ECMAScript2020에서 등장한 옵셔널 체이닝이라는 접근 방법입니다. 일반적으로 객체의 프로퍼티는 점 표기법을 통해서 접근하게 되는데요.

아래 코드를 잠시 살펴봅시다.

```js
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1); // Crew
```

객체를 활용해서 데이터를 표현하다 보면 이렇게 중첩된 객체를 작성하게 될 일이 빈번하고, 함수에서도 이런 중첩 객체의 프로퍼티를 활용할 일이 많은데요. 중첩된 객체의 프로퍼티에 접근하는 방법은 이미 다 알고 계시죠? 함수 `printCatName`은 `user` 파라미터에 중첩된 `cat`객체의 `name` 프로퍼티를 콘솔에 출력해주는 함수입니다.

그런데, 이렇게 중첩 객체를 다룰 때 한가지 조심해야 될 부분이 있습니다.

```js
const user2 = {
  name: 'Young',
}

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined
```

여러 가지 상황에 맞춰 데이터를 다루다 보면 때로는 우리가 예상한 프로퍼티를 가지고 있지 않을 수도 있는데요. `cat` 프로퍼티를 가지고 있지 않은 `user2`는 `cat` 프로퍼티가 `undefined`이기 때문에 `user2.cat.name`에 접근하려는 순간 에러가 발생하게 됩니다.

**그래서 `printCatName`과 같이 중첩된 객체의 프로퍼티를 다룰 때는 `user.cat.name`에 접근하기 전에 `user.cat`이 `null` 혹은 `undefined`가 아니라는 것을 검증하고 접근해야 에러를 방지할 수가 있는데요.**

```js
function printCatName(user) {
  console.log(user.cat && user.cat.name);
}
```

if문을 활용할 수도 있지만, 일반적으로는 간결하게 AND 연산자를 활용해서 이 문제를 해결하곤 했었습니다. 그런데 이마저도 객체의 이름이나 프로퍼티의 이름이 길어질수록 가독성이 나빠지는 문제가 있는데요, 이런 상황에 훨씬 더 코드를 간결하게 사용할 수 있는 문법이 바로 옵셔널 체이닝(Optional Chaining)입니다.

```js
function printCatName(user) {
  console.log(user.cat?.name);
}
```

위 코드에서 볼 수 있는 것처럼 물음표와 마침표를 붙여 사용하는 부분이 바로 `옵셔널 체이닝 연산자(?.)`인데요. 만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 `undefined` 또는 `null`이 아니라면 그다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환하는 문법입니다.

옵셔널 체이닝 연산자의 동작 원리를 삼항 연산자를 통해 구체적으로 표현하면 다음과 같이 작성할 수 있는데요.

```js
function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}
```

이렇게 보니 옵셔널 체이닝 연산자가 어떻게 동작하는지 이해가 되죠? 이전에 배운 null 병합 연산자와 함께 활용하면 다음과 같이 응용할 수도 있습니다.

```js
function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const user2 = {
  name: 'Young',
}

printCatName(user2); // 함께 지내는 고양이가 없습니다.
```

이후 레슨에서 자세히 다루겠지만 자바스크립트에서 에러를 방지하는 일은 굉장히 중요한데요. 중첩된 객체를 다룰 때 에러를 방지하기 위해 다양한 방식을 활용할 수 있지만 옵셔널 체이닝 연산자를 활용하면 훨씬 더 간결하게 코드를 작성할 수 있다는 점! 잘 기억해 두세요! :)





## 구조 분해(Destructuring)

- 배열 

  ```js
  const rank = ["sang", "hyuk", "mi", "young"]
  
  const macbook = rank[0]
  const ipad = rank[1]
  const airpod = rank[2]
  const coupon = rank[3]
  ```

  이걸 간단하게 표현 가능. 변수 배열로 선언해놓고, rank배열을 할당해버림. 이러면 위와 똑같이 된다. 

  ```js
  const [mac, ipad, airpod, coupon] = rank
  ```

  또한, 꼭 선언된 갯수와 변수의 갯수가 같을 필요는 없다. 길이 넘치는 요소는 알아서 할당 안됨. 아래처럼이 가능하다는 뜻.  

  ```js
  const rank = ["sang", "hyuk", "mi", "young", 'hi']
  
  // const macbook = rank[0]
  // const ipad = rank[1]
  // const airpod = rank[2]
  // const coupon = rank[3]
  
  const [mac, ipad, airpod, coupon] = rank
  ```

  근데 하나 더 좋은 기능. 아래처럼도 가능. 배열로 coupon에 넣어버림 

  / / `console.log(coupon) -> ['young', 'hi']`

  ```js
  const rank = ["sang", "hyuk", "mi", "young", 'hi']
  
  // const macbook = rank[0]
  // const ipad = rank[1]
  // const airpod = rank[2]
  // const coupon = rank[3]
  
  const [mac, ipad, airpod, ...coupon] = rank
  console.log(coupon)
  ```

  그런데, 반대로 선언되는 갯수가 더 적은 경우는? -> 예상했던 데로 `undefined`가 된다. 

  ```js
  const rank = ["sang", "hyuk"]
  
  const [mac, ipad, airpod, coupon] = rank
  ```

  단, 이런 상황 방지 위해 기본값을 설정 가능. 

  ```js
  const rank = ["sang", "hyuk"]
  
  const [mac, ipad, airpod, coupon="없음"] = rank
  ```

  서로 변수 교환할때는?

  ```js
  let rank1 = "Hi";
  let rank2 = "Bye";
  
  console.log(rank1)
  console.log(rank2)
  
  [rank2, rank1] = [rank1, rank2]
  
  console.log(rank1);
  console.log(rank2);
  
  ```

  예시코드

  ```js
  // 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요.
  const numbers = [1, 2, 3];
  const [one, two, three] = numbers;
  
  
  
  // 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요.
  const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
  const [livingRoom, ...kitchen] = products;
  
  
  
  // 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요.
  let firstName = 'Kang';
  let lastName = 'Young';
  [firstName, lastName] = [lastName, firstName];
  ```

- **Destructuring 2 [객체 분해]**

  - 점 표기법 안쓰고, 간결하게 프로퍼티 네임 자체로 변수를 사용하고자 한다면?

    ```js
    const macbook = {
      title : 'HI', 
      description : 'The Hi, III, and the IV programming language.',
      url : 'https://www.huhi.org/',
      image : 'https://www.huhi.org/images/image.png'
    }
    
    
    // 변수의 이름과 똑같은 프로퍼티가 있으면, 거기에 할당하는 방식.
    
    const {title, price} = macbook;
    ```

    객체에 존재하지 않는 변수이면, `undefined`가 된다. 

    또한 똑같이 기본값도 설정 가능하다. 

    ```js
    const {title, price="default value"} = macbook;
    ```

    이것도 rest처럼 사용 가능. 남은 애들 싹다 모아서 객체로 만들어 준다. 

    ```js
    const {title, ...price} = macbook;
    ```

    만약 할당받는 변수 이름을 다르게 가져가고 싶으면?

    ```js
    const {title: product, ...price} = macbook;
    ```

    활용도가 많다. 대괄호 같이 써주면, 변수를 써줄 수도 있다. 

    ```js
    const propertyName = 'title';
    const {[propertyName]: product, ...price} = macbook;
    ```

    추가사항 
    
    ```
    {
      "foods": [...],
      "paging": {
        "count": 42,
        "nextCursor": "Y3JlYXRlZEF0LDIz"
      }
    }
    ```
    
    ```jsx
    const handleLoad = async (options) => {
      const {
        foods,
        paging: { nextCursor },
      } = await getFoods(options);
      if (!options.cursor) {
        setItems(foods);
      } else {
        setItems((prevItems) => [...prevItems, ...foods]);
      }
      setCursor(nextCursor);
    };
    ```
    
    

- 

- **함수와 Destructuring**

  아래처럼 사용이 가능하다. 잘 생각해보면 차이가 있음. 

  ```js
  function printWinners1(...args){
    const [a, b, c, d, ...e] = args;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
  }
  
  function printWinners2([a, b, c, d, ...e]){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
  }
  
  printWinners1('hi','bye', 'goodbye', 'goodbye1', 'goodbye2', 'goodbye3', 'goodbye4')
  console.log("==========")
  const rank = ['hi','bye', 'goodbye', 'goodbye1', 'goodbye2', 'goodbye3', 'goodbye4']
  printWinners2(rank)
  ```

  객체는 아래 같은 경우에 유용하다. 

  ```js
  function getObject(){
    return {
      name: "hi", 
      birth: 1993, 
      title: "bye"
    }
  }
  
  function printSummary(object){
    const {name, title, birth} = object;
    console.log(`${title}`)
    console.log(`${name}`)
    console.log(`${birth}`)
  }
  
  printSummary(getObject())
  ```

  이런 경우, 아래처럼 바로 destructuring 문법을 사용할 수 있다. 

  ```js
  function printSummary({name, title, birth}){
    console.log(`${title}`)
    console.log(`${name}`)
    console.log(`${birth}`)
  }
  
  printSummary(getObject())
  ```

  이게 돔 이벤트 등에서 좋은게, 

  ```js
  btn.addEventListenr('click', ({target}) => {
  		target.classList.toggle('checked')
  })
  ```

  잘 안쓰긴 하는데 참고로 한번 더 분해도 된다. 

  Nested Object Destructuring

  ```js
  btn.addEventListenr('click', ({target: {classList}}) => {
  			classList.toggle('checked')
  })
  ```

  예시 코드 

  ```js
  const music1 = { title: '난치병', singer: '하림' };
  const music2 = { title: '너의 모든 순간', singer: '성시경' };
  const music3 = { title: '무릎', singer: '아이유' };
  const music4 = { title: '옛사랑', singer: '이문세' };
  const music5 = { title: '한숨', singer: '이하이' };
  const music6 = { title: '추억의 책장을 넘기면', singer: '이선희' };
  
  // function printFavoritSong(name, music){
  //   const {title, singer} = music; 
  //   console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`);
  // }
  
  
  // function printFavoritSong(name, music) {
  //   console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${music.singer}'의 '${music.title}'이라는 노래입니다.`);
  // }
  
  
  
  printFavoritSong('영훈', music4);
  printFavoritSong('동욱', music1);
  printFavoritSong('대위', music3);
  printFavoritSong('소원', music2);
  printFavoritSong('우재', music5);
  printFavoritSong('영준', music6);
  ```





## 에러와 에러 객체

- 에러객체는 기본적으로 `name`과 `message`를 담고 있다. 

  - `reference`, `type`, `syntax` 에러 세 가지를 보통 볼 수 있다. 

  - [에러객체의 종류](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)

- 에러 객체를 의도적으로 만들어 낼 수도 있다. 

  ```js
  const error = new TypeError('타입 에러가 발생하였습니다')
  console.log(error.name) // TypeError
  console.log(error.message) // 타입 에러가 발생하였습니다
  ```

- 에러 발생시키기, 

  ```js
  // 에러를 발생시키기
  throw error;
  ```



#### Try Catch 문

- ```js
  try { 
    // 코드
  } catch(error){
    console.log(error.name)
    console.log(error.message)
  }
  ```

- try에서 에러 발생한 시점 이후부터는 실행되지 않는다. 

  - catch에 써있는 error는 무슨 의미냐면

    - 실제 발생한 에러가 error라는 `argument`로 전달된다. 

    - 이거 더 잘 출력하고 싶을때는, 아래처럼 출력하면 우리가 브라우져에서 보던 그 모습으로 에러가 출력된다. 

      ```js
      console.error(e)
      ```

  #### try .. catch문 활용하기

  - ```js
    
    
    function printMembers(members){
      for (const member of members){
        console.log(member);
      }
    }
    
    
    const teamA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const teamB = ['e', 'f', 'g', 'h']
    const teamC = {'name': "Sanghyuk"}
    
    printMembers(teamA)
    printMembers(teamB)
    printMembers(teamC)
    
    ```

  - 객체는 fot of가 사용이 안되서 당연히 에러가 난다. 

    - 이런 경우 try, catch를 쓰라는 것. 
    - 근데 중요한건, try, catch문 도 중괄호로 이루어져 있다. 
      - 그 안에서 let, const처럼 block scope 갖는 변수 사용하면, 당연히 그 뒤로는 사용이 안되는 것. 
      - 애초에 syntax에러는 실행 시키지도 않는다. syntax 에러 제외 에러 핸들링 하는 것. 

  - try catch는 사실 finally라는 코드 블록을 하나 더 가질 수 있습니다!

    finally문은 try catch문이 끝난 다음에 최종적으로 실행될 코드를 다룰 때 활용하는데요.

    # finally문

    ```js
    try {
      // 실행할 코드
    } catch (err) {
      // 에러가 발상했을 때 실행할 코드
    } finally {
      // 항상 실행할 코드
    }
    ```

    try문에서 에러가 발생하지 않는다면 try문의 코드가 모두 실행된 다음에, try문에서 에러가 발생한다면 catch문의 코드가 모두 실행된 다음 실행할 코드를 finally문에 작성하면 됩니다.

    다시 말해 **try문에서 어떤 코드를 실행할 때 에러 여부와 상관 없이 항상 실행할 코드를 작성**하는 것이죠!

    ```js
    function printMembers(...members) {
      for (const member of members) {
        console.log(member);
      }
    }
    
    try {
      printMembers('영훈', '윤수', '동욱');
    } catch (err) {
      alert('에러가 발생했습니다!');
      console.error(err);
    } finally {
      const end = new Date();
      const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
      console.log(msg);
    }
    ```

    위 코드 처럼 에러 유무와 관계없이 코드 실행 시각을 알고 싶을 때 활용할 수도 있겠죠?

    # finally문에서의 에러 처리는?

    참고로 finally문에서 에러가 발생할 경우에는 다시 그 위에 있는 catch문으로 넘어가진 않습니다. 만약 finally문에서도 에러 처리가 필요한 경우에는 아래 처럼 try catch문을 중첩해서 활용하는 방법이 있는데요. 이런 부분도 잘 참고해 두셨다가 필요한 상황에 맞게 응용해 보세요!

    ```js
    try {
      try {
        // 실행할 코드
      } catch (err) {
        // 에러가 발상했을 때 실행할 코드
      } finally {
        // 항상 실행할 코드
      }
    } catch (err) {
      // finall문에서 에러가 발생했을 때 실행할 코드
    }
    ```









# 자바스크립트의 유용한 내부 기능

- loop

  - 지금까지 계속 쓰던, `for of`

    ```js
    const members =['sh', 'my', 'ys', 'mj']
    
    for (let member of members) { 
        console.log(`${member}님이 입장하셨습니다.`)
    }
    ```

  - for each와 map을 많이 쓴다.

    - **For each** : callback함수를 넣으주면, argument로 배열의 요소들이 하나씩 들어온다. 

      ```js
      members.forEach(function(member) {
        console.log(`${member}님이 입장하셨습니다.`)
        }
      ```

      당연히 arrow function으로 작성할 수도 있다. 

      ```js
      members.forEach(member => {
        console.log(`${member}님이 입장하셨습니다.`)
        }
      ```

      - 두번째 파라미터를 쓰면, 요소의 index를 넣을 수도 있다. 

        ```js
        members.forEach(function(member, i) {
            console.log(`${i}번째로 ${member}님이 입장하셨습니다.`)
            }
          )
        ```

      - 세번째는, 배열 자체가 전달된다. 

        ```js
        members.forEach(function(member, i, arr) {
            console.log(`${i}번째로 ${member}님이 입장하셨습니다.`)
            }
          )
        ```

        `arr`에는 `members`자체가 계속 전달된다. 

    - map은 for_each와 동작이 거의 비슷하다. 위 foreach를 map으로 그대로 바꿔도 실행이 된다. **근데, map의 차이점은 메소드의 호출 결과로 새로운 배열을 리턴한다는 것.**  forEach는 리턴값이 없다. 

      ```js
      members.map(function(member) {
        console.log(`${member}님이 입장하셨습니다.`)
        }
      )
      ```

      ```js
      const newArr = members.map(function(member, i, arr) {
          return `${i}번째로 ${member}님이 입장하셨습니다.`
          }
        )
      
      console.log(newArr)
      ```

    - ***근데, foreach와 map둘다 마찬가지인게, 중간에 요소가 추가된다고 해서 계속해서 무한루프가 되는게 아님. 중간에 요소를 계속 push 한다고 하더라도, 딱 처음에 그만큼만 실행됨. 그런데, 줄어들면? 그 줄어든만큼만 실행된다.*** 

      예시코드 

      ```js
      const list = document.querySelector('.list');
      const data = [{
          title: '자바스크립트 공부하기',
          isClear: true,
        }, {
          title: '쓰레기 분리수거',
          isClear: false,
        }, {
          title: '고양이 밥주기',
          isClear: true,
        }, {
          title: '독서하기',
          isClear: false,
        }, {
          title: '영어 공부하기',
          isClear: false,
        }
      ];
      
      // 여기에 코드를 작성해 주세요.
      data.forEach((todo, i) => { // 1번 조건
        const li = document.createElement('li'); // 2번 조건
        
        if (todo.isClear) {
          li.classList.add('item', 'done'); // 4번 조건
        } else {
          li.classList.add('item'); // 3번 조건
        }
      
        li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
        list.appendChild(li); // 6번 조건
      });
      ```

      

      

      

      ### Filter and Find

      - Filter, 리턴으로 true 혹은 false의 조건이 될 수 있는 값을 주면 된다. True인 놈만 모아주는 것. 

        ```js
        const devices = [
          {name : 'Galaxy', brand: 'Samsung'}, 
          {name : 'OPPO', brand: 'Hwawei'}, 
          {name : 'Galaxy', brand: 'OPPO'}, 
          {name : 'Galaxy', brand: 'APPLE'}, 
          {name : 'Galaxy', brand: 'HTC'}, 
          {name : 'Galaxy', brand: 'MOTOLORA'}
        ]
        
        
        
        const apples = devices.filter((el) => el.brand === 'APPLE')
        console.log(apples)
        ```

        항상 리턴값이 배열이다. 하나만 딱 가지고 가고 싶어도, 결과는 배열이 된다. 

        ```js
        [...apples]
        ```

      - FIND는 그냥 딱 찾고 싶을때 그거 => 제일 먼저 걸리는 놈 하나만 딱 가져다 준다. 정확히는 딱 한놈 찾는 순간 반복이 종료되는 것. 

        ```js
        const devices = [
          {name : 'Galaxy', brand: 'Samsung'}, 
          {name : 'OPPO', brand: 'Hwawei'}, 
          {name : 'Galaxy', brand: 'OPPO'}, 
          {name : 'Galaxy', brand: 'APPLE'}, 
          {name : 'Galaxy', brand: 'HTC'}, 
          {name : 'HI', brand: 'APPLE'}
        ]
        
        
        
        const apples = devices.find((el) => el.brand === 'APPLE')
        console.log(apples)
        ```

        참고로 존재하지 않는 놈 찾으려고 하면, `undefined`가 된다. 

## Some과 Every

- `some` : 조건을 만족하는 요소가 1개 이상 있는지, `every` : 모든 요소가 조건을 만족하는지

  - some은 조건 만족하는 요소 딱 찾으면,  loop 종료
  - every는 조건 만족하지 않는거 찾는 순간 loop 종료

  ```js
  
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  
  const someReturn = numbers.some((el) => el > 5)
  
  const everyReturn = numbers.every((el) => el > 5)
  
  console.log(someReturn)
  console.log(everyReturn)
  ```

- 만약 빈 배열을 입력하면, 콜백 상관 없이 `some`은 `false`, `every`는 `true`로 간다. 

  예시 코드 

  ```js
  function checkSpy(team) {
    // 여기에 코드를 작성해 주세요.
    const result = team.members.some((member) => member !== '스파이');
    const message = result
      ? `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`
      : `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
  
    console.log(message);
  }
  ```

  

## Reduce

- reduce는 조금 특이하니깐 잘 알아두자. 

  `el, i, arr` -> 얘네는 이전에 살펴본 애들과 다 동일. 요소, 인덱스, 전체 배열

  맨 첫번째 `acc` 부분이 accumulator로 조금 특별하다. 

  ```js
  const numbers = [1, 2, 3, 4]
  
  numbers.reduce((acc, el, i, arr) => {
    return nextAccValue;
  }, initialAccValue)
  ```

  `acc`는 직전의 루프가 리턴한 값을 가지고 오는 값이다. 

  즉, reduce의 return뒤에는 다음 루프로 전달할 놈을 적는 것. 그러다가, 마지막 루프때 리턴되는 애가 이 reduce의 최종 리턴값이 되는 것. 

  그런데, 이대로라면, 맨 처음놈은 acc에 전달받을게 없잖아. 그걸 ,` initialAccValue`부분에 써놓는 것. 

  ```js
  
  
  const numbers = [1, 2, 3, 4]
  
  const sumAll = numbers.reduce((acc, el, i) => {
    console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`)
    console.log('acc: ', acc)
    console.log('el: ', el)
    return acc+el
  }, 0)
  
  console.log(sumAll)
  ```

  default acc, 0 을 생략하면, 그냥 배열의 0번 인덱스 값이 첫번째의 acc로 전달된다. 그런데, 0번 인덱스를 그냥 넘어가버리네. 첫번째 루프를 넘어버리는 거야. 





### Sort, Reverse

# sort 메소드

배열에서 `sort`라는 메소드를 활용하면 배열을 정렬할 수 있습니다. `sort` 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 [유니코드](https://ko.wikipedia.org/wiki/유니코드)에 정의된 문자열 순서에 따라 정렬됩니다.

```js
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
```

그렇기 때문에 `numbers`에 `sort` 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다.

그럴 땐 `sort` 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데요.

> ```
> 이 함수는 두 개의 배열 element를 파라미터로 입력 받습니다.
> 이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,
> 이 함수가 리턴하는 값이 0보다 작을 경우, a가 b보다 앞에 오도록 정렬하고,
> 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
> 만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.
> ```
>
> 출처: https://hianna.tistory.com/409 [어제 오늘 내일:티스토리]

```js
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```

`sort` 메소드를 사용할 때 한 가지 주의해야될 부분은 **메소드를 실행하는 원본 배열의 요소들을 정렬**한다는 점입니다. 그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니, 그런 경우에는 미리 다른 변수에 복사해두는 것이 좋겠죠!?

# reverse 메소드

`reverse` 메소드는 말 그대로 배열의 순서를 뒤집어 주는 메소드 입니다. `reverse` 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순이 메소드를 호출해주기만 하면 배열의 순서가 뒤집히는데요. `sort` 메소드와 마찬가지로 **원본 배열의 요소들을 뒤집어 버린다**는 점은 꼭 주의헤야 합니다.

```js
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
```





# Map과 Set

객체는 property name을 통해 이름이 있는 여러 값들을 묶을 때 활용할 수 있고, 배열은 index를 통해 순서가 있는 여러 값들을 묶을 때 유용하게 활용할 수 있습니다.

그런데 ES2015에서 객체와 비슷한 Map과 배열과 비슷한 Set이라는 데이터 구조가 새롭게 등장했는데요. 각각 어떤 특징들을 가지고 있는지 간단하게 살펴보도록 합시다.

# Map

Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷합니다. 하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게  Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요.

new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

- map.set(key, value): key를 이용해 value를 추가하는 메소드.
- map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
- map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
- map.delete(key): key에 해당하는 값을 삭제하는 메소드.
- map.clear(): Map 안의 모든 요소를 제거하는 메소드.
- map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
```

문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

# Set

Set은 여러 개의 값을 **순서대로 저장한다는 점에서 배열과 비슷합니다.** 하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요.

Map과 마찬가지로 `new` 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

- set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
- set.has(value): Set 안에 값이 존재하면 `true`, 아니면 `false`를 반환하는 메소드.
- set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
- set.clear(): Set 안의 모든 요소를 제거하는 메소드.
- set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
```

한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 `get`메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요. 한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

```js
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
```

그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다. 그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요. 바로, **중복을 허용하지 않는 값들을 모을 때**입니다.

**Set은 중복되는 값을 허용하지 않는 독특한 특징이 있는데요.**

```js
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('영훈'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
```

최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시하는 특징이 있습니다.

처음 Set을 생성할 때 아규먼트로 배열을 전달할 수도 있는데요. 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용하기도 합니다.

```js
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
```







# Module 

- 기능별로, 분리해서 저장한다.

  ![module](./images/module.png)

  - 이를 통해 효율적 관리 및 재사용이 가능. 
  - ES2015 이후 모듈화가 다양하게 가능해졌다. 

- 모듈 파일의 조건

  - 모듈스코프 : 모듈파일 안에서 정의한 변수나 함수는 해당 모듈 안에서만 사용이 가능해야 한다. 

  - 특이한게, 한 디렉토리 안에, `index.js`, `printer.js` 두 파일이 있으면, index.js에서 선언한 변수를 printer.js에서 그냥 아래처럼 출력이 가능하다. 

    ```js
    console.log(title)
    ```

    이런 현상이 생각보다 큰 문제를 발생시킨다. 서로 다른 파일에 있는 변수나 함수 의도치 않게 덮어씌우거나 할 수가 있다. 그래서, 모듈  scope가 필요한 것. 

    html에서 해야돼. 

    ```js
    <script type="module" src="./index.js"></script>
    ```

    위처럼, html에서 js를 불러올때, module 속성을 줘야 한다. 근데, **에러가** 발생하는 구만?

    애초에 브라우져에서 보안을 위해 막혀있는 것. 

    서버를 통해 html을 실행해야 함. `Live Server`를 통해 실행한다. 

    이제 위처럼, 모듈타입으로 설정할 수 있고, 서로 모듈 스코프를 설정해 놓을 수 있다. 

- **모듈 문법**

  ```js
  // index.js
  
  const title = 'PRINTER'
  
  function print(value){
    console.log(value)
  }
  ```

  이제 이거를 다른 파일에서 가져가서 실행시키고 싶다. 

  how? 내보내고 싶은 곳에서 선언문 앞에 `EXPORT`를 써준다. 

  ```js
  // index.js
  
  export const title = 'PRINTER'
  
  export function print(value){
    console.log(value)
  }
  ```

  그리고, 애들을 사용하고 싶은 파일에 가서, 

  ```js
  import {title, print} from './printer.js'
  
  print(title)
  ```

  이렇게 모듈 문법으로 오고가고 하면

  `<script type="module" src="./index.js"></script>` 이게 필요가 없지.  애초에 자바스크립트의 진입점 역할을 하는애 하나만 불러왔으면 된거야. 

- 변수 이름을 바꿔서 import 하고 싶은 경우는?

  ```js
  import {title, print} from './module.js'
  
  print(title)
  
  
  ## 이렇게 하면 에러가 나니깐, 
  const title = "Hi"
  ```

  아래처럼 하면 된다. 

  ```js
  import {title as original_title, print} from './module.js'
  
  print(title)
  
  const title = "Hi"
  ```

- 한꺼번에 다루기. 

  사용하는 것만 import하면 되지만, 엄청 많다면? *을 쓰고 프로퍼티처럼 골라와서 사용할 수 있다. 

  ```js
  import {* as printJS } from './module.js'
  console.log(printJS.title)
  ```

  export할때도, 선언문마다 

  ```js
  export let variable = "hi"
  
  이렇게 하지 말고, 
  export {variable, variable2} 
  이렇게 하면 된다. 
  ```

  as 써서 이름을 바꿔서 애초에 export도 가능하다. 

  ```js
  export {variable, variable2} 
  ```

  #### default export

- ```js
  export default title
  ```

  변수나, 함수, 혹은 `export default 'sanghyuk'` 이런식으로 직접 내보낼 수도 있다.

  그러나, 해당 모듈 파일 안에서 딱 한번만 사용할 수 있다. 

  default로 export된 값은 import를 할때에도, 

  `import {default as hi} from ''`디폴트 키워드를 같이 붙여야 되나, 반드시 as를 붙여야 한다. 

  근데, 디폴트는 사실 중괄호 밖으로 빼낼 수가 있다. 

  **default as** hi bold부분을 통으로 빼내고, 

  `import hi from './import.js'` 이렇게 사용이 가능하다. 

  고로, 중괄호 여부로 default와 default아닌 named export를 구분할 수 있다. 

  - 또한 참고로, wildcard라고 불리는 *를 써서 임포트를 하게 되면, `printJS.default`라는 디폴트 키워드로 접근이 가능하다. 

  - named, 혹은 default 중에 하나만 쓰는 것을 보통 권장하긴 한다. 

  - 또한, 디폴트에 아래처럼 묶어서 export하면, 객체가 export되는 것. 

    ```js
    const title = 'HI'
    
    function print(value){
      console.log(value);
    }
    
    export default {title, print}
    ```

    `export default {title: title, print: print}` 사실 이 상황이였던 거야. 

  

그동안 배운 문법만 되돌아봐도 모듈 문법은 정말 다양한 방식으로 작성될 수가 있습니다. `export`를 할 때도 선언문을 `export`하거나

```js
export const title = 'Module';
```

선언된 변수나 함수를 코드 블록으로 묶어서 `export`할 수도 있고,

```js
const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export { printer, arrPrinter };
```

때로는 `as` 키워드를 통해 이름을 변경해서 `export`를 할 수도 있었죠?

```js
const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export { printer as namedPrinter, arrPrinter };
```

그리고 `default` 키워드를 통해 표현식을 `export`하는 방법도 배우면서,

```js
const title = 'Module';

export default title;
```

위 코드 처럼 단순히 **하나의 대상을 export**하는 것뿐만 아니라 아래 코드처럼 **여러 대상을 객체 값으로 모아 내보내는 방식**도 가능하다는 것도 배웠습니다.

```js
const title = 'Module';

const printer = (value) => {
  console.log(value);
};

const arrPrinter = (arr) => {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  })
};

export default { title, printer, arrPrinter };
```

그리고 `import`도 `import` 키워드 이후에 중괄호를 감싸면, 아래 코드 처럼 모듈 파일에서 `export`하는 항목들을 선택적으로 불러올 수 있고

```js
import { title, data } from './modules.js';
```

`as` 키워드를 통해서 아래 코드 처럼 이름을 바꿀 수도 있었죠?

```js
import { title as moduleTitle, data } from './modules.js';
```

뿐만 아니라 **와일드카드 문자(\*)**를 통해서 아리 코드 처럼 `export`된 항목들을 모두 불러올 수도 있었습니다.

```js
import * as modules from './modules.js';
```

그리고 아래 코드 처럼 **default export**된 대상을 `import`할 때는

```js
import { defult as modules } from './modules.js';
```

아래 처럼 축약형으로 불러올 수 있다는 부분도 살펴봤었습니다.

```js
import modules from './modules.js';
```

심지어 이러한 방식들을 잘 응용하면,

```js
// (modules.js)
import module1 from './sub-module1.js';
import module2 from './sub-module2.js';
import module3 from './sub-module3.js';

export { module1, module2, module3 };
// index.js
import { module1, module2, module3 } from 'modules.js';
```

위 코드들 처럼 여러 개의 기능으로 잘게 나누어진 모듈을 `import`한 다음 다시 `export`하는 모듈 파일을 만들 수 있는데요. 비슷한 특징을 가진 여러 모듈 파일들을 다시 하나의 모듈 파일로 만들 수 있어서 파일 관리를 유용하게 할 수 있도록 도와줍니다.

모듈 문법은 나중에 여러분들이 자바스크립트를 기반으로 한 라이브러리나 프레임워크를 사용할 때 꼭 필요할 정도로 정말 많이 활용되기 때문에 다양한 상황들을 경험해보고 어떤 방식으로 풀어나갈지 고민하는 것이 중요한데요.

행여나 자바스크립트 코드만 다룬다고 하더라도 조금 더 효율적인 코드 작성을 위해서도 굉장히 중요한 부분이기 때문에 처음에는 다양한 표현방식 가능하다는 점이 꽤 혼란스러울 수도 있지만, 여러 번 복습을 통해서라도 잘 이해해 두시는 걸 권장해 드립니다!

```js
import addMenu from './functions/add.js';
import deleteMenu from './functions/delete.js';
import rollMenu from './functions/roll.js';

export { addMenu, deleteMenu, rollMenu };
```

```js
import { addMenu, deleteMenu, rollMenu } from './functions.js';
```

