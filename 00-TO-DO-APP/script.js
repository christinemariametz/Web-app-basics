// Welche Elemente kann ich ändern/hinzufügen, will ich "anfassen?" 
// Variablen bauen!
const newToDo = document.getElementById("newToDoInput")
const addToDoBtn = document.getElementById("add-todo");

const removeBtn = document.getElementById("remove");

const radioInputAll = document.getElementById("radioInputAll");
const radioInputDone = document.getElementById("radioInputDone");
const radioInputOpen = document.getElementById("radioInputOpen");


// Mock-up für newToDos:
const state = {
    "1686512042647": { description: "Lern JavaScript", done: false },
    "1686512133550": { description: "Lern CSS", done: false },
    "1686512133551": { description: "Lern HTML", done: false },
    "1686512133552": { description: "Practise with CodeWarsKatas", done: false }
}


// Visualisieren meiner Todos/ "Rendern"
function renderTodos() {
    // meine Liste soll anfangs immer leer sein.
    const list = document.getElementById("list");
    list.innerHTML = "";

    Object.keys(state).forEach(id => {
     const todo = state[id];   
        // todoListe bauen
        const newLi = document.createElement("li");

        // Checkbox bauen
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;

        // description der Todos bauen und hinzufügen
        const todoText = document.createElement("lable");
        todoText.innerHTML = todo.description;
        // Checkbox hinzufügen
        newLi.appendChild(checkbox);

        // Text hinzufügen
        newLi.append(todoText);

        // todoList hinzufügen
        list.appendChild(newLi);

        // Wenn in der App die checkbox geklickt wird, muss auch mein state aktualisiert sein. 
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


// Welche Events brauche ich?? 

    // 1. Click Event bauen für "ADD todo"
addToDoBtn.addEventListener("click", () => {
    //.trim um Leerzeichen zu löschen
   const newDescription = newToDo.value.trim();
   // Wenn....
    if(newDescription.length < 4) {
        return;
    }
   const newId = new Date().getTime();
   state[newId] = {description:newDescription, done:false};

    renderTodos();
})

    // 2. Remove Btn klicken
    // 3. Filter auswählen
