let array = [];
let bigger10 = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 200 - 100);
    if (array[i] > 10) {
        bigger10.push(array[i]);
        count++;
    }
}
document.write(
    'Array: ' + array.toString() + '<br>' +
    'Numbers are bigger than 10: ' + bigger10.toString() + '<br>' +
    'Amount: ' + count
)