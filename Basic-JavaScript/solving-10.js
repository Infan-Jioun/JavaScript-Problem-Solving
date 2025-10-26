function timeConversion() {
    const period = s.slice(-2);
    const time = s.slice(0, -2);
    let [hh, mm, ss] = time.split(":");
    let hour = parseInt(hh);
    if (period == "AM") {
        if (hour == 12) {
            hh = "00";
        }
        else {
            hh = String(hour).padStart(2, '0');
        }

    }
    else {
        if (hour === 12) {
            hh = "12";

        } else{
            hh = String(hour + 12).padStart(2, '0');
        }
    }
    return `${hh}:${mm}:${ss}`;
}