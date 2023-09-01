// task 18

// let result = prompt('ad soyad',`john doe`)
// let firstName = result.slice(result.indexOf(' ')+1)
// // console.log(firstName);
// console.log(`Salam, <${firstName}>!`);
// console.log(result)

//task 20

// let emekhaqqi = Number(prompt('emekhaqqi'))

// let vergi = 13/100

// let brut = emekhaqqi-(emekhaqqi * vergi)

// console.log(brut);

//task24

// let age = Number(prompt('age'))

// if (age>18) {
//     alert('Access granted')
// }
// else if(age===18){
// console.log('age 18');
// }
// else{
//     alert('Access denied')

// }

//task25

// let arr = [1,12,23,32,34]

// let sortedArr = arr.sort((a,b)=>b-a)
// console.log(sortedArr);

// console.log(Math.floor(arr.length/2));

// console.log(sortedArr[Math.floor(arr.length/2)]);

// let result = prompt('3 eded daxil edin','10 12 13')

// let numArr = result.split(' ')

// let sortednum = numArr.sort((a,b)=>b-a)

// console.log(sortednum[Math.floor(sortednum.length/2)]);

//task26

// let result =Number(prompt('il daxil et'))

// if(result.length===4){
//     if (result%4===0) {
//         alert('İl uzun ildir')
//     }

//     else{
//         alert('İl uzun deyil')
//     }
// }
// else{
//     alert('yanlis ildaxil etdiniz')
// }

// let id = Number(prompt("enter product id:"));

// switch (id) {
//   case 1:
//     alert("Available 10 pcs.");
//     break;
//   case 2:
//     alert("Available 256 pcs.");
//     break;
//   case 3:
//     alert("Available 53 pcs.");
//     break;
//   case 4:
//     alert("Available 3 pcs.");
//     break;
//   default:
//     alert("Out of stock");
//     break;
// }



// let gender = prompt('male(M) or female(F)',"M")
// if (gender.toLowerCase()==='f'||gender==='female') {
//     alert('Female')
// }
// else if(gender.toLocaleLowerCase()==='m'){
//     alert('male')
// }
// else{
//     alert('yanlis deyer')
// }


// let result = prompt("tarix daxil edin", "YYYY.MM.DD");

// let year = Number(result.slice(0, result.indexOf(".")));
// let month = Number(
//   result.slice(result.indexOf(".") + 1, result.indexOf(".") + 3)
// );
// let day = Number(result.slice(result.indexOf(month) + 3));
// console.log(year);
// console.log(month);
// console.log(day);
// let monthToString;
// let date = "";
// switch (month) {
//   case 1:
//     monthToString = "yanvar";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;
//   case 2:
//     monthToString = "fevral";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 3:
//     monthToString = "mart";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 4:
//     monthToString = "aprel";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 5:
//     monthToString = "may";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 6:
//     monthToString = "iyun";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 7:
//     monthToString = "iyul";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 8:
//     monthToString = "avqust";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;
//   case 9:
//     monthToString = "sentyabr";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//   case 10:
//     monthToString = "oktyabr";
//     date = `${day} ${monthToString} ${year}-cu il`;
//   case 11:
//     monthToString = "noyabr";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;
//   case 12:
//     monthToString = "dekabr";
//     date = `${day} ${monthToString} ${year}-cu il`;
//     break;

//     break;

//   default:
//    console.log('yanlis')
// }

// console.log(date);


//task 29


// let month = Number(prompt('ayin reqemini daxil et'))

// switch (month) {
//     case 1:
//      alert("yanvar")
      
//       break;
//     case 2:
//      alert("fevral")
//       break;
  
//     case 3:
//       alert("mart")
//       break;
  
//     case 4:
//     alert('aprel')
//       break;
  
//     case 5:
//       alert('may')
//       break;
  
//     case 6:
//    alert('iyun')
//       break;
  
//     case 7:
//     alert('iyul')
//       break;
  
//     case 8:
//         alert('avqust')
//       break;
//     case 9:
//       alert('sentyabr')
//       break;
  
//     case 10:
//      alert('oktyabr')
//     case 11:
//     alert('noyabr')
//       break;
//     case 12:
//     alert('dekabr')
//       break;
  
     
  
//     default:
//      console.log('yanlis reqem')
//   }

