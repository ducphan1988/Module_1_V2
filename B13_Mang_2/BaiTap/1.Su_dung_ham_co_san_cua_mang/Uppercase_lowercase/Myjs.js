
function check_Upper_and_Lower() {
    let str = prompt("Nhập chuỗi: ");
    let character = str.toString();
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (character[i] === character[i].toUpperCase()) {
            arr.push(character[i].toLowerCase());
        } else if (character[i] === character[i].toLowerCase()) {
            arr.push(character[i].toUpperCase());
        } else {
            arr.push(character[i]);
        }
    }
    alert(arr.join(" "));
}
check_Upper_and_Lower();