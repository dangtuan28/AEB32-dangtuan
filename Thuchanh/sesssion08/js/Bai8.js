let str = prompt("Nhap: ");
let res = "";
let convertArray = str.split(" ");
convertArray.forEach((element) => {
  res += countCharacter(element) + " ";
});
console.log(res.trim());
function countCharacter(string) {
  return string.length;
}
