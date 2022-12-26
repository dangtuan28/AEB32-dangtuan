// const H = 5;
// for(let i = 1; i <= H; i++){
//     for(var k = H; k > i;k--){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let j = 1;j <= i * 2 - 1; j++){
//         document.write("*");
//     }
//     document.writeln("<br />");
// }
let h = prompt("Nhap h :");
console.log(h);
for (let index = 0; index <= h; index++) {
  let str = " ";
  let a = " ";
  for (let k = h; k > index; k--) {
    a += " ";
  }
  for (let j = 0; j < index * 2 - 1; j++) {
    str += "*";
  }
  let b = a + str;
  console.log(b);
}

//star-> 2*index-1---space =h-index
