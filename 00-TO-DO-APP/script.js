// Welche Elemente kann ich ändern/hinzufügen, will ich "anfassen?" 
// Variablen bauen!
const newToDo = document.getElementById("newToDoInput")
const addToDoBtn = document.getElementById("add-todo");

const remove = document.getElementById("remove");

const radioInputAll = document.getElementById("radioInputAll");
const radioInputDone = document.getElementById("radioInputDone");
const radioInputOpen = document.getElementById("radioInputOpen");


// Mock-up für newToDos:
const state = {
    todos: [
        { id: 1, description: "Lern JavaScript", done: false},
        { id: 2, description: "Lern CSS", done: false},
        { id: 3, description: "Lern HTML", done: false},
        { id: 4, description: "Practise with CodeWarsKatas", done: false},
    ]
}



// Visualisieren meiner Todos/ "Rendern"
function renderTodos() {
    // meine Liste soll anfangs immer leer sein.
    const list = document.getElementById("list");
    list.innerHTML = "";

    state.todos.forEach(todo => {
        // todoListe bauen
        const newLi = document.createElement("li");

        // Checkbox bauen
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;

        // Wenn in der App die checkbox geklickt wird, muss auch mein state aktualisiert sein. 
        checkbox.addEventListener("change", (event) => {
            const newTodoDoneState = event.target.checked;
            todo.done = newTodoDoneState;
        });

        // Checkbox hinzufügen
        newLi.appendChild(checkbox);


        // description der Todos bauen und hinzufügen
        const todoText = document.createTextNode(todo.description);
        newLi.append(todoText);

        // todoList hinzufügen
        list.appendChild(newLi);
    });
}
// Funktion aufrufen um den State visuell darzustellen/ zu sehen
renderTodos();




// Welche Events brauche ich?? 

    // 1. Click Event bauen für "ADD todo"
addToDoBtn.addEventListener("click", () => {
    renderTodos();
})

    // 2. Remove Btn klicken
    // 3. Filter auswählen
