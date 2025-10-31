// ✅ Navbar Responsive Logic
const menu = document.querySelector(".menu-icon");
const links = document.querySelector(".links");
const icon = menu.querySelector("i");

// ✅ Search Feature Elements
const searchIcon = document.querySelector(".search-icon i");
const searchContainer = document.querySelector(".search-container");

let searchVisible = false;

// 🔹 Menu Click
menu.addEventListener("click", () => {
  // Close search bar if open
  if (searchVisible) {
    searchContainer.style.display = "none";
    searchIcon.classList.replace("ri-close-line", "ri-search-line");
    searchVisible = false;
  }

  // Toggle menu links
  links.classList.toggle("show");
  if (links.classList.contains("show")) {
    icon.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    icon.classList.replace("ri-close-line", "ri-menu-line");
  }
});

// 🔹 Search Icon Click
searchIcon.addEventListener("click", () => {
  // Close menu if open
  if (links.classList.contains("show")) {
    links.classList.remove("show");
    icon.classList.replace("ri-close-line", "ri-menu-line");
  }

  // Toggle search bar
  searchVisible = !searchVisible;
  if (searchVisible) {
    searchContainer.style.display = "flex";
    searchIcon.classList.replace("ri-search-line", "ri-close-line");
  } else {
    searchContainer.style.display = "none";
    searchIcon.classList.replace("ri-close-line", "ri-search-line");
  }
});

// ✅ Dynamic Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
