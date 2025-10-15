function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (1 % 3 === 0) {
            console.log("Fizz")
        } else if (1 % 5 === 0){
         console.log("Buzz");
        } else {
            console.log(i);
        }

    }
}
fizzBuzz(15)