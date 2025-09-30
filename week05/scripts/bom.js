// declare three variables that hold references to input, button, and list elements in the HTML
const input = document.querySelector("#favchap"); // gets the input field with id="favchap"
const button = document.querySelector("button"); // gets the first <button> element on the page
const list = document.querySelector("#list"); // gets the <ul> or <ol> element with id="list"

// initialize an array with chapters from localStorage, or empty array if none exists
let chaptersArray = getChapterList() || [];

// loop through the saved chapters and display them when the page loads
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// add an event listener to the button
button.addEventListener("click", () => {
  if (input.value != "") {
    // only run if input is not empty
    displayList(input.value); // display the new chapter on the page
    chaptersArray.push(input.value); // add it to the array
    setChapterList(); // update localStorage with the new array
    input.value = ""; // clear the input box
    input.focus(); // move the cursor back to the input box
  }
});

// function to display a chapter in the list
function displayList(item) {
  let li = document.createElement("li"); // create a new list item
  let deletebutton = document.createElement("button"); // create a delete button
  li.textContent = item; // set the text of the <li> to the chapter name
  deletebutton.textContent = "❌"; // give the button a ❌ label
  deletebutton.classList.add("delete"); // add CSS class for styling
  li.append(deletebutton); // attach the button to the list item
  list.append(li); // add the <li> to the list in the DOM

  // add functionality to the delete button
  deletebutton.addEventListener("click", () => {
    list.removeChild(li); // remove the list item from the page
    deleteChapter(li.textContent); // remove it from array + localStorage
    input.focus(); // return focus to the input
  });

  console.log(
    "I like to copy code instead of typing it out myself and trying to understand it."
  );
}

// save the chapters array to localStorage as a JSON string
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// get the chapters array from localStorage (turn it back from JSON string into an array)
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// remove a chapter from the array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);

  // keep only items that are NOT the deleted one
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // update localStorage
  setChapterList();
}
