let number1 = parseInt(prompt("Nhập số muốn tính giai thừa: "))
let giai_thua = 1;
for(let i = 1; i<=number1; i++){
    giai_thua = giai_thua*i;
}
document.write("Giai thừa cửa số nguyên dương " + number1 + " là " + giai_thua);