# OOP

[추상화](#추상화)

[캡슐화](#캡슐화)

[상속](#상속)

[다형성](#다형성)

#### '객체'간의 상호작용을 중심으로 하는 프로그래밍

이때까지 우리는 자바스크립트에서 객체를 생성하는 총 3가지 방법을 배웠습니다. 배운 내용을 정리해볼까요?

# 1. Object literal과 Factory function 사용하기

```jsx
function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
const user2 = createUser('jerry99@google.com', '19950719');
const user3 = createUser('alice@google.com', '19931224');
```

객체를 생성하는 Factory function을 만들고, 그 안에서 Object literal로 객체를 생성하여 리턴하는 방법입니다.

# 2. Constructor function 사용하기

```jsx
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```

객체를 생성하는 용도로 사용하는 Constructor function을 정의하고, 그 안에서 this 키워드를 사용하여 생성될 객체의 프로퍼티와 메소드를 설정하는 방법입니다. Constructor function으로 객체를 생성하려면 그 앞에 new를 붙여서 실행해야 한다는 사실, 반드시 기억하세요.

# 3. class 키워드 사용하기

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');
```

class 키워드를 사용해서 객체의 틀을 정의하고, 마찬가지로 그 앞에 new를 붙여서 객체를 생성하는 방법입니다. class를 사용할 때는 보통 프로퍼티의 경우 constructor 안에 정의하고, 메소드의 경우 constructor 밖에 정의합니다.

이 밖에도 자바스크립트로 객체를 만들 수 있는 방법에는 여러 가지가 있지만 일단은 이 정도만 아셔도 충분합니다.

이제 다음 챕터에서는 객체 지향 프로그래밍을 할 때 알아야 하는 기본 개념들을 배울 건데요. 이때 위의 세 가지 방법 중에서 **class 키워드를 사용하는 방법**을 쓸 겁니다. Factory function이나 Constructor function을 사용해도 문제는 없지만, class는 자바스크립트 뿐만 아니라 Java 등의 다른 언어에서도 등장하는 보편적인 용어이고, 그 자체로 객체 지향의 원리를 나타내기에 적절해서 React 등의 유명 프레임워크에서도 사용하던 방식이기 때문입니다.

다음 챕터에서는 class 키워드만 사용할 테니까 class 안에 어떤 식으로 코드들이 들어가는지 미리 잘 봐두고 넘어가세요.





객체 안에는 상태(프로퍼티)와 행동(메소드)이 있을 수 있다. 프로퍼티와 메소드로 이루어진 각 객체들의 상호작용을 중심으로 코드를 작성하는 것. 

![oop1](./images/oop1.png)

> 절차지향 프로그래밍이란 
>
> 변수와 함수를 가지고, 작업의 순서에 맞게 코드를 작성하는 것.

```js
const user = {
  email : "saanghyuk@gmail.com", 
  birthDate: "1993-03-07", 
  buy (item) {
    console.log(`${this.email} buys ${item.name}`)
  }
}
```

객체를 나타내는 문자열, object literal. 

위에서 유저가 수십개라면?

#### Factory Function

```js
const user1 = {
  email : "saanghyuk@gmail.com", 
  birthDate: "1993-03-07", 
  buy (item) {
    console.log(`${this.email} buys ${item.name}`)
  }
}

const user2 = {
  email : "saanghyuk@gmail.com", 
  birthDate: "1993-03-07", 
  buy (item) {
    console.log(`${this.email} buys ${item.name}`)
  }
}

```

아래처럼 함수로 만들면 된다. 

```js

function createUser(email, birthDate){
  const user = {
    email : email,
    birthDate: birthDate,
    buy (item) {
      console.log(`${this.email} buys ${item.name}`)
    }
  }
  return user
}
```

이러면, 아래처럼 생성하면 된다. 이런 함수를 factory function이라고 한다. 

```js
const user1 = createUser('saanghyuk@gmail.com', '19930307')
```

#### Constructor function: 생성자 함수

너무 직관적인 객체지향. 

```js

function User(email, birthDate){
  this.email = email; 
  this.birthDate = birthDate
  this.buy = function (item){
    console.log(`${this.email} bought ${item.name}`)
  }
}

const item1 = {
  name : '스웨터', 
  price : 30000
}

const user1 = new User('saanghyuk@gmail.com', '1993-03-07')
user1.buy(item1)
```

`this`라는것은 생성된 그 객체를 의미한다

1.  `new`를 붙어야 객체를 생성할 수 있다. 
2. 관행적으로 constructor function의 이름은 첫글자를 대문자로 쓴다. 



#### Class

ES6에서 한가지 더 추가되었다. Contructor 메소드는 객체가 생성될 때 실행된다. constructor 안에 프로퍼티, 메서드는 분리해서 한다. 

```js

class User1{
  constructor(email, birthDate){
    this.email = email; 
    this.birthDate = birthDate;
  }

  buy (item){
    console.log(`${this.email} bought ${item.name}`)
  }
}
```

생성은 똑같이 `new`로 하면 된다. 

```js]
class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  run() {
    console.log(`Runs at ${this.speed}`);
  }
}

const car1 = new Car('blue', '100km/h');

car1.run();
```



# 1. 추상화(Abstraction)

우리가 객체를 만드는 과정은 현실 또는 가상의 존재를 프로그램 내에서 사용할 용도에 맞게 적절하게 설계하는 과정입니다. 이때 객체를 만들고 나면 그 객체를 사용하는 사람은 객체 내부에 존재하는 복잡한 원리를 모르더라도 객체 외부에 공개된 프로퍼티나 메소드만을 가지고도 객체를 문제없이 잘 사용할 수 있어야 합니다. 이를 위해서는 프로퍼티와 메소드의 이름을 누구나 이해하기 쉽게 잘 지어야하고, 필요한 경우 이렇게 주석을 달거나

```jsx
class User {
  constructor(email, birthdate) {
    // 사용자의 이메일 주소
    this.email = email;
    // 사용자의 생일
    this.birthdate = birthdate;
  }

  // 물건 구매하기
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}
```

그 내용을 문서화하여 공개하기도 합니다. 이는 비단 하나의 객체 뿐만 아니라 여러 객체가 모인 라이브러리나 프레임워크의 경우에도 마찬가지입니다. 우리가 아주 세밀한 원리까지 속속들이 알고 있지 않은 유명한 라이브러리나 프레임워크를 문제없이 사용할 수 있는 것은 그것들이 적절하게 추상화되어 있기 때문입니다.

# 2. 캡슐화(Encapsulation)

캡슐화는 객체 외부에서 함부로 접근하면 안되는 프로퍼티나 메소드에 직접 접근할 수 없도록 하고, 필요한 경우 공개된 다른 메소드를 통해서만 접근할 수 있도록 하는 것을 의미합니다. 아래의 코드를 보면

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}
```

사용자의 이메일 주소를 나타내는 프로퍼티는 사실 `_email` 이고, 그 getter/setter 메소드의 이름이 `email`입니다. 그래서 마치 email 프로퍼티에 접근하는 것 같은 코드를 작성하더라도

```jsx
const user1 = new User('charlie123@google.com', '2000-12-05');

console.log(user1.email); // email이라는 getter 메소드 실행 
user1.email = 'new123@google.com'; // email이라는 setter 메소드 실행
```

지금 주석에 적힌 것처럼 사실은 `email`이라는 getter 메소드 또는 setter 메소드가 실행되는 것이죠. 이렇게 코드를 작성하면 `_email` 프로퍼티가 보호받고 있는 프로퍼티라는 것을 알 수 있습니다. 하지만 이렇게 해도 완벽한 캡슐화는 아니라고 했었죠? 여전히

```jsx
console.log(user1._email);
```

이런 식으로 보호받는 변수에 직접 접근할 수 있기 때문입니다.

사실 다른 언어에서는 해당 언어의 문법 차원에서(ex. Java에서 캡슐화하고 싶은 변수나 메소드 앞에 붙이는 private 키워드) 캡슐화를 지원하는 경우가 많지만 자바스크립트에는 그러한 문법이 없습니다. 하지만 클로저(Closure)라는 것을 사용해서 우회적으로 완벽한 캡슐화를 구현할 수는 있습니다.(['캡슐화 더 알아보기' 노트](https://www.codeit.kr/learn/4462/)) 어쨌든 중요한 것은 객체를 사용하는 입장에서는 사용하라고 공개된 것 이외에는 되도록 접근하지 말고, 객체를 만드는 입장에서도 미리 보호해야할 프로퍼티나 메소드를 캡슐화해두어야 한다는 점입니다.

# 3. 상속(Inheritance)

상속은 부모 클래스의 프로퍼티와 메소드를 자식 클래스가 그대로 물려받는 것입니다.

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
} 

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}
```

지금 이 코드에서는 `PremiumUser` 클래스가 `User` 클래스에 있는 `email`, `birthdate` 프로퍼티와 `buy` 메소드를 그대로 물려받고 있습니다. 이렇게 상속을 적용하면 똑같은 코드를 또다시 작성하지 않아도 됩니다. 즉, '코드의 재사용성(reusability)'이 좋아집니다. 만약 두 클래스에 개념적으로 포함되는 관계가 성립한다고 하면 상속을 적용해보는 것도 좋습니다.

필요한 경우에는 자식 클래스에서 부모 클래스와 동일한 이름의 메소드를 재정의(**오버라이딩**, overriding)할 수도 있는데요. 이 오버라이딩은 바로 다음에 나오는 '다형성'과 연관이 깊습니다.

# 4. 다형성(Polymorphism)

다형성은 하나의 변수가 다양한 종류의 클래스로 만든 여러 객체를 가리킬 수 있음을 의미합니다.

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
} 

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name} with a 5% discount`);
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = { 
  name: '스웨터', 
  price: 30000, 
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
```

이 코드를 보면 지금 `forEach` 문 안의 `user`는 `User` 클래스로 만든 객체를 가리킬 때도 있고, `PremiumUser` 클래스로 만든 객체를 가리킬 때도 있습니다. 매번 `user` 객체의 `buy` 메소드가 호출된다는 점은 같지만, 구체적으로 무슨 클래스로 만든 객체의 buy 메소드가 호출되느냐에 따라 결과가 달라지는데요. 이렇게 단순한 코드로 다양한 결과를 낼 수 있는 건 다형성 덕분인 겁니다.

자, 이때까지 객체 지향 프로그래밍의 4개의 기둥을 복습해보았는데요. 모두 잘 이해하셨나요? 이것들을 잘 이해해야 자바스크립트로 객체 지향 프로그래밍을 잘 할 수 있으니까 혹시 이해가 안 되는 부분이 있다면 해당 영상을 꼭 복습하세요.

## 클래스는 파일 하나당 하나씩 넣어주는 게 좋아요

이때까지 객체 지향 프로그래밍의 4개의 기둥에 대해 배우느라 고생 많으셨습니다. 그런데 여기서 잠깐 한 가지 더 기억하고 가면 좋을 내용이 있습니다. 아래 코드를 보세요.

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
} 

class PremiumUser extends User {
  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.level = level;
    this.point = point;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);  
    this.point += item.price * 0.05;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = {
  name: '스웨터', 
  price: 30000, 
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
```

이때까지 저는 여러 개의 클래스를 하나의 파일 안에 작성했습니다. 지금 보이는 것처럼 `User` 클래스와 `PremiumUser` 클래스를 모두 하나의 파일 안에 정의하고 사용했죠.

그런데 사실 개발 실무에서는 이런 식으로 여러 개의 클래스를 하나의 파일에 정의하기보다는 파일 하나당 클래스 하나를 정의해두고 이를 메인 코드에서 가져와 사용합니다. 예를 들어 위 코드는

```
User.js
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

export default User;
PremiumUser.js
import User from './User';

class PremiumUser extends User {
  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.level = level;
    this.point = point;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);  
    this.point += item.price * 0.05;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

export default PremiumUser
main.js
import User from './User';
import PremiumUser from './PremiumUser';

const item = { 
  name: '스웨터', 
  price: 30000, 
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});
```

이런 식으로 각 클래스와 메인 로직(main.js)을 파일별로 쪼개서 작성합니다. 혹시 모듈 내부의 것을 공개하고(export), 다른 모듈의 것을 가져오는(import) 자바스크립트 문법이 궁금하신 분들은 **'모던 자바스크립트' 토픽의 ['자바스크립트 모듈' 챕터](https://www.codeit.kr/learn/4543)**를 참조하세요.

실무에서는 이렇게 파일 하나당 클래스 하나를 두고 외부에 공개하는 방식을 많이 사용합니다. 그래야 코드를 좀더 편리하게 관리할 수 있기 때문입니다.

이번 토픽에서는 한 눈에 모든 코드를 보기 위해 하나의 파일에 여러 클래스를 작성했지만 실제로는 파일 하나당 클래스 하나를 작성하고, 이를 외부에 공개해서 사용할 수 있도록 하는 방식을 주로 활용한다는 점, 잘 기억하세요.





# 4가지 핵심개념

# 추상화

어떤 구체적인 존재를 우리가 원하는 방향으로 간략화해서 나타낸 것. 

User객체를 만든다고 하면, 꼭 필요한 유저 객체의 속성과 행동을 찾아서, 프로퍼티와 메소드로 정의한다. 



# 캡슐화

객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것. 

```js

class User1{
  constructor(email, birthDate){
    this.email = email; 
    this.birthDate = birthDate;
  }

  buy (item){
    console.log(`${this.email} bought ${item.name}`)
  }
}
const user1 = new User1('saanghyuk@gmail.com', '1993-03-07')
```

근데 여기서 이렇게 수정해버리면?

```js
user1.email = "noel@ab180.co"
```

그럼 어떻게 막지? setter 메소드

```js
set email(address){
    // 이 안에서 검증한다 [
    if (address.includes('@'){
      this._email = address;
    } else{
      throw new Error('invalid email address')
    }
  }
```

이렇게 해놓으면, 이제 user1.email 이런식으로 접근할때마다, set함수가 자동으로 실행되도록 설계되어 있다. 

프로그래밍 세계에서 `_`를 붙인다는 것은 뭔가 숨기고 싶다는 것. 

예시) 아래처럼 하니깐, 에러를 던지게 된다. 

```js

class User1{
  constructor(email, birthDate){
    this.email = email; 
    this.birthDate = birthDate;
  }
  buy (item){
    console.log(`${this.email} bought ${item.name}`)
  }
  
  set email(address){
    // 이 안에서 검증한다 
    if (address.includes('@')){
      this._email = address;
    } else{
      throw new Error('invalid email address')
    }
  }
}

const user1 = new User1('saanghyuk@gmail.com', '1993-03-07')

user1.email = "abcde"
console.log(user1)
```

그럼 당연히 `getter` 메소드 나와야지. 읽게 해 주는 것. 

`user1.email`을 하면, `getter`메소드가 실행되는 것. 

**보니깐, _email은 숨겨놓은 변수 이름이고, 실제 밖에서 접근하는 변수 이름은 email이 되는 거네. 혹시라도 _email로 입력을 안했어도 알아서 그렇게 설정되는거고.** 

```js

class User1{
  constructor(email, birthDate){
    this.email = email; 
    this.birthDate = birthDate;
  }
  buy (item){
    console.log(`${this.email} bought ${item.name}`)
  }
  
  set email(address){
    // 이 안에서 검증한다 
    if (address.includes('@')){
      this._email = address;
    } else{
      throw new Error('invalid email address')
    }
  }

  get email(){
    return this._email; 
  }
}
```

이번 노트에서는 캡슐화에 대해 더 알아둬야 할 내용들을 살펴보겠습니다.

# 1. 완벽한 캡슐화를 하는 법

이전 영상에서는 다음 코드로 캡슐화를 배웠습니다.

```jsx
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
user1.email = 'newChris123@google.com';
console.log(user1.email);
```

이제 이 코드를 보면 `_email` 프로퍼티에 직접 접근하지 말고, `email`이라는 getter/setter 메소드로만 접근해야 한다는 것이 눈에 잘 보입니다. 하지만 사실 완벽한 캡슐화가 된 상태는 아닙니다. 왜냐하면 보호하려는 프로퍼티 `_email`에

```jsx
console.log(user1._email);
user1._email = 'chris robert';
```

**이런 식으로 여전히 직접 접근할 수는 있기 때문입니다.**

사실 자바스크립트에는 캡슐화를 자체적으로 지원하는 문법이 아직 없습니다.(Java는 private이라는 키워드가 있어서 언어의 문법 차원에서 캡슐화를 지원합니다.)

하지만 JavaScript에서도 다른 방식으로 우회해서 완벽한 캡슐화를 할 수는 있는데요. 클로저(Closure)라고 하는 개념을 응용해서 적용하면 됩니다. 잠깐 아래 코드를 보세요.

```js
function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1.email);
```

지금 이 코드를 보면 createUser라고 하는 Factory function이 보입니다. 그런데 생성하려는 user 객체 안에 `_email` 프로퍼티가 있는 게 **아니라**,

(1) createUser 함수 안에,  (2) 그리고 user 객체 바깥에 `_email`이라는 변수가 있죠?

대신에 user 객체 안에는 `_email` 변수의 값을 읽고 쓸 수 있는 `email`이라는 getter/setter 메소드가 있습니다.

지금 마지막 부분에서 `createUser`라는 Factory function으로 `user1`이라는 객체를 생성하고, `user1` 객체의 `email` getter 메소드를 호출했는데요. 이 코드의 실행 결과를 확인해보면,

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled.png&name=Untitled.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled.png&name=Untitled.png)

이렇게 `_email` 변수의 값이 잘 출력됩니다. 함수 안의 변수의 값을 이미 리턴된 객체에서 읽은 건데요. 어떻게 이게 가능한 걸까요? 이것은 자바스크립트의 클로저(Closure)라고 하는 것 덕분에 가능합니다.

(근데, 여기서도 `user1._email`해보면, 생긴다. 근데 그거는 우리가 앞에서 사용하던 user1.email과 다르게 새롭게 만들어버린거야 직접)

클로저란 자바스크립트에서 **어떤 함수와 그 함수가 참조할 수 있는 값들로 이루어진 환경을 하나로 묶은 것**을 의미하는데요. 예를 들어, 지금 `createUser` 함수가 실행되는 시점에 `email`이라는 getter/setter 메소드는 `_email` 이라는 변수의 값에 접근할 수 있는 상태입니다. 그리고 여기서 핵심은 이 `email` getter/setter 메소드들은 **메소드를 갖고 있는 객체가 리턴된 이후더라도 여전히 `_email`에 접근하는 것이 가능하다는 점입니다.** 바로 **이렇게 함수가 정의된 당시에 참조할 수 있었던 변수들을 계속 참조할 수 있는 상태의 함수를 클로저라고 합니다.** 이 클로저는 다른 프로그래밍 언어에서는 쉽게 찾아보기 힘든 자바스크립트만의 특징인데요.(물론 클로저 개념이 있는 다른 언어들도 있습니다)

보통 다른 프로그래밍 언어였다면 createUser 함수 내부가 실행될 때만 `email` getter/setter 메소드가 `_email` 변수에 접근할 수 있었겠지만, 자바스크립트에서는 클로저라는 개념으로 **해당 환경을 함수와 함께 그대로 유지시켜주는 것입니다.**

만약 클로저가 아닌 경우에는 `_email` 변수에 접근할 수 없습니다. 만약 이런 식으로

```jsx
function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1._email); // _ 추가
```

user1 객체의 `_email` 프로퍼티에 접근하려고 하면, `user1` 객체 자체 내에는 `_email`이라고 하는 프로퍼티가 없고, 바깥의 `_email` 변수에 현재 접근할 수도 없기 때문에

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%201.png&name=Untitled+1.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%201.png&name=Untitled+1.png)

undefined가 출력됩니다.

이런 식으로 자바스크립트에서는 클로저를 사용해서 완벽한 캡슐화를 할 수 있습니다. 신기하죠? 사실 자바스크립트로 프로그래밍을 할 때 캡슐화가 얼마나 중요한지, 꼭 해야하는지에 관해서는 논란이 많습니다. 하지만 어떤 상황이든 이런 식으로 완벽하게 캡슐화를 할 수 있다 정도는 알아두는 게 좋습니다.

# 2. 메소드도 캡슐화할 수 있어요

이때까지 우리는 프로퍼티를 보호하기 위해 getter/setter 메소드를 활용하거나, 좀더 완벽한 캡슐화를 위해 클로저를 사용할 수 있다는 것을 배웠습니다. 그런데 사실 프로퍼티 뿐만 아니라 메소드를 캡슐화하는 것도 가능합니다. 잠깐 이 코드를 볼까요?

```jsx
function createUser(email, birthdate) {
  const _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);
```

저는 `_point`라는 변수를 추가했는데요. 사용자가 물건을 살 때마다 1포인트씩 적립해 줄 목적으로 만든 변수입니다. 그리고 `point` getter 메소드도 지금 정의해둔 상태입니다. `_point` 변수를 1씩 늘려주는 함수는 바로 밑에 보이는 `increasePoint`라는 함수입니다.

이 `increasePoint` 라는 함수는 유저 객체의 `buy` 메소드 안에서 쓰이고 있는데요. `buy` 메소드를 실행할 때 그 안에서 `increasePoint` 함수도 호출을 해주는 겁니다. 맨 마지막 부분의 코드들을 보면 `user1` 객체의 `buy` 메소드를 호출하고 `point` getter 메소드를 호출하고 있는데요. 이 코드를 실행해보면

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%202.png&name=Untitled+2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%202.png&name=Untitled+2.png)

이렇게 스웨터를 3번 구매했을 때, 포인트는 총 3점이 쌓이게 됩니다.

자, 여기서 중요한 점은 지금 `increasePoint`라는 함수가 보호받고 있는 함수라는 점입니다. 지금 `user1` 객체로 바로 `increasePoint` 함수를 호출할 수는 없습니다. 호출하려고 하면

```jsx
function createUser(email, birthdate) {
  const _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);
user1.increasePoint(); // user1 객체로 increasePoint 직접 호출
```

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%203.png&name=Untitled+3.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4462&directory=Untitled%203.png&name=Untitled+3.png)

이렇게 그런 함수가 없다는 에러가 출력됩니다. 왜냐하면 `user1` 객체에는 `increasePoint`라는 메소드가 없기 때문입니다. 지금 저는 `increasePoint`가 유저 객체 안에서 적절한 곳에 사용되어야 하고, 아무렇게나 함부로 호출해서는 안 되는 메소드라고 가정하고 이렇게 캡슐화를 한 것입니다. 이런 식으로 메소드(정확하게 말하자면 increasePoint가 메소드는 아니니까 함수라고 할 수 있겠죠?)도 프로퍼티와 마찬가지로 클로저를 통해 캡슐화를 해서 보호할 수 있다는 사실, 잘 기억하세요.

예시)

```js
class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this._balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('You cannot set negative number for balance');
    }
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

const account1 = new BankAccount('Michael', 10000);
account1.balance = 20000;
account1.balance = -5000;
```

두가지 케이스 모두 알아놓자. 

아래 케이스에서는, account._balance 이런식으로 외부에서 선언 해봐야 그거는 내부에서 활용하는 것과 아예 다른 변수인것. 

```js
function createBankAccount(name, money) {
  const holder = name;
  let _balance = money;

  const account = {
    get balance() {
      return _balance;
    },

    set balance(money) {
      if (money >= 0) {
        _balance = money;
      } else {
        console.log('You cannot set negative number for balance');
      }
    },

    deposit(money) {
      this.balance += money;
    },

    withdraw(money) {
      if (this.balance - money < 0) {
        console.log('Insufficient balance');
      } else {
        this.balance -= money;
      }
    },

    transfer(money, anotherAccount) {
      const account = anotherAccount;
      if (this.balance - money < 0) {
        console.log('Insufficient balance');
      } else {
        this.balance -= money;
        account.balance += money;
      }
    },
  };
  return account;
}

const account1 = createBankAccount('Michael', 10000);
console.log(account1._balance); // undefined 출력
account1.balance = 20000;
account1.balance = -5000; // 'You cannot set negative number for balance' 출력
```







# 상속

하나의 객체가 다른 객체의 프로퍼티와 메소드를 물려받을 때 그것을 상속이라고 말한다. 아래는 클래스를 만드는 일반적인 방식이다. 

```js
class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }
    buy(item) {
      console.log(`${this.email} buys ${this.name}`)
    } 
}
```

여기서 프리미엄 유저를 만들고 싶다면? 프리미엄 레벨은 아래처럼 하고 싶다. 

```js
class PremiumUser {
  constructor(email, birthDate, level){
    this.email = email;
    this.birthDate = birthDate;
    this.level = level;
  }
    buy(item) {
      console.log(`${this.email} buys ${this.name}`)
    }

    streamMusicForFree(){
      console.log(`Free music streaming for ${this.email}`)
    }
  
}
```

프로퍼티랑 함수가 하나씩 추가되었고, 나머지는 동일하다. 공통되는 부분이 많아. 프로퍼티 이름 바꾸거나 그러면, 다 바꾸고 그 난리를 쳐야돼. 

이렇게 자식 클래스 형태로 하는 순간, 겹치는 부분 이외에 다른 코드만 적으면 된다. **코드의 재사용성이 좋아진다.** 

```js
class PremiumUser extends User{
  constructor(email, birthDate, level){ 
    this.level = level;
  }

    streamMusicForFree(){
      console.log(`Free music streaming for ${this.email}`)
    } 
}
```

그래서 해보면?

바로 에러 난다ㅋ

```js
const pUser1 = new PremiumUser('saanghyuk@gmail.com', '1993-03-07', 3)
console.log(pUser1.email)
console.log(pUser1.birthDate)
console.log(pUser1.level)
pUser1.buy(item)

pUser1.streamMusicForFree()
```

> index.js:16 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
>     at new PremiumUser (index.js:16:5)
>     at index.js:25:16

​		Why?

**must call super constructor** 라고 써있네. 근데 신기한게, 따로 메서드는 호출할게 없다. 

```js
class PremiumUser extends User{
  constructor(email, birthDate, level){ 
    super(email, birthDate);
    this.level = level;
  }
    streamMusicForFree(){
      console.log(`Free music streaming for ${this.email}`)
    }
}
```

예시 코드 

```js
class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(name, money){
    super(name, money);
    this.years = 0;
  }

  addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
}

class DonationAccount extends BankAccount {
  constructor(name, money, rate){
    super(name, money);
    this.rate = rate;
  }

  donate(rate) {
    this.balance *= (1 - this.rate);
  }
}

const sa1 = new SavingsAccount('Kate', 50000);
const da1 = new DonationAccount('Mike', 90000, 0.05);

sa1.years +=1;
sa1.addInterest(0.02);
da1.donate();
sa1.years +=1; 
sa1.addInterest(0.05);
da1.donate();
sa1.years +=1;
sa1.addInterest(0.07);
da1.donate();

console.log(Math.floor(sa1.balance));
console.log(Math.floor(da1.balance));
```





# 다형성

다형성이란 많은 형태를 갖고 있는 성질을 의미한다. 

아래서, buy 메소드에 집중해 보자. 

```js
class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }
    buy(item) {
      console.log(`${this.email} buys ${this.name}`)
    } 
}
```

만약 프리미엄 유저의 경우 5%를 할인해 준다고 하자. 그래서,  `buy` 메소드를 똑같이 사용할 수 없다고 해보자. 

어떻게 할까? 간단하다. Premium User안에, 또다시 `buy`메소드를 수정해서 넣으면 된다. 

```js
class PremiumUser extends User{
  constructor(email, birthDate, level){ 
    this.level = level;
  }
  buy(item) {
    console.log(`${this.email} buys ${this.name} with a 5% discount`)
  } 
  streamMusicForFree(){
    console.log(`Free music streaming for ${this.email}`)
    } 
}
```

이러면, `User`과  `PremiumUser` 각 객체에서 `buy` 메소드를 호출했을 때가 서로 다르다. 

이렇게 자식 클래스에서 부모 클래스와 동일한 이름의 메소드를 정의하고, 그 내용을 다르게 채우는 것을 **오버라이딩** 이라고 한다. 덮어쓴다는 뜻. 

그럼 이제 아래처럼, User와 PremiumUser를 엄청 많이 만들어 놓고, 다 리스트 안에 넣어보자 .

```js
const user1 = new User('a', 'b');
const pUser2 = new PremiumUser('a', 'b', 3);
```

```js
users = [users1, pUser1, user2, puser2, user3, pUser3, user4, pUser4];]
users.forEach((user) => {
  user.buy(item);
})
```

반복문 내부, user변수는 `User`클래스를 가리킬 때도 있고,` PremiumUser` 클래스를 가리킬 때도 있다. 

**이렇게 하나의 변수가 다양한 종류의 객체를 가리킬 수 있다는 것을 다형성이라고 한다. 이렇게 다형성을 활용하면, 서로 다른 객체에 있는 동일한 이름을 가진 메소드를 간결하게 호출할 수 있다.** 

오버라이딩 후 다형성 사용하는 경우가 많다. 





- **부모클래스의 메소드가 필요하다면?**

  - 이제 프리미엄유저들, 할인 대신 포인트로 준다. 그래서, 아래처럼 바꾸었다. 

    ```js
    class PremiumUser extends User{
      constructor(email, birthDate, level, point){ 
        super(email, birthDate)
        this.level = level;
      }
      buy(item) {
        console.log(`${this.email} buys ${this.name}`)
        this.point += item.price * 0.05;
      } 
      streamMusicForFree(){
        console.log(`Free music streaming for ${this.email}`)
        } 
    }
    ```

  - 근데 그러면, 이제 프리미엄 유저의 buy 메소드랑 원래 유저의 buy 메소드랑 동일한 부분이 생겼다. 

    `console.log(`${this.email} buys ${this.name}`)`  적어도 이 부분은 동일하다. 

    이럴때 간단한 방법이 있다. 

    ```js
    buy(item, pointRate) {
        super.buy(item)
        this.point += item.price * pointRate;
    } 
    ```

    메소드도 이런식으로 상속이 된다는 것을 알고 있자. 

    특정 기능만 오버라이드가 된다. 

예시 코드

```js
class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(name, money){
    super(name, money);
    this.years = 0;
  }

  addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
  
  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.005;
  }
}

class DonationAccount extends BankAccount {
  constructor(name, money, rate) {
    super(name, money);
    this.rate = rate;
  }

  donate(rate) {
    this.balance *= (1 - this.rate);
  }

  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.002;
  }
}

const ba1 = new BankAccount('Tom', 20000000);
const sa1 = new SavingsAccount('Jerry', 10000000);
const da1 = new DonationAccount('Kate', 30000000);
const sa2 = new SavingsAccount('Alice', 9000000);

const accountForVacation = new BankAccount('Vacation', 0);

const accounts = [ba1, sa1, da1, sa2];

for(account of accounts) {
  account.transfer(800000, accountForVacation);
}

console.log(ba1.balance);
console.log(sa1.balance);
console.log(da1.balance);
console.log(sa2.balance);
console.log(accountForVacation.balance);
```





# Instanceof

현재 객체가 어느 클래스에서 나온 객체인지를 알 수 있다. 

```js
premium_user instanceof PremiumUser
```

그런데, 여기서 

자식클래스로 만든 객체는 부모 클래스로 만든 객체로도 인정된다. 즉, 이렇게 해도 다 인정된다는 것. 

```js
premium_user instanceof User
```

참고로, 아래처럼 분기하면서 쓰는 것보다 상속관계를 만든 후, 메소드 이름을 동일하게 해놓고 다형성을 활용하는 것이 좋다. 

```js
if (user instanceof User) {
	user.method1()
}else{
	user.method2()
}
```





# Static Property와 Static Method 

Class로 객체를 만들었을 때, 그 객체에서 활용할 property 혹은 method가 아니라, class에 직접적으로 접근해서 사용하고 싶은 것들. `this` 같은 것도 없다. 객체 생성하려고 만든 것이 아니라, 클래스에 접근해서 사용하려는 것. 

```js
class Math{
  static PI = 3.14
  static getCircleArea(radius){
    return Math.PI * radius * radius
  }
}

Math.getRectangleArea = function(width, height){
  return width * height
}
```

사용할 때는, 

```js
Math.PI

Math.getCircleArea(5)
```

자바스크립트의 아래와 같은 것들도 사실 다 `static` 메소드 였던 것.  

```js
Date.now()
```



