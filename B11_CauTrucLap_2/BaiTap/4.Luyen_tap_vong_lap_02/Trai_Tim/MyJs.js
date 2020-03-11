let i, j;
let heart = "";
for (i = -4; i <= 4; i += 0.5) {
    for (j = -4; j <= 4; j += 0.5) {
        if (Math.abs(j) === 4 || i === -Math.abs(j) - 2 || i === -Math.abs(j) + 4 || i === Math.abs(j) - 6) {
            heart += "* ";
        } else heart += " _ ";
    }
    heart += "<br>";
}
document.write(heart);