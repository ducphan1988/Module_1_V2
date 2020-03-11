function nhanKetQua(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    if(a%b==0){
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'a chia hết cho b';
    }else{
        let ketQua = document.getElementById('ketQua');
        ketQua.innerHTML = 'a không chia hết cho b';
    }
}