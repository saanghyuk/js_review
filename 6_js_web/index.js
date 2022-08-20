function pick(menus) { // // 객체를 담아서 받았다.
  console.log('Pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu)
      }, 1000); // 시간이 걸리는 걸 시뮬레이션하기 위한 1초입니다.
    }
  });
  return p;
}

function getRandomMenu() {
  return fetch('https://learn.codeit.kr/api/menus')
    .then((response) => response.json()) // 객체로 만들어서 보내네
    .then((result) => {
      console.log(result)
      const menus = result; // 객체를 담아서 보낸다. 
      return pick(menus);});}

getRandomMenu() // menu 뽑아온다. 
  .then((menu) => {
    console.log(`Today's lunch is ${menu.name} ~`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('Random Menu candidates change everyday');
  });