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

const temperature = 30;
const wind = 15;
