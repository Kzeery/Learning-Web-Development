function isEven(num) {
    if(num%2 === 0) {
        return true;
    }
    return false;
}

function factorial(num) {
    j = 1;
    for(var i = num; i > 0; i-- ) {
        j *= i;
    }
    return j;
}
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
    
}