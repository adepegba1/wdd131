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
];

// Call the function at the beginning to display all temples by default
CreateTemplecard(temples);

// Get the "Old" link element from the HTML using its ID
const oldLink = document.querySelector("#old");

// Add an event listener so when the "Old" link is clicked, it runs this code
oldLink.addEventListener("click", () => {
  // Call the function but only with temples dedicated before the year 1900
  CreateTemplecard(
    temples.filter((temple) => {
      // Convert the temple's dedicated string into a Date object
      const dedicatedDate = new Date(temple.dedicated);
      // Keep only temples where the year is before 1900
      return dedicatedDate.getFullYear() < 1900;
    })
  );
});

// Get the "Home" link element
const homeLink = document.querySelector("#home");

// Add an event listener so when the "Home" link is clicked, show all temples
homeLink.addEventListener("click", () => {
  CreateTemplecard(temples);
});

// Get the "New" link element
const newLink = document.querySelector("#new");

// Add an event listener so when the "New" link is clicked, run this code
newLink.addEventListener("click", () => {
  // Call the function but only with temples dedicated after the year 2000
  CreateTemplecard(
    temples.filter((temple) => {
      // Convert the temple's dedicated string into a Date object
      const dedicatedDate = new Date(temple.dedicated);
      // Keep only temples where the year is greater than 2000
      return dedicatedDate.getFullYear() > 2000;
    })
  );
});

// Get the "Large" link element
const largeLink = document.querySelector("#large");

// Add an event listener so when the "Large" link is clicked, run this code
largeLink.addEventListener("click", () => {
  // Show only temples with an area larger than 90,000 sq ft
  CreateTemplecard(temples.filter((temple) => temple.area > 90000));
});

// Get the "Small" link element
const smallLink = document.querySelector("#small");

// Add an event listener so when the "Small" link is clicked, run this code
smallLink.addEventListener("click", () => {
  // Show only temples with an area smaller than 10,000 sq ft
  CreateTemplecard(temples.filter((temple) => temple.area < 10000));
});

// Function that creates and displays temple "cards"
function CreateTemplecard(filteredTemples) {
  // Clear out anything already inside the ".temple-image" container
  document.querySelector(".temple-image").innerHTML = "";

  // Loop through each temple passed into the function
  filteredTemples.forEach((temple) => {
    // Create HTML elements for the card
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let image = document.createElement("img");

    // Add a class to the card for styling with CSS
    card.setAttribute("class", "temple-card");

    // Fill in the text and values for each piece of info
    name.textContent = temple.templeName;
    location.innerHTML = `<span class=label><b>LOCATION:</b> </span>${temple.location}`;
    dedicated.innerHTML = `<span class=label><b>DEDICATED:</b> </span>${temple.dedicated}`;
    area.innerHTML = `<span class=label><b>AREA:</b> </span>${temple.area} sq ft`;

    // Set up the image with the temple picture
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy"); // Lazy loading improves performance

    // Add all the elements into the card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    // Finally, add the finished card into the ".temple-image" container on the page
    document.querySelector(".temple-image").appendChild(card);
  });
}
