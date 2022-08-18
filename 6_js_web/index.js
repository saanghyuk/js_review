// fetch('https://learn.codeit.kr/api/members')
//   .then((response) => response.text())
//   .then((result) => { console.log(result)}
//     ); 

const member = {
  name : 'Noel', 
  email : 'my@example.com', 
  department : 'marketing'
}; 

fetch('https://learn.codeit.kr/api/members/6', {
  method : 'DELETE', 
  body : JSON.stringify(member)
})
  .then((response) => response.text())
  .then((result) => { console.log(result)}
    ); 