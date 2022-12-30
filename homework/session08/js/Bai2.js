let m = prompt("Nhap m");
  let n = prompt("Nhap n");
  let k = prompt("Nhap k");
  let count = 0;
  let multiArray = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let data = prompt(
        "Nhap so [" + parseInt(i + 1) + "][" + parseInt(j + 1) + "]"
      );
      multiArray.push(data);
      if (k === data) {
        count++;
      }
    }
  }
  console.log(count);
