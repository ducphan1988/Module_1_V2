let str = prompt('Enter 10 numbers split by ,');
let array = str.split(',');
for ( let i = 0, j = array.length -1 ; i < j; i++, j--) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
alert(array.toString());