let object_sample = {
  name: "Noel",
  "born year": 1993,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: "programming",
    language: "JS"
  }
};

// 점 표기법
console.log(object_sample.bestCourse);
console.log(object_sample.bestCourse.title);

// 대괄호 표기법
console.log(object_sample["bestCourse"]);
console.log(object_sample["born" + " year"]);

console.log(object_sample.bestCourse["title"]);

// property 수정 및 삭제
console.log(object_sample.name);
object_sample.name = "Hi";
object_sample.nickname = "Noel";
console.log(object_sample);

delete object_sample.name;

console.log(object_sample == name != undefined);

// 존재여부 확인
console.log("name" in object_sample);

// Method
let greetings = {
  sayHello: function(name) {
    console.log(name);
    console.log("Hello!");
  },
  sayBye: function() {
    console.log("Bye");
  },
  sayHi: function() {
    console.log("Hi");
  }
};

greetings.sayHello("상혁");

// for ... in
for (let key in object_sample) {
  console.log(key);
  console.log(object_sample[key]);
}

// 내장객체
let myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

let myDate2 = new Date("2022-05-04");
console.log(myDate2);

console.log(myDate.getTime());

// 배열(Array)
let courseRanking = ["A", "B", "C", "D"];
// index = property
console.log(courseRanking[1]);

let members = ["Hi", "Bye"];
console.log(typeof members);
console.log(members.length);
console.log(members["length"]);
members[6] = "what";
console.log(members);
delete members[4];

// 1번 인덱스부터 2개를 지운다.
// 두번째 파라미터를 안쓰면, 거기부터 뒤로 모두 삭제
// members.splice(1, 2)
members.splice(1, 1, "Nice", "Hello");

// 이렇게 하면, 첫번째부터 0개 지우고 두번째, 세번째에 Nice, Hello 추가하는 것.
members.splice(1, 0, "Nice", "Hello");

// 첫 요소 삭제
members.shift();
// 마지막 요소 삭제
members.pop();
// 첫 요소로 값을 추가: unshift(추가할 값)
members.unshift("Ah");

// 배열의 마지막 요소로 값을 추가
members.push("Oh");

//배열에서 특정 값 찾기 (indexOf / lastIndexOf)
let brands = ["Google", "Kakao", "Naver", "Kakao"];
console.log(brands.indexOf("Kakao"));
console.log(brands.indexOf("Daum")); // 없는 경우 -1 return

console.log(brands.lastIndexOf("Kakao"));
console.log(brands.lastIndexOf("Daum"));

// 배열에서 특정 값이 있는지 확인하기 (includes)
console.log(brands.includes("Kakao"));
console.log(brands.includes("Daum"));

// 배열 뒤집기 (reverse)
console.log(brands);
brands.reverse();
console.log(brands);

// for ... of
// for (변수 of 배열){
//   동작 부분;
// }
for (let element of members) {
  console.log(element);
}

// 배열에는 사용 안할 것을 권장
for (let index in members) {
  console.log(members[index]);
}

// 다차원 배열
let twoDimensional = [[1, 2], [3, 4]];
console.log(twoDimensional[0][1]);

// 숫자 표기벗
let millionaire = 1000000;
// 1에서 10의 9승을 곱하라는 뜻.
let myNumber = 1e9;

console.log(millionaire);
console.log(myNumber);

myNumber = 123.123345354;
console.log(myNumber.toFixed(7));
console.log(typeof myNumber.toFixed(7));
console.log(Number(myNumber.toFixed(7)));
console.log(+myNumber.toFixed(2));

// toString(2~36) 2, 8, 16진수로 각각 변환
console.log(myDate.toString(2));
console.log(myDate.toString(8));
console.log(myDate.toString(16));
// console.log(255.toString(16)) 숫자를 가지고 이렇게 직접 쓸때는 .을 하나만 쓰면, 소숫점으로 인식
console.log((255).toString(16)); // 점 두개 써야 함.
console.log((255).toString(16));

// Math Object
// Absolute Number
console.log(Math.abs(-10));
console.log(Math.abs(10));

// Maximum
console.log(Math.max(2, -1, 4, 5, 0));

// Minimum
console.log(Math.min(2, -1, 4, 5, 0));

// Exponentiation
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

// Square Root
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));

// 반올림 (Round)

console.log(Math.round(2.3)); // 2
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.49)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.6)); // 3

// Floor and Ceil
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log("-");
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));

// 난수 Random
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// String
let myString = "Hi, Sanghyuk!";
console.log(myString.length);
console.log(myString[3]);
console.log(myString.charAt(3));

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim());
console.log(myString.slice(0, 2)); // 0과 1번 인덱스를 가져온다.
console.log(myString.slice(3));
console.log(myString.slice());

for (let str of myString) {
  console.log(str);
}

// 배열은 mutable
let myArray = ["C", "o", "d", "e", "i", "t"];
myArray[0] = "B";
console.log(myArray);

// 문자열은 immutable
myString[0] = "B"; // CANNOT CHANGE
console.log(myString);

let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice(); // 복사

let object_sample2 = {
  name: "Noel",
  "born year": 1993,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: "programming",
    language: "JS"
  }
};

let course1 = Object.assign({}, object_sample2);

function cloneObject(object) {
  let temp = {};
  for (let key in object) {
    temp[key] = object[key];
  }
  return temp;
}
// 중첩하면 또 같이 복사된다.
let course2 = cloneObject(course1);
