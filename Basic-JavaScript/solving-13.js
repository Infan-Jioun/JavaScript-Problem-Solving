function kangaroo(x1, v1, x2, v2) {
    if(x1 === x2) return "YES"; 
    if(x1 < x2 && v1 <= v2) return "NO";
    if(x1 > x2 && v1 >= v2) return "NO";
    const dx = x2 - x1;
    const dv = v1 - v2;
    if(dv === 0) return "NO";
    if(dx % dv === 0){
        const n = dx / dv;
        return n >= 0 ? "YES" : "NO";
    }
    return "NO";
}