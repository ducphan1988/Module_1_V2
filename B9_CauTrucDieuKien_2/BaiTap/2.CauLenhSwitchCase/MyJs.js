function dayOfMonth() {
    let month = document.getElementById("month").value;
    month = parseInt(month);
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng " + month + " có 31 ngày bạn nhé!!");
            break;
        case 2:
            alert("Tháng " + month + " này có 28 hoặc 29 ngày bạn nhé!!");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng " + month + " này có 30 ngày bạn nhé!!");
            break;
        default:
            alert("tháng bạn nhập không đúng!!")
    }
}