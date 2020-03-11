let spt = prompt("Nhập số lượng phần tử");
let arr = [];
for (i = 0; i < spt; i++) {
    let add = Number(prompt("Nhập các phần tử: " + i));
    arr.push(add);
}
let b = prompt("Số muốn xóa: ");
for (i = 0; i < arr.length; i++) {
    if (b === arr[i]) {
        index = i;
        for (j = index; j < arr.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = 0;
    }
}
document.write("Mảng mới là: " + arr);