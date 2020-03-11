function BaiTap1() {
    let input_do_C;
    input_do_C = prompt('Nhập giá trị độ C cần đổi: ');
    let do_C = parseFloat(input_do_C);
    let do_F = ((9*do_C)/5 + 32);
    document.write("Độ F đổi được có giá trị là: " +do_F);
}

function BaiTap2() {
    let inputDiemLy = prompt("Nhập Điểm Lý Của Sinh Viên: ");
    let inputDiemHoa = prompt("Nhập Điểm Hoá Của Sinh Viên: ");
    let inputDiemSinh = prompt("Nhập Điểm Sinh Của Sinh Viên: ");
    let DiemLy = parseFloat(inputDiemLy);
    let DiemHoa = parseFloat(inputDiemHoa);
    let DiemSinh = parseFloat(inputDiemSinh);
    result = (DiemHoa + DiemLy + DiemSinh)/3;
    document.write('Điểm trung bình 3 môn của sinh viên này là: ' + result);
}

function BaiTap3() {
    const pi = 3.14;
    let radius = parseFloat(prompt("Nhập bán kính của hình tròn: "));
    document.write("Diện tích của hình tròn là: " + radius*radius*pi);
    document.write("<br>")
    document.write("Chu vi của hình tròn là: " + 2*radius*pi);
}