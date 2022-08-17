# Javscript Web

웹 브라우져와 서버 사이 일어나는 통신에 대한 토픽



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