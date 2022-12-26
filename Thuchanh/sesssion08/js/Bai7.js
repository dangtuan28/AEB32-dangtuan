let str = prompt("Nhap");
console.log(str);
let res = "";
let convertArray = str.split(" ");
convertArray.forEach((element) => {
  res += capitalizeFirstLetter(element) + " ";
});
console.log(res.trim());
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
