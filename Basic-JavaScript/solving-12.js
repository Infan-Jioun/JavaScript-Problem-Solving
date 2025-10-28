function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    for (let i = 0; i < apples.length; i++) {
        const pos = a + apples[i];
        if (pos >= s && pos <= t) {
            appleCount++;
        }
    }

    let orangeCount = 0;
    for (let i = 0; i < oranges.length; i++) {
        const pos = b + oranges[i];
        if (pos >= s && pos <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
