// function add(n1,n2) {
//     let result;
//     if (typeof n1 === "string" && typeof n2 === "string") {
//         result = n1 + n2
//         return result
//     }
//     else if (typeof n1 === "number" && typeof n2 === "number") {
//         result = n1 - n2
//         return result
//     }
//     else{
//         alert('duzgun deyer daxil et')
//     }
// }

// console.log(add(10,12));
// console.log(add('sum',3))
//task1

// let result = prompt('name')

// function userName(name) {
//     console.log(`${name} is active now`);
// }

// userName(result)
// userName('Raman')
// userName('Gulare')
// userName('Huseyn')

//task2

// function maxNum(numarr) {
//     // let nums = numarr[0]
//     let nums ;

//     // for (let i = 0; i < numarr.length; i++) {
//     //     // console.log(numarr[i]);
//     //    if (nums<numarr[i]) {
//     //     nums = numarr[i]
//     //    }
//     // }
//     nums = Math.max(...numarr)
//     return nums
// }

// let arr = [10,2,13,23,1,24,56]
// console.log(maxNum(arr));

// task3

// function converttoRubl(rubl,dollar) {
//     let dollartoRubl = dollar*75
//     let result = rubl + dollartoRubl
//     return result
// }

// console.log(converttoRubl(1200,20));

// task4
// let arr = {
//   0: "sifir",
//   1: "bir",
//   2: "iki",
//   3: "uc",
//   4: "dord",
//   5: "bes",
//   6: "alti",
//   7: "yeddi",
//   8: "sekkiz",
//   9: "doqquz",
//   10: "on",
//   20: "iyirmi",
//   30: "otuz",
//   40: "qirx",
//   50: "elli",
//   60: "altmis",
//   70: "yetmis",
//   80: "seksen",
//   90: "doxsan",
// };

// function convertText(number) {
//   let onluq = Math.floor(number / 10) * 10; //20
//   if (number.toString().length > 1 && number.toString()[1] > 0) {
//     if (onluq in arr) {
//       return console.log(arr[onluq] + " " + arr[number.toString()[1]]);
//     }
//   }
//   else if (number in arr) {
//     return console.log(arr[number]);
//   }
// }
// convertText(25)

//task5
// let arr = [10,2,13,23,1,24,56]
// function min(nums){
// let result = Math.min(...nums)
// return result
// }

// console.log(min(arr));

//task6

// function calc(a, b, sum) {
//     let result;
//     switch (sum) {
//     case "+":
//       result = a + b;
      
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       result = a / b;
//       break;

//       default:
//           alert('duzgun deyer daxil edin')
//         }
//         return result
// }

// console.log(calc(10, 20, "*"));


//task7 
// function isLucky(num){
//     let arr = [...num.toString()]
//   if (+arr[0]+ +arr[1]+ +arr[2]===+arr[3]+ +arr[4]+ +arr[5]) {
//     alert('lucky')
//   }
//   else{
//     alert('unlucky')
//   }
// }
// isLucky(103456)

//task9


// function isEven(a,b,...nums){
//   console.log(arguments);
// nums.forEach(element => {
//   console.log(element);
// });
// if (nums%2===1) {
//   console.log(true);
// }
// }

// isEven('a','b',21,13,15,14,26,21)

// let str = 'string'
// let arr=[]
// arr.push(...str)
// console.log(arr);
// function isEven(num){
//   if (typeof num ==="number") {
//     if (num%2==0) {
//       console.log(true);
//     }
//     else{
//       console.log(false);
//     }
//   }
//   else{
//     console.log('eded daxil edin');
//   }
// }

// isEven(12) 

//task10
// function isvalidnumber(phoneNumber){

// if (phoneNumber.length-1===11 && phoneNumber.slice(0,2)=='+7' ) {
//   console.log('valid number');
// }
// else{
//   console.log('invalid number');
// }
// }
// isvalidnumber('+71234567890')


// let arr =[1,13,11,113,2,3,4,56]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], 'index: ',i);
  
// }

// arr.forEach((elem,i)=>console.log(elem, 'index',i))

// const output = arr.reduce((a,b)=>{
//   return a+b
// },0)


// console.log(output);



// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// sum +=arr[i]



// console.log(sum);
// }

// function bigNum(arr){
//   let num = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//   if (num<arr[i]) {
//     num = arr[i]
//   }
// }
// return num
// }

// console.log(bigNum(arr));

// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];

// const output = salary.flat()
// console.log(output);
// let sum = 0
// let count = output.map(element => {
//   sum+=element
//   return  sum
 
// }
// );

// console.log(sum);

// function getAnnualSalary(array){
//   let sum = 0
// array.map((x,i) => {
//   x.map(x=>{
//     sum+=x
//   })
// });
// return sum
// }

// console.log(getAnnualSalary(salary));

// function getQuarterSalary(salary, rub) {
//   let sum = 0;
//   let arr = [];
//   if (rub == 1) {
//     for (let i = 0; i < salary.length; i++) {
//       arr.push(salary[i].slice(0, 3));
//       for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//       }
//     }
//   } else if (rub == 2) {
//     for (let i = 0; i < salary.length; i++) {
//       arr.push(salary[i].slice(3, 6));
//       for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//       }
//     }
//   } else if (rub == 3) {
//     for (let i = 0; i < salary.length; i++) {
//       arr.push(salary[i].slice(6, 9));
//       for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//       }
//     }
//   } else if (rub == 4) {
//     for (let i = 0; i < salary.length; i++) {
//       arr.push(salary[i].slice(9, 12));
//       for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//       }
//     }
//   } else {
//     alert(false);
//   }

//   return alert(sum);
// }

// getQuarterSalary(salary, 1);

// function getQuarterSalarywithswitchcase(salary,rub){


//   let sum = 0;
//   switch (rub) {
//     case 1:
      
//       salary.map((el)=>{
//       el.slice(0,3).map((elem)=>sum+=elem)
//       })
//       break;
//       case 2:
      
//       salary.map((el)=>{
//       el.slice(3,6).map((elem)=>sum+=elem)
//       })
//       break;
//       case 3:
      
//       salary.map((el)=>{
//       el.slice(6,9).map((elem)=>sum+=elem)
//       })
//       break;
//       case 4:
      
//       salary.map((el)=>{
//       el.slice(9,12).map((elem)=>sum+=elem)
//       })
//       break;
  
//     default:
//       alert('rub yanlisdir')
//       break;
      
//   }
//   return sum

// }
// console.log(getQuarterSalarywithswitchcase(salary,1));
// console.log(getQuarterSalarywithswitchcase(salary,2));
// console.log(getQuarterSalarywithswitchcase(salary,3));
// console.log(getQuarterSalarywithswitchcase(salary,4));

// function getMonthlySalary(salary,month){
//   let sum = 0
// salary.map(employee=>{
// sum += employee[month-1]
// })
// return sum
// }

// console.log(getMonthlySalary(salary,1));