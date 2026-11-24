const yearElement = document.getElementById("current-year");
const linkCount = document.querySelectorAll(".links-grid .link-card").length;

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

document.querySelector("#link-count").textContent =
  String(linkCount).padStart(2, "0");