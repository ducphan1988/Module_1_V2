function thongBao(){
    alert('Trả lời YES ngay từ đầu có khỏe không')
}


function diChuyenNo(){
    let noButton = document.getElementById('noButton');
    noButton.style.top = (Math.random() * window.innerHeight)/3+'px';
    noButton.style.left = (Math.random() * window.innerWidth)/3+'px';
    
}