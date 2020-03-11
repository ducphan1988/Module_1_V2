do{
    let nhiet_do = parseFloat(prompt("Nhập thông tin nhiệt độ: "));
    if (nhiet_do >= 100){
        alert("Nhiệt độ quá cao, yêu cầu giảm nhiệt độ");
    }else if(nhiet_do <=20){
        alert("Nhiệt độ quá thấp, yêu cầu tăng nhiệt độ");
    }
}while (true);