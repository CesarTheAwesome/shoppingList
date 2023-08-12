var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Function to create a delete button for a list item
function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete");
    return deleteButton;
}

// Function to create a new list item with delete button
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var deleteButton = createDeleteButton();
    li.appendChild(deleteButton);

    li.addEventListener("click", toggleDoneClass);
    deleteButton.addEventListener("click", deleteListItem);
}

// Function to delete list item
function deleteListItem() {
    this.parentNode.remove();
}

// Function to delete list item
function toggleDoneClass() {
    this.classList.toggle("done");
}

// Function to check input length
function inputLength() {
    return input.value.length;
}

// Function to add a new list item after click
function addListAfterClick() {
    if (inputLength() > 0) {  
        createListElement();
    }
}

// Function to add a new list item after key press (Enter)
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {  
        createListElement();
    }
}

// Add event listeners and delete buttons to existing list items
li.forEach(function(listItem) {
    var deleteButton = createDeleteButton();
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteListItem);
    listItem.addEventListener("click", toggleDoneClass);
});

// Add event listeners
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)


