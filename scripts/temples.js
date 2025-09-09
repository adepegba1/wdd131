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

// This finds the HTML element with id="currentyear" and stores it in a variable
const currentyear = document.querySelector("#currentyear");

// Creates a new Date object containing the current date and time (from your computer or server).
const now = new Date();

// This writes text into the HTML element with id="currentyear"
// This uses the Intl.DateTimeFormat API to format the date nicely.
currentyear.innerHTML = `Last modification:
${new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "medium",
  hour12: false,
}).format(now)}`;
