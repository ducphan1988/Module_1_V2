let count = 0;
let sum = 0;
for (var i = 1; count < 30; i++) {
    if (i % 7 === 0) {
        document.write(" " + i);
        sum = sum + i;
        count++;
    }
}
document.write("<br>")
document.write(" Tổng 30 số N đầu tiên chia hết cho 7 là:" + " " + sum);