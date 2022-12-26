function checkNT(number) {
  let isNT = true;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      isNT = false;
    }
  }
  return isNT;
}
let res = checkNT(7);
console.log(res);
