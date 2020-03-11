let image1 = 'c';
let image2 = 'a';
let image3 = 'b';
let image4 = 'a';
let image5 = 'c';
let khung = document.getElementById('khung');
khung.style.backgroundColor = 'white';
khung.style.boxShadow = 'white';

function chuyenAnh1() {
    let hang1 = document.getElementById('hang1');
    if (image1 == 'a') {
        hang1.style.backgroundImage = 'url(./image/b1.jpg)';
        image1 = 'b';
    } else if (image1 == 'b') {
        hang1.style.backgroundImage = 'url(./image/c1.jpg)';
        image1 = 'c';
    } else {
        hang1.style.backgroundImage = 'url(./image/a1.jpg)';
        image1 = 'a';
    }
    kiemTraTrungAnh();
}


function chuyenAnh2() {
    let hang2 = document.getElementById('hang2');
    if (image2 == 'a') {
        hang2.style.backgroundImage = 'url(./image/b2.jpg)';
        image2 = 'b';
    } else if (image2 == 'b') {
        hang2.style.backgroundImage = 'url(./image/c2.jpg)';
        image2 = 'c';
    } else {
        hang2.style.backgroundImage = 'url(./image/a2.jpg)';
        image2 = 'a';
    }
    kiemTraTrungAnh();
}


function chuyenAnh3() {
    let hang3 = document.getElementById('hang3');
    if (image3 == 'a') {
        hang3.style.backgroundImage = 'url(./image/b3.jpg)';
        image3 = 'b';
    } else if (image3 == 'b') {
        hang3.style.backgroundImage = 'url(./image/c3.jpg)';
        image3 = 'c';
    } else {
        hang3.style.backgroundImage = 'url(./image/a3.jpg)';
        image3 = 'a';
    }
    kiemTraTrungAnh();
}


function chuyenAnh4() {
    let hang4 = document.getElementById('hang4');
    if (image4 == 'a') {
        hang4.style.backgroundImage = 'url(./image/b4.jpg)';
        image4 = 'b';
    } else if (image4 == 'b') {
        hang4.style.backgroundImage = 'url(./image/c4.jpg)';
        image4 = 'c';
    } else {
        hang4.style.backgroundImage = 'url(./image/a4.jpg)';
        image4 = 'a';
    }
    kiemTraTrungAnh();
}


function chuyenAnh5() {
    let hang5 = document.getElementById('hang5');
    if (image5 == 'a') {
        hang5.style.backgroundImage = 'url(./image/b5.jpg)';
        image5 = 'b';
    } else if (image5 == 'b') {
        hang5.style.backgroundImage = 'url(./image/c5.jpg)';
        image5 = 'c';
    } else {
        hang5.style.backgroundImage = 'url(./image/a5.jpg)';
        image5 = 'a';
    }
    kiemTraTrungAnh();
}

function kiemTraTrungAnh(){
    if (image1 == image2 && image2 == image3 && image3 == image4 && image4 == image5) {
        console.log("abc")
        khung = document.getElementById('khung');
        khung.style.backgroundColor = 'red';
        khung.style.boxShadow = '5px 5px 5px red';
    }
}


