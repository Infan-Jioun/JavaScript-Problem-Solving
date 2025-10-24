function birthdayCakeCandles(candles){
    let max = -Infinity;
    let count = 0;
    for(let i = 0; i < candles.length; i ++){
        const h  = parseInt(candles[i]);
        if(h > max){
            max = h;
            count = 1;
        } else if(h === max){
            count ++;
        }
    }
    return count;
}