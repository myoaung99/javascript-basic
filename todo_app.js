let userInput = " ";
let commends = ["new", "list", "delete", "quit"];
let todo = [];
let isOn = true;

while (isOn){
    userInput = prompt("Enter the instruction").toLowerCase();

    //Exit the app
    if(userInput === "quit"){
        console.log("Quitting.")
        //When user type quit the switch is off
        isOn = false;

    //Add a new list
    }else if(userInput === "new"){
        //Ask the user what to add
        new_todo = prompt("Enter the new todo.");
        //Adding the string
        todo.push(new_todo);
        //Report
        console.log(`${new_todo} is added to list.`);

    //Display the stored list
    }else if(userInput === "list"){
        //if there is nothing in the list 
        if(todo.length === 0){
            console.log("There is nothing in the list.")
        }else{

            // Display the todo list 
            console.log("********");
            for (let list of todo){
                console.log(`${todo.indexOf(list)} : ${list}.`);
            }
            console.log("********");
        }
        
    }else if(userInput === "delete"){
        deleteIndex = parseInt(prompt("Enter the index of Todo to delete."));
        if(deleteIndex >= 0){
            todo.splice(deleteIndex, 1);

            if(todo.length > 0){
                // Display the todo list 
                console.log("********");
                for (let list of todo){
                    console.log(`${todo.indexOf(list)} : ${list}.`);
                }
                console.log("********");
            }            
        }
    }else{
        console.log("Enter the valid command.");
    }
}

