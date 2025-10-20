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
if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));
}

// =========================
// FILTER ITEMS (PROJECTS & CERTIFICATIONS)
// =========================
const filterItems = document.querySelectorAll("[data-filter-item]");

// DESKTOP & MOBILE FILTER BUTTONS
const filterBtnsDesktop = document.querySelectorAll(".filter-list [data-filter-btn]");
const filterBtnsMobile = document.querySelectorAll(".filter-list-mobile [data-filter-btn]");
const allFilterBtns = [...filterBtnsDesktop, ...filterBtnsMobile];

// FILTER CLICK HANDLER
allFilterBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = btn.innerText.toLowerCase();

    // Filter items
    filterItems.forEach(item => {
      if (category === "projects" && item.dataset.category === "projects") {
        item.classList.add("active");
      } else if (category === "certifications" && item.dataset.category === "certifications") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update active state for all buttons
    allFilterBtns.forEach(b => {
      if (b.innerText.toLowerCase() === category) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    // Update mobile dropdown value if exists
    if (selectValue) selectValue.innerText = btn.innerText;

    // Close mobile dropdown after selection
    if (select) select.classList.remove("active");
  });
});

// MOBILE DROPDOWN ITEMS (for small screens)
selectItems.forEach(itemBtn => {
  itemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = itemBtn.innerText.toLowerCase();
    selectValue.innerText = itemBtn.innerText;
    select.classList.remove("active");

    // Filter items
    filterItems.forEach(item => {
      if (category === "projects" && item.dataset.category === "projects") {
        item.classList.add("active");
      } else if (category === "certifications" && item.dataset.category === "certifications") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update all buttons
    allFilterBtns.forEach(b => {
      if (b.innerText.toLowerCase() === category) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
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
// CONTACT FORM VALIDATION & EMAILJS
// =========================
const form = document.querySelector("[data-form]") || document.getElementById("contact-form");
const formInputs = form ? form.querySelectorAll("[data-form-input], input, textarea") : [];
const formBtn = form ? form.querySelector(".form-btn") : null;

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

// EMAILJS SEND FORM
if (form) {
  emailjs.init("lpKStGcDNYaGI5PtP"); // your public key

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_dspsf98", "template_6vnmmgn", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("❌ Failed to send message. Check console for details.");
      });
  });
}
