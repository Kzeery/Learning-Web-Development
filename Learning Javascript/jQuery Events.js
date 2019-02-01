$("h1").click(function() {
    
});
$("button").click(function() {
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You clicked " + text);
    $("h1").fadeToggle(1000, function() {
        // $(this).remove();
    });
    
});
$("input").keypress(function(event) {
    if(event.which === 13) {
        $(this).val("");
    }
});
$("button:first-of-type").on("dblclick", function() {
    $(this).css("border", "10px solid pink");
});
$("button").on("mouseenter", function() {
    $(this).css("fontWeight", "bold");
});
$("button").on("mouseleave", function() {
    $(this).css("fontWeight", "normal");
});