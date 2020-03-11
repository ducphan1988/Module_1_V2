let a = parseInt(prompt("nhập a"));
let b = parseInt(prompt("nhập b"));
let c = parseInt(prompt("nhập c"));
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("vô số nghiệm");
        } else {
            alert("vô nghiệm");
        }
    } else {
        alert("x= " + -c / b);
    }
} else {
    let dt = b * b - 4 * a * c;
    if (dt > 0) {
        x1 = (-b - sqrt(dt)) / 2 * a;
        x2 = (-b + sqrt(dt)) / 2 * a;
        alert("phương trình có 2 nghiệm là " + "nghiệm 1 =" + x1 + ", nghiệm 2 = " + x2);
    } else {
        if (dt === 0) {
            alert("phương trình có nghiệm kép" + (-b / (2 * a)));
        } else
            alert("vô nghiệm");
    }
}
