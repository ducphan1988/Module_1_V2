function xacNhan(){
    let doanhSo = parseInt(document.getElementById('doanhSo').value);
    let hoaHong = (doanhSo*3)/100;
    let ketQua = document.getElementById('ketQua');
    ketQua.innerHTML = 'Hoa hồng của bạn là: ' + hoaHong + ' triệu';
}