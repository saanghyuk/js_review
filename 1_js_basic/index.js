console.log("Hello Codeit!");
console.log(10 + 5);
console.log(20 - 5);

// 변수 선언
let espressoPrice;
espressoPrice = 3000;
let espressoPrice2 = 4300;

// 함수 선언
// function 함수이름(){
//   명령;
//   명령;
// };

function greetings(sentence) {
  console.log("Hi!");
  console.log("안녕");
  console.log(sentence);
}
greetings("Hola");

function printSum(a, b) {
  console.log(a + b);
}
printSum(3 + 5);

// 자료형
console.log(2 ** 3);
console.log(7 ** 3);
console.log(3 + 3);
console.log(5 - 3);

console.log(15 % 4);
console.log(5 % 3);
console.log((3 + 27) * 12 ** (5 % 3));

console.log(`"Hi", this is Noel's documentation`);

// Boolean
console.log(2 > 1);
console.log(1 < 2);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 == 3);
console.log(3 != 3);

console.log(true && true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

console.log(2 < 1 && "Codeit" !== "Codeit");
console.log(7 !== 7 || 4 < 3);

let x = 3;
console.log(x > 4 || !(x > 2));

// typeof
console.log(typeof 101);
console.log(typeof "Hi");
console.log(typeof true);
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof `1`);

// typeof 8 해놓고 3을 빼서 NaN이 된 것.

// 연산자 우선순위 https://www.codeit.kr/learn/3389
console.log(typeof 8 - 3);
console.log(typeof (8 - 3));

// type conversion
console.log("10" + "5");
console.log(10 + 5);
console.log(Number("10"));
console.log(String("10"));

String();
Number();

console.log(Boolean(NaN));

console.log(Boolean(NaN) || Boolean("O"));
console.log(Boolean(typeof false));

// 자동변환

console.log(4 + "2");
console.log(4 + 2);
console.log("4" + true);
console.log("4" * false);
console.log(4 / "2");
console.log("4" ** true);
console.log(4 % "two");

console.log(2 < "3");
console.log(2 > true);
console.log("2" <= false);
console.log("two" >= 1);

// 특별한 경우가 아니라면, 2개를 사용하는게 안전하다.
// 코드가 복잡해지면 우리가 모르는 형변환이 일어날 가능성이 있다.
console.log(1 === "1"); // 일치, 불일치(!==) - 형변환 X
console.log(1 === true);
console.log(1 == "1"); // 동등, 부등(형변환을 한다)- 형변환 O
console.log(1 == true);

console.log(typeof (Boolean(5) * true));
console.log(typeof (true < false));
console.log(true != "5");

// Template 문자열
let year = 2018;
let month = 3;
let day = 11;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;
function getTwice(x) {
  return x * 2;
}
console.log(`${myNumber}이 두배는 ${getTwice(myNumber)}입니다.`);

// null과 undefined
// null -> 의도적인 없음!
// undefined -> 처음부터 없음!
let codeit;
console.log(codeit); // undefined

codeit = null;
console.log(codeit);

//추상화
let name = "코드잇";
let x = 5;
x = x - 2;
console.log(x);

function sayHello(){
  console.log('Hello');
  console.log('Welcome');
}
console.log("함수 호출 전")
sayHello()
console.log("함수 호출 후")

// optional parameter
function introduce(name, age, nationality = "Korea"){
  console.log(nationality);
}
introduce(1, 3)

// 상수(변경 불가)
const PI = 5;
const MY_NUMBER = 0104041; 


// if 
let temperature = 0;
if (temperature <= 0){
  console.log("Ice")
}else if(temperature<100){
  console.log("물이 얼지도 끓지도 않는다.")
}else{
  console.log("Water")
}

// Switch
// break를 안써주면, 조건값과 일치하는 값 찾은 후에 그 아래 쭉 다 실행함. 
// 그래서 break를 써야 안전함. 
// switch (비교할 값){
//   case 조건값_1 :
//     동작부분 ;
//     break;
//   case 조건값_2:
//     동작부분; 
//     break;
//   default: 
//     동작부분
// }

let myChoice = 2;
switch(myChoice){
  case 1:
    console.log("토끼")
    break;
  case 2:
    console.log("고양이")
    break;
  default:
    console.log("Why?")
}


// loop statement
for (let i = 1; i<=10; i++){
  console.log(`${i} 최고`)
}

// While
// while (조건부분){
//   동작부분
// }
let i = 1;
while (i<=10){
  console.log(`${i} 최고`);
  i++;
}


// break(전체 루프 종료), continue(해당 조건일때 pass하고 다음 조건으로)

while(i<=10){
  console.log(i);
  i++;
  break;
}