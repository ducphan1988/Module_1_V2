let spt = prompt("Nhập số lượng phần tử: ");
let a = [];
let b;
for (i = 0; i < spt; i++) {
    let add = Number(prompt("Nhập các phần tử: " + i));
    a.push(add);
}
a.sort(function (a,b) {
    return b - a;
});
document.write("thứ tự giảm dần là: " + a);