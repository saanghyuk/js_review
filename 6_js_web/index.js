// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     // return response.json(); // <- Case(1)
//     // return 10; // <- Case(2)
//     // <- Case(3) 
//     throw new Error('failed'); // <- Case(4)
    
// })
//   .then((result) => {
//     console.log(result);
//   }, (error)=> console.log('Hi'+error));

// 존재하지 않는 URL
fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(error) }); 