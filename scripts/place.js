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

// windwill function calculation
const temperature = 8;
const WindSpeed = 7;

const calculateWindChill = (temp, speed) => {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  );
};
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && WindSpeed > 4.8) {
  const WindChill = calculateWindChill(temperature, WindSpeed);
  windChillElement.textContent = WindChill.toFixed(2) + "C";
} else {
  windChillElement.textContent = "N/A";
}
