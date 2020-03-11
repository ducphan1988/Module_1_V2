let ketQua = 0;

function phim1() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '1';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '1';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '1';
        ketQua = 0;
    }
}

function phim2() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '2';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '2';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '2';
        ketQua = 0;
    }
}

function phim3() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '3';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '3';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '3';
        ketQua = 0;
    }
}

function phim4() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '4';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '4';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '4';
        ketQua = 0;
    }
}

function phim5() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '5';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '5';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '5';
        ketQua = 0;
    }
}

function phim6() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '6';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '6';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '6';
        ketQua = 0;
    }
}

function phim7() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '7';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '7';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '7';
        ketQua = 0;
    }
}

function phim8() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '8';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '8';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '8';
        ketQua = 0;
    }
}

function phim9() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '9';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '9';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '9';
        ketQua = 0;
    }
}

function phim0() {
    if (document.getElementById('oKetQua').innerHTML == '0') {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '0';
    } else if (ketQua == 0) {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = oKetQua.innerHTML + '0';
    } else {
        let oKetQua = document.getElementById('oKetQua');
        oKetQua.innerHTML = '0';
        ketQua = 0;
    }
}


function phimCong() {
    let oKetQua = document.getElementById('oKetQua');
    oKetQua.innerHTML = oKetQua.innerHTML + '+';
    ketQua = 0;
}

function phimTru() {
    let oKetQua = document.getElementById('oKetQua');
    oKetQua.innerHTML = oKetQua.innerHTML + '-';
    ketQua = 0;
}

function phimNhan() {
    let oKetQua = document.getElementById('oKetQua');
    oKetQua.innerHTML = oKetQua.innerHTML + '*';
    ketQua = 0;
}

function phimChia() {
    let oKetQua = document.getElementById('oKetQua');
    oKetQua.innerHTML = oKetQua.innerHTML + '/';
    ketQua = 0;
}

function phimC() {
    let oKetQua = document.getElementById('oKetQua');
    oKetQua.innerHTML = '0';
    ketQua = 0;
}

function phimBang() {
    let oKetQua = document.getElementById('oKetQua');
    ketQua = eval(oKetQua.innerHTML);
    oKetQua.innerHTML = ketQua;
}