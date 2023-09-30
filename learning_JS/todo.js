console.log("Welcome to the todo list!!!!");
let choice = prompt("What would you like to do??")
let list = [];
while (choice !== "quit") {
    if (choice === "new") {
        choice = prompt("add todo");
        item = list.push(choice);
        console.log("new todo added to the list")
    }
    choice = prompt("What would you like to do??");
    if (choice === "list") {
        console.log("******************");     
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("******************");
    }
    if (choice === "delete") {
        let index = parseInt(prompt("Enter the index you want to delete"));
        if(!Number.isNaN(index)) {
            let deleted = list.splice(index, 1);
            console.log(`${deleted} has been removed`);    
        }
        else {
            console.log("Enter a valid index"); 
        }
        
    }
}
console.log("GoodBye :)");
