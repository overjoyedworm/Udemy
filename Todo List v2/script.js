/*jslint devel: true */

var todos = ["walk dog"];
var input = prompt("What would you like to do?");


while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    }else if(input ==="delete"){
        deleteTodo();
    }
        
    
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app.");

//*********************
//Functions for program
//*********************

function listTodos(){
    console.log("*****");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("*****");
};

function addTodo(){
    //ask for new to do
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
}

function deleteTodo(){
    //ask for index of todo to be deleted
        var del = prompt("What index would you like to delete?");
        //delete that todo
        todos.splice(del,1);
        console.log("You deleted a todo")
}