let spt = prompt("Nhập số lượng phần tử: ");
let a = [];
for (i = 0; i < spt; i++) {
    let add = Number(prompt("Nhập các phần tử: " + i));
    a.push(add);
}
let b = prompt("nhập số muốn kiểm tra: ");
let check = false
for (i = 0; i < a.length; i++) {
    if (b == a[i]) {
        alert(b + " is in the array");
        check = true;
    }
}
if (!check) {
    alert("V is in the not array");
}