//let input =prompt("Nhap cac so tu nhien(cach nhau boi dau','): ")
let NUMBER_MIN =prompt('Nhap a:');
let b =prompt('Nhap b:');
let c =prompt('Nhap c:');
let d =prompt('Nhap d:');
// console.log(a,b,c,d);
// console.log(input, typeof input);
// let ar = input.split(',')
// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);
// console.log(ar[3]);
// let NUMBER_MIN = a

//min a
if(parseInt(b) < parseInt(NUMBER_MIN)) NUMBER_MIN = b
//b <min -> swap (b,min) -> min = b
if(c < NUMBER_MIN) NUMBER_MIN = c
//c < min -> min = c
if(d < NUMBER_MIN) NUMBER_MIN = d
//d < min -> min = d
console.log(NUMBER_MIN);

// min =a
//b < min 