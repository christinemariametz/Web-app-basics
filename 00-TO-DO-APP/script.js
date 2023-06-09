const state = {
    todos: [
        { description: "Lern JavaScript", done: false},
        { description: "Lern CSS", done: false},
        { description: "Lern HTML", done: false},
        { description: "Practise with CodeWarsKatas", done: false},
    ]
}

function renderTodos() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    state.todos.forEach(todo => {
        const todoLi = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;

        checkbox.addEventListener("checkbox", (e) => {
            const newTodoDoneState = e.target.checked;
            todo.done = newTodoDoneState;
        });

        todoLi.appendChild(checkbox);

        const todoText = document.createTextNode(todo.description);
        todoLi.append(todoText);

        list.appendChild(todoLi);
    });
}

renderTodos();

