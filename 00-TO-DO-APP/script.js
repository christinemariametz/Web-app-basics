// Welche Elemente müssen interaktiv sein?
// ---> Variablen dafür bauen!
const newToDoInput = document.getElementById("newToDoInput")
const addToDoBtn = document.getElementById("add-todo");
const removeBtn = document.getElementById("remove");
const radioInputAll = document.getElementById("radioInputAll");
const radioInputDone = document.getElementById("radioInputDone");
const radioInputOpen = document.getElementById("radioInputOpen");


// ### Displaying Todos: 
// ----> Mock-up einiger ToDos bauen:
const state = {
    "1686512042647": { description: "Lern JavaScript", done: false },
    "1686512133550": { description: "Lern CSS", done: false },
    "1686512133551": { description: "Lern HTML", done: false },
    "1686512133552": { description: "Practise with CodeWarsKatas", done: false }
};


// State Management: ----> Visualisieren meiner Todos/ "Rendern"
function renderTodos() {
    // meine Liste soll anfangs immer leer sein.
    const list = document.getElementById("list");
    list.innerHTML = "";
    // forEach Todo in der Liste soll das gemacht werden:
    Object.keys(state).forEach(id => {
        // wie greife ich auf die einzelnen todos zu?
        const todo = state[id];   
        
        // todoListe bauen
        const newLi = document.createElement("li");

        // Checkbox bauen
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;

        // description der Todos bauen
        const todoText = document.createElement("lable");
        todoText.innerHTML = todo.description;
        
        // todoList, Checkbox und Text hinzufügen
        list.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.append(todoText);

        // Checkbox klicken === true/done PLUS: der Todo Text soll durchgestrichen werden
        // Checkbox wieder klicken === false/open
        // PLUS : Wenn in der App die checkbox geklickt wird, muss auch mein state aktualisiert sein. 
        checkbox.addEventListener("change", (event) => {
            console.log(event.target.checked);
            if(event.target.checked) {
                todoText.style.textDecoration = "line-through";
                todo.done = true;
            } else {
                todoText.style.textDecoration = "none";
                todo.done = false;
            }
        });
    });
}
// Funktion aufrufen um den State visuell darzustellen/ zu sehen
renderTodos();

// ### Adding new Todos
// ---> Click-Event für "addToDo" bauen: Wenn ich auf den addToDoBtn klicke...
addToDoBtn.addEventListener("click", () => {
    //Variable für ein neues Todo PLUS ".trim", um Leerzeichen zu löschen:
   const newDescription = newToDoInput.value.trim();
   // Kein leeres oder unnötiges ToDo anlegen!
   // ---> Wenn mein ToDo Text kürzer als 4 Zeichen ist, dann return.
    if(newDescription.length < 4) {
        return;
    }
   // ---> ansonsten erstelle das neue ToDo und erstelle auch noch eine ID dafür: 
   const newId = new Date().getTime();
   state[newId] = {description:newDescription, done:false};
    // state updaten:
    renderTodos();
})


    // 2. Remove Btn klicken
    // 3. Filter auswählen
