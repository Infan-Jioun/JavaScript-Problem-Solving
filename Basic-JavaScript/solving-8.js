function miniMaxSum(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let total = 0;
    let minVal = Infinity;
    let maxVal = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        total += arr[i];
        if (v < minVal) minVal = v;
        if (v > maxVal) maxVal = v;
    }
    const minSum = total - maxVal;
    const maxSum = total - minVal;
    console.log(minSum + " " + maxSum);


}
