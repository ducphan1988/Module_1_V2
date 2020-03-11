let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 200 - 100);
}
let max = array[0];
let index = 0;
for (let i = 0; i < 10; i++) {
    if (array[i + 1] > max) {
        max = array[i + 1];
        index = i + 1;
    }
}
document.write(
    'Array: ' + array.toString() + '<br>' +
    'Max of array is: ' + max + '<br>' +
    'At index: ' + index
)