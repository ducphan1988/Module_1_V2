function nhanKetQua(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    if(a>b&&a>c){
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = a + ' là số lớn nhất';
    } else if(b>c){
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = b + ' là số lớn nhất';
    } else{
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = c + ' là số lớn nhất';
    }
}