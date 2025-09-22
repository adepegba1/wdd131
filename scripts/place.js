const now = new Date();
document.getElementById(
  "currentyear"
).innerHTML = `&copy;${now.getFullYear()} 🌺Adepegba David🌺 Nigeria`;
document.getElementById(
  "last-modified"
).textContent = `Last modified ${document.lastModified}`;

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
