function aVeryBigSum(arr) {
    let sum = 0n;
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        const big = (typeof v === "bigint") ? v : BigInt(String(v).trim());
        sum += big
    }
return sum
}
const result = aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);
console.log(result.toString()); 