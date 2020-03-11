let chuoi = 'Tôi là 1 đứa ngốc !!!';
console.log(chuoi.length);
let mangKetQua = [];


function triHoanAddText() {
    setTimeout(addText, 1000);
  }

function addText() {
    if(mangKetQua.length===21){
        mangKetQua = [];
    }
    let ketQua = document.getElementById('ketQua');
    mangKetQua[mangKetQua.length] = chuoi[mangKetQua.length];
    ketQua.value = mangKetQua.join('');

}


