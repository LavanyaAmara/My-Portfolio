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
// FILTER ITEMS (PROJECTS & CERTIFICATIONS)
// =========================
const filterBtnsDesktop = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// MOBILE FILTER BUTTONS (NEW)
const filterBtnsMobile = document.querySelectorAll(".filter-btn-mobile");

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
function setActiveBtnDesktop(category) {
  filterBtnsDesktop.forEach(btn => {
    if (btn.innerText.toLowerCase() === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// SET ACTIVE BUTTON (MOBILE)
function setActiveBtnMobile(category) {
  filterBtnsMobile.forEach(btn => {
    if (btn.innerText.toLowerCase() === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// DESKTOP FILTER BUTTON CLICK
filterBtnsDesktop.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();
    filterItemsFunc(category);
    setActiveBtnDesktop(category);
    setActiveBtnMobile(category);
  });
});

// MOBILE FILTER BUTTON CLICK
filterBtnsMobile.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();
    filterItemsFunc(category);
    setActiveBtnMobile(category);
    setActiveBtnDesktop(category);
  });
});

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
