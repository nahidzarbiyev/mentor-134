// //task5
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
//   let development = []
  
//   employees.map(el=>{
//  if (el[1]==='development') {
//     development.push(el)
//  }
//   })

// console.log(development);


let user = ['emil','amin','gulare','huseyn','raman','babek']
// let userData = prompt('ad daxil edin')
// let name = ''

// if (userData==='') {
// console.log(user[0]);
// user.shift()
// console.log(user);
// }
// else if(userData==='='){
//     console.log(user);
// }
// else{
//     user.map((item,index)=>{
//         if (userData!==item) {
//             name = userData
//         }
//     })
//     user.push(name)
//     console.log(user);
// }

  //task7
  let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// let sortedArr = array.sort((a,b)=>a-b)
// console.log(sortedArr);

// let sum = array.reduce((total, currentValue)=>{
//     return total+currentValue
// },0)



// let summary = 0

// for (let i = 0; i < array.length; i++) {
// summary+=array[i]
    
// }
// let num = array[array.length-1]
// for (let index = 0; index < array.length; index++) {
 
//     if (num<array[index]) {
//         num =array[index]
//     }
// }
// console.log(num);

// const maxValue = array.reduce((max, curr) => {
//     if(curr > max) max = curr;
//     return max;
// });
// console.log(maxValue);

//  let negativenums = []
//  array.forEach(element => {
//     if (element<0) {
//         negativenums.push(element)
//     }
//  });
// console.log(negativenums);

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// let nameArr = names.map(el=>{
//  console.log(`
// <3<3<3<3 ${el} <3<3<3<3 
// `);
// })
// console.log(nameArr);

// let str = 'first-user'

// let replacedstr = str.replace('-','_')
// console.log(replacedstr.toLocaleUpperCase());


// let obj = {
//     name:'tural',
//     age:20,
//     fullname:function(x){
//         return `${this.age}-${x}`
//     }
// }
// obj.name = 'nahid'

// console.log(obj.fullname(34));
// console.log(obj);

// let credit = {
//     mebleg:2000,
//     faiz:20,
//     borc:function(x){
//         return this.mebleg -x*(this.faiz/100)
//     }
// }

// console.log(this.window);
// console.log(credit.borc(1000));