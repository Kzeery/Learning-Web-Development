var first = document.querySelector("p");
var second = document.getElementsByTagName("p")[0];
var third = document.querySelector("#first");
var fourth = document.querySelector(".special");
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    alert("h1 was clicked!");
    h1.style.background = "orange";
})

