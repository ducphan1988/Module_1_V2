function Convert() {
    let amount = document.getElementById('amount').value;

    //kiểm tra dữ liệu nhận được
    console.log(amount);

    //kiểm tra kiểu dữ liệu của một biến
    console.log(typeof (amount));

    //Chuyển đổi kiểu dữ liệu từ string sang float
    parseFloat(amount);

    //Tính toán kết quả
    let result = amount * 23000;
    
    //Hiển thị ra cho người dùng
    document.write("Result: " + result);
}