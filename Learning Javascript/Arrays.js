function printReverse(array) {
    for(var i = (array.length -1); i >=0; i--) {
        console.log(array[i]);
    }
}
function isUniform(array) {
    a = array[0];
    c = true;
    array.forEach(function(b) {
        if(b != a) {
            c = false;
        }
    });
    return c;
}
function sumArray(array) {
    a = 0;
    array.forEach(function(b) {
        a += b;
    });
    return a;
}
function max(array) {
    a = array[0];
    array.forEach(function(b) {
        if(b > a) {
            a = b;
        }
    });
    return a;
}
