//task 11

// let fullName = "john doe";

// let arr = fullName.split(" ");

// console.log(arr[0].charAt(0));

//task12

// let result = prompt("enter name surname");

// console.log(result);

// let firstName = result.slice(0, result.indexOf(" "));

// console.log(firstName);

// let lastName = result.slice(result.indexOf(" ") + 1);
// console.log(lastName);

// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

//task 13
// let fullName = prompt("enter name surname");

// console.log(`Salam, [${fullName}]!`);
//task 14
// let a = Number(prompt("edex daxil edin"));
// let b = Number(prompt("edex daxil edin"));
// let toplama = a += b;
// alert(toplama);
// alert((a = a - b));
// alert((a *= b));
// alert((a /= b));

//task15

// let vurma = 12345 * 98765;

// console.log(vurma);
// console.log(vurma.toString().charAt(5));

//task16
// console.log(+"" + 1 + 0);

//task17

// let result = prompt("enter number");

// let arr = result.split("");

// let sum = +arr[0] + +arr[1] + +arr[2] + +arr[3];

// console.log(sum);

//task18

//task19

// let result = prompt("enter number, '0.00'");

// let tam = result.slice(0, result.indexOf("."));
// console.log(tam);

// let kesr = result.slice(result.indexOf(".") + 1);

// let count = `«${tam} manat ${kesr} qəpik»`;
// console.log(count);

//task 20
// let result = Number(prompt("enter number"));

// let vergi = 13 / 100;

// let count = result * vergi;

// console.log(count);

// let mebleg = result - count;
// console.log(mebleg);

//task 21
// let result = prompt("enter fullname");

// let arr = result.split(" ");

// console.log(`${arr[0]} ${arr[1].charAt(0)}.${arr[2].charAt(0)}. `);

//task22

let mebleg = Number(prompt("mebleg"));
let muddet = Number(prompt("muddet"));
let faiz = Number(prompt("faiz"));

let faizX = faiz / 100;

let totalAmount = mebleg * faizX * muddet;
console.log(totalAmount);
