 function checkPalin(str) {
        let first = 0;
        let last = str.length - 1;
        for (;first < last; first++, last--) {
            if (str[first] !== str[last]) {
                return false;
            }
            return true;
        }
    }
    alert(checkPalin(prompt('Nhập vào 1 chuỗi')))