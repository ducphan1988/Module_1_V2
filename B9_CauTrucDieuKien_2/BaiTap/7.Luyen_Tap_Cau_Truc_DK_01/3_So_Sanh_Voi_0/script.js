function xacNhan(){
    let number = document.getElementById('number').value;
    if(number>0){
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'Số này lớn hơn 0';
    } else if(number ==0){
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'Số này bằng 0 còn gì';
    } else{
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'Số này nhỏ hơn 0';
    }
}