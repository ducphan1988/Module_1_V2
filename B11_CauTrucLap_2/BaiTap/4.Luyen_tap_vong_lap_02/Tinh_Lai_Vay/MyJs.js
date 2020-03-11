let tienVay = parseInt(prompt('Nhap so tien vay'));
let thoigianVay = parseInt(prompt('nhap so thang vay'));
let laisuat = parseInt(prompt('Lai suat ngan hang (%):'));
for (let i = 1; i <= thoigianVay; i++) {
    tienVay = tienVay * (1 + laisuat / 100);
}
alert('So tien phai tra: ' + tienVay);