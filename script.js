form.addEventListener('submit', (event) => {

    event.preventDefault();

    const newTodoText = document.getElementById("todo-input").value;
    const dataId = localStorage.length + 1;
    localStorage.setItem(dataId, newTodoText);

    const ul = document.getElementById("todo-list");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newTodoText));
    li.setAttribute("id", dataId);

    const newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("X"));

    newButton.setAttribute("onClick", "removeData(this.parentElement.id)");

    li.appendChild(newButton);
    ul.appendChild(li);

    document.getElementById("form").reset();
});

function removeData(clickedId) {

    localStorage.removeItem(clickedId);

    console.log(clickedId);
    
    const deleteBtn = document.getElementById(clickedId);
    deleteBtn.remove(); 
}

window.onload  = function() {
    for (let i = 1; i <= localStorage.length; i++){
        value = localStorage.getItem(i);

        const ul = document.getElementById("todo-list");

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        li.setAttribute("id", i);

        const newButton = document.createElement("button");
        newButton.appendChild(document.createTextNode("X"));

        newButton.setAttribute("onClick", "removeData(this.parentElement.id)");

        li.appendChild(newButton);
        ul.appendChild(li);
        
        
    }; 
}