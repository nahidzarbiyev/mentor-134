// const newDate = new Date();
// const date = newDate.getDate()
// console.log(newDate.getDay());
// console.log(newDate.getMilliseconds());
// console.log(date);
// console.log(newDate);

// let obj = new Object

// console.log(obj);
// obj.name = 'user1'

// let arr = ['user2']
// console.log(arr)
// arr.push('user3')
// arr = ['user1']
// arr.push('user4')
// console.log(arr);

// let input = document.querySelector('input')
// let pTag = document.querySelector('p');

// input.addEventListener('input', (e)=>{
    
//     let value = e.target.value
//     localStorage.setItem('name', value)
    
// })
// pTag.innerText = localStorage.getItem('name')


// localStorage.removeItem('name')
// localStorage.clear()

// localStorage.setItem('name', JSON.stringify(['user','user1']))

// console.log(JSON.parse(localStorage.getItem('name')));
// console.log(typeof localStorage.getItem('name'))


let arr = []
// if (localStorage.getItem('name')) {
//    arr = JSON.parse(localStorage.getItem('name'))
// }
// else{
//     arr = []
// }

JSON.parse(localStorage.getItem('name')) == null
? []
: arr = JSON.parse(localStorage.getItem('name')) 

console.log(arr);
let obj = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    }


let obj1 = localStorage.setItem('name',JSON.stringify(obj))
console.log(obj1);