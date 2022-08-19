# Javscript Web

웹 브라우져와 서버 사이 일어나는 통신에 대한 토픽

[비동기 실행과 Promise 객체](#비동기 실행과 Promise 객체)

### Fetch 사용해보기

`개발자도구 - console`에서 아래 요청 보내보기

```js
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => {console.log(result)})
```

여기서 오는 result를 웹 브라우져가 잘 해석해서 우리한테 멀쩡한 화면을 보여주는 것. 웹 브라우져가 서버로 부터 받는 것은 결국 코드 덩어리이고, 그걸 웹 브라우져가 해석하는 것. 

위 코드를 살펴보자. 

요청 - `request`, 응답 - `response`

```js
fetch('https://www.google.com') // fetch : 가져오다. 
  .then((response) => response.text()) // response가 오면, 파라미터와 함께 함수를 실행시키는 것. 
  .then((result) => {console.log(result)}) // 
```

그런데, 잘 보면, response가 온 후에 `(response) => response.text()` 가 실행된다. 이렇게 어떤 조건이 만족했을 때 실행되는 것을 **콜백**이라고 한다. 이 콜백이 핵심이다. 

**then**이 콜백을 등록해 주는 어떤 객체의 메소드. 이 객체가 `Promise`라는 객체인데 다음 토픽에서 자세히 배울 것. 

그 다음 `then`도 다음 콜백을 등록해 주는 것. 이전 콜백의 리턴값을 다음 콜백이 또 넘겨받는 것. 

### Response 객체 

```jsx
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

이전 영상에서는 fetch 함수로 리퀘스트를 보내고, 리스폰스를 받아서 그 내용을 출력해봤습니다. fetch 함수의 실행 원리를 다시 정리하자면,

1. fetch 함수는 어떤 객체를 리턴하는데(**Promise** 객체, 챕터 3에서 배웁니다)
2. 이 객체의 **then 메소드**로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있습니다.
3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있는데요.

그런데 예리한 분들은 이 코드를 보고 이런 궁금증이 생겼을 수도 있습니다.

위 코드처럼 적지 않고 그냥

```jsx
fetch('https://www.google.com')
  .then((response) => { console.log(response); });
```

'이렇게 코드를 적어도 리스폰스의 내용을 출력할 수 있지 않나요?' 라는 의문을 가지셨을 수도 있는데요.

사실 이 response 파라미터로는 리스폰스의 실제 내용 자체가 넘어오는 게 아닙니다. response 파라미터에는, 리스폰스에 관한 **각종 부가 정보들**과, **실제 내용**을 함께 갖고 있는 하나의 **객체(object)**가 넘어오는데요. 그래서 우리가 원하는 리스폰스의 실제 내용을 보려면,

```jsx
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

이렇게 reponse 객체의 text라는 메소드를 호출해야 합니다. 그리고 이 text 메소드의 리턴값이 바로 리스폰스의 실제 내용입니다.(**사실은 실제 내용을 갖고 있는 Promise 객체이지만**, 더 자세한 내용은 챕터 3에서 알아봅시다)

왜 바로 response를 출력하지 않았는지 아시겠죠? 사실 이 코드를 완벽하게 해석하려면 좀 더 많은 내용을 알아야 합니다. 그런 내용은 곧 챕터 3에서 배울 거니까 일단은 이런 식으로 리스폰스를 받아서 처리할 수 있다는 정도만 기억하고 갑시다.



### 개발자 도구란?

**1. 개발자 도구란?**

웹 브라우저에 내장된 개발자 도구는, 웹 브라우저가 내부적으로 어떤 동작을 하고 있는지 살펴보게 해주는 도구입니다. 사실 일반 사용자들에게는 필요 없는 도구이지만, 웹 페이지를 만드는 개발자 즉, **'웹 프론트엔드 개발자'**에게 이 개발자 도구는 정말 중요한 도구입니다. 왜냐하면 이 개발자 도구를 사용해서 자신이 작성한 코드를 브라우저가 어떻게 해석하고 실행하는지 자세하게 살펴볼 수 있기 때문인데요.

그래서 웹 프론트엔드 개발자가 되고 싶은 분이라면, 이 개발자 도구의 기초적인 사용법을 익혀두는 게 좋습니다. 하지만 이번 토픽은 개발자 도구 사용법에 관한 토픽은 아니기 때문에 사용법을 별도로 배우지는 않습니다. 혹시 크롬의 개발자 도구를 별도로 공부해보고 싶은 분은 [구글에서 제공하는 공식 설명](https://developers.google.com/web/tools/chrome-devtools)을 참조하세요. 해당 링크를 방문했을 때 모든 내용이 영어라서 보기가 힘들다면,

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled.png&name=Untitled.png)

페이지 우측 상단의 버튼을 클릭해서 언어를 바꿔볼 수 있습니다. 참고로 개발자 도구 사용법을 몰라도 이번 토픽을 듣는 데는 아무 지장이 없습니다. 안심하세요.

**2. 개발자 도구를 여는 단축키**

자바스크립트를 실행하는 방법에는 여러 가지가 있습니다. 보통은 HTML 태그에서 자바스크립트 파일을 로드해서 실행하지만, 이번 토픽에서는 보다 빠르고 직관적인 결과 확인을 위해서, 개발자 도구에서 자바스크립트를 실행할 겁니다. 따라서 웹 브라우저에서 매번 마우스로 개발자 도구를 여는 것보다는 그 단축키를 알아두는 것이 효율적인데요. 크롬에서 개발자 도구를 여는 단축키는 다음과 같습니다.

- Mac : **Command 키 + Option 키 + 알파벳 i 키**
- Windows : **Ctrl 키 + Shift 키 + 알파벳 i 키**

각자 자신의 환경에 맞는 단축키를 외우고, 활용해보세요.

**3. 개발자 도구 위치 설정**

개발자 도구를 처음 여는 분들은 개발자 도구 창이 전체 화면의 오른쪽에 떠 있을 수도 있습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%201.png&name=Untitled+1.png)

만약 이전 영상에서 본 것처럼, 개발자 도구의 위치를 화면 하단으로 옮기고 싶다면, 위 이미지에서 보이는 빨간색 박스 안의 점 세 개 아이콘을 클릭하세요. 그럼 다음과 같이

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%202.png&name=Untitled+2.png)

개발자 도구의 위치를 설정하는 탭을 볼 수 있습니다. 여기서 여러분이 원하는 위치를 자유롭게 선택하시면 됩니다.

**4. Console 탭의 출력 원리**

앞으로 여러분은 개발자 도구의 Console 탭에서 자바스크립트 코드를 실행하게 될 겁니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%203.png&name=Untitled+3.png)

그런데 Console 탭의 출력 결과에 관해 여러분이 알아둬야 할 내용이 있습니다. 잠깐 Console 탭 화면에서, 어떤 숫자를 합한 값을 리턴해주는 **add**라는 함수를 정의해보겠습니다. 함수를 정의하고 엔터를 치면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%204.png&name=Untitled+4.png)

이런 식으로 그 뒤에 **undefined**가 출력되는 것을 알 수 있습니다. 이 undefined는 왜 출력된 걸까요?  이번엔 잠깐 이 add 함수를 실행해봅시다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%205.png&name=Untitled+5.png)

이번에는 add 함수가 리턴한 값인 3이 잘 출력되었습니다. 자, 이번엔 Hello라는 단어를 출력해보겠습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%206.png&name=Untitled+6.png)

이번에는 Hello라는 단어가 출력되고, 그 밑에 또 undefined가 출력되었습니다. 이번에도 undefined가 등장했네요. 자, 그럼 이제 add 함수를 여러 번 호출해볼까요?

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4335&directory=Untitled%208.png&name=Untitled+8.png)

이렇게 코드를 여러 줄 연달아 작성하려면 Enter 말고 **Shift + Enter**를 사용하시면 됩니다. 실행 결과를 보니 가장 마지막 add 함수의 리턴값인 201만 출력되네요.

이때까지 본 것처럼 개발자 도구의 Console 탭은 해당 코드에서 최종적으로 리턴하는 값을 출력합니다. **만약 아무런 값도 리턴하지 않는 경우에는 undefined를 리턴한 것으로 간주하는데요**. 그래서 위에서 봤던 것처럼 단순히

(1) add 함수를 선언하거나,  (2) Hello라는 문자열을 출력하는 코드는

어떤 값을 리턴하는 코드는 아니기 때문에 undefined를 리턴한 것으로 간주해서 undefined가 출력된 것입니다. 하지만

```js
add(1, 2) 
```

처럼 실제로 어떤 값을 리턴하는 코드인 경우에는 undefined가 아닌 실제 리턴값 3이 출력됩니다. 그리고 위에서 add 함수를 여러 번 실행한 경우처럼, 여러 개의 리턴 값이 존재하는 경우에는, 가장 마지막 코드의 리턴값을 출력합니다.

앞으로 Console 탭의 자바스크립트 코드를 실행하다보면,

(1) 개발자 도구가 출력하는 undefined 때문에 당황하거나,  (2) 나의 코드에서 출력한 undefined와, 개발자 도구가 출력한 undefined가 섞여서 혼란스러울 수도 있는데요.

그럴 때마다 방금 배운 내용에 유의하면서, Console 탭에서의 출력 결과를 해석하시면 됩니다.



### 웹이란?

웹페이지, 웹서비스, 웹서핑, 웹서버

**World Wide Web**  

**웹**이라는 것은, 우리가 웹 브라우져를 통해 돌아다니는 가상의 연결망 세계를 의미한다. 무수히 많은 웹페이지들이 서로 연결되어 있다. Hyper Text란 다른 웹페이지에 대한 참조를 가지고 있는 텍스트를 의미한다. 

### URL이란?

*Uniform Resource Locator*

웹에 존재하는 특정 데이터를 나타내는 문자열. 

예시)

`https://www.ebay.com/men/shirts?color=blue&size=m`

`www.ebay.com`  **HOST**: 전세계에 수 많은 서버들 중, 이 도메인에 특정되는 하나의 서버를 특정할 수 있다. 

`/men/shirts` **PATH**: 서버에 있는 데이터 중 원하는 데이터를 측정. 여기서는 남성용 상품 중 셔츠. 

`?color=blue&size=m` **QUERY** : 데이터에 관한 세부적인 요구사항. **&**으로 각각의 속성을 나타낸다. 



URL은 크게

- 호스트(host),
- 패스(path),
- 쿼리(query)

로 이루어져있다는 걸 배웠는데요.(다른 구성 요소들도 있지만 일단은 일반적으로 보게 되는 것들만 배워봅시다.) 이번 노트에서는 URL에 관한 또 다른 궁금증들을 해결해봅시다.

1. **전 URL을 직접 입력한 적이 거의 없는데요?**

이전 영상에서 URL의 의미와 구조에 대해 배울 때, 여러분은 이런 의문을 가졌을 수도 있습니다.

'내가 URL을 직접 입력한 적은 거의 없는데?'

하는 의문 말이죠.

굉장히 의미 있는 생각입니다. 여러분이 웹 서핑을 할 때를 생각해봅시다. 여러분은 보통 웹 브라우저의 주소창에 [www.naver.com](https://www.naver.com/)나 [www.google.com](https://www.google.com/) 처럼, URL에서의 호스트(host) 부분까지만 입력하고, 어떤 서비스의 메인 페이지로 진입할 겁니다. 그리고 그 뒤로는 마우스로 화면에 있는 이미지나 버튼 등을 클릭할 뿐, 더이상 URL을 직접 입력할 일이 많지는 않은데요. 그 이유는 바로, 이미 **여러분이 화면에서 클릭하는 버튼 등에 어느 URL로 새로운 리퀘스트를 보낼지, HTML 코드 또는 Javascript 코드로 다 작성이 되어있기 때문**입니다. 예를 들어, 여러분이 화면에서 클릭하는 버튼은 이런 식의 HTML 코드로 작성되어 있습니다.

```html
<a href="https://www.nazer.com/blogs/codeitOfficial/120"...>...</a>
<a href="/codeitCommunity/threads/731" ...>...</a> 
```

(지금 두 번째 URL은 상대 URL입니다. 같은 서버 안에 존재하는 데이터의 경우 이렇게 path 이후의 부분만 표시해서 나타낼 수도 있습니다.)

우리가 웹 페이지에서 버튼을 클릭하면 지금 보이는 것 같은 a 태그의 href 속성에 적힌 URL 주소로 웹 브라우저가 알아서 리퀘스트를 보내서 리스폰스를 받아 새로운 웹 페이지를 로드합니다. 이런 식으로 웹 페이지에 미리 모든 것이 세팅되어 있기 때문에 여러분은 해당 서비스의 서버에서 요구하는 path의 형식, query의 형식을 알 필요가 없습니다. 다만 의식하지 않는 상태에서 우리는 계속 URL을 사용하고 있는 겁니다.

하지만 일반 사용자가 아닌 **개발자라면, 이런 path에 관한 설계, query에 관한 설계를 직접 해야** 하기 때문에 URL의 구조에 대해서 정확하게 알고 있어야 합니다.

**2. 리퀘스트를 보내면 일어나는 일**

우리가 웹 브라우저의 주소창에 URL을 입력하고 엔터를 치면, 실제로 어떤 일이 이루어지는 걸까요? 잠깐 아래 그림을 봅시다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4338&directory=Untitled.png&name=Untitled.png)

위 이미지에서 왼쪽 아이콘은 **웹 브라우저**를 나타내고, 오른쪽은 codeitshopping이라고 하는 서비스의 **서버**를 나타낸다고 가정해봅시다. 만약 우리가 위와 같은 URL을 입력하고 엔터를 치면 다음과 같은 일들이 순차적으로 발생합니다.

(1) 웹 브라우저는 URL에서 호스트(host, 위 그림에서 www.codeitshopping.com에 해당하는 부분) 부분을 보고, 전 세계의 수많은 서버들 중에서 정확히 어느 서버와 통신을 해야 하는지를 찾습니다. 이때 호스트 부분에 적힌 www.codeitshopping.com 같은 것을 **도메인 네임(Domain Name)**이라고 하는데요. 특정 서버를, 외우기 어려운 IP 주소가 아니라 외우기 쉬운 문자열로 나타낸 것이 바로 도메인 네임입니다. 그럼 어떻게 웹 브라우저는 도메인 네임만으로 특정 서버를 식별할 수 있는 걸까요? 이를 위해서는 **Domain Name Resolution**이라고 하는 작업을 수행해야 합니다. 이 작업을 수행하면 해당 도메인 네임이 나타내는 특정 서버를 식별할 수 있는데요. 혹시 Domain Name Resolution이 뭔지 궁금한 분들은 코드잇의 또 다른 토픽에 있는 ['도메인 네임과 IP 주소' 노트](https://www.codeit.kr/learn/courses/nodejs-backend-development/3720)를 참조하세요.

(2) (1)에서 어떤 서버와 통신해야 하는지를 식별하고 나면, 웹 브라우저는 해당 서버로 리퀘스트를 보냅니다. 이때 **URL에서 path 이후의 부분들(보라색 표시한 부분, path와 query)을 리퀘스트에 담아서 보냅니다.**

(3) 리퀘스트를 받은 서버는 리퀘스트에 담긴 path 이후의 부분들을 보고, 그것이 의미하는 데이터를 찾고, 찾은 결과를 리스폰스에 담아서 보내줍니다.

(4) 그럼 웹 브라우저는 받은 리스폰스의 내용을 갖고 사용자에게 보여줍니다. 이때 리스폰스의 내용이 HTML 코드, Javascript 코드 등에 해당하면 그에 맞는 예쁜 화면을 사용자에게 그려서 보여주는 것이구요. 리스폰스의 내용에는 다른 종류도 많은데요. 이건 챕터 2에서 배워봅시다.

이때까지 우리가 브라우저에서 URL을 입력하고 엔터를 치면 발생하는 일에 대해 배워봤는데요. URL을 기반으로 해서 실제 리퀘스트가 어떻게 이루어지는지 어느 정도 감이 오시죠?

 

## HTTP 

**https://**www.*

이것을 스킴(Scheme)이라고 한다. 프로토콜의 이름이 들어간다. 

프로토콜이란 통신을 하는 두 주체가 지켜야 하는 통신규약을 의미한다. 웹 브라우져와 서버가 서로 통신을 할 때 지켜야 하는 약속. 즉, https뒤에 있는 것들이 의미하는 데이터를 가져오기 위해 통신을 해야 되는데, **https**라는 프로토콜을 지키겠다는 뜻. 이제, 웹브라우져도 이 http 프로토콜에 맞게 request를 보내야 하고, 서버도 이 http프로토콜에 맞게 response를 보내야 한다. 

**HTTP: Hyper Text Transfer Protocol** 

Hyper Text : 다른 텍스트에 대한 참조를 갖고 있는 텍스트. 원래 HTTP는 하이퍼텍스트를 웹페이지와 서버 사이에서 주고받기 위해 탄생한 것이라 이런 이름을 가지고 있다. 요즘은, 뭐 당연히 이미지 영상 이런것도 다 주고 받는다. 

HTTPS = HTTP + Secure 안전한 HTTP





우리가 어떤 웹 페이지를 보기 위해 URL을 입력하고 엔터를 치면 **보통 한 번 이상의 리퀘스트와 리스폰스가 오고 갑니다.** 딱 한 번의 리퀘스트와 리스폰스만 오고 가면 될 것 같은데, 이게 무슨 말일까요? 확인해보겠습니다.

저는 지금 크롬의 개발자 도구를 열어두었습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4340&directory=Untitled.png&name=Untitled.png)

그리고 개발자 도구에서 **Network 탭**이라고 하는 걸 클릭했는데요. 이 Network 탭에서는 브라우저가 구체적으로 어떻게 생긴 리퀘스트를 보내고, 어떻게 생긴 리스폰스를 받는지를 보여줍니다. 이 상태에서 웹 브라우를 새로고침해보겠습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4340&directory=Untitled%201.png&name=Untitled+1.png)

그럼 구글 메인 페이지로 재접속하게 되고, 이제 Network 탭에 여러 개의 줄(row)들이 뜨는데요. 이때 각각의 한 줄이, **하나의 '리퀘스트-리스폰스' 쌍**이라고 보시면 됩니다. **전 딱 한 번 엔터를 쳤을 뿐인데 정말 많은 수의 리퀘스트와 리스폰스가 오고 갔죠?** 화면 하단을 보면 총 19번의 리퀘스트가 전송된 것을 알 수 있는데요. 왜 이런 일이 발생하는 걸까요?

사실 웹 브라우저가 처음으로 리퀘스트를 보내고, 서버로부터 받는 첫 리스폰스의 내용만으로 온전한 화면을 그릴 수 있는 경우는 많지 않습니다. 보통은 받은 첫 리스폰스의 내용에 적힌 '추가적으로 필요한 데이터'들을 재차 요청해야 하는 것이 더 일반적입니다. 예를 들어, 이런 식의 HTML 코드가 첫 리스폰스의 내용으로 왔다고 해봅시다.

```html
<html>
<head></head>
<body>
    ...
    <div>
        <img src="https://www.server_A.com/a/b/exmaple.png".../>
    </div>
  ...
<script src="http://www.server_B.com/c/d/main.js"></script>
</body>
</html>
```

**웹 브라우저는 당장 이 코드만으로는 완벽한 화면을 그릴 수 없습니다.** 왜냐하면 새롭게 리퀘스트를 보내서 가져와야할 것들이 존재하기 때문이죠.

예를 들어, 지금 여기서 이 img 태그의 src 속성에 있는 이미지를 그리려면

```html
<img src="https://www.server_A.com/a/b/exmaple.png".../> 
```

img 태그의 src 속성에 적힌 URL로 다시 리퀘스트를 보내서 example.png에 해당하는 **이미지**를 받아와야 합니다.

그리고

```html
<script src="http://www.server_B.com/c/d/main.js"></script>
```

이 script 태그의 src 속성에 적힌 URL로도 리퀘스트를 보내서 main.js라는 **자바스크립트 파일**을 받아와야 하구요.

벌써 이렇게 2번의 추가적인 리퀘스트가 필요한 겁니다.

이런 식으로 보통 브라우저가 하나의 페이지를 그릴 때는 첫 리스폰스의 내용 안에서 또다시 요구되는, 여러 가지 다른 것들을 구하기 위해 다시 여러 개의 리퀘스트를 보내는 것이 일반적입니다. 게다가 그렇게 또 받은 리스폰스의 내용에 따라 또 새로운 리퀘스트를 보내야 할 수도 있습니다. 바로 이런 원리 때문에 여러분이 어떤 웹 페이지를 딱 한번 접속했다고 해도 그 사이에는 수많은 리퀘스트와 리스폰스가 발생하는 겁니다.

예를 들어, 지금 Network 탭에 보이는 하나의 줄(하나의 '리퀘스트-리스폰스 쌍')을 클릭해보면

![https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4340&directory=Untitled%202.png&name=Untitled+2.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4340&directory=Untitled%202.png&name=Untitled+2.png)

이렇게 Google 로고 이미지를 받기 위해 추가적인 리퀘스트를 보내고, 이 이미지를 받아온 것을 확인할 수 있습니다.

이렇게 우리가 **웹 브라우저로 특정 페이지에 접속할 때, 보통 한 번 이상의 리퀘스트-리스폰스가 오고간다는 사실**, 잘 기억하세요.







# JSON이란?

HTML이 들어있는 `response`말고 어떤 정보가 들어있는 response도 있다. 

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

여기로 보내보자. 그러면, JSON이라는 형태가 온다. 앞에서 했던 것은, 브라우져가 화면을 그리기 위한 재료들이 왔었고, 이번에는 순수하게 정보를 담고 있는 것들이 왔다. 

**JSON**: **J**ava**S**cript **O**bject **N**otation. 정보 교환하기 위한 포맷을 자바스크립트의 문법을 빌려서 만든 것. 

위 결과 보면 자바스크립트에서 객체를 나타내는 방식과 동일하고, 그 객체들을 배열에 담아 준다. 

구체적으로 알아보기 : [링크](https://www.json.org/json-en.html)

사실 자바스크립트와, JSON이 완벽히 동일한 것은 아니다. 차이점을 보자. 

 이 두 가지가 비슷하기는 하지만 완벽하게 **동일한 것은 아닙니다.** 아래에서 둘 사이의 차이점에 대해 알아봅시다.

**1. JSON에는 프로퍼티의 이름과 값을 표현하는 방식에 제한이 있습니다.**

### (1) JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표(")로 감싸줘야 합니다.

잠깐 자바스크립트 코드로 member라는 객체를 생성해볼까요?

```jsx
const member = {
  name: 'Michael Kim',
  height: 180,
  weight: 70,
  hobbies: ['Basketball', 'Listening to music']
};
```

자바스크립트에는 객체를 생성할 수 있는 여러 가지 방법이 있는데요. 그중 한 가지는 이런 식으로 중괄호('{ }') 안에 객체의 프로퍼티의 이름(키)과 값(밸류)쌍을 순서대로 나열해서 생성하는 방법입니다. 지금 보이는 표기를 **Object Literal**이라고 하는데요. Object Literal을 쓸 때는 문법에 약간의 유연함이 있습니다. 저는 지금 member 객체의 각 프로퍼티의 이름인 name, height, weight, hobbies에 큰따옴표를 붙이지 않았는데요. Object Literal에서는 이렇게 프로퍼티의 이름에 큰따옴표를 붙이지 않아도 되고,

```jsx
const member = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};
```

이렇게 큰따옴표를 붙여도 됩니다.

**하지만 JSON의 경우에는** 프로퍼티의 이름에 반드시 큰따옴표를 붙여줘야만 합니다.

```jsx
{
   "name":"Michael Kim",
   "height":180,
   "weight":70,
   "hobbies":["Basketball", "Listening to music"]
}
```

지금 각 프로퍼티의 이름이 모두 큰따옴표로 둘러싸여 있죠? 이렇게 JSON에서는 각 프로퍼티의 이름을 반드시 큰따옴표로 감싸주어야 합니다. 큰따옴표로 감싸주지 않으면 JSON을 처리하려고 할 때 에러가 납니다.

### (2) JSON에서는 값이 문자열인 경우 큰따옴표(")를 사용해야 합니다.

```jsx
const member = {
  "name": 'Michael Kim',
  "height": 180,
  "weight": 70,
  "hobbies": ['Basketball', 'Listening to music']
};
```

잠깐 member 객체를 다시 볼게요. 지금 name 프로퍼티의 값으로 'Michael Kim'이라는 문자열이 들어가 있죠? 자바스크립트에서는 문자열을 나타낼 때, 이렇게 작은따옴표(')를 써도 되고, 큰따옴표(")를 써서 "Michael Kim"이라고 써도 됩니다.

하지만 JSON에서는 문자열 값을

```jsx
{
   "name":"Michael Kim",
   "height":180,
   "weight":70,
   "hobbies":["Basketball", "Listening to music"]
}
```

지금 보이는 "Michael Kim", "Basketball", "Listening to music"처럼 항상 **큰따옴표**로 감싸서 적어줘야만 합니다.

**2. JSON에서는 표현할 수 없는 값들이 있습니다.**

자바스크립트에서는 프로퍼티의 값으로 사용할 수 있는 undefined, NaN, Infinity 등을 JSON에서는 사용할 수 없습니다. 참고로, JSON은 비록 자바스크립트로부터 비롯된 데이터 포맷이지만, 그 탄생 목적은 언어나 환경에 종속되지 않고, 언제 어디서든 사용할 수 있는 데이터 포맷이 되는 것이었습니다. 따라서 자바스크립트의 문법에서만 유효한 개념을 JSON에서는 나타낼 수 없다는 것은 어찌 보면 당연한 결과입니다.

**3. JSON에는 주석을 추가할 수 없습니다.**

JSON은 코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없습니다. 
 자, 이때까지 자바스크립트의 문법과 JSON 문법 간의 미세한 차이를 배워봤는데요. 이 둘은 일반적으로 호환되는 것이 맞지만, 위에서 살펴본 세부적인 차이가 있다는 점을 알아두는 게 좋습니다. 이런 차이가 있다는 것을 모르면, 나중에 실무에서 JSON 데이터를 처리하다가 에러가 생겨도, 그 이유를 이해할 수 없기 때문입니다.

자바스크립트 문법과 JSON 문법 간의 차이가 더 궁금한 분들은 [이 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)를 참조하세요.



### JSON 데이터를 객체로 변환하기

그런데, typeof를 찍어보니깐, string으로 나온다. 

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(typeof result); });
```

결과 : **string**

이 json자체가 string타입이다? 그러면, 뭐 루프돌고 이런것도 아니는 거네. 이 통으로 문자열이라는 거잖아. 

string type의 json객체는 그대로, javascript 객체로 **변환**이 가능하다.  

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { 
    const users = JSON.parse(result)
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name)
    })
      }
    ); 

// 이렇게 하니깐, 실제로 user.name이 출력된다. 
```



### 메소드의 의미

지금까지는 데이터를 받아오기 위한 Request를 보냈다. 그러나, 다른 성격의 리퀘스트도 존재함. 

뭔가 데이터를 추가해 달라거나, 그런 요청도 있을 수 있음. 

리퀘스트는 서버에 어떤 처리를 요구하느냐에 따라 크게 4가지 종류가 있음. 리퀘스트에 존재하는 Method라는 것을 보고 무슨 리퀘스트인지 알 수 있다. 

![request](./images/request.png)

![request](./images/request2.png)

결국 각각의 메소드에 대해서 서버는 보통 그에 맞는 데이터 관련 조작을 하겠죠? 만약 서버가 데이터베이스를 사용한다면 **CRUD** 작업을 하게 될 겁니다.  CRUD란 **Create-Read-Update-Delete**의 약자로 데이터베이스 관점에서 데이터에 관한 처리를 나타낸 합성어인데요.  각 메소드는 각 데이터 관련 작업에 이렇게 대응됩니다.

| 메소드 | 데이터 처리 |
| ------ | ----------- |
| GET    | READ        |
| POST   | CREATE      |
| PUT    | UPDATE      |
| DELETE | DELETE      |



#### Request와 Head와 Body

하나의 리퀘스트는 Head와 Body부분으로 이루어져 있다. PUT이나, POST 리퀘스트는 보통 Body에 데이터를 담아서 보내주게 되겠지. 그러나, GET, DELETE 리퀘스트는 보통 Body가 필요하지 않다. 

![request](./images/request3.png)

직접 리퀘스트 보내보고 확인해보자. 

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 
```

![request](./images/request4.png)

아래, `Request Headers`에 가도 있다. 이 Request에는 Body부분이 없다. 

웹에서 사용되는 HTTP의 프로토콜에는 여러 버전이 있습니다. 현재 시중의 서비스들에서는 1.1 버전과 2.0 버전이 주로 사용되고 있는데요.  각 버전에서 리퀘스트의 헤드에 관한 구체적인 표현이 조금 다릅니다.

**http/1.1**에서는 **method와 path**의 경우

```
GET /men/shirts HTTP/1.1 
헤더 1: 값
헤더 2: 값
헤더 3: 값 
...
```

이런 식으로 가장 첫 번째 줄에 별도의 형식을 갖고 표시됩니다. 이를 **start-line**이라고 하는데요.  **http/2**에서는 start-line 대신에, **method와 path를 일종의 가상 헤더(pseudo header)로 표현**합니다. 가상 헤더 앞에는 콜론(:)이 붙어있는데요.

```
...
:method: GET
:path: /men/shirts
...
헤더 1: 값
헤더 2: 값
헤더 3: 값
...
```

조금 깊은 내용이지만 혹시 이전에 http/1.1 버전 때, 리퀘스트의 헤드와 바디를 배운 분들이 혼동을 할 우려가 있어 참고차 알려드립니다.  현재 영상에서 접속한 구글 홈페이지의 서버는 촬영 당시 **http/2** 프로토콜을 지원하는 서버였기 때문에 이렇게 Start-line 대신 가상 헤더들이 보인 것입니다.  일단 이 가상 헤더들과 일반적인 헤더들을 한번에 묶어서 헤더라고 설명한 것입니다.



직접 리퀘스트 보내보자. 

**GET**

```js
fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 

```

**특정 직원의 정보만 조회**

```js
fetch('https://learn.codeit.kr/api/members/3')
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 
```

**POST 리퀘스트**

옵션 객체를 추가한다. **FETCH**함수는 이 옵션 객체를 추가 안하면, 기본적으로 GET 리퀘스트를 보내도록 되어 있다. 

`stringify -> js to json`는 앞에서 썻던 `parse -> json to js`와 반대로 변환

```js
fetch('https://learn.codeit.kr/api/members', {
  method : 'POST', 
  body : JSON.stringify(newMember)
})
  .then((response) => response.text())
  .then((result) => { console.log(result)}
); 
```

`response`가 온다. 실제 추가된 객체가 옴. 이거는 개발자의 설계에 따라 어떤 response 줄지 달린 것. 

```js
{
  "id": 7,
  "name": "Noel",
  "email": "hi@example.com",
  "department": "engineering"
}
```

이전 영상에서는 처음으로 GET 리퀘스트가 아닌, POST 리퀘스트를 보내봤습니다. 우리는 리퀘스트의 헤드와 바디에 대해서 배울 때 GET 리퀘스트를 가지고 배웠는데요. POST 리퀘스트의 경우에는 리퀘스트의 헤드와 바디가 어떻게 생겼는지 살펴봅시다. 개발자 도구의 Network 탭을 사용해서 확인해볼게요.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4351&directory=Untitled.png&name=Untitled.png)

이렇게 이전 영상에서처럼 새 직원 정보를 POST 리퀘스트로 추가하고 Network 탭을 클릭할게요.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4351&directory=Untitled%201.png&name=Untitled+1.png)

그리고나면 뜨게 되는 화면에서 제가 보낸 POST 리퀘스트와 받은 리스폰스 쌍을 의미하는 한 줄(members)을 클릭할게요. 그다음 오른쪽 화면을 보면 지금 Request Method 부분에 POST라고 써있는게 보입니다.

자, 그리고 이번에는 **GET 리퀘스트 때는 보지 못했던 바디**도 확인해보겠습니다. 스크롤을 좀 더 내려보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4351&directory=Untitled%202.png&name=Untitled+2.png)

이렇게 Request Payload라고 쓰인 부분이 바로 리퀘스트의 바디 부분입니다. **새 직원 정보를 나타내는 JSON 데이터**가 잘 들어가 있죠? GET 리퀘스트 때는 없었던 바디의 내용을 POST 리퀘스트에서는 볼 수 있네요.

그리고 Response 탭을 눌러보면,

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4351&directory=Untitled%203.png&name=Untitled+3.png)

이렇게 **실제로 추가된 직원 정보가 JSON 데이터로** 잘 온 것을 알 수 있습니다.

앞으로 여러분도 자바스크립트로 웹 통신을 할 때, 이렇게 개발자 도구로 리퀘스트와 리스폰스의 모습을 종종 살펴보세요. 그럼 현재 무슨 일이 이루어지고 있는지 훨씬 실감나게 느낄 수 있을 겁니다.





#### PUT과 DELETE Request

**PUT**

```js
const member = {
  name : 'Noel', 
  email : 'my@example.com', 
  department : 'marketing'
}; 

fetch('https://learn.codeit.kr/api/members/7', {
  method : 'PUT', 
  body : JSON.stringify(member)
})
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 
```

**DELETE** - Body가 딱히 필요가 없겠지. 

```js
fetch('https://learn.codeit.kr/api/members/6', {
  method : 'DELETE'
})
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 
```







우리는 이제 웹 브라우저가 리퀘스트를 보낼 때

(1) 어느 **URL**로 리퀘스트를 보내는지 (2) 무슨 **메소드**(GET, POST, PUT, DELETE 등)가 그 헤드에 설정되어있는지가

중요하다는 것을 배웠습니다.

그런데 우리가 어떤 리퀘스트를 보냈을 때, 무슨 리스폰스를 받는지는 어떻게 설계되는 걸까요? 개발자들이 실제로 개발을 할 때 이 부분을 어떻게 만들고 있는지 이번 노트에서 배워보겠습니다.

# 1. Web API

우리가 어떤 리퀘스트를 보냈을 때, 무슨 리스폰스를 받는지는 **모두 그 서비스를 만드는 개발자들이 정하는 부분**입니다. 잠깐 실제 개발 현장에서 일어나는 이야기를 해볼게요. 개발자에는 크게 두 가지 종류가 있습니다. 첫 번째는 사용자가 직접 서비스 화면을 보는 웹 페이지나 앱 등을 만드는 프론트엔드(Front-end) 개발자, 두 번째는 웹 브라우저나 앱이 보내는 리퀘스트를 받아서 적절한 처리를 한 후 리스폰스를 주는 서버의 프로그램을 만드는 백엔드(Back-end) 개발자, 이 두 가지인데요.

하나의 서비스를 만들 때는 프론트엔드 개발자들과 백엔드 개발자들이 모여 '*프론트엔드에서 이 URL로 이렇게 생긴 리퀘스트를 보내면, 백엔드에서 이런 처리를 하고 이런 리스폰스를 보내주는 것으로 정합시다*'와 같은 논의를 하고, 이런 내용들을 정리한 후에 개발을 시작합니다.

이것을 'Web API 설계'라고 하는데요. API란 Application Programming Interface의 약자로, 원래는 '**개발할 때 사용할 수 있도록 특정 라이브러리나 플랫폼 등이 제공하는 데이터나 함수 등**'을 의미합니다. 웹 개발에서는 어느 URL로 어떤 리퀘스트를 보냈을 때, 무슨 처리가 수행되고 어떤 리스폰스가 오는지에 관해 미리 정해진 규격을 **Web API**라고도 하는데요.

Web API를 설계한다는 것은 서비스에서 사용될 모든 URL들을 나열하고, 각각의 URL에 관한 예상 리퀘스트와 리스폰스의 내용을 정리한다는 뜻입니다. 예를 들어, 이전 영상에서 사용한 학습용 URL(https://learn.codeit.kr/api/members)에서 직원 정보 추가 기능을 설계한다면 다음과 같이 할 수 있는 겁니다.

```jsx
...

3. 직원 정보 추가

https://learn.codeit.kr/api/members 

(1) Request
- Head
Method : POST
...

- Body
{
  "name": "Jerry",
  "email: "jerry@codeitshopping.kr",
  "department": "engineering",
}
...

(2) Response
Success인 경우 :
- Head
...
- Body
{
  "id": "[부여된 고유 식별자 값]",
  "name": "Jerry",
  "email": "jerry@codeshopping.kr"
  "department": "engineering",
}
Fail인 경우 :
...
```

이렇게 해당 서비스에서 제공되는 각 URL에, 어떤 리퀘스트를 보내면, 서버는 어떤 리스폰스를 보내야 하는지를 일일이 설계하는 것이 Web API 설계인 겁니다. 물론 실무에서는 지금 보이는 예시보다 훨씬 체계적이고 단정한 방식으로, 상용 툴 등을 사용해서 정리하지만 일단은 이해 차원에서 보여드렸습니다. 이런 식으로 Web API가 설계되고 나면, 그때 프론트엔드/백엔드 개발자들이 해당 설계에 맞게 각자 코드를 작성하기 시작하는 겁니다. 물론 설계와 개발이 동시에 진행되기도 하고, 설계 내용이 중간에 수정되기도 합니다.

오늘날 많은 회사 내의 개발팀은 이런 식으로 Web API를 설계하고 웹 서비스를 만듭니다. 그런데 문제가 하나 있습니다. 그건 바로 **Web API는 어떻게 설계해도 동작하는 데는 아무런 지장이 없다는 문제입니다.**

이전 영상들에서 저는 직원 정보를 추가하기 위해

(1) 'https://learn.codeit.kr/api/members' URL로    (2) 리퀘스트의 헤드에 POST 메소드를 설정하고, (3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

는 내용의 설계를 했습니다.

그런데 어떤 회사는 같은 기능을 이런 식으로 설계할 수도 있습니다.

(1)  'https://learn.codeit.kr/api/members' URL로 (2) 리퀘스트의 헤더에 GET 메소드를 설정하고, (3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

어느 방식으로 설계해도 서비스가 동작하는 데는 아무런 문제가 없습니다. 하지만 기능적으로 아무런 문제가 없다고 해도 Web API를 아무렇게나 설계해도 되는 것은 아닙니다. 사실 Web API가 잘 설계되었는지에 관한 <u>기준으로는 보통 **REST API**라는 기준이 사용되고 있는데요.</u> 많은 개발자들이 Web API를 개발할 때 이 REST API를 준수하기 위해 노력하고 있습니다. 이게 뭔지 한번 살펴봅시다.

# 2. REST API 이야기

**REST API**는 오늘날 많은 웹 개발자들이 Web API 설계를 할 때, 준수하기 위해 노력하는 일종의 가이드라인입니다. REST API를 이해하기 위해서는 일단 **REST architecture**가 무엇인지부터 알아야 하는데요. 일단 REST architecture에 대해 설명하겠습니다.

REST architecture란 미국의 컴퓨터 과학자인 Roy Fielding이 본인의 박사 논문 'Architectural Styles and the Design of Network-based Software Architectures'에서 제시한 개념인데요. 그는 웹이 갖추어야 할 이상적인 아키텍처(구조)로 REST architecture라는 개념을 제시했습니다. 여기서 REST는 **Representational State Transfer**(표현적인 상태 이전)의 줄임말로, 해석하면 '표현적인, 상태 이전'이라는 뜻입니다. 이게 무슨 말일까요? 이 용어는 Roy Fielding이 고안한 용어인데요. 지금 여러분이 웹 서핑을 할 때를 생각해보세요. 만약 웹을 하나의 거대한 컴퓨터 프로그램이라고 생각한다면, 각각의 웹 페이지는 그 프로그램의 내부 상태를 나타낸다고 할 수 있습니다. 그렇다면 우리가 웹 페이지들을 계속 옮겨 다니면서 보게 되는 내용은, 웹이라는 프로그램의 매번 새로운 상태를 나타내는 표현이라고 할 수 있는데요. 그래서 이것을 '표현적인, 상태 이전'이라고 하는 겁니다. 조금 추상적인 느낌이지만 이해는 되시죠?

그럼 REST architecture가 되기 위한 조건에는 어떤 것들이 있을까요? 다음과 같은 6가지 기준을 충족하면 REST architecture로 인정됩니다.

1. Client-Server
2. Stateless
3. Cache
4. Uniform Interface
5. Layered System
6. Code on Demand

각 기준에 대해 간략하게 설명해보자면 REST architecture는,

1. (**Client-Server**) Client-Server 구조를 통해 양측의 관심사를 분리해야 합니다. 현재 토픽에서는 웹 브라우저가 실행되고 있는 컴퓨터가 Client, 서비스를 제공하는 컴퓨터가 Server에 해당하는데요. 이렇게 분리를 해놓으면 Client 측은 사용자에게 어떻게 하면 더 좋은 화면을 보여줄지, 다양한 기기에 어떻게 적절하게 대처해야할지 등의 문제에 집중할 수 있고, Server 측은 서비스에 적합한 구조, 확장 가능한 구조를 어떻게 구축할 것인지 등의 문제에 집중할 수 있습니다. 이렇게 각자가 서로를 신경쓰지 않고 독립적으로 운영될 수 있는 겁니다.
2. (**Stateless**) Client가 보낸 각 리퀘스트에 관해서 Server는 그 어떤 맥락(context)도 저장하지 않습니다. 즉, 매 리퀘스트는 각각 독립적인 것으로 취급된다는 뜻입니다. 이 때문에 리퀘스트에는 항상 필요한 모든 정보가 담겨야합니다.
3. (**Cache**) Cache를 활용해서 네트워크 비용을 절감해야 합니다. Server는 리스폰스에, Client가 리스폰스를 재활용해도 되는지 여부(*Cacheable*)를 담아서 보내야합니다.
4. (**Uniform Interface**) Client가 Server와 통신하는 인터페이스는 다음과 같은 하위 조건 4가지를 준수해야 합니다. 이 조건이 **REST API와 연관이 깊은 조건**입니다. 어떤 4가지 하위 조건들이 있는지 살펴봅시다.

(4-1) identification of resources : **리소스(resource)는 웹상에 존재하는 데이터를 나타내는 용어**인데요. 저도 이번 노트에서는 리소스라는 용어를 사용하겠습니다. 이것은 리소스(resource)를 URI(Uniform Resource Identifier)로 식별할 수 있어야 한다는 조건입니다. URI는 URL의 상위 개념으로 일단 지금은 URL이라고 생각하셔도 큰 무리는 없습니다.

(4-2) manipulation of resources through representations : Client와 Server는 둘 다 리소스를 직접적으로 다루는 게 아니라 리소스의 '표현(representations)'을 다뤄야 합니다. 예를 들어, Server에 '오늘 날씨'(/today/weather)라는 리소스를 요청했을 때, 어떤 Client는 HTML 파일을 받을 수도 있고, 어떤 Client는 이미지 파일인 PNG 파일을 받도록 구현할 수도 있는데요. 이때 HTML 파일과 PNG 파일 같은 것들이 바로 리소스의 '표현'입니다. 즉, 동일한 리소스라도 여러 개의 표현이 있을 수 있다는 뜻입니다. **사실, 리소스는 웹에 존재하는 특정 데이터를 나타내는 추상적인 개념입니다. 실제로 우리가 다루게 되는 것은 리소스의 표현들뿐인데요.** 이렇게 **'리소스'**와 **'리소스의 표현'**이라는 개념 2개를 서로 엄격하게 구분하는 것이 REST architecture의 특징입니다.

(4-3) self-descriptive messages : self-descriptive는 '자기설명적인'이라는 뜻인데요. 위에서 살펴본 2. Stateless 조건 때문에 Client는 매 리퀘스트마다 필요한 모든 정보를 담아서 전송해야 합니다. 그리고 이때 Client의 리퀘스트와 Server의 리스폰스 모두 그 자체에 있는 정보만으로 모든 것을 해석할 수 있어야 한다는 뜻입니다.

(4-4) hypermedia as the engine of application state : REST architecture는 웹이 갖추어야 할 이상적인 아키텍처라고 했죠? 이때 '웹'을 좀더 어려운 말로 풀어써 보자면 '분산 하이퍼미디어 시스템'(Distributed Hypermedia System)이라고도 할 수 있는데요. 여기서 하이퍼미디어(Hypermedia)는 하이퍼텍스트(Hypertext)처럼 서로 연결된 '문서'에 국한된 것이 아니라 이미지, 소리, 영상 등까지도 모두 포괄하는 더 넓은 개념의 단어입니다. 즉, 웹은 수많은 컴퓨터에 하이퍼미디어들이 분산되어 있는 형태이기 때문에, '분산 하이퍼미디어 시스템'에 해당합니다. 이 조건은 웹을 하나의 프로그램으로 간주했을 때, Server의 리스폰스에는 현재 상태에서 다른 상태로 이전할 수 있는 링크를 포함하고 있어야 한다는 조건입니다. 즉, 리스폰스에는 리소스의 표현, 각종 메타 정보들뿐만 아니라 계속 새로운 상태로 넘어갈 수 있도록 해주는 링크들도 포함되어 있어야 한다는 거죠.

자, 여기까지가 Uniform Interface의 4가지 하위 조건입니다. 사실, 오늘날 우리가 Web API를 설계할 때 위의 하위 조건들을 모두 제대로 이해하고 준수하는 것은 쉽지 않은 일인데요. 일단 아직 남은 5, 6번 조건들을 마저 살펴보고, 4번에 관해 그나마 우리가 실천할 수 있는 규칙들을 아래에서 살펴봅시다.

1. (**Layered System**) Client와 Server 사이에는 프록시(proxy), 게이트웨이(gateway)와 같은 중간 매개 요소를 두고, 보안, 로드 밸런싱 등을 수행할 수 있어야 합니다. 이를 통해 Client와 Server 사이에는 계층형 층(hierarchical layers)들이 형성됩니다.
2. (**Code-On-Demand**) Client는 받아서 바로 실행할 수 있는 applet이나 script 파일을 Server로부터 받을 수 있어야 합니다. 이 조건은 Optional한 조건으로 REST architecture가 되기 위해 이 조건이 반드시 만족될 필요는 없습니다.

자, 이때까지 REST architecture가 되기 위해 충족해야 하는 조건들을 배웠는데요. 이해가 잘 되는 것도 있고 조금 어려운 것도 있죠? 사실 이 내용은 다소 이론적이기도 하고, 웹에 대해 좀 더 많이 공부해야 이해할 수 있는 것들도 있기 때문에 일단은 그냥 넘어가셔도 괜찮습니다.

하지만 기억해야 할 사실은, **REST API는 바로 이런 REST architecture에 부합하는 API를 의미한다**는 사실입니다. 참고로 이런 REST API를 사용하는 웹 서비스를 **RESTful 서비스**라고 합니다. 그렇다면 구체적으로 어떤 식으로 Web API를 설계해야 REST API가 될 수 있는 걸까요? 사실 Roy Fielding의 논문에는 이것에 관한 구체적이고 실천적인 내용들은 제시되어 있지 않습니다. 하지만 많은 개발자들의 경험과 논의를 통해 형성된 사실상의(**de facto**) 규칙들이 존재하는데요.

우리는 그중에서도 조건 **4. Uniform Interface의 하위 조건인 (4-1) identificaton of resources** 에 관해서 특히 개발자들이 강조하는 규칙, 2가지만 배워보겠습니다.

## (1) URL은 리소스를 나타내기 위해서만 사용하고, 리소스에 대한 처리는 메소드로 표현해야 합니다.

이 규칙은 조금 다르게 설명하자면, URL에서 리소스에 대한 처리를 드러내면 안 된다는 규칙인데요. 이게 무슨 말인지 **1. Web API** 부분에서 마지막에 언급했던 예시를 통해 이해해보겠습니다.

예를 들어, 새 직원 정보를 추가하기 위해서

(1) 'https://learn.codeit.kr/api/members' URL로    (2) 리퀘스트의 헤드에 POST 메소드를 설정하고, (3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

고 하는 경우는, URL은 리소스만 나타내고, 리소스에 대한 처리(리소스 추가)는 메소드 값인 POST로 나타냈기 때문에 이 규칙을 준수한 것입니다.

하지만

(1)  'https://learn.codeit.kr/api/members/**add**' URL로 (2) 리퀘스트의 헤더에 GET 메소드를 설정하고, (3) 리퀘스트의 바디에 새 직원 정보를 넣어서 보내면 된다

고 하는 이 경우는 URL에서 리소스뿐만 아니라, 해당 리소스에 대한 처리(add, 추가하다)까지도 나타내고 있습니다. 그리고 정작 메소드 값으로는 리소스 추가가 아닌 리소스 조회를 의미하는 GET을 설정했기 때문에 이 규칙을 어긴 것입니다.

URL은 리소스를 나타내는 용도로만 사용하고, 리소스에 대한 처리는 메소드로 표현해야 한다는 사실, 꼭 기억하세요!

## (2) 도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표시합니다.

또 다른 규칙 하나를 살펴볼까요? 이 규칙은 URL로 리소스를 나타내는 방식에 관한 규칙인데요. URL에서는

- https://www.soccer.com/europe/teams/manchester-united/players/pogba

이런 식으로 path 부분에서 특정 리소스(pogba, 축구 선수 포그바의 정보)를 나타낼 때 슬래시(/)를 사용해서 계층적인 형태로 나타냅니다. 지금 위 URL의 path 부분을 보면 '유럽의', '축구팀들 중에서', '맨체스터 유나이티드 팀의', '선수들 중에서', '포그바'라는 선수의 정보를 의미하는 리소스라는 걸 한눈에 알 수 있는데요. 이렇게 계층적 관계를 잘 나타내면, URL만으로 무슨 리소스를 의미하는지를 누구나 쉽게 이해할 수 있습니다. Web API를 설계할 때는 이렇게 가독성 좋고, 이해하기 쉬운 URL을 설계해야 하는데요. 그런데 이때 지켜야 할 규칙이 있습니다.

사실 리소스는 그 특징에 따라 여러 종류로 나눠볼 수 있습니다. 이 중에서 우리는 '컬렉션(collection)'과 '도큐먼트(document)'를 배울 건데요. 보통 우리가 하나의 객체로 표현할 수 있는 리소스를 '도큐먼트'라고 합니다. 그리고 여러 개의 '도큐먼트'를 담을 수 있는 리소스를 '컬렉션'이라고 하는데요. 쉽게 비유하자면, 도큐먼트는 하나의 '파일', 컬렉션은 여러 '파일'들을 담을 수 있는 하나의 '디렉토리'에 해당하는 개념입니다.

그리고 이에 관한 규칙은 바로, **URL에서 '도큐먼트'를 나타낼 때는 단수형 명사를, '컬렉션'을 나타낼 때는 복수형 명사를 사용해야 한다는 규칙**입니다.

지금 위 URL에서 europe, manchester-united, pogba가 '도큐먼트'에 해당하고, teams, players가 '컬렉션'에 해당합니다. 도큐먼트는 단수 명사로, 컬렉션은 복수 명사로 표현한 것이 잘 보이죠?

이 규칙을 잠깐 이전 영상의 내용과 연관 지어 생각해볼까요? 예를 들어, 제가

- 전체 직원 정보 조회 - GET
- 새 직원 정보 추가 - POST

이 작업들을 수행하기 위해 사용했던 'https://learn.codeit.kr/api**/members**' URL에서도 직원 전체를 의미하는 members는 이렇게 복수 명사를 사용했다는 것을 알 수 있습니다. members는 member들을 담을 수 있는 컬렉션에 해당하는 개념이기 때문입니다.

그리고 제가

- 특정 직원 정보 조회 - GET
- 기존 직원 정보 수정 - PUT
- 기존 직원 정보 삭제 - DELETE

이 작업들을 수행하기 위해 사용했던 https://learn.codeit.kr/api**/members/3** URL에서는 도큐먼트를 나타내기 위해 단수 명사 대신 직원 고유 식별자인 id 값을 썼는데요. 이렇게 숫자를 쓰는 경우에는 단복수 문제가 없겠죠?

'도큐먼트', '컬렉션' 개념을 우리가 배운 메소드 종류와 연결해서 모든 경우의 수를 생각해보면 다음과 같습니다.

| 제목   | /members                            | /members/3         |
| ------ | ----------------------------------- | ------------------ |
| GET    | 전체 직원 정보 조회                 | 3번 직원 정보 조회 |
| POST   | 새 직원 정보 추가                   | X                  |
| PUT    | 전체 직원 정보 수정(잘 쓰이지 않음) | 3번 직원 정보 갱신 |
| DELETE | 전체 직원 정보 삭제(잘 쓰이지 않음) | 3번 직원 정보 삭제 |

지금 표에서 보이는 것처럼, 전체 직원 정보를 대상으로 PUT 리퀘스트 또는 DELETE 리퀘스트를 보내는 것은 전체 직원 정보를 모두 수정 또는 모두 삭제한다는 뜻이기 때문에 사실상 잘 쓰이지 않습니다. 위험한 동작이기 때문에 애초에 Web API 설계에 반영하지도 않고, 서버에서 허용하지 않을 때가 일반적이죠.

그리고 또 여기서 주목할 점은 **POST 리퀘스트를 보낼 때, 컬렉션(members) 타입의 리소스를 대상으로 작업을 수행한다는 점**입니다. 이 부분이 조금 헷갈릴 수도 있는데요. POST 리퀘스트를 보낼 때는 우리가 전체 직원 정보를 의미하는 컬렉션에 하나의 직원 정보(하나의 도큐먼트)를 추가하는 것이기 때문에 URL로는 컬렉션까지만 /members 이렇게 표현해줘야 합니다. 따라서 /members/3 이렇게 특정 도큐먼트를 나타내는 URL에 POST 리퀘스트를 보내는 것은 문맥상 맞지 않는 표현입니다. 그리고 지금 같은 경우는 추가될 직원 정보가 어떤 id 값을 할당받을지 알 수도 없기 때문에 애초에 /members/[id]에 id 값을 지정한다는 것도 불가능하죠.

이 도큐먼트와 컬렉션 개념을 잘 기억하고 있으면 나중에 URL에서 단수 명사를 써야 할지, 복수 명사를 써야 할지 고민이 될 때 답을 얻을 수 있을 겁니다.  
 자, 이때까지 REST API의 조건 중 하나인 **4. Uniform Interface**을 좀 더 잘 지키기 위해 개발자들이 강조하는 규칙 2가지를 배웠습니다. 하지만 이것만으로 Web API를 REST API로 설계할 수 있는 것은 아닙니다. 여전히 만족시켜야 하는 다른 조건들도 있기 때문이죠. 나머지 조건들을 어떻게 지킬 수 있는지에 관한 내용은 난이도 및 분량 관계상 생략하겠습니다. 나머지 조건들을 어떻게 준수하는지는 여러분이 웹에 좀더 익숙해지고 나서 나중에 더 찾아보시는 걸 추천합니다.

REST API는 개발자들이 Web API를 설계할 때 굉장히 중요하게 고려하는 가이드라인이기는 하지만, 앞서 제시한 6가지 조건을 모두 만족시켜가면서까지 100% 준수해야 할 필요성이 있는지에 관해서는 의견이 많습니다. 그래도 REST API는 웹 개발자의 주요 단골 면접 주제니까 관심이 있는 분은 이번 노트의 내용을 다시 자세히 읽고 필요한 내용을 더 찾아보세요.





## JSON 데이터 다루기

자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 것은 영어로 **Serialization**, 우리말로는 직렬화라고 합니다.  그리고 이와 반대로 string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 것을 영어로는 **Deserialization**, 우리말로는 역직렬화라고 하는데요. 그리고 이것들을 동사로 표현하면 Serialize한다, Deserialize한다고 표현할 수 있겠죠?

이 Serialization과 Deserialization은 자바스크립트뿐만 아니라 모든 프로그래밍 언어에서 중요하게 다뤄지는 개념입니다. 왜냐하면 어떤 언어든지 리퀘스트를 보내거나, 리스폰스를 받을 때 이런 작업을 수행해줘야하기 때문입니다. 이번 노트에서는 Serialization과 Deserialization에 대해 좀 더 자세하게 살펴보겠습니다.

# 1. string 타입의 JSON 데이터 vs 자바스크립트 객체

우리는 **Serialization**을 수행하기 위해 JSON이라는 자바스크립트 기본 내장 객체의 **stringify** 메소드를 사용했고,  **Deserialization**을 수행하기 위해 JSON 객체의 **parse** 메소드를 사용했는데요.

혼동을 막기 위해서, 앞으로 **데이터 포맷으로서의 json**은 이렇게 소문자로,  stringify 메소드, parse 메소드를 갖고 있는 **JSON 객체**는 이렇게 대문자로 쓸게요.

이제 string 타입의 json 데이터와 자바스크립트 객체 사이에 구체적으로 어떤 차이가 있는 건지, 각 작업이 왜 필요한지 그 이유를 생각해봅시다.

잠깐 아래 코드를 볼까요?

```jsx
const obj = { x: 1, y: 2 };
const jsonString = JSON.stringify(obj);
```

지금 x 프로퍼티와 y 프로퍼티를 가진 `obj`라는 객체를 **Serialize**했는데요.  이 코드를 실행하고 `obj`와 `jsonString`을 순서대로 조회해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4355&directory=Untitled.png&name=Untitled.png)

이렇게 `obj`는 자바스크립트 객체이고, 이것을 Serialize한 결과인 `jsonString`은 string 타입이라는 걸 알 수 있습니다.  `obj` 객체 왼쪽의 화살표를 클릭해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4355&directory=Untitled%201.png&name=Untitled+1.png)

이렇게 `obj` 객체는 자바스크립트 객체로서, 우리가 직접 정의하지는 않았지만, 기본으로 내장하는 프로퍼티들이 존재한다는 것을 알 수 있습니다. 이런 것들은 자바스크립트 실행 환경에서, 객체라면 가지는 프로퍼티들일 뿐 **서버에는 전혀 보낼 필요가 없는 것들입니다. 그리고 특히 이 객체의 메소드 같은 경우 서버에서 이를 인식 가능하도록 보낼 수 있는 방법도 없구요.** 바로 이러한 이유 때문에 우리는 객체(object)가 가진 데이터만을 string 타입으로 변환하는 **Serialization** 작업을 해야하는 겁니다.(Serialization이 왜 필요한지에 대해서 제대로 이해하려면 컴퓨터 공학에 관한 깊은 지식이 필요합니다. 지금은 자바스크립트 실행 환경에서만 인식되는 객체라는 존재를 어느 환경에서든 해석될 수 있는 포맷으로 변환하기 위해 Serialize를 한다는 정도로만 이해하시면 됩니다.)

그럼 이번엔 반대로 Deserialize를 해봅시다.

```jsx
const jsonString = '{"x": 1, "y": 2}';
const obj = JSON.parse(jsonString);
```

이번엔 코드 순서가 반대이고, JSON 객체의 stringify 메소드 대신 parse 메소드를 썼는데요.

지금 `jsonString`은 string 타입입니다. 이때 y키의 값인 2를 가져와야 한다고 해봅시다. 어떻게 가져와야할까요? 지금 같은 문자열 상태로는 y 값을 가져올 수 없습니다. 문자열 자체를 파싱(parsing)해서 어떻게든 2라는 값을 가져올 수 있겠지만 그건 우리가 원하는 게 아니죠. 따라서 이 string 타입의 값을 Deserialize해서 그대로 **자바스크립트 객체로 변환**해줘야 코드에서 자유롭게 사용할 수 있게 됩니다. 그 후에는 이렇게

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4355&directory=Untitled%202.png&name=Untitled+2.png)

**`obj.y`처럼 자바스크립트에서 객체의 프로퍼티의 값을 읽을 때 쓰는 문법**을 사용해서, `obj` 객체의 y프로퍼티에 바로 접근할 수 있죠. 왜 리스폰스의 내용이 JSON 데이터일 때 그것을 Deserialize해야 하는지 아시겠죠? 굳이 string 타입의 값에서 문자열을 파싱하느라 낑낑대며 어렵게 필요한 데이터를 추출하기보다는 이렇게 자바스크립트 객체로 변환해서 편하게 데이터를 다루면 되는 겁니다.

Serialization과 Deserialization은 자바스크립트로 웹 개발을 할 때 반드시 숙지하고 있어야 하는 개념입니다. 리퀘스트를 보내거나 리스폰스를 받았을 때 이 작업을 빼먹지 않도록 주의하셔야 합니다.

# 2. text 메소드 말고 json 메소드도 있어요.

우리가 배웠던 코드를 잠깐 살펴봅시다.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { const users = JSON.parse(result); });
```

이 코드에서는 리스폰스의 내용을 추출하기 위해 `response.text()`를 호출했고,  그 다음에 그 리턴값인 **JSON 데이터** (`result`, 실제로는 JSON 데이터를 품은 Promise 객체라는 것이 리턴됩니다. Promise 객체는 챕터 3에서 배웁니까 조금만 기다려주세요.) 를 Deserialize(`JSON.parse(result)`)해서 생성한 객체를 `users`에 할당했는데요.

그런데 여기서 코드의 양을 조금이나마 줄일 수 있는 방법이 있습니다. 바로 보여드릴게요.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { const users = result; });
```

지금 저는 response 객체의 `text` 메소드 대신 **`json`이라는 메소드**를 사용했고, 콜백 안에 있던 `JSON.parse` 코드를 삭제했습니다. 왜 그런 걸까요?

**response 객체의 text 메소드 대신 json이라는 메소드를 호출하면, 리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행해줍니다.** 이렇게 json 메소드를 사용하면, 두 번째 콜백의 result 파라미터로는 Deserialization 결과로 생성된 자바스크립트 객체가 넘어가게 되는데요. 그래서 두 번째 콜백 안에서 JSON.parse를 해주지 않아도 result를 바로 자바스크립트 객체로서 사용할 수 있는 겁니다. 참고로, 리스폰스의 내용이 JSON 데이터에 해당하지 않을 경우에는 에러가 발생하게 됩니다.

**리스폰스의 내용이 JSON 데이터로 미리 약속된 경우에는 response 객체의 text 메소드 대신 json 메소드를 사용해서 Deserialization까지 한 번에 수행하기도 합니다.** 앞으로 코드에서 text 메소드 대신 json 메소드가 등장하기도 하니까 잘 기억해두세요.





#### Status Code

Response에도 Head와 Body가 들어있다. 주로 Body부분에 JSON데이터가 들어가 있다. 

![response](./images/response.png)

그 대신 response의 head부분에는 status code라는 것이 들어간다. 

![response](./images/response1.png)

어떤 상황에 어떤 status code가 사용될까?

이번 노트에서는 알아두면 개발할 때 도움이 되는 상태 코드(Status Code)들을 알아보겠습니다. 자, 시작해볼까요?

# 1. 각각의 상태 코드에는 대응되는 상태 메시지가 있습니다.

모든 상태 코드(Status Code)는 각각 그에 대응되는 상태 메시지(Status Message)를 갖고 있습니다.

예를 들어, 우리가 배운 200번은 **OK**, 404번은 **Not Found**라는 상태 메시지를 갖고 있습니다. 각 상태 코드의 의미를 모두 외우기는 힘들기 때문에 이러한 상태 메시지는 상태 코드의 의미를 빠르게 파악하는데 도움을 줍니다.

# 2. 상태 코드는 100번대~500번대까지 있어요.

이전 영상에서는 상태 코드 200번과 404번만 봤는데요. 사실 상태 코드는 100번대부터 500번대까지 존재합니다. 그리고 각 번호대는 그것만의 의미를 가지고 있는데요. 각 번호대 별 주요 상태 코드들을 살펴봅시다. 각 상태 코드는 상태 코드 옆에 바로 상태 메시지를 쓰는 형식(예: 200 OK)으로 나타내겠습니다.

**(1) 100번대**

서버가 클라이언트에게 **정보성 응답**(Informational response)을 줄 때 사용되는 상태 코드들입니다.

- **100 Continue** : 클라이언트가 서버에게 계속 리퀘스트를 보내도 괜찮은지 물어봤을 때, 계속 리퀘스트를 보내도 괜찮다고 알려주는 상태 코드입니다. 예를 들어, 클라이언트가 용량이 좀 큰 파일을 리퀘스트의 바디에 담아 업로드하려고 할 때 서버에게 미리 괜찮은지를 물어보는 경우가 있다고 할 때, 서버가 이 100번 상태 코드의 리스폰스를 주면 그제서야 본격적인 파일 업로드를 시작합니다.
- **101 Switching Protocols** : 클라이언트가 프로토콜을 바꾸자는 리퀘스트를 보냈을 때, 서버가 '그래요, 그 프로토콜로 전환하겠습니다'라는 뜻을 나타낼 때 쓰이는 상태 코드입니다.

**(2) 200번대**

클라이언트의 리퀘스트가 성공 처리되었음을 의미하는 상태 코드들입니다.

- **200 OK** : 리퀘스트가 성공적으로 처리되었음을 포괄적으로 의미하는 상태 코드입니다. 이때 성공의 의미는 리퀘스트에 있던 메소드의 종류에 따라 다르겠죠? GET 리퀘스트의 경우 리소스가 잘 조회되었다는 뜻이고, POST 리퀘스트의 경우 새 리소스가 잘 생성되었다, PUT 리퀘스트의 경우 기존 리소스가 잘 수정되었다, DELETE 리퀘스트의 경우 기존 리소스가 잘 삭제되었다는 뜻입니다.
- **201 Created** : 리퀘스트의 내용대로 리소스가 잘 생성되었다는 뜻입니다. POST 리퀘스트가 성공한 경우에 200번 대신 201번이 올 수도 있습니다.
- **202 Accepted** : 리퀘스트의 내용이 일단은 잘 접수되었다는 뜻입니다. 즉, 당장 리퀘스트의 내용이 처리된 것은 아니지만 언젠가 처리할 것이라는 뜻인데요. 리퀘스트를 어느 정도 모아서 한번에 실행하는 서버인 경우 등에 이런 응답을 줄 수도 있습니다.

**(3) 300번대**

클라이언트의 리퀘스트가 아직 처리되지 않았고, 리퀘스트 처리를 원하면 클라이언트 측의 추가적인 작업이 필요함을 의미하는 상태 코드들입니다.

- **301 Moved Permanently** : 리소스의 위치가 바뀌었음을 나타냅니다. 보통 이런 상태 코드가 있는 리스폰스의 헤드에는 Location이라는 헤더도 일반적으로 함께 포함되어 있습니다. 그리고 그 헤더의 값으로 리소스에 접근할 수 있는 새 URL이 담겨있는데요. 대부분의 브라우저는 만약 GET 리퀘스트를 보냈는데 이런 상태 코드가 담긴 리스폰스를 받게 되면, 헤드에 포함된 Location 헤더의 값을 읽고, 자동으로 그 새 URL에 다시 리퀘스트를 보내는 동작(리다이렉션, redirection)을 수행합니다.
- **302 Found** : 리소스의 위치가 일시적으로 바뀌었음을 나타냅니다. 이 말은 지금 당장은 아니지만 나중에는 현재 요청한 URL이 정상적으로 인식될 것이라는 뜻입니다. 이 상태 코드의 경우에도 보통 그 리스폰스의 헤드에 Location 헤더가 있고, 여기에 해당 리소스의 임시 URL 값이 있습니다. 이 경우에도 대부분의 브라우저들은 임시 URL로 리다이렉션합니다.
- **304 Not Modified** : 브라우저들은 보통 한번 리스폰스로 받았던 이미지 같은 리소스들을 그대로 내부에 저장하고 있습니다. 그리고 서버는 해당 리소스가 바뀌지 않았다면, 리스폰스에 그 리소스를 보내지 않고 304번 상태 코드만 헤드에 담아서 보냄으로써 '네트워크 비용'을 절약하고 브라우저가 저장된 리소스를 재활용하도록 하는데요. 사실 이 상태 코드는 웹에서 '캐시(cache)'라는 주제에 대해서 공부해야 정확하게 이해할 수 있습니다. 당장 배울 내용은 아니니까 넘어갈게요. 혹시 관심이 있는 분들은 [이 링크](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)를 참조하세요.

**(4) 400번대**

리퀘스트를 보내는 클라이언트 쪽에 문제가 있음을 의미하는 상태 코드들입니다.

- **400 Bad Request** : 말그대로 리퀘스트에 문제가 있음을 나타냅니다. 리퀘스트 내부 내용의 문법에 오류가 존재하는 등의 이유로 인해 발생합니다.
- **401 Unauthorized** : 아직 신원이 확인되지 않은(unauthenticated) 사용자로부터 온 리퀘스트를 처리할 수 없다는 뜻입니다.
- **403 Forbidden** : 사용자의 신원은 확인되었지만 해당 리소스에 대한 접근 권한이 없는 사용자라서 리퀘스트를 처리할 수 없다는 뜻입니다.
- **404 Not Found** : 해당 URL이 나타내는 리소스를 찾을 수 없다는 뜻입니다. 보통 이런 상태 코드가 담긴 리스폰스는 그 바디에 관련 웹 페이지를 이루는 코드를 포함하고 있는 경우가 많습니다. 예를 들어, 다음과 같이

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4358&directory=Untitled.png&name=Untitled.png)

https://www.google.com**/abc**와 같이 존재하지 않는 URL에 접속하려고 하면 이런 페이지가 보이는 것을 알 수 있습니다.

- **405 Method Not Allowed** : 해당 리소스에 대해서 요구한 처리는 허용되지 않는다는 뜻입니다. 만약 어떤 서버의 이미지 파일을 누구나 조회할 수는 있지만 아무나 삭제할 수는 없다고 해봅시다. GET 리퀘스트는 허용되지만, DELETE 메소드는 허용되지 않는 상황인 건데요. 그런데 만약 그 이미지에 대한 DELETE 리퀘스트를 보낸다면 이런 상태 코드를 보게될 수도 있습니다.
- **413 Payload Too Large** : 현재 리퀘스트의 바디에 들어있는 데이터의 용량이 지나치게 커서 서버가 거부한다는 뜻입니다.
- **429 Too Many Requests** : 일정 시간 동안 클라이언트가 지나치게 많은 리퀘스트를 보냈다는 뜻입니다. 서버는 수많은 클라이언트들의 리퀘스트를 정상적으로 처리해야 하기 때문에 특정 클라이언트에게만 특혜를 줄 수는 없습니다. 따라서 지나치게 리퀘스트를 많이 보내는 클라이언트에게는 이런 상태 코드를 담은 리스폰스를 보낼 수도 있습니다.

**(5) 500번대**

서버 쪽의 문제로 인해 리퀘스트를 정상적으로 처리할 수 없음을 의미하는 상태 코드들입니다.

- **500 Internal Server Error** : 현재 알 수 없는 서버 내의 에러로 인해 리퀘스트를 처리할 수 없다는 뜻입니다.
- **503 Service Unavailable** : 현재 서버 점검 중이거나, 트래픽 폭주 등으로 인해 서비스를 제공할 수 없다는 뜻입니다.

자, 각 번호대의 주요 상태 코드들을 알아봤는데요. 정말 다양한 상태 코드들이 있죠? 이 상태 코드들만 깊게 공부해도 웹 개발에 필요한 많은 지식들을 쌓을 수 있습니다. 혹시 또다른 상태 코드들도 궁금한 분들은 여기 [이 페이지](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)를 참조하세요.

이 상태 코드들도 ['모범적인 Web API, REST API' 노트](https://www.codeit.kr/learn/4353)에서 배웠던 'Web API 설계' 시에 결정되어야 하는 요소들입니다. **리퀘스트에 관한 URL과 메소드 종류 뿐만 아니라 리스폰스의 상태 코드 또한 각각의 상황에 알맞은 것들이 설정되도록 설계해야 하는데요.** 사실 모든 상황을 세분화해서 매번 거기에 맞는 상태 코드를 넣는 것은 불필요한 작업이 될 수도 있긴 합니다. 그래서 보통은 꼭 사용할 상태 코드들만 추린 다음에 특정 유형의 상황들은 모두 하나의 상태 코드로 나타내는 전략이 주로 활용되는데요.

하지만 그렇다고 해서 서버가 리퀘스트를 잘 처리했든, 실패했든 상태 코드로 항상 200번을 보내버린다거나 하는 것은 매우 좋지 않습니다. 가장 이상적인 것은 존재하는 상태 코드를 최대한 많이 활용하는 것입니다.

이때까지 우리는 리퀘스트와 리스폰스가 둘다 헤드(head)와 바디(body)라는 걸로 이루어져 있다는 걸 배웠습니다. 그리고 헤드에는 각종 부가 정보, 바디에는 실제 데이터가 들어간다는 것도 배웠죠. 이때 헤드에 다양한 **헤더(header)**들이 있는 것도 직접 봤는데요.



각 헤더의 의미도 이번 토픽에서 하나씩 설명하면 좋겠지만, 헤더의 종류는 너무나도 많기 때문에 지금 당장 다 알려드릴 수는 없습니다. 하지만 그 전에 **Content-Type 헤더**에 대해서는 미리 알아두고 가면 좋습니다.

# 1. Content-Type 헤더

Content-Type 헤더는 현재 리퀘스트 또는 리스폰스의 바디에 들어 있는 **데이터가 어떤 타입인지를** 나타냅니다.

사실 이때까지 우리는 리퀘스트 또는 리스폰스의 바디에 **HTML, JavaScript** 등의 코드 또는 **JSON 데이터**가 들어가는 경우만 봤습니다. 하지만 실무 개발에서는 리퀘스트 또는 리스폰스의 바디에 이것 말고도 정말 다양한 종류의 데이터들을 넣게 될 텐데요. 텍스트부터 시작해서 이미지, 영상까지 정말 많은 것들이 들어갈 수 있습니다. 바로 이런 데이터들의 타입 정보가 Content-Type 헤더에 담겨있는 겁니다.

Content-Type 헤더의 값은 **'주 타입(main type)/서브 타입(sub type)'**의 형식으로 나타나는데요. 우리가 흔히 만나게 될 Content-Type 헤더의 값으로는 다음과 같은 것들이 있습니다.

1. 주 타입이 **text**인 경우(텍스트)

- 일반 텍스트 : text/plain
- CSS 코드 : text/css
- HTML 코드 : text/html
- JavaScript 코드 : text/javascript ...

1. 주 타입이 **image**인 경우(이미지)

- image/bmp : bmp 이미지
- image/gif : gif 이미지
- image/png : png 이미지 ...

1. 주 타입이 **audio**인 경우(오디오)

- audio/mp4 : mp4 오디오
- audio/ogg : ogg 오디오 ...

1. 주 타입이 **video**인 경우(비디오)

- video/mp4 : mp4 비디오
- video/H264 : H264 비디오 ...

우리가 이미 익숙하게 접하는 데이터 타입들이죠?

위 타입들에 속하지 않는 것들은, 보통 application이라고 하는 주 타입에 속하는데요.

1. 주 타입이 **application**인 경우

- application/json : **JSON** 데이터
- application/octet-stream : 확인되지 않은 바이너리 파일 ...

우리가 배운 JSON을 나타내는 값이 바로 여기에 속하네요. **application/json이라는 값이 JSON 데이터를 나타낸다는 사실**을 잘 기억해둡시다.

마지막으로 application/octet-stream이라고 하는 값도 보이는데요. '확인되지 않은 바이너리 파일'이라는 게 뭘까요? 일단 **'바이너리 파일'**이 뭔지를 알아야 할 것 같은데요. 컴퓨터에서는 모든 파일이 0과 1의 조합으로 이루어져 있다는 사실은 이미 아시죠? 하지만 이때 그 0과 1의 조합이 우리가 읽을 수 있는 텍스트로 변환 가능한 경우도 있고, 그렇지 않은 경우도 있습니다. 그렇지 않은 경우의 예로는 이미지 파일이나 비디오 파일 등이 있습니다. 이렇게 **텍스트 파일 이외의 파일들을 보통 바이너리 파일(binary file)**이라고 하는데요. 이 바이너리 파일들 중에서도 특정 확장자(.png, .mp4 등)의 포맷에 해당하지 않는 데이터들을 보통 이렇게 application/octet-stream으로 나타냅니다. 참고로 브라우저는 리스폰스의 Content-Type 헤더의 값으로 application/octet-stream이 쓰여 있으면 보통, 사용자에게 '다운로드 받으시겠습니까'와 같은 alert 창을 띄웁니다.

이렇게 리퀘스트 또는 리스폰스의 바디에는 JSON 말고도 아주 다양한 타입의 데이터들이 담길 수 있는데요. Content-Type 헤더의 값으로 들어갈 수 있는 것들을 모두 보고 싶다면 [관련 공식 문서](https://www.iana.org/assignments/media-types/media-types.xhtml)를 참조하세요.

그런데 Content-Type 헤더는 왜 필요한 걸까요? **Content-Type 헤더가 존재하면, 바디의 데이터를 직접 확인해서 그 타입을 추론하지 않아도 되기 때문입니다.** 예를 들어, 리퀘스트의 바디에 JSON 데이터를 담아 보낼 때 헤드에서 이 Content-Type의 값을 application/json으로 알맞게 설정하고 보낸다고 합시다. 만약 이 Content-Type을 써주지 않으면 어떻게 될까요? 서버에서 바디의 데이터가 어떤 타입인지를 확인하는 절차가 추가적으로 필요할 겁니다. 불필요한 비용이 발생하게 되는 거죠. 그리고 리스폰스의 경우에도 마찬가지입니다. 웹 브라우저에서 리스폰스를 받았는데 Content-Type 헤더의 값이 없으면 이 데이터가 무슨 타입인지 별도로 확인하고, 처리해줘야 하겠죠?

따라서 리퀘스트든, 리스폰스든 바디에 어떤 데이터가 존재하는 경우라면 이 Content-Type 헤더의 값을 적절하게 설정해주는 게 좋습니다.

# 2. Content-Type 설정해보기

이번에는 리퀘스트를 보낼 때 직접 Content-Type 헤더의 값을 설정해보겠습니다. 이전에 새로운 직원 정보를 추가하기 위해 썼던 코드를 재사용할 건데요.

```jsx
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('http://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

이제 여기에 Content-Type 헤더도 설정해보겠습니다.

```jsx
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: { // 추가된 부분
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

지금 fetch 함수의 옵션 객체 안에 headers라는 프로퍼티를 만들어서 객체 하나를 설정하고 그 객체 안에 'Content-Type'이라는 프로퍼티를 설정했습니다. 프로퍼티의 값으로는, 리퀘스트의 바디에 담을 데이터가 JSON 데이터라는 뜻으로 `application/json`을 적었습니다.

이 코드를 개발자 도구에서 실행해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4360&directory=Untitled.png&name=Untitled.png)

이렇게 리퀘스트의 헤더들 중에서 제가 설정한 Content-Type 헤더가 잘 보입니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4360&directory=Untitled%201.png&name=Untitled+1.png)

이번 노트에서는 리퀘스트에 Content-Type 헤더를 추가하는 법을 배웠습니다. 앞으로 여러분이 점점 더 다양한 헤더들을 공부하게 된다면,

(1) fetch 함수의 옵션 객체 안에 headers 프로퍼티를 설정하고 (2) headers 객체 안에 더 많은 헤더 이름들을 추가해볼 수 있겠죠?

만약 Content-Type 헤더뿐만 아니라 수많은 다른 헤더들에 대해서도 공부해보고 싶은 분들은 [이 링크](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)를 참조하세요. 헤더에 대해서 공부를 하면 실무 웹 개발에서 어떤 점들이 중요한지를 파악할 수 있게 될 겁니다. 당장 헤더들을 공부하면서 이해가 안 된다면, 일단은 넘어가시고 나중에 실제로 개발을 하다가 문제가 생기면 그때 관련 헤더에 대해서 자세하게 공부해보는 것도 좋습니다.



#### 추가적으로 알아두면 좋은 content-type들(심화)

이제 우리는 리퀘스트와 리스폰스의 바디에 정말 다양한 타입의 데이터들이 들어갈 수 있다는 것을 배웠습니다. 이때까지는 실제로 개발자가 되면 주로 사용하게 될 JSON 타입을 많이 다뤄봤는데요. 하지만 정말 개발자가 된다면 JSON 뿐만 아니라 이전 노트에서 봤던 일반 텍스트, 이미지, 음성, 영상 등 수많은 타입들을 다루게 될 겁니다. 이번 노트에서는 여러분이 추가적으로 알아두면 좋을 데이터 타입들을 공부해보겠습니다.

# 1. JSON 말고 XML도 있어요.

개발자들이 어떤 정보를 나타내기 위해 흔히 쓰는 데이터 포맷으로는 JSON 뿐만 아니라 **XML(Extensible Markup Language)**이라고 하는 데이터 포맷도 있습니다. XML을 한마디로 쉽게 이야기하자면, 태그를 사용해서 데이터를 나타내는 것입니다. 예를 들어

```jsx
{
   "name":"Michael Kim",
   "height":180,
   "weight":70,
   "hobbies":[
      "Basketball",
      "Listening to music"
   ]
}
```

이런 JSON 데이터를 XML로는 이렇게 나타낼 수 있습니다.

```jsx
<?xml version="1.0" encoding="UTF-8" ?>
<person>
    <name>Michael Kim</name>
    <height>180</height>
    <weight>70</weight>
    <hobbies>
        <value>Basketball</value>
        <value>Listening to music</value>
    </hobbies>
</person>
```

뭔가 HTML에서나 볼 법한 태그들로 이루어져있죠? 자세히 보면 원래 JSON에서

```jsx
"name": "Michael Kim"
```

이라고 나타낸 부분을 XML에서는

```jsx
<name>Michael Kim</name>
```

이런 식으로 시작 태그(<name>)와 끝 태그(</name>), 그리고 그 사이의 값으로 나타낸 것을 알 수 있습니다.

사실 XML이라는 데이터 타입은 JSON이 2013년에 표준화되고 그 뒤로 활성화되기 전까지만 해도 정말 많이 사용되던 데이터 타입이었습니다. 여러분이 개발 관련 문서들을 구글링하다보면 여전히 이 XML로 표현된 데이터들을 자주 볼 수 있게 될 텐데요.

XML을 쓸 때는 보통 스키마(Schema)라는 별도의 문서를 함께 사용합니다. 이 스키마에는 각 조직, 기관 등에서 XML로 데이터를 나타낼 때, 어떤 태그들을 사용할 수 있고, 각 태그의 의미는 무엇이며, 특정 태그는 어떤 타입의 값을 가질 수 있는지 등의 정보가 담겨있는데요. 따라서 XML은 데이터에 대한 엄격한 유효성(validity) 검증에 특화된 데이터 포맷이라고 할 수 있습니다.

하지만 XML은 같은 양의 데이터를 표현하더라도 JSON에 비해 더 많은 용량을 차지하고, JSON에 비해 가독성이 떨어지며, 배우기가 어렵다는 문제 등으로 인해, 오늘날 XML의 입지는 다소 좁아진 것이 사실입니다. 특히나 자바스크립트가 중심이 되는 웹 개발 세계에서는 우리가 배운 것처럼 자바스크립트의 문법과 JSON 문법이 대체로 호환되기 때문에 더더욱 JSON을 사용하는 것이 편리합니다.

하지만 만약 여러분이 외부로 공개된 여러 Open API 같은 것들을 살펴보면 여전히 XML 타입의 데이터를 리스폰스로 주는 경우가 많다는 것을 알 수 있습니다. 그렇기 때문에 XML 타입이라는 것이 존재한다는 것을 인지하고, 이런 타입의 데이터는 어떻게 처리해야 할지 미리 고민해보는 것도 좋습니다. 참고로 XML을 나타내는 Content-Type 헤더의 값은 **'application/xml'**입니다. 그리고 'application/xml'뿐만 아니라 XML의 문법을 따르되 거기에 특수한 규칙을 더해 만든 데이터 타입들도 존재합니다. 보통 이런 타입들은 그 이름 끝에 +xml을 붙여서 사용하는데요. Content-Type 헤더의 값에 관한 이 [공식 문서](https://www.iana.org/assignments/media-types/media-types.xhtml)에 접속해서 +xml 이라는 키워드로 페이지 내 검색을 해보세요. XML 문법을 활용한 다양한 데이터 타입들을 볼 수 있을 겁니다.

# 2. form 태그에서 사용되는 타입들

이때까지 배운 JSON, XML 이런 것들 말고도 개발자라면 알아둬야 할 데이터 타입이 또 있습니다. 그것은 바로

**(1) application/x-www-form-urlencoded** 타입 **(2) multipart/form-data** 타입

이 2가지인데요. 각각의 타입에 대해 순서대로 알아봅시다.

## (1) application/x-www-form-urlencoded

뭔가 굉장히 긴 이름의 타입이죠? 이 타입은 우리가 **HTML의 form 태그**(<form></form>)를 사용할 때 종종 보게되는 타입입니다. form 태그는 회원가입 화면이나 게시물 업로드 화면 등을 만들 때 주로 활용되는 HTML 태그인데요. form 태그를 사용하면 **자바스크립트 코드 없이 오로지 HTML만으로도** 리퀘스트를 보내는 것이 가능합니다. 오늘날에는 form 태그를 사용하지 않고 자바스크립트 코드로 직접 사용자의 입력값을 취합해서 리퀘스트를 보내는 방법이 많이 사용되고 있지만 여전히 form 태그만으로 리퀘스트를 보내는 방식도 쓰이고는 있기 때문에 알아두는 게 좋습니다.

**form 태그는 기본적으로 이 application/x-www-form-urlencoded 타입의 데이터를 바디에 담아서 보내는데요.**

그렇다면 application/x-www-form-urlencoded 타입은 데이터를 어떤 식으로 나타내는 걸까요? 예를 들어, JSON으로는 다음과 같이 표현할 수 있는 데이터가 있다고 가정해봅시다.

```jsx
{
  "id": 6,
  "name": "Jason",
  "age": 34,
  "department": "engineering"
}
```

이 데이터를 application/x-www-form-urlencoded 타입으로 나타내보면

```jsx
id=6&name=Jason&age=34&department=engineering
```

이것과 같습니다. application/x-www-form-urlencoded 타입은 프로퍼티의 이름과 값을 **"이름=값"** 형식으로 나타내고 각각의 프로퍼티를 **"&"** 기호로 연결하는 방식으로 데이터를 표현하는데요. **URL의 query 부분에서 사용하는 방식과 똑같죠?** 자, 예시를 통해 좀더 배워봅시다.

예를 들어, 이런 식으로 CodeitShopping이라는 사이트의 **회원 가입 페이지**가 있다고 해봅시다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled.png&name=Untitled.png)

이 웹 페이지는 다음과 같은 HTML 코드로 이루어져 있는데요.

```jsx
...

<body>
  <div id="signup">
    <p id="title">CodeitShopping</p> 
    <form action="/upload" method="get" enctype="application/x-www-urlencoded">
      <div>
        <div><span class="label">email</span></div>
        <input class="input" type="text" id="email" name="email">
      </div>
      <div>
        <div><span class="label">password</span></div>
        <input class="input" type="password" id="password" name="password">
      </div>
      <div>
        <div><span class="label">nickname</span></div>
        <input class="input" type="text" id="nickname" name="nickname">
      </div>
      <div>
        <input id="submit-btn" type="submit" value="Sign Up">
      </div>
    </form>
  </div>
</body> 
 
...
```

(CSS, JavaScript 코드는 생략되어 있습니다.)

지금 form 태그의 **method**라는 속성의 값으로 **get**이, **enctype**이라는 속성의 값으로 **application/x-www-form-urlencoded**라고 써있는 게 보이시나요? 이렇게 속성을 적으면, 나중에 이 form 태그가 리퀘스트를 보낼 때, 리퀘스트의 메소드를 **GET**으로 설정하고 **사용자가 입력한 데이터를, URL의 쿼리 부분에 application/x-www-urlencoded 타입으로 넣습니다.** 지금 enctype 속성을 저렇게 설정을 해줘도 되고, 설정을 안 해줘도 form 태그는 기본적으로 application/x-www-urlencoded 타입을 사용합니다. 제가 위 이미지와 같이 회원 정보를 작성하고 아래의 Sign Up(가입하기) 버튼을 누르면 어떤 리퀘스트가 보내질까요? 잠깐 이 이미지를 봅시다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%20(5).png&name=Untitled+%285%29.png)

이 이미지는 제가 회원 가입 버튼을 누르고 웹 브라우저의 주소창 부분을 봤을 때의 결과인데요. 제가 입력한 정보가 **키=정보&키=정보&키=정보..** 이런 형식으로 나타난 것을 알 수 있습니다. **form 태그는 바로 이렇게 사용자의 입력값을 URL의 query 부분에 application/x-www-form-urlencoded 타입으로 나타낸 URL로 리퀘스트를 보내는 겁니다.** 별로 어렵지 않죠?

그런데 잠깐 지금 빨간색으로 표시된 부분을 보면 우리가 작성하지 않았던 이상한 **퍼센트(%)기호와 숫자들**이 보입니다. 이게 뭘까요? 지금 보면

| 입력했던 실제 글자 | 표시된 내용 |
| ------------------ | ----------- |
| @                  | %40         |
| !                  | %21         |
| 공백               | +           |

이렇게 변환되어서 표시된 것을 알 수 있는데요. 왜 특정 문자들은 이런 식으로 변환된 걸까요? 바로 이것이 application/x-www-form-urlencoded 타입의 특징인데요.

사실 이건 **URL encoding**(URL 인코딩)이라는 작업을 수행한 결과입니다. URL 인코딩이란 URL에서 **특정 특수문자들 그리고 영어와 숫자를 제외한 다른 나라의 문자들을 이런 식으로 변환하는 것**을 말합니다. 왜 이런 작업이 필요할까요? URL 관련 표준에 따르면, URL을 처리할 때, 특정 조건에 해당하는 문자들은 **Percent encoding**이라는 것을 하도록 되어 있습니다. 이 Percent encoding이 바로 URL encoding인데요. 어떤 경우에 Percent encoding을 해야하는지 알아보겠습니다.

일단, 아래와 같은 특수 문자들은 URL에서 특별한 용도를 갖고 있는 문자들입니다. **이런 특수 문자들이 각자 자신의 원래 용도가 아닌 다른 용도로 사용되는 경우 Percent Encoding을 해줘야 합니다.**

| :    | /    | ?    | #    | [    | ]    | @    | !    | $    | &    | '    | ...  | ' '(공백)  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---------- |
| %3A  | %2F  | %3F  | %23  | %5B  | %5D  | %40  | %21  | %24  | %26  | %27  | ...  | %20 또는 + |

그러니까 이런 기호들이 URL에서 **본래의 용도로 사용되는 게 아니라, 어떤 데이터를 나타내기 위해 사용된다면** 이때는 Percent encoding을 해서 나타내줘야 한다는 뜻입니다. 방금 전 봤던 **@, !, 공백** 이 글자들도 이 표에 속하고, 본래의 용도가 아닌 데이터를 나타내기 위한 용도로 쓰였기 때문에 Percent encoding 되었던 것입니다.

그럼 왜 이런 Percent Encoding이 필요한 걸까요? 그건 바로 **URL에 대한 해석 오류**를 방지하기 위해서입니다. 예를 들어, 어떤 URL의 **query** 부분에 이런 내용이 있다고 생각해보세요.

https://codeitBooks.com/books?title=**Tom&Jerry**&publishedData=20210115

책 제목이 Tom&Jerry(톰과 제리)라고 되어 있고, 제목 안에 **&** 가 있습니다. 그런데 이 &는 URL의 **query**에서 각각의 속성을 구분하는 용도로 쓰이는 기호이기도 하죠? 하지만 이 상태로 그대로 URL을 표현하면 서버가 URL의 path 뒷 부분을 해석하다가 오류를 발생시킬 수도 있습니다. 이 URL을 읽는 개발자가 오해해서 실수하기도 쉽구요. 따라서 **본래 용도가 아니라 단지 데이터를 나타내기 위해서 사용된 &은 위 표에 따라 %26으로 변환**해주도록 한 겁니다. 이런 식으로 말이죠.

https://codeitBooks.com/books?title=**Tom%26Jerry**&publishedData=20210105

왜 Percent encoding이 필요한지 아시겠죠?

자, 이번엔 Percent encoding을 해야하는 다른 경우를 보겠습니다. 방금 본 특수 문자들의 경우뿐만 아니라 URL에서 영어와 숫자를 제외한 다른 나라 문자를 나타낼 때도 Percent encoding을 해줘야합니다. 그러니까 한국어, 중국어, 아랍어 등을 나타낼 때는 Percent encoding을 해줘야 한다는 뜻입니다. 예를 들어, 우리가 URL의 맨 뒤에

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%202.png&name=Untitled+2.png)

이런 식으로 '코딩'이라는 한글을 적으면 어떻게 될까요? 이 URL을 그대로 복사해서 텍스트 에디터에 붙여넣기해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%203.png&name=Untitled+3.png)

이런 식으로 한국말로 적은 '코딩'이라는 부분이 **'%EC%BD%94%EB%94%A9'**로 변환된 것을 알 수 있습니다. 따라서 이 리퀘스트를 받는 서버가 리퀘스트에서 찾게되는 path 정보도 바로 이렇게 변환된 결과일 것입니다.

이렇게 URL에서

(1) 'URL 안에서 미리 정해진 용도를 가진 특수 문자를 **다른 용도**로 사용'하거나  (2) '영어와 숫자'를 제외한 다른 나라 문자를 나타낼 때는

**Percent encoding**을 해주는 것이 정해진 규칙입니다. 그럼 어떤 식으로 Percent encoding을 해야하는 걸까요? 여기서부터는 조금 어려운 내용이니까 건너뛰셔도 됩니다. 일단 Percent encoding을 하려면 해당 문자를 UTF-8이라고 하는(하나의 문자를 1과 0의 조합으로 나타낼 때 사용하는 규칙) 인코딩 규칙을 적용하여 1과 0의 조합으로 인코딩하고, 한 바이트 당 그 앞에 퍼센트(%) 기호를 붙여주면 됩니다. 한글은 한 글자가 3바이트로 표현되기 때문에 방금 전 '코딩'이라는 단어는, '2글자 X 3바이트'를 해서 총 6개의 퍼센트가 붙은 결과(**'%EC%BD%94%EB%94%A9'**)로 변환된 것입니다. 일단 이 말이 무슨 뜻인지 이해가 안 되면 넘어가셔도 됩니다. 이 부분은 나중에 다른 토픽에서 '유니코드', '인코딩' 이런 개념들을 다시 배우고 살펴봅시다. 일단은 URL 표준에 따라 이렇게 URL에서 어떤 문자들을 Percent encoding해야 하는 경우가 있다는 사실만 기억하세요.

바로 이런 URL encoding의 원리를 그대로 반영한 데이터 타입이 바로 application/x-www-form-urlencoded 타입입니다. 왜 지금 이름에 **urlencoded**라고 하는 단어가 붙어있는지, 이해가 되시죠? 참고로 form 태그에서 method 속성을 get이 아닌 post로 바꾸면 다음과 같이 해당 타입의 데이터가 URL의 query 부분에 표시되는 것이 아니라 리퀘스트의 바디에 들어가도록 할 수도 있습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%201.png&name=Untitled+1.png)

자, 이제 application/x-www-form-urlencoded 타입이 어느 정도 이해되시죠?

그런데 사실 요즘은 방금 전 회원 가입 페이지처럼 form 태그만으로 리퀘스트를 보내기보다는 자바스크립트로 직접 리퀘스트를 보내는 경우가 많습니다. 게다가 우리가 배운 JSON(application/json)보다 이 application/x-www-form-urlencoded 타입이 딱히 더 좋아보이도 않는데요. 하지만 문제는 웹의 초창기부터 form 태그만으로 리퀘스트를 보내는 코드가 너무 많이 작성되었다는 것입니다. 따라서 여전히 많은 레거시(legacy) 서비스의 서버에서 이 타입을 요구하고 있는데요. (그리고 기술적인 측면에서는, 이것은 좀 어려운 내용이긴 하지만 특정 도메인에서 다른 도메인으로 리퀘스트를 보낼 때(CORS 문제) Content-Type의 값이 x-www-form-urlencoded인 GET 리퀘스트는, 다른 Content-Type 값들에 비해 주고받아야하는 리퀘스트와 리스폰스의 수가 더 적다는 약간의 장점이 있기는 합니다. 이해가 안 된다면 일단 넘어갑시다.)  개발자는 어느 환경에서 개발하게 될 지 모르기 때문에 이 application/x-www-form-urlencoded 타입에 대해서도 잘 알아둬야 나중에 당황하지 않을 수 있습니다.

그리고 form 태그를 사용하지 않고 자바스크립트 코드로 직접 application/x-www-form-urlencdoed 타입의 데이터를 리퀘스트의 바디에 넣는 것도 가능한데요. 예를 들어 다음과 같습니다.

```jsx
const urlencoded = new URLSearchParams();
urlencoded.append('email', 'tommy@codeit.kr');
urlencoded.append('password', 'codeit123!');
urlencoded.append('nickname', 'Nice Guy!');

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: urlencoded,
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

이 코드를 사용하면 방금 전과 동일하게 리퀘스트를 보낼 수 있는데요. URLSearchParams라는 객체를 사용하면 자동으로 값에 URL encoding을 적용해주기 때문에, application/x-www-form-urlencoded 타입의 데이터를 fetch 함수로도 손쉽게 보낼 수 있습니다. 참고로 알아두세요.

## (2) multipart/form-data

이 컨텐츠 타입은 실무적으로 **굉장히 중요**한 타입입니다. 이때까지 우리가 살펴본 Content-Type 값들은, **하나의(Single)** 데이터의 타입을 나타내는 값들이었습니다. **text/html, vidoe/mp4, application/json 등 모두 데이터 하나의 타입을 나타냈었죠?** 그런데 이 multipart/form-data는 좀 특별합니다. multipart(여러 개의 파트)라는 단어에서도 유추할 수 있듯이 이 값은 **여러 종류의 데이터를 하나로 합친 데이터를 의미하는 타입**입니다.

그럼 언제 이런 값이 필요할까요? 잠깐 우리가 게시판에 게시글을 올릴 때를 생각해봅시다. 우리는 글의 제목과 내용을 적고, **이미지 파일**이나 **영상 파일**을 첨부하기도 합니다. 이때 우리가 '게시글 업로드' 버튼을 누르면 파일들의 내용도 리퀘스트에 함께 담겨서 가야할텐데 이때 Content-type의 값은 무엇이어야 할까요? 바로 이럴 때 사용되는 것이 multipart/form-data입니다. 이번에도 예를 통해 배워봅시다.

방금 위에서 봤던 CodeitShopping의 회원가입 페이지가 이렇게 바뀌었다고 해봅시다. 이제 프로필 이미지도 추가로 받는 것으로 바뀌었는데요.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%205.png&name=Untitled+5.png)

이제 이 페이지에서는 email, password, nickname 같은 텍스트 정보뿐만 아니라 프로필 이미지 파일도 함께 보내줘야합니다. 어떻게 해야 할까요?

이 multipart/form-data 타입의 데이터도 위에서 살펴본 application/x-www-form-urlencoded 타입 때처럼

**(1) form 태그만으로도** 그리고  **(2) 자바스크립트 코드만으로도**

리퀘스트의 바디에 담아 전송할 수 있습니다. 순서대로 해보겠습니다.

이 화면은 현재

```jsx
...
<body>
  <div id="signup">
    <p id="title">CodeitShopping</p> 
    <form action="/upload" method="post" enctype="multipart/form-data">
      <div>
        <input id="image" type="file" name="file" accept="image/*">
        <div id="profile">
          <div id="plus">+</div>
        </div>
       </div>
      <div>
        <div><span class="label">email</span></div>
        <input class="input" type="text" id="email" name="email">
      </div>
      <div>
        <div><span class="label">password</span></div>
        <input class="input" type="password" id="password" name="password">
      </div>
      <div>
        <div><span class="label">nickname</span></div>
        <input class="input" type="text" id="nickname" name="nickname">
      </div>
      <div>
        <input id="submit-btn" type="submit" value="Sign Up">
      </div>
    </form>
  </div>
</body>
... 
```

이런 HTML 코드로 이루어져 있는데요. (CSS, JavaScript 코드는 생략되어 있습니다.) 이번엔 form 태그의 **enctype 속성으로 application/x-www-form-urlencoded가 아니라 multipart/form-data가 써있는 것이 보이시죠?**

이번엔 자바스크립트 코드로 하는 방법도 봅시다.

```jsx
...

const formData = new FormData();
formData.append('email', email.value);
formData.append('password', password.value);
formData.append('nickname', nickname.value);
formData.append('profile', image.files[0], "me.png");

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

이 코드에서 보이는 것처럼, 자바스크립트 코드에서 multipart/form-data 타입의 데이터를 보내려면 FormData라는 객체를 사용해야합니다. 이 FormData를 사용하면 리퀘스트의 Content-Type 헤더의 값을 multipart/form-data로 직접 설정하지 않아도 자동으로 설정해줍니다. 일단은 이렇구나 정도만 이해하고 넘어가주세요.

자, 이제 핵심 내용이 등장합니다. 그럼 multipart/form-data는 실제로 어떻게 생겼는지 개발자 도구에서 보겠습니다.  위의 방법 중 하나를 선택해서 리퀘스트를 보내면, 아래와 같은 리퀘스트가 보내집니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%206.png&name=Untitled+6.png)

일단 리퀘스트의 헤드부터 봅시다. 지금 Content-Type 헤더의 값에 multipart/form-data라고 쓰여있죠? 그런데 그 옆에 쓰여있는 **boundary**라는 건 뭘까요? boundary는 '경계선'이라는 뜻인데요. 이게 뭔지는 리퀘스트의 바디 부분을 보면 알 수 있습니다. 화면 하단의 Form Data라고 쓰여있는 부분에서 view source를 클릭하면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=Untitled%207.png&name=Untitled+7.png)

이렇게 바디에 담긴 multipart/form-data 타입의 데이터를 볼 수 있습니다. 자, 이 내용을 좀 더 보기 편하게 처리해서 보여드리겠습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4361&directory=simple.png&name=simple.png)

지금 보면 총 4개의 데이터(email, password, nickname, profile)가 들어가있고 각각의 데이터는

```jsx
------WebKitFormBoundaryHu7uI1OMKko1vxwV
```

이 문자열을 기준으로 나뉘어 있다는 것을 알 수 있는데요. 어, 그런데 이 문자열 어디서 보지 않았나요? 방금 전 Content-Type 헤더의 값에서 multipart/form-data 뒤에 적혀있던 boundary의 값이었습니다.

```jsx
content-type: multipart/form-data; boundary=---------WebKitFormBoundaryHu7uI1OMKko1vxwV
```

왜 이런 boundary라는 부가 정보가 붙어있는 걸까요? **multipart/form-data 타입의 데이터는 그 안에 여러 종류의 데이터들이 들어있다고 했습니다. 따라서 서버가 이것을 받았을 때 각 데이터를 구분할 수 있도록 이런 boundary 값이 필요한데요.** 지금 위에서 boundary를 기준으로 각각의 데이터가 나뉘어있다는 것을 알 수 있습니다.

자, 이제 boundary로 구분된 각 영역의 데이터도 살펴봅시다. 지금 1, 2, 3번 데이터를 살펴보면

```jsx
Content-Disposition: form-data; name=데이터의 이름
// blank line
값
```

이런 형식으로 저장되어 있는 것을 볼 수 있습니다.

그리고 가장 마지막에, 프로필 이미지에 해당하는 4번 데이터는

```jsx
Content-Disposition: form-data; name="profile"; filename="me.png"
Content-Type: image/png
// blank line
값
```

이런 식으로 **filename**에 실제 이미지 파일의 원래 이름이 있고, 또 그것만의 **Content-Type 헤더의 값으로 image/png**가 설정되어 있는 것을 볼 수 있습니다. (값의 영역에는 원래 해당 이미지 파일의 바이너리 데이터가 존재하지만, 개발자 도구가 이를 보여주지 않는 것으로 추정됩니다)

정리하면, **multipart/form-data 타입은 여러 데이터를 하나로 묶어서 리퀘스트의 바디에 담아보내려고 할 때 사용되는 아주 중요한 타입**입니다. 실제 웹 서비스를 떠올려보면, 우리가 회원가입을 하든, 게시글을 업로드하든 다양한 데이터를 한번에 묶어서 보내는 경우가 많죠? 실제로 개발을 할 때도 자주 사용하게 되는 타입이니까 꼭 기억해두세요.    
 자, 이때까지 Content-Type 헤더의 값 중 하나인 **application/x-www-form-urlencoded** 타입과 **multipart/form-data** 타입에 대해 배웠는데요. 혹시 이 내용들 중에 당장 이해가 되지 않는 부분이 있어도 괜찮습니다.

하지만 이 타입들의 존재조차도 모르고 개발 실무로 가면 많이 헤맬 수 있기 때문에, 여러분의 시간 낭비를 줄여드리고자 미리 알려드립니다. 이 두 가지 타입이 존재한다는 것 정도만 기억하시고, 필요한 경우에 좀더 자세히 공부해보세요. 혹시 각 타입에 대해 좀더 깊게 공부하고 싶은 분들은 아래 링크를 참조하시기 바랍니다.

관련 공식 문서

- [POST 메소드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
- [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)





#### 그 밖에 알아야 할 내용들

이때까지 웹 개발을 하기 위해서 알아야 할 기초 지식들을 배웠습니다. 이번 노트에서는 아직 미처 다루지 못했지만 꼭 알고가야 할 내용들을 다뤄보겠습니다. 총 3가지 주제에 대해 배워보겠습니다. 먼저 Ajax라는 것부터 배워볼게요.

# 1. Ajax

초창기의 웹은 특정 웹 페이지에서 다른 웹 페이지로 갈 수 있는 링크(공식 명칭은 hyperlink입니다)를 클릭하면 **새로운 웹 페이지가 로드**되는 방식이었습니다. 오늘날에도 당연히 쓰이고 있는 방식인데요.

하지만 화면의 일부분만 바뀌면 되는 경우에도 **매번 새 페이지가 로드되는 방식**은 효율적이지도 않고 사용자에게도 그다지 좋지 않은 경험을 안겨주었습니다. 그래서 2000년대 초부터는 웹의 이런 단점을 극복하기 위해서 **Ajax**라는 기술이 도입되었습니다.  Ajax는 웹 브라우저가 **현재 페이지를 그대로 유지한 채로 서버에 리퀘스트를 보내고 리스폰스를 받아서**, 새로운 페이지를 로드하지 않고도 변화를 줄 수 있게 해주는 기술입니다.

Ajax는 **Asynchronous JavaScript And XML**의 줄임말인데요. 이는 자바스크립트를 사용해서 **비동기적으로(=사용자가 보고 있는 현재 화면에 영향을 미치지 않고 별도로 백그라운드에서 작업을 처리한다는 뜻)** 리퀘스트를 보내고 리스폰스를 받는데 기반이 되는 기술들의 집합을 의미합니다. 여기서 마지막에 XML이 쓰인 것은 Ajax라는 용어가 생겨난 당시에 XML이 가장 많은 인기를 누리던 데이터 타입이었기 때문입니다. 오늘날에는 XML 말고 JSON도 꽤 많이 쓰이고 있긴 하지만요.

자, 어쨌든 지금 중요한 것은 Ajax의 원리를 이해하는 것입니다. Ajax의 원리는 여러분이 흔히 쓰는 구글 맵(Google Map) 같은 웹 서비스를 생각해보면 이해하기 쉽습니다. 구글 맵 웹 페이지를 예로 들어볼게요.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4362&directory=Untitled.png&name=Untitled.png)

제가 지금 구글 맵에서 서울특별시 중구 을지로 쪽을 보다가 '명동 성당'의 정보가 보고 싶어졌다고 해봅시다. 그럼 명동 성당 아이콘을 클릭하면 되겠죠? 이렇게 명동 성당을 클릭했을 때, **초창기의 웹이었다면** 아예 새로운 페이지를 로드해야 했을 겁니다. 하지만 오늘날 우리가 쓰는 구글 맵이 그렇지는 않죠? 실제로 명동 성당 아이콘을 클릭해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4362&directory=Untitled%201.png&name=Untitled+1.png)

현재 웹 페이지는 그대로 유지되고, 단지 그 밑에 명동 성당에 관한 간단한 정보창이 떠오를 뿐입니다. 이것이 가능한 이유는 웹 브라우저가, **사용자가 보고 있는 현재 페이지를 방해하지 않고 별도로 서버로 리퀘스트를 보내고, 리스폰스를 받아왔기 때문입니다.**

만약 이런 Ajax 기술이 없었다고 생각해보세요. 우리는 웹 서비스를 사용할 때마다 별로 크게 바뀌지도 않는 화면을 매번 로드하는 불편함을 느꼈을 겁니다. 하지만 Ajax 기술 덕분에 구글 맵처럼 부드러운 UX(User Experience, 사용자 경험)를 제공하는 수많은 웹 서비스들을 사용할 수 있게 된 겁니다.

그럼 자바스크립트로는 어떻게 이 Ajax 기술을 사용해서 리퀘스트를 보내고 리스폰스를 받을 수 있을까요? 앞으로는 Ajax 기술을 기반으로 한 통신을 그냥 짧게 줄여서 'Ajax 통신'이라고 할게요.

자바스크립트에서는 **XMLHttpRequest**라고 하는 객체를 통해 Ajax 통신을 할 수 있습니다. XMLHttpRequest를 사용하는 예시 코드는 다음과 같은데요.

```jsx
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://learn.codeit.kr/api/members');
xhr.onload = function () {
  console.log(xhr.response);
};
xhr.onerror = function () {
  alert('Error!');
};
xhr.send();
```

지금 가장 첫 번째 줄의 코드에 XMLHttpRequest라고 하는 생성자 함수로 객체를 생성한 것 보이시죠? 이런 식의 코드를 작성하면 Ajax 통신을 할 수 있습니다. 궁금한 분들은 이 코드를 개발자 도구에 붙여넣고 직접 실행해보세요.

그런데 예전엔 XMLHttpRequest를 이렇게 직접 사용할 일이 많았지만 요즘에는 굳이 그렇게 하지 않아도 됩니다.(2020년 1월 기준)  그 이유에는 크게 두 가지가 있는데요.

첫 번째 이유는 XMLHttpRequest 객체 이후에 등장한 함수, 바로 이때까지 **우리가 배운 fetch 함수를 사용해서 Ajax 통신을 할 수 있기 때문입니다.** 이때까지 배운 fetch 함수가 Ajax 통신을 하는 함수였다니 놀랍죠? fetch 함수는 XMLHttpRequest 객체를 사용할 때에 비해 좀 더 짧고 간단한 코드로 Ajax 통신을 할 수 있게 해주는 함수입니다. 그래서 많은 개발자들의 환영을 받았죠.

두 번째 이유는 XMLHttpRequest을 기반으로 더 쓰기 편하게 만들어진 **axios라는 패키지**가 존재하기 때문입니다. (자바스크립트에서는 라이브러리보다는 '패키지'라는 단어를 더 일상적으로 사용하기 때문에 '패키지'라고 표현하겠습니다.)

이런 이유들 때문에 굳이 XMLHttpRequest 객체를 직접 가져다 쓸 필요성이 줄어든 것입니다.

**개발 실무에서는 fetch 함수 또는 axios 패키지를 사용하는데요.** 보통 axios 패키지에 좀더 다양한 기능들이 있어서 주로 axios를 쓰는 편이지만, 외부의 패키지를 설치하고 싶지 않은 경우에는 fetch 함수를 사용하기도 합니다. 그리고 일단 fetch 함수의 원리에 대해서 알아야 axios도 잘 사용할 수 있기 때문에 이번 토픽에서는 fetch 함수를 중심으로 내용을 진행하고 있는 겁니다. fetch 함수의 어떤 원리를 알아야하는지에 대해서는 챕터 3부터 알아봅시다.

자, 다시 원래의 이야기로 내용을 마무리하겠습니다. 앞으로 웹 개발을 할 때는 Ajax 통신인 것과 Ajax 통신이 아닌 것을 구분할 수 있어야 합니다. 일단 Ajax 통신이 아닌 것은 이런 태그를 사용자가 클릭하도록 해서

```html
<a href="https://learn.codeit.kr/api/main">메인 화면으로 가기</a>
```

웹에서의 전통적인 방식처럼 새 페이지를 로드하게 하는 방식이고, Ajax 통신인 것은

```jsx
// (위 예시를 단순화한 코드입니다)
function getLocationInfo(latitude, longitude) {
  fetch('https://map.google.com/location/info?lat=latitude&lng=longitude')
    .then((response) => response.text())
    .then((result) => { /* 사용자 화면에 해당 위치 관련 정보 띄워주기 */ });
}
```

이런 식으로 사용자가 느낄 수 없게, 리퀘스트를 보내고 리스폰스를 받아 현재 페이지에 원하는 변화를 주는 방식이죠.

사용자 경험을 고려해서

(1) 언제 아예 새로운 페이지를 로드하고 (2) 언제 Ajax 통신을 해서 현재 페이지 내에서 부드러운 변화를 줄 건지를

잘 결정하는 것은 중요합니다.

양쪽 모두 공부해둬야 필요한 순간에 코드로 잘 구현해낼 수 있겠죠? 일단 **이때까지 배운 fetch 함수가 사실은 Ajax 통신을 하는 함수였다는 사실만큼은 꼭 기억합시다!**

# 2. GET, POST, PUT, DELETE 이외의 메소드들

이때까지 우리는 리퀘스트에 설정할 수 있는 GET, POST, PUT, DELETE 메소드에 대해 배웠습니다. 그런데 사실 메소드에는 이것 말고 다른 것들도 있습니다. 그중에서도 알아두면 좋은 2가지 메소드를 소개합니다.

## (1) PATCH

PATCH 메소드는 기존의 데이터를 수정할 때 사용하는 메소드입니다. 그럼 우리가 배운 PUT 메소드와는 어떤 차이가 있을까요?  **PUT은 기존 데이터를 아예 새로운 데이터로 덮어씀으로써 수정**하려고 할 때 쓰는 메소드이고, **PATCH는 새 데이터로 기존 데이터의 일부를 수정**하려고 할 때 쓰는 메소드입니다.

그러니까 예를 들어 서버에

```jsx
{
  "id": 3,
  "name": "Michael",
  "age": 25
}
```

이런 식으로 표현되는 데이터가 있을 때, 리퀘스트에 **PATCH** 메소드를 설정하고

```jsx
{
  "age": 30
}
```

이라는 데이터를 바디에 담아서 보내면,

```jsx
{
  "id": 3,
  "name": "Michael",
  "age": 30
}
```

서버의 기존 데이터는 이렇게 **age 속성만 갱신되지만**, 같은 리퀘스트더라도 PUT 메소드를 설정해서 보내면

```jsx
{
  "age": 30
}
```

이렇게 서버의 데이터에는 age 속성만 남게 됩니다. 어떤 차이가 있는지 이해되시나요?  이전에 배운 PUT 메소드는 서버에 존재하는 기존 데이터를 새로운 데이터로 아예 **덮어쓰기하는** 방식으로 수정합니다. 따라서 **PUT 메소드의 경우에는 원하는 새 데이터의 온전한 모습 전체를** 바디에 담아서 보내줘야 합니다. 아래의 데이터처럼 말이죠.

```jsx
{
  "id": 3,
  "name": "Michael",
  "age": 30
}
```

하지만 **PATCH의 경우에는 보통, 리퀘스트의 바디에 있는 내용을 기존 데이터의 각 속성과 대조 및 병합(merge-patch)하면서 데이터를 수정**하기 때문에 때문에, 바디에 수정할 프로퍼티의 데이터만 넣어줘도 되는 겁니다.

데이터를 수정하는 메소드 중에서 **PUT은 덮어쓰기, PATCH는 일부 수정**를 의미한다는 사실을 기억해두세요.

## (2) HEAD

메소드에는 HEAD 메소드라는 것도 있습니다. **HEAD 메소드는 GET 메소드와 동일합니다. 대신 GET 리퀘스트를 보냈을 때 받았을 리스폰스에서 바디 부분은 제외하고, 딱 헤드 부분만 받는다는 점이 다른데요.** 왜 이런 메소드가 필요할까요?  예를 들어, 웹 브라우저가 서버로부터 용량이 엄청나게 큰 영상 파일을 받고자 하는 상황이라고 해봅시다. 만약 파일의 용량이 너무 큰 경우에는 파일을 받지 않으려고 하는데요. 이때 파일의 용량만 조사하기 위해서 HEAD 메소드가 담긴 리퀘스트를 보내볼 수 있습니다. 만약 https://movie.net/matrix (영화 '매트릭스') 라는 URL이 있다고 할 때 해당 URL로 HEAD 메소드가 설정된 리퀘스트를 보내면 그 리스폰스는 바디는 없고 헤드만 있을 겁니다. 대신 이때 **Content-length와 같이 컨텐츠 용량을 나타내는 헤더가 있어서 파일의 용량 정보는 알게 될 수도 있는데요.** 그럼 이 용량을 사용자에게 보여주고 그래도 영화 파일을 시청할 건지 물어보는 코드를 작성할 수 있겠죠? 바로 이렇게 실제 데이터가 아니라 데이터에 관한 정보만 얻으려고 하는 상황 등에 HEAD 메소드가 활용됩니다.

방금 본 것처럼 우리가 배운 GET, POST, PUT, DELETE 외에도 리퀘스트에 설정할 수 있는 메소드 종류에는 여러 가지가 있습니다. 각 메소드의 의미를 잘 이해하고 기억해두면 Web API를 설계하는데 큰 도움이 됩니다. 혹시 또 다른 메소드들에 대해서도 알고 싶다면 [이 링크](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)를 참조하세요.

# 3. 웹 통신 말고 다른 통신도 있어요.

우리는 이때까지 웹에서 이루어지는 통신에 대해서 배웠습니다. 그런데 이 시점에서 한 가지 짚고 넘어가야 하는 사실이 있습니다. 사실 하나의 컴퓨터와 다른 컴퓨터가 통신하는 공간에는 웹만 있는 것은 아니라는 사실입니다. 이게 무슨 말일까요? 이전에 살펴본 웹의 특징에는 **'HTTP, HTTPS 같은 프로토콜을 사용하여 통신한다'**는 것도 있었죠?

하지만 컴퓨터끼리 통신하는 프로토콜에는 이것만 있는 것이 아닙니다. HTTP, HTTPS 이외에도, FTP, SSH, TCP, UDP, IP, Ethernet 등 정말 다양한 종류의 프로토콜들이 있는데요. 그리고 여기서 중요한 것은 이런 프로토콜들은 각각 네트워크 통신의 특정 계층에 속한다는 점입니다.

사실 우리가 배운 HTTP(HyperText Transmission Protocol)는

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4362&directory=Untitled%202.png&name=Untitled+2.png)

이 이미지에서 보이는 것처럼 보통, 그 밑에 TCP(Transmission Control Protocol), 그리고 그 밑에 IP(Internet Protocol), 그리고 그 밑에 Ethernet이라는 프로토콜을 기반으로 동작하고 있습니다. 그러니까 사실 HTTP나 HTTPS 프로토콜을 기반으로 한 통신은 그 하위 프로토콜을 기반으로 이루어지는 겁니다. 이때 위로 갈수록 고수준 프로토콜, 아래로 갈수록 저수준 프로토콜이라고 하는데요. HTTP는 매우 고수준에 해당하는 프로토콜임을 알 수 있습니다. '웹 개발자'라고 하면 당장은 HTTP 프로토콜 상에서 이루어지는 일만 공부한다고 해도 큰 어려움이 없을 수도 있습니다. 하지만 특히 서버 쪽을 담당하는 '백엔드 개발자'의 경우에는 서비스의 사용자 수가 늘어나서 리퀘스트의 수가 늘어날수록 HTTP 아래에 있는 프로토콜에 대해서도 어느 정도 알고 있어야 각종 성능 문제 등을 해결할 수 있습니다. 그래서 혹시 '백엔드 개발자'를 꿈꾸는 분들이라면 당장은 공부하지 않더라도 다른 프로토콜들에 대해서도 일단은 미리 관심을 가져두는 게 좋습니다.

그리고 '웹 개발자' 뿐만 아니라

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4362&directory=Untitled%203.png&name=Untitled+3.png)

예를 들어, 이렇게 HTTP 없이 TCP라는 프로토콜만으로 통신하는 코드를 짜는 개발자들도 많이 존재합니다. 이제 여기부터는 웹 개발 세계 밑에 감춰진 또 다른 개발 세계가 존재하는데요. MMORPG 게임 서버 개발이나, IOT 기기 개발 등과 같이 성능 최적화 등이 필요한 경우에는 이런 저수준 프로토콜로 통신하는 프로그램을 개발하기도 합니다. 일반 사용자에게는 웹이 컴퓨터 네트워크의 전부인 것 같지만 실제로는 웹 밑에 가려진 또 다른 거대한 세계가 있다는 사실은 기억하고 가주세요.





# 비동기 실행과 Promise 객체

아래 코드를 봐보자. 

```js

console.log('Start')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {console.log(result)})

console.log('End')
```

Start - response 내용 - End가 출력되야 되잖아. 

근데 해보면, 그게 아님. `Start - End - response 내용` 이 출력됨. 

**왜 이럴까?**

Fetch함수의 비동기 실행 때문. 

위 코드에서 먼저 

1.  Start 출력 
2. fetch함수가 request보낸다. 
   - then으로 Callback이 등록되어 있다. 이 `Callback` 이라는 것은 서버로부터 response를 받았을 때 실행된다. 
   - 두번째, then도 첫번째 콜백이 실행되고 나면 그 다음에 실행된다. 첫번째 콜백의 리턴값을 넘겨받게 된다. 
   - 중요한 점은 `then`은 callback을 단지 등록만 한다. 실행하는 것이 아니다. 
3. 그래서, `then` 메소드가 콜백을 등록하고 나면, 그 다음 console.log('End')가 실행된다. 
4. 그 후에, `response`가 도착하고 나면, 서버에 등록해 두었던 `then` 메소드가 실행되게 된다. 

**이처럼 한번 실행된 작업이 완료되기 전에, 다음 실행으로 넘어가고 나중에 콜백이 실행되므로써 작업이 마무리 되는 것을 비동기 실행이라고 한다.** Fetch함수가 리턴하는 객체가 이 비동기실행과 관련이 있고, 이 객체를 Promise 객체라고 한다.  



코드를 다시 보겠습니다.

```jsx
console.log('Start!');

fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

console.log('End'); 
```

지금 이 코드에는 다음과 같은 2개의 콜백이 있습니다.

(1) **(response) ⇒ response.text()** (2) **(result) ⇒ { console.log(result); }**

fetch 함수가 리퀘스트를 보내고, 서버의 리스폰스를 받게 되면 그때서야 이 콜백들이 순서대로 실행되는데요.

이 사실을 바탕으로, 전체 코드의 실행 순서를 다시 정리하자면

1. console.log('Start');
2. fetch 함수(리퀘스트 보내기 및 콜백 등록)
3. console.log('End');
4. 리스폰스가 오면 2. 에서 then 메소드로 등록해뒀던 콜백 실행

이렇게 됩니다. 이렇게 특정 작업을 시작(리퀘스트 보내기)하고 완벽하게 다 처리(리스폰스를 받아서 처리)하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것을 **'비동기 실행'**이라고 합니다. *이에 반해 한번 시작한 작업은 다 처리하고 나서야, 다음 코드로 넘어가는, 우리에게 익숙한 방식의 실행은 **'동기 실행'**이라고 하는데요.* 만약 이 코드에서 fetch 함수가 비동기 실행되지 않고, 동기 실행되는 함수였다고 **가정**한다면 실행 흐름이 어떻게 됐을까요? 이렇게 됐을 겁니다.

1. console.log('Start');
2. fetch 함수(리퀘스트 보내기)
3. 리스폰스가 올 때까지 코드 실행이 잠시 '**정지**'되고, 리스폰스가 오면 필요한 처리 수행
4. console.log('End');

이런 순서로 코드가 실행되었을 겁니다. 동기 실행은 한번 시작한 작업을 완료하기 전까지 코드의 실행 흐름이 절대 그 다음 코드로 넘어가지 않습니다. 일단 시작한 작업을 완벽하게 처리하고 난 다음에야 그 다음 코드로 실행 흐름이 넘어가는데요. 따라서 동기 실행의 경우 코드가 보이는 순서대로, 실행됩니다.

이와 다르게 비동기 실행은 한번 작업을 시작해두고, 그 작업이 완료되기 전이더라도 콜백만 등록해두고, 코드의 실행 흐름이 바로 그 다음 코드로 넘어갑니다. 그리고 추후에 특정 조건이 만족되면 콜백이 실행됨으로써 해당 작업을 완료하는 방식이죠. 따라서 비동기 실행에서는 코드가 꼭 등장하는 순서대로 실행되는 것이 아닙니다. 그래서 코드를 해석할 때 주의해야 하는데요.

그렇다면 '비동기 실행'이라는 건 왜 존재하는 걸까요? 그건 바로 보통 '비동기 실행'이 '동기 실행'에 비해, **동일한 작업을 더 빠른 시간 내에 처리**할 수 있기 때문입니다. 방금 전 fetch 함수가 '동기 실행'된다고 가정했을 때를 생각해봅시다. fetch 함수가 실행되고 리스폰스가 올 때까지 기다린다는 것은 무슨 의미일까요? 바로 리스폰스가 올 때까지는 아무런 작업도 할 수 없다는 뜻입니다. 그만큼 **시간을 낭비**하게 되는 셈이죠.

하지만 만약 비동기 실행이라면 일단 리퀘스트 보내기, 콜백 등록까지만 해두고, 바로 다음 작업(`console.log('End');`)을 시작함으로써 시간을 절약할 수 있습니다. 이 설명을 도식화하면 다음과 같습니다.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4365&directory=Untitled.png&name=Untitled.png)

이미지 상단은 fetch 함수가 동기 실행된다고 **가정했을 때**의 경우,  이미지 하단은 fetch 함수가 비동기 실행되는 **실제의 모습**을

의미합니다. 지금 동기 실행에서는 모든 작업이 순차적으로 수행되고 있는 게 한눈에 보이죠? 이에 비해, 비동기 실행에서는 리스폰스를 기다리는 시간 동안 그 이후의 작업을 미리 처리하고 있습니다. 그래서 비동기 실행이 최종 작업 종료 시간이 더 짧다는 것을 알 수 있습니다.(물론 실제로는 비동기 실행의 경우에는 콜백을 등록하는 시간적 비용이 존재하지만 일단은 이해를 위해서 이런 부분은 생략하고 생각합시다.)

참고로, 현재 보라색 박스로 나타낸 fetch 함수 바로 다음 코드의 실행이 지금보다 더 오래 걸리는 작업이라고 가정한다면, 비동기 실행의 상대적인 작업 효율성은 더 올라갑니다. 보라색 영역이 둘 다 더 길어진다고 생각해보면 이해하실 수 있을 겁니다..

자바스크립트로 웹 통신을 하는 코드를 작성하려면 이런 비동기 실행의 원리와 그 장점에 대해 잘 이해하고 있어야 합니다. 이제부터는 자바스크립트에서 비동기 실행을 다루기 위해 알아야 하는 **Promise 객체, async/await 구문 등**에 대해 배워보겠습니다. 여러분이 실무에서 일을 하기 위해서는 반드시 제대로 이해하고 가야 하는 것들이니까 집중해서 계속 배워봅시다.



이전 노트에서는 fetch 함수가 비동기 실행된다는 게 무슨 의미인지, 그리고 비동기 실행이 동기 실행에 비해서 가지는 장점이 무엇인지 배워봤습니다. 사실 자바스크립트에는 fetch 함수 말고도, 비동기 실행되는 함수들이 존재합니다. 그 예시들을 하나씩 살펴보겠습니다.

# 1. setTimeout 함수

setTimeout 함수는, 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수입니다.

```jsx
console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');
```

예를 들어 이런 코드가 있을 때, 지금 가운데에 있는 setTimeout 함수는 첫 번째 파라미터에 있는

`() ⇒ { console.log('b'); }`,

이 콜백의 실행을, 두 번째 파라미터에 적힌 2000 밀리세컨즈(=2초) 뒤로 미룹니다. 그래서 이 코드를 실행하면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4366&directory=Untitled.png&name=Untitled.png)

이렇게 a와 c가 먼저 출력되고, **약 2초가 지난 후에 b가 출력**됩니다. 실제로 확인하고 싶은 분들은 직접 코드를 복사해서 개발자 도구에서 확인해보세요.

fetch 함수에서는 콜백이 실행되는 조건이, '리스폰스가 도착했을 때'였다면, setTimeout에서 콜백이 실행되는 조건은, '설정한 밀리세컨즈만큼의 시간이 경과했을 때'입니다. 어쨌든 둘 다 콜백의 실행을 나중으로 미룬다는 점에서는 비슷합니다. 이 setTimeout 함수는 아주 자주 활용되는 비동기 실행 함수이고 이번 토픽에서도 앞으로 자주 사용할 거니까 꼭 기억하세요.

# 2. setInterval 함수

setInterval 함수는 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수입니다. Interval는 '간격'이라는 뜻인데요. 바로 위에서 봤던 예시 코드에서 setTimeout 부분만 setInterval로 바꿔서 실행해보겠습니다.

```jsx
console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');
```

이렇게 쓰면 이제 b를 출력하는 콜백이 2초 간격으로 계속 실행됩니다. 실제로 확인해보면

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4366&directory=Untitled%201.png&name=Untitled+1.png)

a와 c가 출력되고, 약 2초 뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복 출력되는 것을 볼 수 있습니다. (현재 b 왼쪽에 쓰여 있는 5는 b가 다섯 번 출력되었음을 개발자 도구가 간단하게 나타낸 것입니다)

# 3. addEventListener 메소드

addEventListener 메소드는 DOM 객체의 메소드인데요, 혹시 관련된 내용을 공부하고 싶으신 분들은 '인터랙티브 자바스크립트' 토픽의 아래의 레슨들을 참고하시면 됩니다.

- ['이벤트와 버튼 클릭' 레슨](https://www.codeit.kr/learn/courses/javascript-intermediate/3778)
- ['이벤트 핸들러 등록하기' 레슨](https://www.codeit.kr/learn/courses/javascript-intermediate/3800)

만약 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을 때, 실행하고 싶은 함수가 있다면

(1) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나,  (2) 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 됩니다.

이런 식으로 말이죠.

(1) onclick 속성

```jsx
...

btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
};

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다. 
btn.onclick = (e) => {
  console.log('Hello Codeit!');
};

...
```

(2) addEventListener 메소드

```jsx
...

btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
});

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.addEventListener('click', (e) => {
  console.log('Hello Codeit!');
});

... 
```

이렇게 클릭과 같은 특정 이벤트가 발생했을 때 **실행할 콜백을 등록하는 addEventListener 메소드도 비동기 실행과 관련이 있습니다.** 파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(클릭 이벤트 발생)이 만족될 때(마다) 실행되기 때문입니다.  
 자, 이때까지 자바스크립트의 대표적인 비동기 실행 함수들을 살펴봤는데요. 그런데 이때까지 배운 fetch 함수와 이번 노트에서 본 함수들을 보면 차이점이 있습니다. 일단 이번 노트에서 배운 함수들을 보면

```jsx
setTimeout(콜백, 시간) 
setInterval(콜백, 시간)
addEventListener(이벤트 이름, 콜백)
```

이런 식으로, 함수의 아규먼트로 바로 콜백을 넣습니다. 그런데 fetch 함수는 이 함수들과는 전혀 다르게 생겼습니다. 지금 보면,

```jsx
fetch('https://www.google.com')
  .then((response) => response.text()) // fetch 함수가 리턴하는 객체의 then 메소드를 사용해서 콜백을 등록
  .then((result) => { console.log(result); });
```

fetch 함수는 콜백을 파라미터로 바로 전달받는 게 아니라, **fetch 함수가 리턴하는 어떤 객체의 then 메소드를 사용해서 콜백을 등록**하는데요.

위에서 본 함수들처럼, fetch 함수도 이런 식으로 코드를 써야할 것만 같은데.

```jsx
fetch('https://www.google.com', (response) => response.text())
```

왜 fetch 함수만 사용하는 형식이 다른 걸까요? 그건 바로 fetch 함수는, 좀 더 새로운 방식으로 비동기 실행을 지원하는 자바스크립트 문법과 연관이 있기 때문입니다. 사실 **fetch 함수는 Promise 객체라는 것을 리턴하고, 이 Promise 객체는 비동기 실행을 지원하는 또 다른 종류의 문법에 해당**하는데요. 이게 무슨 말인지 다음 영상에서 살펴봅시다.



#### Fetch 함수는 Promise 객체를 리턴합니다. 

fetch가 promise를 리턴한다는데, 그게 대체 뭐여? `then`은 **Promise**객체의 메소드 인 것. 

```js
console.log('Start!');

fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

console.log('End'); 
```

Promise객체는 작업에 관한 '**상태 정보**'를 가지고 있는 객체. 

`fetch('https://www.google.com')`는 리퀘스트를 보내고 리스폰스를 받는 작업을 수행한다. 작업이 잘 될 수도 있고, 인터넷 끊기거나 하면서 실패할 수도 있다. 바로 이런 작업의 결과가 `fetch`함수가 리턴하는 Promise 객체에 저장된다. 그래서 fetch함수가 return하는 `Promise` 객체를 보면, 그 작업이 성공했는지 실패했는지를 알 수 있다. 

Promise 객체는 세 가지중 하나의 상태를 갖게 된다. 

![promise](./images/promise.png)

그럼, 맨 처음 fetch함수가 리턴한 Promise객체는 pending 상태(작업 진행 중). 그 다음 response를 정상적으로 전달받으면, 해당 Promise객체는 fulfilled 상태가 된다. 만약, 아예 request를 못보냈거나, response를 못받았으면, rejected 상태가 되는 것. 

![promise](./images/promise2.png)

여기서 작업이 만약 성공해서, fulfilled 상태가 되면, **Promise**객체는 그 작업의 성공 결과도 함께 갖게 된다. 

현재는 `response`가 작업의 성공 결과에 해당되는 것. 이것을 앞으로 `작업성공결과` 라고 표현할게. 

![promise](./images/promise3.png)

반대로 rejected가 되면, 작업 실패에 관한 정보를 갖게 된다. 이것을 `작업실패정보` 라고 부를게. 

![promise](./images/promise4.png)



다시 코드를 해석해 보자. 

```js
console.log('Start')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {console.log(result)})

console.log('End')

```

`Promise`객체의 메서드인 `then`은 `Promise` 객체가 Pending 상태에서, Fulfilled 상태가 될 때, 실행할 콜백을 등록하는 메서드. response를 정상적으로 받았을 때, `fulfilled`가 되고, 콜백이 실행되는 것. 

즉, `then` 메서드란 : `Promise`객체가 `fulfilled`상태가 되었을 때, 실행할 콜백을 등록하는 것. 

그리고, `fulfilled`상태가 될 때, `Promise`객체는 작업성공결과를 갖는다고 했지. Promise결과의 작업성공 결과는 이렇게 **response**라는 파라미터로 넘어오는 것. 



## Promise Chaning

두번째 `then`을 봐보자. 얘도 콜백을 설정하고 있다. 첫번째 `then` 메소드에서 설정한 콜백이 실행된 후 실행된다. 여기서 중요한 사실은, `then`메소드 뒤에는 계속해서 `then` 메소드를 붙일 수 있다는 것. 

Promise 객체들 계속해서 연결해 가는게, Promise Chaning. 

근데, 지금, `Promise`객체는 맨 처음꺼만 Promise객체 아니야? 왜 Promise Chaning이라고 표현해?

왜냐면, `then`메소드도 새로운 `Promise` 객체를 리턴하는 거거든. 애초에 당연한게, then메소드는 Promise객체의 메서드잖아. 그러면, then 메소드가 Promise 객체를 리턴 했어야, then도 사용할 수 있었던 거지.

**then 메소드는 새로운 Promise 객체를 리턴한다.** -> 이 사실이 아주 중요하다. 

한 가지 더 중요한 사실은, **then**메소드가 리턴한 **Promise** 객체는, 가장 처음에는 Pending 상태이다. 하지만, 나중에 then메소드로 등록한 콜백이 실행되고(아래 빨간박스) 콜백에서 어떤 값을 리턴하면, then메소드가 return했던 Promise 객체가 다시 영향을 받게 된다. 이때 콜백에서 어떤 값을 리턴하는가에 따라서, 받는 영향이 달라진다. 

![promise](./images/promise5.png)

크게 두가지 경우로 나눠볼 수 있다. 첫번째는 callback안에서, Promise객체를 리턴하는 경우, 두번째는 callbackd 안에서 Promise 객체가 아닌 것을 리턴하는 경우. 

![promise](./images/promise6.png)

1. **Callback에서 `Promise`객체를 `return`하면,** `then`메소드가 `return`했던 `Promise` 객체는 Callback이 return한 `Promise`의 결과와 동일한 상태와 결과를 갖게 된다. 

   즉, callback이 return한 Promise 객체가 fulfilled가 되면, then 메소드가 return했던 Promise 객체도 fulfilled 상태가 되고, 동일한 작업성공 결과를 갖게 된다. 

   ![promise](./images/promise7.png)

   반대로, callback이 return한 Promise 객체가 rejected 상태가 되면, then 메소드가 return했던 Promise 객체도 똑같이 rejected 상태가 되고 동일한 작업실패정보를 갖게 된다. 

   ![promise](./images/promise8.png)

2. **두번째 Callback에서 Promise객체가 아닌 단순 숫자, 문자열, 일반 객체를 리턴하는 경우는?**

   이 경우는 then메소드가 return했던 Promise객체는 fulfilled 상태가 되고, callback의 return값을 작업성공 결과로 갖게 된다. 

   ![promise](./images/promise9.png)



제대로 이해해 보자. 코드에서, fetch함수와 각각의 then메소드는 Promise 객체를 return하고, 모든 Promise 객체는 현재 Pending인 상황.  

![promise](./images/promise10.png)

일단 fetch함수가 return했던 Promise객체가 fulfilled 상태가 되면, 첫번째 then 메소드 안에 콜백이 실행되겠지. 이때, 콜백 안에는 response객체의 text()라는 메소드가 호출되고, 이건 사실 Promise객체를 리턴하는 메소드야. 어쨋든 이 text가 잘 실행 되잖아? 그러면, 현재 then 메소드가 return하는 Promise 객체도 fulfilled 상태로 바뀌고, 그 작업성공결과로 그 response.text()를 가지고 있겠지. 

그러고 이제 두번째 then이 실행되야지. 그러면, 이번에는 콜백에서 promise객체가 아닌, 일반 문자열? 혹은 일반객체가 return된다. 그러면, 이제 두번째 then이 return하는 promise객체는 fulfilled로 변하고, 작업성공결과로 얘를 가져가게 되는 것. 	


```jsx
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    // ...
  });

console.log('End'); 
```

이전 챕터에서는 위 코드에서 보이는 것처럼 response 객체의 text 메소드로 리스폰스의 내용을 추출(`response.text();`)하고 이것을 Deserialize하거나(`JSON.parse(result);`)

```jsx
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    // ...
  });

console.log('End');
```

response 객체의 json 메소드로 리스폰스의 내용 추출과 Deserialize를 한 번에 수행(`response.json()`)할 수 있다는 사실을 배웠습니다.

그런데 그 때 배우지 않았던 중요한 사실 하나가 있습니다. 그것은 바로 이 **text 메소드와 json 메소드가 사실은 Promise 객체를 리턴하는 메소드라는 사실입니다.** 이게 무슨 말인지 하나씩 설명해드릴게요.

# 1. text 메소드

fetch 함수로 리스폰스를 잘 받으면, response 객체의 **text 메소드**는, **fulfilled 상태**이면서 **리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값**을 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 문장이 조금 기니까 반복해서 읽어보세요. 이때 그 작업 성공 결과는 string 타입인데요. 이때 그 값이 만약 JSON 데이터라면 이전에 배운 것처럼 JSON 객체의 parse 메소드로 Deserialize를 해줘야합니다.(`JSON.parse(result);`)

# 2. json 메소드

fetch 함수로 리스폰스를 잘 받으면, response 객체의 **json 메소드**는, **fulfilled 상태**이면서, **리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체**를 '작업 성공 결과'로 가진 Promise 객체를 리턴합니다. 만약 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 됩니다.

자, 이때까지 우리가 계속 봐온 **response 객체의 text 메소드와 json 메소드가 사실 Promise 객체를 리턴하는 메소드**였다는 사실, 놀랍죠?

바로 이 내용을 이전 영상에서 배웠던 내용인 'then 메소드가 리턴했던 Promise 객체(A)는 그 콜백에서 리턴한 Promise 객체(B)와 동일한 상태와 결과를 갖게 된다'는 규칙과 연관지어서 생각해봅시다. 이 말은 곧, 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작된다는 말과도 같은데요.

이때문에 response 객체의 text 메소드 또는 json 메소드 이후에 등장하는 then 메소드부터는 string 타입의 값이나 자바스크립트 객체를 갖고 바로 원하는 작업을 할 수 있는 겁니다. text, json 메소드가 Promise 객체를 리턴하는 메소드라는 사실, 잘 기억하세요!



## Promise Chaning이 필요한 경우

Promise Chaning은 비동기작업을 순차적으로 수행해야 할 때, 전체코드를 조금 떠 깔끔하게 나타내기 위해서 사용한다.

아래 코드를 보면, 두번째 `then` 메소드 안에서 또 `fetch` 함수를 콜하고 있다.  

0번째 사용자의 id를 구해고, 그 id를 써서 fetch로 다시 request를 보냈다. 이때, 쿼리부분에 다시 id를 넣은 것. 그러면, 1번 사용자가 작성한 글들이 나온다. 

![promise](./images/promise11.png)코드를 아래처럼 바꿔도 똑같이 실행이 된다. 두번째 return에 fetch를 붙이고, 얘네들을 아예 바깥으로 뺏다. 

![promise](./images/promise12.png)

당연히 마찬가지로 실행이 되겠지. 두번째 then메소드는 그 안에 callback의 return 내 fetch가 리턴하는 값 Promise의 성공결과와 status를 갖게 되겠지. 

이런 성질을 잘 이용해서, 가독성이 좋게 만들어 놓은 경우가 대부분이다. 

**비동기 작업을 순차적으로 하기 위해, Promise Chaning을 한다.** 아무리  비동기 작업이 많더라도, 깔끔하게 코드를 작성할 수 있다. 



예시)

```js
fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    return newMembers;
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMembers),
  }))
  .then((response) => { 
    if (response.status === 200) {
      return fetch('https://learn.codeit.kr/api/members');
    } else {
      throw new Error('New members not added');
    }
  })
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });
```

지금 각 then 메소드 안의 콜백에서 수행되는 작업을 정리하면 다음과 같습니다.

**1. 첫 번째 then 메소드 안의 콜백**

response 객체의 json 메소드를 호출하여 리스폰스의 바디 부분에 있는 JSON 데이터를 Deserialize해서 생긴 객체를 작업 성공 결과로 가진 Promise 객체를 리턴합니다.

**2. 두 번째 then 메소드 안의 콜백**

채용 인터뷰 결과는 이렇게 생겼는데요.

```jsx
{
  "inverviewers": [
    "Peter",
    "Maya",
    "Nancy"
  ],
  "interviewees": [
    {
      "id": 1012,
      "name": "Chris",
      "result": "pass"
    },
    {
      "id": 1030,
      "name": "Annie",
      "result": "fail"
    },
    {
      "id": 1042,
      "name": "Derek",
      "result": "fail"
    },
    {
      "id": 1049,
      "name": "Vivian",
      "result": "pass"
    },
    {
      "id": 1057,
      "name": "Henry",
      "result": "fail"
    },
    {
      "id": 1103,
      "name": "Ellen",
      "result": "pass"
    }
  ]
}
```

이 객체가 interviewResult 파라미터로 넘어옵니다. 지금 이 객체의 interviewers 프로퍼티에는 면접관들의 이름이, interviewees 프로퍼티에는 면접 대상자들의 정보가 적혀있습니다. 일단 interviewees 프로퍼티의 배열을 가져와서, **filter 메소드를 사용**해, 각 면접 대상자 중 그 result 프로퍼티의 값이 pass(합격)인 것들만 추립니다. 이제 이 사람들이 신입 직원이 되겠죠? 이 배열을 그대로 리턴해주면 됩니다.

**3. 세 번째 then 메소드 안의 콜백**

이제 신입 직원들의 정보가 담긴 배열을 그대로 https://learn.codeit.kr/api/members에 POST 리퀘스트를 보내서 추가합니다. 이전에 POST 리퀘스트를 보낼 때는 객체 하나를 보내서 직원 정보 하나를 추가했지만, 이번엔 여러 직원 정보가 담긴 배열을 보내서 추가하면 됩니다. 신입 직원 배열을 그대로 Serialize해서 리퀘스트의 바디에 담아 보내면 됩니다.

**4. 네 번째 then 메소드 안의 콜백**

신입 직원 정보가 잘 추가되고 나면, 정말로 잘 추가되었는지를 확인해야 하는데요. 지금 여기서는 상태 코드가 200번이면 정상적으로 추가된 것으로 간주하고 이제 전체 직원의 정보를 조회합니다. response 객체의 status 프로퍼티를 사용하면 상태 코드를 확인할 수 있다는 사실, 이전에 배웠었죠?

**5. 다섯 번째 then 메소드 안의 콜백**

리스폰스의 바디에 있는 전체 직원 정보를 나타내는 JSON 데이터를 추출 및 Deserialize해야합니다. 이때 response 객체의 text 메소드를 쓰고, JSON 객체의 parse 메소드를 사용해도 되겠지만 이 모든 것을 한번에 response 객체의 json 메소드로 해결했습니다.

**6. 여섯 번째 then 메소드 안의 콜백**

신입 직원들까지 추가된 아래와 같은 올해의 전체 직원 정보를 출력합니다.

```jsx
[
  {
    id: 1,
    name: 'Jason',
    email: 'jason@codeitmall.kr',
    department: 'engineering'
  },
  {
    id: 2,
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'engineering'
  },
  {
    id: 3,
    name: 'Brian',
    email: 'brian@codeitmall.kr',
    department: 'marketing'
  },
  {
    id: 4,
    name: 'Erica',
    email: 'erica@codeitmall.kr',
    department: 'marketing'
  },
  {
    id: 5,
    name: 'Wilson',
    email: 'wilson@codeitmall.kr',
    department: 'sales'
  },
  { id: 6, name: 'Chris', email: null, department: null },
  { id: 7, name: 'Vivian', email: null, department: null },
  { id: 8, name: 'Ellen', email: null, department: null }
]
총 직원 수: 8
```

신입 직원들은 email 프로퍼티와 department 프로퍼티의 값이 아직 null이네요. 이메일 주소와 부서 배정을 받고나면 이 정보도 나중에 갱신해주면 되겠죠?

이전 영상에서 배운 것처럼 **Promise Chaining은 여러 개의 비동기 작업을 순차적으로 처리하기 위해서 사용됩니다.** 이렇게 리퀘스트를 보내고 리스폰스를 기다렸다가 받은 리스폰스의 결과를 활용해서 다시 리퀘스트를 보내는 방식 웹 개발에서 아주 일반적인 작업 방식 중 하나입니다. Promise Chaining이 웹 개발에서 얼마나 유용할지 짐작되시죠?



### Rejected 상태가 되면 실행할 콜백

지금까지는, fulfilled인 상태에서 실행할 콜백만 고려했음. 그러면, `rejected` 일때는 어떻게 되는거여?

![promise13](./images/promise13.png)

이것도 `then`으로 할 수 있다. 

잘 보면, 지금 then 뒤에 콜백이 두개가 들어가있다. 

![promise13](./images/promise14.png)

![promise13](./images/promise15.png)

then의 두번째 파라미터로 넣어주면 된다. 여기서 주의할게, 첫번째 콜백은, 파라미터로 앞 Promise 객체의 작업성공결과가 넘어오지만, 두번째는 파라미터로 작업실패정보가 넘어온다. 당연하잖아. 

실제로 인터넷 꺼보고 위 코드 실행해 본다. 



Promise 객체를 배울 때는 then 메소드에 관해서만 확실히 알면 딱히 어려운 내용이 없습니다. 이번 노트에서는 Promise의 then 메소드에 관한 규칙을 제대로 깊이있게 배워봅시다.

잠깐 이 코드를 보세요.

```jsx
const successCallback = function () { };
const errorCallback = function () { };

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B
```

이때까지 배운 내용을 바탕으로 이 코드를 해석해봅시다. 일단, 이 코드에서

(1) fetch 메소드가 리턴하는 Promise 객체를 Promise-A 객체라고 하고,  (2) then 메소드가 리턴하는 Promise 객체를 Promise-B 객체라고 해봅시다.

그리고 fetch 함수의 작업이 성공하는 경우와 실패하는 경우로 나누어서 생각해보겠습니다.

1. fetch 함수의 작업이 성공해서 Promise-A 객체가 **fulfilled 상태**가 된 경우 : then 메소드 안의 "첫 번째" 콜백인 **successCallback**이 실행됩니다.
2. fetch 함수의 작업이 실패해서 Promise-A 객체가 **rejected 상태**가 된 경우 : then 메소드 안의 "두 번째" 콜백인 **errorCallback**이 실행됩니다.

자, 여기서 중요한 점은 **Promise-B는, 실행된 successCallback 또는 errorCallback에서 무엇을 리턴하느냐**에 따라

- 그 **상태**(fulfilled or rejected)와
- **결과**(작업 성공 결과 or 작업 실패 정보)가

결정된다는 점입니다.

이번 노트에서는 **then 메소드가 리턴한 Promise 객체가, 콜백이 리턴하는 값에 따라 어떻게 달라지는지** 경우를 나누어서 다뤄볼 겁니다. 이전 영상에서 배운 내용도 있고, 새롭게 배우는 내용도 있으니까 집중해서 잘 읽어보세요.

# 1. 실행된 콜백이 어떤 값을 리턴하는 경우

successCallback이 실행되든, errorCallback이 실행되든, 실행된 콜백에서 어떤 값을 리턴하는 경우입니다. 이때 그 값의 종류에 따라

- Promise 객체인 경우와
- Promise 객체 이외의 경우,

이 2가지 경우로 다시 나눌 수 있습니다.

## (1) Promise 객체를 리턴하는 경우

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) });
```

위 코드에서 `(response) ⇒ response.json()` 이 콜백은 Promise 객체를 리턴하는 코드입니다. response 객체의 json 메소드가 Promise 객체를 리턴한다는 사실은 [이전 노트](https://www.codeit.kr/learn/courses/javascript-intermediate/4370)에서 배웠죠? 이렇게 콜백에서 Promise 객체를 리턴하는 경우에는 그 콜백을 등록한 then 메소드가 리턴했던 Promise 객체가 **콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라 갖게 됩니다.** 즉, 위 코드의 첫 번째 then 메소드가 리턴했던 Promise 객체는, response 객체의 json 메소드가 리턴한 Promise 객체가 추후에 갖게 되는 상태와 결과를 그대로 따라서 갖게 된다는 뜻입니다.

좀 더 편하게 기억하기 위해서는 그냥 콜백에서 리턴하는 Promise 객체를 then 메소드가 그대로 리턴한다고 생각하셔도 됩니다. 그럼 이제 그 다음부터는 **콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나간다**고 보면 되죠.

## (2) Promise 객체 이외의 값을 리턴하는 경우

콜백이 꼭 Promise 객체만을 리턴하는 것은 아니겠죠? 그냥 단순한 숫자, 문자열, 일반 객체 등을 리턴할 수도 있는데요. 이런 경우에 then 메소드가 리턴했던 Promise 객체는 **fulfilled 상태**가 되고 **작업 성공 결과로 그 값을 갖게 됩니다.**

```jsx
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => 'Try again!')
  .then((result) => { console.log(result) });
```

예를 들어, 지금 인터넷이 안 되는 상황에서 이 코드를 실행했다고 해봅시다. 그럼 fetch 함수의 작업이 실패해서 두 번째 콜백인 `(error) ⇒ 'Try again!` 이 실행되겠죠? 두 번째 콜백은 **'Try again!'**이라는 문자열을 리턴하고 있는데요. 이렇게 하면 해당 콜백을 등록한 then 메소드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 성공 결과로 'Try again' 문자열을 갖게 됩니다.

자, 이때까지는 이전 영상들에서 모두 배운 내용들입니다. 아래부터는 조금 색다른 규칙들이 등장합니다. 집중해서 읽어봅시다.

# 2. 실행된 콜백이 아무 값도 리턴하지 않는 경우

```jsx
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => { alert('Try again!'); })
  .then((result) => { console.log(result) });
```

방금 전과 같은 상황에서 콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝난다고 해봅시다. 그럼 결과적으로 이 콜백은 아무런 값도 리턴하지 않은 것과 같은데요. 자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주됩니다. 따라서 방금 전 **1. (2) 규칙에 따라** then 메소드가 리턴했던 Promise 객체는 **fulfilled 상태**가 되고, **그 작업 성공 결과로 undefined**를 갖게 됩니다.

# 3. 실행된 콜백 내부에서 에러가 발생했을 때

콜백이 실행되다가 에러가 발생하는 경우가 있습니다. 예를 들어

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        add(1, 2); // ReferenceError 발생
        ... 
  });
```

이렇게 정의하지도 않은 함수를 콜백에서 사용해서 에러가 발생하거나

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        throw new Error('failed'); 
        ... 
  });
```

특정 경우에 인위적으로 throw 문을 써서 에러를 발생시키는 경우도 있을 겁니다.

이렇게 콜백이 실행되다가 에러가 발생한다면, then 메소드가 리턴했던 Promise 객체는 어떻게 될까요? 이 경우에는 Promise 객체가 **rejected 상태**가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 됩니다. 잠깐 아래의 코드를 개발자 도구에서 실행해보겠습니다.

```jsx
const promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { throw new Error('test'); });
```

**promise** 를 입력하여 then 메소드가 리턴한 Promise 객체의 내부를 살펴보면 이렇게 생겼는데요.

![img](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=4374&directory=Untitled.png&name=Untitled.png)

지금 [[PromiseState]]는 Promise 객체의 상태를, [[PromiseResult]]는 Promise 객체의 결과(작업 성공 결과 또는 작업 실패 정보)를 나타내는 내부 슬롯입니다.(내부 슬롯이란 자바스크립트 실행 엔진에서 내부적으로 관리하는 속성이라고 생각하시면 됩니다. 지금 당장 알아야할 내용은 아니니 Promise 객체에 집중합시다) 자세히 보면 현재 Promise 객체가 rejected 상태이고, 발생한 Error 객체를 그 작업 실패 정보로 갖고 있다는 것을 알 수 있습니다. 이렇게 콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 **rejected 상태**가 되고, 그 **작업 실패 정보로 해당 Error 객체를 갖게 된다**는 점, 잘 기억하세요!

# 4. 아무런 콜백도 실행되지 않을 때

```jsx
// Internet Disconnected

fetch('https://www.google.com') // Promise-1
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
```

then 메소드의 아무런 콜백도 실행되지 않는 경우가 있습니다. 지금 인터넷을 끊고 나서 위 코드를 실행했다고 합시다. 그럼 fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되기 때문에, 첫 번째 then 메소드의 두 번재 콜백이 실행되어야 합니다. 그런데 지금 두 번째 콜백이 없죠? 이런 경우에는 아무런 콜백도 실행되지 않는데요. 이런 경우에 then 메소드가 리턴한 Promise-2 객체는 어떻게 될까요? 이런 경우에 then 메소드가 리턴했던 Promise-2 객체는, **이전 Promise 객체와 동일한 상태와 결과를 갖게 됩니다.** 그러니까 지금 Promise-2 객체는 **Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게 됩니다.**

그럼 rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행됩니다. 이렇게 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어진다는 사실, 잘 기억하세요.  
 자, 이때까지 Promise 객체의 **then 메소드가 리턴한 Promise 객체의 상태가, then 메소드 안의 콜백이 리턴하는 값에 따라 무슨 상태와 결과를 갖게 되는지** 배웠는데요. 사실 위의 내용을 이해하지 못해도, Promise 객체를 당장 사용하는 데는 문제가 없을 수도 있습니다. 하지만 나중에 Promise 객체를 사용하는 코드에서 문제가 생기거나 고난이도의 코드를 작성해야 할 때는 이런 기본적인 규칙을 모르면 내가 무엇을 잘못했는지조차 알 수 없게 됩니다. 따라서 이번에 배울 때 제대로 배우고 넘어갑시다.

위의 내용을 이해될 때까지 반복해서 읽어보세요. 그래야 다음에 나오는 내용들을 잘 이해할 수 있습니다.



아래 보면, 이해가 잘된다. 

>Promise 객체의 then 메소드를 제대로 이해해야 Promise Chaining을 잘 할 수 있습니다. then 메소드가 리턴한 Promise 객체가 그 콜백의 리턴값에 따라 어떻게 되는지, 이전 노트에서 배운 각각의 케이스를 코드잇 실행기에 준비해두었는데요. 지금 각 케이스별로
>
>**Case(1)** : 콜백에서 Promise 객체를 리턴 **Case(2)** : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴 **Case(3)** : 콜백에서 아무것도 리턴하지 않음 **Case(4)** : 콜백 실행 중 에러 발생  **Case(5)** : 콜백이 실행되지 않음
>
>이렇게 나뉘어 있습니다.
>
>각 케이스별 코드 앞에 있는 주석을 선택적으로 해제 및 적용해가면서 각각 어떤 결과가 출력되는지 살펴보세요.

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    // return response.json(); // <- Case(1)
    // return 10; // <- Case(2)
    // // <- Case(3)
    // throw new Error('failed'); // <- Case(4)
})
  .then((result) => {
    console.log(result);
  });

// 존재하지 않는 URL
/* fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(error) }); */
```

**과제** 해설

then 메소드가 리턴한 Promise 객체를 A라고 했을 때 각 경우에 A는 다음과 같은 상태와 결과를 갖게 됩니다.

**Case(1) : 콜백에서 Promise 객체를 리턴**

콜백이 리턴한 Promise  객체를 B라고 하면 A는 B와 동일한 상태와 결과를 갖게 됩니다. 나중에 B가 fulfilled 상태가 되면 A도 똑같이 fulfilled 상태가 되고 동일한 작업 성공 결과를, 나중에 B가 rejected 상태가 되면 A도 똑같이 rejected 상태가 되고 동일한 작업 실패 정보를 가진다는 뜻입니다.

**Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴**

A는 fulfilled 상태가 되고, 해당 리턴값을 작업 성공 결과를 갖게 됩니다.

**Case(3) : 콜백에서 아무것도 리턴하지 않음**

자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주됩니다.  따라서 A는 fulfilled 상태가 되고, undefined를 작업 성공 결과로 갖게 됩니다.

**Case(4) : 콜백 실행 중 에러 발생**

A는 rejected 상태가 되고, 해당 에러 객체를 작업 실패 정보로 갖게 됩니다.

**Case(5) : 콜백이 실행되지 않음**

A는 호출된 then 메소드의 주인에 해당하는, 이전 Promise 객체와 동일한 상태와 결과를 가집니다.

Promise 객체 공부는 then 메소드가 그 처음과 끝이라고 해도 될 정도로, then 메소드를 정확하게 이해하는 것은 중요합니다. 지금 각각의 케이스를 잘 기억해두면, 앞으로의 내용을 훨씬 더 쉽게 이해할 수 있을 겁니다.

*참고로 코드잇 실행기는 웹 브라우저와는 조금 다른 Node.js라는 자바스크립트 실행 환경을 사용하기 때문에 출력되는 에러의 내용이 웹 브라우저에서와 달리 조금 더 장황한 내용일 수 있습니다. 이 점을 참고해주세요.