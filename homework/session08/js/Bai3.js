let N = prompt("Nhap N");
  let K = prompt("Nhap K");
  let data = [];
  for (let i = 0; i < N; i++) {
    let _data = prompt("Nhap so thu: " + parseInt(i + 1));
    data.push(_data);
  }
  let temp = data[0];
  for (let i = 0; i < K; i++) {
    if (temp < parseInt(data[i])) {
      temp = data[i];
    }
  }
  console.log(temp);