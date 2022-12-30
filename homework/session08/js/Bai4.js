let data = prompt("Nhap so chu so : ");
  for (let i = 0; i < data; i++) {
    let count = 0;
    let _data = prompt("Nhap so thu " + parseInt(i + 1));
    count = parseInt(count) + parseInt(countNumber(_data));
    console.log(count);
  }

let countNumber = (data) => {
  let temp = String(data).split("");
  let count = 0;
  for (let _temp of temp) {
    count += parseInt(_temp);
  }
  return count;
}