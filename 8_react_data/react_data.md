# React로 데이터 다루기

[VSCODE Shortcut](#VSCODE Shortcut)



그때 그때 상황에 따라 데이터를 다르게 그려주잖아.

서버에 리퀘스트 보내고, 받아서 활용하는 방법에 대해서 배울 것. 

그전에, 필수 사용해야 할 vscode 단축키 

**자동완성**

예를들어 `handleIconClick` 이라는 단어를 입력할 때

단어의 앞 부분인 `hand` 만 입력하거나

단어의 이니셜인 `hic` 만 입력하면 VSCode는 툴팁으로 단어를 추천해주는데요.

여기서 원하는 단어를 선택한 다음 Enter나 Tab 키를 눌러 단어를 완성할 수 있습니다.

> 또한, 단어에 대문자가 있으면, 그거 기준으로도 추천해준다. 예를들어, onClick이면, oc를 쳐보면 추천해준다. 



# VSCODE Shortcut

**단축키**

**멀티 커서 선택하기** => 이거 필수 숙지

**텍스트 커서를 단어로 옮겨 놓으면** 해당하는 변수나 함수가 하이라이팅되고,

**텍스트를 선택하면(더블클릭)** 대소문자 구분없이 같은 단어가 하이라이팅되는데요.

이 상태에서 멀티 커서 선택을 하면 여러 군데를 한 번에 수정할 수 있습니다.

| 윈도우즈         | 맥              |
| ---------------- | --------------- |
| Ctrl + Shift + L | Cmd + Shift + L |

**직접 멀티 커서 만들기**

원하는 위치에 텍스트 커서를 만들 수 있습니다.

| 윈도우즈   | 맥            |
| ---------- | ------------- |
| Alt + 클릭 | Option + 클릭 |

**찾아 바꾸기**

텍스트 커서를 원하는 변수나 함수에 옮겨놓고 찾아 바꾸기를 하면

해당 변수나 함수가 사용된 파일에서도 함께 이름이 바뀝니다.

| 윈도우즈 | 맥      |
| -------- | ------- |
| F2       | fn + F2 |

**해당하는 파일로 이동**

변수나 함수가 작성된 파일로 이동하고 싶을 때 단어 위에 마우스를 올리고 사용합니다.

| 윈도우즈    | 맥         |
| ----------- | ---------- |
| Ctrl + 클릭 | Cmd + 클릭 |

**줄 이동**`

| 윈도우즈 | 맥          |
| -------- | ----------- |
| Alt +↑↓  | Option + ↑↓ |

**줄 복사**

| 윈도우즈        | 맥                  |
| --------------- | ------------------- |
| Alt + Shift +↑↓ | Option + Shift + ↑↓ |

이 단축키들은 VSCode의 메뉴에서 **Help > Keyboard Shortcuts Reference** 를 통해서 확인할 수도 있습니다.

### 저장할 때마다 코드 정리하기. Prettier

1. 화면 왼쪽의 퍼즐 아이콘(Extensions 메뉴)에서 Prettier를 설치합니다.
2. 화면 왼쪽의 톱니바퀴 아이콘(Manage 메뉴)에서 Settings 메뉴로 들어갑니다.
3. 상단의 검색창에서 `format`을 검색한 다음 Default Formatter 를 Prettier로 설정하고 Format On Save 옵션 켭니다.





그런데 뭐 할때마다, 아래 에러가 뜬다. 무슨 의미일까? 각 child는 key를 가져야 한다? 

![error](./images/error.png)

ReviewList안에 아래와 같이 map을 쓴 부분이 있다.  얘네가 key를 가져야 한다는 것. 

```jsx
<ul>
      {items.map(item => {
        return (
          <li>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
</ul>
```

마침 데이터에 `id`가 있어서, 그걸로 key prop을 지정하면 된다. 

```js
<li key={item.id}>
```

**이처럼, 배열을 랜더링 할때는 반드시 key를 설정해 주어야 한다.**

이게 지금 왜 그런지 아래다가 input하나 넣어보면 안다. 

input 넣어놓고서, input 랜더링 되면 거기다가 글자 친다음에 삭제 눌러보면, input에 내가 썻던 글이 엉뚱한 대로 간다. 

```jsx
return (
    <ul>
      {items.map(item => {
        return (
          <li>
            <ReviewListItem item={item} onDelete={onDelete} />
            <input />
          </li>
        );
      })}
    </ul>
  ); 
```

심지어, map에서 던져주는 두번째 요소인 index를 받아서 key로 사용해도 이 꼴이 똑같이 난다. 배열 인덱스는 배열이 바뀔때마다 새롭게 부여된다. 그래서, 데이터에 대한 고유의 값으로 사용이 불가능한 것. id값은 데이터와 상관없이 같은 데이터를 가리킨다. 

**근데, key를 지정하지 않거나 배열 index 같이 데이터를 가리키는 고유한 값으로 key를 지정하지 않으면 이상하게 됬었는데. 왜 그런걸까?** 

사과, 망고, 포도를 랜더링 하고 싶다고 해보자. 그런데, 망고가 빠진 배열로 바뀌었다. 

![list_key](./images/list_key.png)

이게 **망고가 삭제되었다.** 이렇게 말할 수도 있는데, 다르게 말하면, **포도가 삭제되고 망고가 포도로 바뀌었다** 라고 표현될 수도 있다.  즉, 어떻게 바뀐건지 결과만 봐서는 알길이 없다. 

![list_key](./images/list_key2.png)

key를 사용하면? 요소마다 key로 고유한 값을 지정해 주면, 결과만 보고도 **망고가 삭제됬다** 라는 것을 알 수 있다. 

![list_key](./images/list_key3.png)

**즉, 배열의 변화를 정확하게 진단하려면 key를 지정해 줘야 가능하다.** 라는 사실을 기억하고 가자. 





앞에서 배열 메소드를 활용해서 렌더링을 하고, 정렬과 삭제 삭제 기능을 만들었는데요.

이번 레슨에선 이 내용들을 가볍게 정리하고 넘어가겠습니다.

[pokemon.json](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=5035&directory=pokemons.json&name=pokemons.json)

위 JSON 파일은 포켓몬 도감 151번까지의 포켓몬 데이터입니다.

각 데이터를 구분하는 값인 `id`, 포켓몬 이름을 값으로 하는 `name` 프로퍼티, 그리고  포켓몬의 속성인 `types` 프로퍼티가 있습니다.

# `map` 으로 렌더링하기

배열 메소드 `map`에서 콜백 함수의 리턴 값으로 리액트 엘리먼트를 리턴하면 되는데요.

```jsx
import items from './pokemons';

function Pokemon({ item }) {
  return (
    <div>
      No.{item.id} {item.name}
    </div>
  );
}

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Pokemon item={item} />
        </li>
      ))}
    </ul>
  );
}
 
export default App;
```

참고로 반드시 JSX의 중괄호 안에서 `map` 함수를 써야 하는 것은 아닙니다.

예를 들어서 아래처럼 `renderedItems` 라는 변수에 `map`의 결과를 지정해도 똑같이 렌더링 하게 됩니다. `renderedItems` 의 계산된 값이 결국 리액트 엘리먼트의 배열이기 때문이죠.

```jsx
import items from './pokemons';

function Pokemon({ item }) {
  return (
    <div>
      No.{item.id} {item.name}
    </div>
  );
}

function App() {
  const renderedItems = items.map((item) => (
    <li key={item.id}>
      <Pokemon item={item} />
    </li>
  ));

  return (
    <ul>
      {renderedItems}
    </ul>
  );
}
 
export default App;
```

# `sort` 로 정렬하기

배열 메소드의 `sort` 메소드를 사용하면 배열을 정렬할 수 있었죠?

이렇게 정렬한 배열을 렌더링 할 수 있었습니다.

아래 코드는 `id` 순서대로 / 반대로 정렬하는 예시입니다.

```jsx
import { useState } from 'react';
import items from './pokemons';

function Pokemon({ item }) {
  return (
    <div>
      No.{item.id} {item.name}
    </div>
  );
}

function App() {
  const [direction, setDirection] = useState(1);

  const handleAscClick = () => setDirection(1);

  const handleDescClick = () => setDirection(-1);

  const sortedItems = items.sort((a, b) => direction * (a.id - b.id));

  return (
    <div>
      <div>
        <button onClick={handleAscClick}>도감번호 순서대로</button>
        <button onClick={handleDescClick}>도감번호 반대로</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Pokemon item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

# `filter` 로 삭제하기

배열 메소드 중 `filter` 와 배열형 스테이트를 활용하면

삭제 기능을 간단히 구현할 수 있었습니다.

```jsx
import { useState } from 'react';
import mockItems from './pokemons';

function Pokemon({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div>
       No.{item.id} {item.name}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(mockItems);

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Pokemon item={item} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default App;
```

# 반드시 `key` 를 내려주자

각 요소를 렌더링 할 때는 `key` Prop을 내려줘야 하는데요.

이때 가장 바깥쪽에 있는 (최상위) 태그에다가 `key` Prop을 지정하면 됩니다.

앞에서 `id` 는 각 요소를 구분할 수 있는 고유한 값이기 때문에 사용했었는데요.

반드시 `id` 일 필요는 없고 포켓몬 이름처럼(참고로 포켓몬 이름은 고유합니다)

각 데이터를 구분할 수 있는 고유한 값이면 무엇이든 `key` 로 활용해도 상관없습니다.

```jsx
import items from './pokemons';

function Pokemon({ item }) {
  return (
    <div>
      No.{item.id} {item.name}
    </div>
  );
}

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <Pokemon item={item} />
        </li>
      ))}
    </ul>
  );
}

export default App;
`
```
