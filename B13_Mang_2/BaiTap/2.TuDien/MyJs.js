let english = ["He","She","It","They","We"];
let vietnam = ["Anh ấy","Cô ấy","Nó","Họ","Chúng ta"];
function check() {
    let input = document.getElementById("english").value;
    let value = 0;
    for (let i = 0; i < english.length; i++) {
        if (input == english[i]) {
            value = i;
        }
    }
    document.getElementById("vietnam").innerHTML = vietnam[value];
}