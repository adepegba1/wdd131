const now = new Date();

document.getElementById(
  "currentyear"
).innerHTML = `&copy;${now.getFullYear()}🌺Adepegba David 🌺 Nigeria`;

document.getElementById(
  "last-modified"
).textContent = `Last Modified ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const selectOptions = document.getElementById("product-name");
if (selectOptions) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id; // use id for the value
    option.textContent = product.name; // use name for the display text
    selectOptions.appendChild(option);
  });
}
