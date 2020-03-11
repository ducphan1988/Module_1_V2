let number = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị: "));
let count = 0;
let n = 2;
for (let i = 0; count < number; i++) {
    let flat = checkSoNguyenTo(n);
    if (flat === true) {
        document.write(n + " ");
        count++;
    }
    n++;
}

function checkSoNguyenTo(a) {
    if (a < 1) {
        return false;
    }
    if (a === 2) {
        return true;
    } else {
        for (let j = 2; j <= Math.sqrt(a); j++) {
            if (a % j === 0) {
                return false;
            }
        }
        return true;
    }
}