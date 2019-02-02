function average(arr) {
    var tot = 0;
    for(var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    var avg = Math.round(tot/arr.length);
    console.log(avg);
    return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);