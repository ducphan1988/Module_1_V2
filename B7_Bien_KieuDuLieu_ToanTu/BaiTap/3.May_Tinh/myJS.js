//Hàm tính tổng
function Add() {
    //get giá trị biến number 1
    let num1 = document.getElementById("number1").value;

    //Chuyển sang kiểu số nguyên
    num1 = parseInt(num1);

    //get giá trị biến number 2
    let num2 = document.getElementById("number2").value;

    //Chuyển sang kiểu số nguyên
    num2 = parseInt(num2);

    //Tính kết quả
    let result = num1 + num2;

    //Hiển thị kết quả trong thẻ <p> có id là result
    document.getElementById("result").innerHTML = "Result: " + result;
}

//Hàm tính hiệu
function Sub() {
    //get giá trị biến number1
    let num1 = document.getElementById("number1").value;
    num1 = parseInt(num1);

    //get giá trị biến number 2
    let num2 = document.getElementById("number2").value;
    num2 = parseInt(num2);

    //Tính toán kết quả
    let result = num1 - num2;

    //hiển thị trong thẻ <p> có id là result
    document.getElementById("result").innerHTML = "Result: " + result;
}

//Hàm tính nhân 2 số
function Mult() {
    let num1 = document.getElementById("number1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("number2").value;
    num2 = parseInt(num2);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

//Hàm tính thương 2 số
function Div() {
    let num1 = document.getElementById("number1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("number2").value;
    num2 = parseInt(num2);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}