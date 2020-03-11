let array = [];
let negativeNumber = [];
let count = 0;
for ( let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random()*200 - 100);
    if (array[i] < 0) {
        negativeNumber.push(array[i]);
        count++;
    }
}
document.write(
    'Array: ' + array.toString() + '<br>' +
    'Numbers are negative: ' + negativeNumber.toString() + '<br>' +
    'Amount: ' + count
)