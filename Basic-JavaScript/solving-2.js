function simpleArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum;
}
const result = simpleArray([1,2,3,4,10,11])
console.log(result);