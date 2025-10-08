const date = new Date();

document.getElementById(
  "currentyear"
).innerHTML = `&copy;${date.getFullYear()}  🌺Adepegba David🌺 Nigeria`;

document.getElementById(
  "last-modified"
).textContent = `Last Modified ${document.lastModified}`;

subjects = {
  sql: "SQL",
  excel: "Mircosoft Excel",
  powerBi: "Power Bi",
  python: "Python",
};

const subjectList = document.getElementById("subject");
if (subjectList) {
  for (const [key, value] of Object.entries(subjects)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    subjectList.appendChild(option);
  }
}
