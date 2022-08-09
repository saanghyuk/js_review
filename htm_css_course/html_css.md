

[선택자 정리](##선택자-정리)

[CSS상속](##CSS상속)

[CSS우선순위](##CSS우선순위)

[CSS 단위](##CSS Unit)



## CSS Unit

CSS에는 `px`, `rem`, `em`, `%` 등 여러 단위가 있습니다. 폰트 크기 뿐만 아니라 `padding`, `margin`, `width` 등 다양한 속성들에 이 단위들을 사용할 수 있습니다.

이 단위들의 차이에 대해 알아봅시다.

- PX

  `px`는 절대적인 값입니다. 다른 요소의 값에 영향을 받지 않는다는 거죠.

  ```css
  html {
    font-size: 20px;
  }
  
  .container {
    padding-top: 40px;
    background-color: lime;
  }
  ```

- rem

  `rem` 은 상대적인 값입니다. 하지만 오직 `<html>` 태그의 `font-size`에만 영향을 받습니다.`2rem`은 `<html>` 태그의 `font-size`의 2배 크기입니다.

  ```css
  html {
    font-size: 20px;
  }
  
  .container {
    padding-top: 2rem; /* html의 font-size * 2 = 40px */
    background-color: lime;
  }
  ```

- em

  `em`도 `rem`과 마찬가지로 상대적인 값입니다. `em`은 자기 자신의 `font-size`를 기준으로 합니다.`2em`은 자기 자신의 `font-size`의 2배 크기입니다. 자기 자신의 `font-size`를 따로 정해주지 않을 경우, 상위 요소에서 상속받은 값을 기준으로 합니다.

  ```css
  html {
    font-size: 20px;
  }
  
  .container {
    /* 자동으로 html의 font-size 20px을 상속받음 */
    padding-top: 2em; /* 자신의 font-size * 2 = 40px */
    background-color: lime;
  }
  
  ```

  ```css
  html {
    font-size: 20px;
  }
  
  .container {
    font-size: 40px;
    padding-top: 2em; /* 자신의 font-size * 2 = 80px */
    background-color: lime;
  }
  
  ```

- 퍼센트 (%)

  `%` 역시 상대적인 값이겠죠? `%`는 어느 항목에서 쓰이냐에 따라 다른 기준이 적용됩니다. 예를 들어 `font-size`에서 `%`가 쓰일 경우, 상위 요소의 `font-size`에 곱해주는 방식으로 계산합니다.

  ```css
  .container {
    font-size: 20px;
    background-color: lime;
  }
  
  .text {
    font-size: 180%; /* 상위 요소인 container의 font-size * 1.8 = 36px */
    background-color: skyblue;
    margin: 0;
  }
  ```

  `%`가 `margin`이나 `padding`의 단위로 사용될 경우, 상위 요소의 `width`를 기준으로 계산됩니다.

  ```css
  .container {
    width: 200px;
    background-color: lime;
  }
  
  .text {
    padding-left: 30%; /* 상위 요소의 width * 0.3 = 60px */
  }
  ```

  재미있는 점은 `margin-top`이나 `padding-bottom` 등 세로(상하) 속성를 조절할 때에도 상위 요소의 `height`가 아닌 `width`를 기준으로 계산된다는 것입니다.

  [참고](https://webdesign.tutsplus.com/ko/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)



#### Font Size

- %로 계산할 때는, 부모 요소의 폰트 크기의 n%라는 의미. 
- 1em = 100%, 2em = 200%, 1.5em = 150%

#### text-decoration 
- underline, overline, none

#### font-weight
- 100, 200 etc. 셋팅 안된 숫자를 사용하면 기본 weight로 


#### line-height
- 
  파란 줄 사이가 실제 내용이 들어가 있는 'content area'(콘텐츠 영역)입니다.  `font-family`와 `font-size`에 따라서 'content area'가 정해지고, `line-height`는 'content area'에 영향을 주지 않습니다.

  `line-height`를 통해서는 각 줄이 실질적으로 차지하는 공간을 정해줄 수 있습니다. 예를 들어서 `99px`로 설정하면 'content area'보다 `40px`이 많기 때문에 위 아래로 `20px`의 공간이 추가로 생깁니다.

  반대로 `40px`로 설정하면 'content area'보다 `19px`이 적기 때문에 위 아래로 `-9.5px`의 공간이 줄어듭니다.![line-height](/Users/noelson/Documents/js_review/htm_css_course/image/line-height.png)

​	

## Box model 

![box_model](/Users/noelson/Documents/js_review/htm_css_course/image/box_model.png)

-  padding

  - 한줄에

    ```css
    p {
      padding: 위 오른쪽 아래 왼쪽;
    }
    ```

  - 위, 아래, 왼쪽, 오른쪽이 다 같은 경우

    ```css
    p {
      border: 1px solid blue;
      padding: 50px;
    }
    ```

  - 위, 아래가 같고, 왼쪽 오른쪽이 같은 경우 

    ```css
    p {
      border: 1px solid blue;
      padding: 50px 100px;
    }
    ```

    

  



- 가운데 정렬 

  요소를 가운데 정렬하고 싶으면 왼쪽과 오른쪽 `margin` 값을 `auto`로 설정해줘야 합니다. `auto`는 말 그대로 '자동으로 계산'하라는 뜻인데요. 왼쪽과 오른쪽을 `auto`로 설정하면 자동으로 왼쪽과 오른쪽을 똑같이 함으로써 요소는 가운데 정렬이 됩니다.

  ```        css
  margin-left: auto; 
  margin-right: auto; 
  
  or 
  margin: 0 auto; 
  ```




- `min-width`, `max-width`, `min-height`, `max-height`

  내부, 화면에 맞게 늘어나지만 최대/최소를 주는 것. 

  적어도 n width여야 한다는 뜻. 

  최대 500px라는 뜻. 



- 요소를 가운데 정렬하고 싶으면 왼쪽과 오른쪽 `margin` 값을 `auto`로 설정해줘야 합니다. `auto`는 말 그대로 '자동으로 계산'하라는 뜻인데요. 왼쪽과 오른쪽을 `auto`로 설정하면 자동으로 왼쪽과 오른쪽을 똑같이 함으로써 요소는 가운데 정렬이 됩니다.



- overflow

  `width`, `height`, `max-width`, `max-height` 등을 설정하다 보면 내용물이 들어갈 공간이 부족한 경우가 있습니다.

  ![overflow](/Users/noelson/Documents/js_review/htm_css_course/image/overflow.png)

  1. `visible`

     `visible` 값을 사용하면 넘쳐나는 내용물이 그대로 보입니다. 따로 설정해주지 않으면 이게 기본값입니다!

  2. `hidden`

     `hidden` 값을 사용하면 넘쳐나는 부분을 아예 숨겨줄 수도 있습니다.

  3. `scroll`

     내용물을 숨겼다가, 사용자가 스크롤을 하면 볼 수 있게 해주는 방법도 있습니다!

  4. `auto`

     `scroll`과 거의 똑같은데, 한 가지 차이점이 있습니다. `scroll`은 **항상** 스크롤바를 보여주고, `auto`는 **내용물이 넘쳐날 때만** 스크롤바를 보여줍니다.

     > 참고로 Mac OS에서는 스크롤을 할 때만 스크롤바를 보여주는 경향이 있기 때문에 `scroll`과 `auto`의 차이를 보기 힘들 수도 있습니다.



- `border`

  1. 한 줄에 끝내기

     가장 일반적인 방법은 `border` 속성으로 한 줄에 다 쓰는 것입니다. 이 방식을 사용하면 위, 아래, 왼쪽, 오른쪽 모두 같은 테두리가 생깁니다. 값을 쓰는 순서는 굵기, 스타일(실선, 점선 등), 색입니다.

     ```css
     .p1 {
       border: 2px solid #4d9fff;
     }
     ```

  2. 명확하게 나누기

     다른 방법은 `border-style`, `border-color`, `border-width` 속성을 써서 테두리의 스타일을 하나씩 지정해주는 것입니다.

     ```css
     .p1 {
       border-style: dotted;
       border-color: red;
       border-width: 5px;
     }
     ```

  3. 다채로운 테두리 

     ```css
     .p1 {
       border-top: 3px dotted #4d9fff;
       border-bottom: 2px dashed red;
       border-left: 5px solid green;
     }
     ```

  4. 테두리 없애기

     어떤 요소들(예: `<input>` 태그)은 기본적으로 테두리가 설정되어 있습니다. 이런 요소들의 테두리를 없애고 싶으면 직접 `border` 속성을 설정해주면 되는데요. 두 가지 방법이 있습니다:

     1. `border: none;`
     2. `border: 0;`

     

- 박스 꾸미는 몇가지 방법

  1. `border-radius`라는 속성을 사용하면 요소의 모서리를 둥글게 만들 수 있습니다. 더 큰 값을 쓰면 더 둥글게 되는 거죠!

     ```css
     
     .div2 {
       border: 1px solid green;
       border-radius: 30px;
     }
     
     ```

     ```css
     h1 {
       border: 1px solid green;
       border-top-left-radius: 50px; /* 왼쪽 위 */
       border-top-right-radius: 5px; /* 오른쪽 위 */
       border-bottom-right-radius: 0px; /* 오른쪽 아래 */
       border-bottom-left-radius: 20px; /* 왼쪽 아래 */
     }
     ```

  2. 그림자 `box-shadow`

     요소에 그림자를 주기 위해서는 `box-shadow` 속성을 사용하면 되는데요. 기본값은 `none`입니다. 그림자가 없다는 뜻이죠.

     ```css
     .div1 {
       background-color: #eeeeee;
       width: 400px;
       height: 300px;
       box-shadow: none;
     }
     ```

     **그림자 추가**

     - 위치 설정

       그림자의 위치만 설정해주면 그림자가 나타납니다. 가로 위치와 세로 위치를 설정해줍시다.

       ```css
       .div1 {
         background-color: #eeeeee;
         width: 400px;
         height: 300px;
         box-shadow: 40px 10px;
       }
       ```

     - 그림자 색 설정

       따로 설정해주지 않으면 그림자는 검정색입니다. 만약 다른 색으로 바꾸고 싶으면 `box-shadow`속성에 추가로 색을 써주면 됩니다.

       ```css
       .div1 {
         background-color: #eeeeee;
         width: 400px;
         height: 300px;
         box-shadow: 40px 10px #4d9fff;
       }
       ```

     - 흐림 정도(blur)

       `box-shadow` 속성에서 그림자가 얼마나 흐리게 나올지 설정해줄 수 있습니다. 가로, 세로 위치 뒤에 추가해주면 되는데요. 기본값은 `0px`입니다.

       ```css
       .div1 {
         background-color: #eeeeee;
         width: 400px;
         height: 300px;
         box-shadow: 40px 10px 10px #4d9fff;
       }
       ```

     - 그림자 크기(Spread)

       그림자가 얼마나 퍼질지도 설정할 수 있습니다. 흐림 값 이후에 써주면 됩니다.

       ```css
       .div1 {
         background-color: #eeeeee;
         width: 400px;
         height: 300px;
         box-shadow: 40px 10px 10px 20px #4d9fff;
       }
       ```

       

  3. 배경색 `background-color``

     `background-color` 속성을 사용하면 배경색을 설정할 수 있습니다. 폰트 색을 설정할 때처럼 색 이름, RGB 코드, HEX 코드 중 하나를 입력하면 됩니다.

     ```css
     h1 {
       background-color: #4d9fff;
     }
     ```

     페이지 전체의 배경색을 설정하고 싶으면 `body` 태그에 `background-color` 속성을 입혀주면 됩니다.  

     그리고 배경색을 투명하게 두고 싶으면 `transparent` 값으로 설정해주면 되는데, 따로 설정을 해주지 않으면 `transparent`가 기본값으로 설정됩니다!

     ```css
     body {
       background-color: #4d9fff;
     }
     
     h1 {
       background-color: white;
     }
     
     h2 {
       background-color: transparent
     }
     ```

  

- Box-sizing

  ```css
  width : 300px; 
  height: 200px; 
  padding : 35px; 
  border: 5px solid red; 
  ```

  나는 사실 총 width를 300px으로 만들고 싶었던 건데, 실제로 이걸 해보면 가로길이는 300+35+35+5+5 이렇게 해서 380이 되버림. 이런 경우, 

  `box-sizing: border-box;` 를 하면, 다 해서 width 300으로 맞춰줌. 

  기본 값은 content-box라서 이거는 width, border, padding, margin을 다 합쳐서 계산해야돼. 그래서 요즘은 그냥 모든 요소에 다 이거 추가해놓고 시작하는 추세

  ```css
  *{
  	box-sizing: border-box; 
  }
  ```

  



- 배경 이미지 

  - `background-repeat`

    `background-repeat`는 이미지를 반복시킬 것인지 아닐 것인지, 그리고 반복시킨다면 어떤 방식으로 반복시킬 것인지 정해주는 속성입니다. 여기에는 우리가 배운 `repeat`, `no-repeat` 외에도 다양한 옵션이 있습니다.

    ```css
    /* 반복하지 않음 */
    background-repeat: no-repeat;
    
    /* 가로 방향으로만 반복 */
    background-repeat: repeat-x;
    
    /* 세로 방향으로만 반복 */
    background-repeat: repeat-y;
    
    /* 가로와 세로 모두 반복 */
    background-repeat: repeat;
    
    /* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */
    background-repeat: space;
    
    /* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */
    background-repeat: round;
    ```

  - `background-size`

    `background-size`는 배경 이미지의 사이즈를 정해주는 속성입니다.

    ```css
    /* 원래 이미지 사이즈대로 출력 */
    background-size: auto;
    
    /* 화면을 꽉 채우면서, 사진 비율을 유지 */
    background-size: cover;
    
    /* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */
    background-size: contain;
    
    /* 픽셀값 지정 (가로: 30px, 세로: 50px로 설정) */
    background-size: 30px 50px;
    
    /* 퍼센트값 지정 (가로: 부모 요소 width의 60%, 세로: 부모 요소 height의 70%로 설정) */
    background-size: 60% 70%;
    ```

  - `background-position`

    ```css
    /* 단어로 지정해주기 (가로: left, center, right, 세로: top, center, bottom) */
    /* 아래와 같은 총 9개의 조합이 가능 */
    background-position: left top;
    background-position: left center;
    background-position: left bottom;
    background-position: right top;
    background-position: right center;
    background-position: right bottom;
    background-position: center top;
    background-position: center center;
    background-position: center bottom;
    
    /* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */
    background-position: 25% 75%;
    
    /* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 100px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */
    background-position: 100px 200px;
    ```



## 선택자-정리

- `Class`/ `Id`

  ```css
  /* 'important'라는 클래스를 갖고 있는 모든 태그 */
  .important {
    color: orange;
  }
  
  /* 'favorite'라는 아이디를 갖고 있는 태그 */
  #favorite {
    color: blue;
  }
  ```

- Children

  ```css
  /* 'div1' 클래스를 갖고 있는 요소의 자식 중 모든 <i> 태그 */
  .div1 i {
    color: orange;
  }
  ```

- Direct children

  ```css
  /* 'div1' 클래스를 갖고 있는 요소의 직속 자식 중 모든 <i> 태그 */
  .div1 > i {
    color: orange;
  }
  ```

- 복수 선택

  ```css
  /* 'two' 클래스를 가지고 있는 태그 모두와 'four' 클래스를 가지고 있는 태그 모두 선택 */
  .two, .four {
    color: orange;
  }
  ```

- 여러 조건

  ```css
  /* 'outside' 클래스를 갖고 있으면서 'one' 클래스도 갖고 있는 태그 */
  .outside.one {
    color: blue;
  }
  
  /* 'inside' 클래스를 갖고 있으면서 'two' 클래스도 갖고 있는 태그 */
  .inside.two {
    color: orange;
  }
  ```

- Pseudo-class (가상 클래스)

  ```css
  /* .div1의 자식인 <p> 태그 중 3번째 */
  .div1 p:nth-child(3) {
    color: blue;
  }
  
  /* .div1의 자식인 <p> 태그 중 첫 번째 */
  .div1 p:first-child {
    color: red;
  }
  
  /* .div1의 자식인 <p> 태그 중 마지막 */
  .div1 p:last-child {
    color: green;
  }
  
  /* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */
  .div1 p:not(:last-child) {
    font-size: 150%;
  }
  
  /* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */
  .div1 p:not(:first-child) {
    text-decoration: line-through;
  }
  ```

  

- 마우스 오버(Hover)

  ```css
  h1 {
    color: orange;
  }
  
  /* 마우스가 <h1> 태그에 올라갔을 때 */
  h1:hover {
    color: green;
  }
  ```

  

## CSS상속

- ```css
  <div class="div1">
    <h1>Heading 1</h1>
    <p>Paragraph bla bla bla</p>
  </div>
  ```

  `div1`의 font색을` blue`로 설정하면, 아래 `h1`과 `p`도 파란색 글자가 됨. 

  - 상속되는 속성들

    ```html
    color
    font-family
    font-size
    font-weight
    line-height
    list-style
    text-align
    visibility
    ```

    위에 있는 속성들도 항상 상속되는 건 아닙니다. 대표적인 예로 `<a>` 태그에는 `color` 속성이 상속되지 않습니다. `<a>` 태그가 억지로 상속을 받아오기 위해서는 해당 속성에 `inherit` 값을 쓰면 됩니다!

    ````css
    .div1 {
      color: green;
    }
    
    .div2 {
      color: orange;
    }
    
    .div2 a {
      color: inherit;
    }
    ````

## CSS우선순위

- 순서

  - 우선 가장 간단한 겁니다. 완전 똑같은 선택자가 나중에 또 나오면, 이전에 나온 스타일을 덮어쓰게 됩니다.

    ```css
    h1 {
      color: blue;
      text-align: center;
    }
    
    h1 {
      color: green;
    }
    ```

    

- 명시도 (Specificity)

  - 같은 요소를 가리키지만 선택자가 다르다면, '명시도(specificity)'에 따라 우선 순위가 결정됩니다.

    **명시도 계산기**

    명시도 계산 방법을 알려드리겠습니다.

    1. 인라인 스타일이 가장 우선 순위가 높습니다.
    2. 선택자에 **id**가 많을 수록 우선 순위가 높습니다.
    3. 선택자에 **class, attribute, pseudo-class**가 많을 수록 우선 순위가 높습니다.
    4. 그 다음은 그냥 요소(또는 가상 요소)가 많은 순서입니다.

    `<ul>` 태그 안에 `<li>` 태그 안에 `<a id="link">`가 있다고 가정해봅시다. `<ul>`과 `<li>`는 나중에 배울 '리스트' 태그입니다.

    ![specify1](/Users/noelson/Documents/js_review/htm_css_course/image/specify1.png)

    ![specify2](/Users/noelson/Documents/js_review/htm_css_course/image/specify2.png)

    첫 번째 경우에는 일반 요소가 세 개, 가상 클래스가 한 개 있어서 '명시도 점수'가 **13**입니다. 두 번째 경우에는 일반 요소가 두 개, 가상 클래스가 한 개, 그리고 id가 한 개 있어서 **112**점입니다.

    따라서 두 선택자에서 겹치는 스타일이 있는 경우, 두 번째 경우인 `ul li:first-child #link` 선택자의 스타일이 적용되는 거죠!

    ```html
    <ul>
      <li><a id="link" href="#">Link 1</a></li>
      <li><a id="link" href="#">Link 1</a></li>
      <li><a id="link" href="#">Link 1</a></li>
      <li><a id="link" href="#">Link 1</a></li>
    </ul>
    ```

    ```css
    ul li:first-child #link {
      color: green;
    }
    
    ul li:first-child a {
      color: orange;
    }
    ```

    