


const printThis = () => {
  console.log(this);
}

const myObj = {
  content: 'myObj',
  printThis: printThis
}

