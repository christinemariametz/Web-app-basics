// Welche Elemente kann ich ändern/hinzufügen, will ich "anfassen?" 
// Variablen bauen!
const list = document.getElementById("list");

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
    list.innerHTML = "";

    state.todos.forEach(todo => {
        // todoListe bauen
        const todoLi = document.createElement("li");

        // Checkbox bauen
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;

        // Wenn in der App geklickt wird, muss auch mein state aktualisiert sein. 
        checkbox.addEventListener("change", (event) => {
            const newTodoDoneState = event.target.checked;
            todo.done = newTodoDoneState;
        });

        // Checkbox hinzufügen
        todoLi.appendChild(checkbox);
        // description der Todos bauen und hinzufügen
        const todoText = document.createTextNode(todo.description);
        todoLi.append(todoText);

        // todoList hinzufügen
        list.appendChild(todoLi);
    });
}
// Funktion aufrufen um den State visuell darzustellen/ zu sehen
renderTodos();

