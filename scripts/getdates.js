// getdates.js

// Set the current year
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set the last modified date
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = "Last Modified: " + document.lastModified;
}
