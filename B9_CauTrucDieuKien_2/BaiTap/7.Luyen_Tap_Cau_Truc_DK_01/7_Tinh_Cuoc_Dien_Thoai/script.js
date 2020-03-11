function xacNhan(){
    let soPhut = parseInt(document.getElementById('soPhut').value);
    let tienCuoc = (soPhut*3000)
    let ketQua = document.getElementById('ketQua');
    ketQua.innerHTML = 'Tiền cước của bạn là: ' + tienCuoc + ' vnd';
}