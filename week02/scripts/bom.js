// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
    // Check to make sure the input is not blank before completing the remaining tasks in this list by using an if block that provides a message or does nothing and returns the .focus() to the input field.
    if (input.value !== '') { 
        // The user clicks Add Chapter button and the program checks to make sure that the input field is not empty. Then it is OK to start creating and populating elements.

        // Create a li element that will hold each entry's chapter title and an associated delete button
        const li = document.createElement("li");

        // Create a delete button
        const delButton = document.createElement("button");

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value;

        // Populate the button textContent with a ❌
        delButton.textContent = "❌";

        // Append the li element variable with the delete button
        li.append(delButton);

        // Append the li element variable to the unordered list in your HTML
        list.append(li);

        // When ❌ is clicked, remove THIS li
        delButton.addEventListener('click', function(){
        list.removeChild(li);});
       
        // reset the input
        input.focus();
        input.value = "";
     }
});

