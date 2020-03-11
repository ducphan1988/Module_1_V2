let a = 1;
let b = 0;
let c;
let sum = 0;
for (let count = 0; count < 20; count++) {
    c = a + b;
    sum += c;
    a = b;
    b = c;
}
document.write("Tổng 20 số đầu tiên trong dãy Fibonaci là: " + sum);