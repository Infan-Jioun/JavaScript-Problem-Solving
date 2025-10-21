function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const x = arr[i];
        if (x > 0) pos++;
        else if (x < 0) neg++;
        else zero++;
    }

}