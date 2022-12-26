let a = prompt('Nhap a:');
let b = prompt('Nhap b:');
console.log(m,n);
if(m === 0 || n === 0)
{
    console.log(m+n);
}
while (m != n) {
    if (m > n) {
        m = m - n;
    }
    else{
        n = n - m;
    }
}
console.log(m);