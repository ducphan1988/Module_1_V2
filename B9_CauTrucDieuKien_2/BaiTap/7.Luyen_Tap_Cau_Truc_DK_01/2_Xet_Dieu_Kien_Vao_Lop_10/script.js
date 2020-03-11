function xacNhan() {
    let tuoi = parseInt(document.getElementById('tuoi').value);
    if (tuoi >= 16) {
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'Đủ tuổi để nhập học lớp 10'
    } else {
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'Không đủ tuổi để nhập học lớp 10'
    }
}