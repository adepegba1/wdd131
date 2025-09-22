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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
  },
  {
    templeName: "Barcelona Spain",
    location: "Barcelona, Spain",
    dedicated: "2022, April, 3",
    area: 27500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg",
  },
  {
    templeName: "Cape Town South Africa",
    location: "Cape Town, South Africa",
    dedicated: "2025, October, 25",
    area: 9500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-23846-main.jpg",
  },
  {
    templeName: "Lagos Nigeria",
    location: "Lagos, Nigeria",
    dedicated: "2025, May, 10",
    area: 19800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577-main.jpg",
  },
  // Add more temple objects here...
];
