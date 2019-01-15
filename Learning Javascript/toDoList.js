var todos = [];
function listTodos() {
    console.log("********");
        todos.forEach(function(c, i) {
            console.log(i + ": " + c);
        });
    console.log("********");
}
function addTodos() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}
function deleteTodos() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index,1);
    console.log("Deleted Todo");
}
window.setTimeout(function() {
    while(true) {
        var input = prompt("What would you like to do?")
        if(input === "list") {
            listTodos();
        }
        else if(input === "new") {
            addTodos();
        }
        else if(input === "delete") {
            deleteTodos();
        }
        else if(input == "quit") {
            console.log("OK, YOU QUIT THE APP");
            break;
            
        }
    }
}, 500);
