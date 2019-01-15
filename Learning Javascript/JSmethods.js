var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["Bob", "Tina"],
    add: function(x,y) {
        return x + y;
    }
}

obj.add(1,2);

var dogSpace = {};

dogSpace.speak = function() {
    return "WOOF!";
}
var catSpace = {};
catSpace.speak = function() {
    return "MEOOWW!"
}
dogSpace.speak();
catSpace.speak();