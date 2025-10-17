function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
            console.log("Alice gets 1 points")
        } else if (a[i] < b[i]) {
            bob++
        } else {
            console.log("Equal Points")
        }
    }
    return [alice, bob]
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]))