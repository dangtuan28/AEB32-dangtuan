// const h=5;
// for(let i =1; i<=h;i++){
//     for(let j =1;j<= i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

h = 5;
for (let index = 1; index <= 5; index++) {
   let str = ''
  // ve sao cua 1 hang: star = index
  for (let star = 0; star < index; star++) {
    str += "*";
  }
  console.log(str);
}
