let a = parseFloat(prompt("nhập a: "));
let b = parseFloat(prompt("nhập b: "));
if (a === 0){
    if (b === 0){
        alert("Phương trình có vô số nghiệm")
    }else {
        alert("Phương trình vô nghiệm")
    }
}else {
    alert("phương trình có 1 nghiệm là : " + -b/a);
}