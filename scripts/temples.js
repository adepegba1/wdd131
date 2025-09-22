// Grabs the hamburger button (#menu) and the nav (.navigation) from HTML.
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Adds a click event listener to the button.
hamButton.addEventListener("click", () => {
  // Toggles "open" class on navigation → shows/hides links.
  navigation.classList.toggle("open");

  // Toggles "open" class on button → changes symbol ☰ ↔ ❌.
  hamButton.classList.toggle("open");
});

const now = new Date();
document.getElementById(
  "currentyear"
).innerHTML = `&copy;${now.getFullYear()} 🌺Adepegba David🌺 Nigeria`;
document.getElementById(
  "last-modified"
).textContent = `Last modified ${document.lastModified}`;
