function nhanKetQua(){
    let ketQua = document.getElementById('ketQua');
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let diemTrungBinh = (a+b*2+c*3)/6;
    if(diemTrungBinh>=8.5){
        ketQua.innerHTML = 'DiemTB=' + diemTrungBinh + ': Học sinh giỏi';
    }else if(6.5<=diemTrungBinh&&diemTrungBinh<8.5){
        ketQua.innerHTML = 'DiemTB=' + diemTrungBinh + ': Học sinh khá';
    }else{
        ketQua.innerHTML = 'DiemTB=' + diemTrungBinh + ': Học sinh trung bình';
    }
}