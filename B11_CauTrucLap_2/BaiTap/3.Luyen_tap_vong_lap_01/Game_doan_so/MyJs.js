function game() {
    let a = Math.round(Math.random() * 10);
    console.log(a);
    let b = parseInt(prompt("Viết số đê: "));
    let count = 0;
    while (a !== b && count<3) {
        alert('Sai rồi bạn eii !!')
        b = parseInt(prompt("Nhập lại đi cưng: "));
        count ++;
    }
    if (a===b){
        alert("Đúng!! Ghê đấy!")
    }
    else {
        if (count===3){
            alert("Hết lượt rồi, nhập nhiều.");
        }
    }
}