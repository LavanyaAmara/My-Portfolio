// =========================
// ELEMENT TOGGLE FUNCTION
// =========================
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// =========================
// SIDEBAR TOGGLE (MOBILE)
// =========================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// =========================
// CUSTOM SELECT (MOBILE)
// =========================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

// TOGGLE SELECT DROPDOWN
select.addEventListener("click", () => elementToggleFunc(select));

// =========================
// FILTER ITEMS (PROJECTS & CERTIFICATIONS)
// =========================
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
// MOBILE DROPDOWN ITEM CLICK
selectItems.forEach(itemBtn => {
  itemBtn.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default button behavior
    e.stopPropagation(); // Stop the event from bubbling

    const category = itemBtn.innerText.toLowerCase();
    selectValue.innerText = itemBtn.innerText;

    // Close the dropdown
    select.classList.remove("active");

    // Filter items
    filterItemsFunc(category);

    // Update desktop buttons as well
    setActiveBtn(category);
  });
});



// DESKTOP FILTER BUTTON CLICK
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterItemsFunc(category);
    setActiveBtn(category);
  });
});

// COMMON FILTER FUNCTION
function filterItemsFunc(category) {
  filterItems.forEach(item => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// SET ACTIVE BUTTON (DESKTOP)
function setActiveBtn(category) {
  filterBtns.forEach(btn => {
    if (btn.innerText.toLowerCase() === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// =========================
// PAGE NAVIGATION
// =========================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages.forEach((page, i) => {
      if (i === index) {
        page.classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
    window.scrollTo(0, 0);
  });
});

// =========================
// CONTACT FORM VALIDATION
// =========================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// ENABLE/DISABLE BUTTON BASED ON VALIDITY
if (form && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}
