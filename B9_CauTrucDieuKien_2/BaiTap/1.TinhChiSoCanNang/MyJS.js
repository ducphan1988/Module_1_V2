let height = parseFloat(prompt("Nhập chiều cao của bạn"));
let weight = parseFloat(prompt("Nhập cân nặng của bạn: "));
let bmi = weight / (height * height);
if (bmi < 18)
    document.write("<h3>Còi xương suy dinh dưỡng</h3>");
else if (bmi < 25.0)
    document.write("<h3>Boby chuẩn</h3>");
else if (bmi < 30.0)
    document.write("<h3>hơi mập bạn nhé</h3>");
else
    document.write("<h3>béo phì rồi bạn ơi, mau giảm cân đi!!</h3>");