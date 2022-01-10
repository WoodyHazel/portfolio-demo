// loader

// window.addEventListener("load", (event) => {
//   pageReset();
// });
// Page Loader
const pageLoader = document.querySelector(".page-loader");

function loaderTimer() {
  setTimeout(() => {
    pageLoader.style.opacity = 0;
    setTimeout(() => {
      pageLoader.style.display = "none";
    }, 2000);
  }, 500);
}
window.addEventListener("scroll", loaderTimer);

// Header
const menuBtn = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");
const mainNavLinks = document.querySelectorAll(".link-main-nav");
const emailBtn = document.querySelector(".email-btn");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("nav-hidden");
});
emailBtn.addEventListener("click", () => {
  if (!mainNav.classList.contains("nav-hidden")) {
    mainNav.classList.toggle("nav-hidden");
  }
  expandedSectionReset();
  pageReset();
  pageBtnReset();
  contactSection.classList.toggle("hidden");
});
mainNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    mainNav.classList.toggle("nav-hidden");
    expandedSectionReset();
    pageReset();
    pageBtnReset();
    const clicked = e.target.innerHTML;
    switch (clicked) {
      case "About":
        aboutSection.classList.toggle("hidden");
        break;
      case "Contact":
        contactSection.classList.toggle("hidden");
        break;
      case "Projects":
        projectsSection.classList.toggle("hidden");
        break;
      case "Skills":
        skillsSection.classList.toggle("hidden");
        break;
      case "Photos":
        expandedPhotos.classList.toggle("hidden");
        break;
      case "Music":
        expandedMusic.classList.toggle("hidden");
        break;
      case "Settings":
        expandedSettings.classList.toggle("hidden");
        break;
    }
  });
});
const expandedSections = document.querySelectorAll(".section-container");
function expandedSectionReset() {
  expandedSections.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
}

// Default Page
const defaultPageSections = document.querySelectorAll(
  ".default-page .section-img"
);
const aboutSection = document.querySelector(".section-about");
const projectsSection = document.querySelector(".section-projects");
const contactSection = document.querySelector(".section-contact");
const skillsSection = document.querySelector(".section-skills");
const settingsSection = document.querySelector(".section-settings");

defaultPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("about")) {
      aboutSection.classList.remove("hidden");
    } else if (e.target.parentElement.classList.contains("projects")) {
      projectsSection.classList.remove("hidden");
    } else if (e.target.parentElement.classList.contains("contact")) {
      contactSection.classList.remove("hidden");
    } else if (e.target.parentElement.classList.contains("skills")) {
      skillsSection.classList.remove("hidden");
    } else if (e.target.parentElement.classList.contains("settings")) {
      settingsSection.classList.remove("hidden");
    }
  });
});

const closeSectionBtns = document.querySelectorAll(".close-section-btn");

closeSectionBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.add("hidden");
  });
});

// Widgets Page

// Apps Page

// Page Selector
const defaultPage = document.querySelector(".default-page");
const defaultPageBtn = document.querySelector(".default-page-btn");
const widgetsPage = document.querySelector(".widgets-page");
const widgetsPageBtn = document.querySelector(".widgets-page-btn");
const appsPage = document.querySelector(".apps-page");
const appsPageBtn = document.querySelector(".apps-page-btn");
let currentPage = defaultPageBtn;

defaultPageBtn.addEventListener("click", (e) => {
  pageReset();
  pageBtnReset();
  currentPage = e.target;
});
widgetsPageBtn.addEventListener("click", (e) => {
  if (currentPage.classList.contains("default-page-btn")) {
    slidePageRight();
    defaultPageBtn.classList.remove("active");
    widgetsPageBtn.classList.add("active");
  }
  if (currentPage.classList.contains("apps-page-btn")) {
    slidePageRight();
    slidePageRight();
    appsPageBtn.classList.remove("active");
    widgetsPageBtn.classList.add("active");
  }
  currentPage = e.target;
});
appsPageBtn.addEventListener("click", (e) => {
  if (currentPage.classList.contains("default-page-btn")) {
    slidePageLeft();
    defaultPageBtn.classList.remove("active");
    appsPageBtn.classList.add("active");
  }
  if (currentPage.classList.contains("widgets-page-btn")) {
    slidePageLeft();
    slidePageLeft();
    widgetsPageBtn.classList.remove("active");
    appsPageBtn.classList.add("active");
  }
  currentPage = e.target;
});

const slidePageRight = () => {
  widgetsPage.style.transform = "translateX(0)";
  defaultPage.style.transform = "translateX(100%)";
  appsPage.style.transform = "translateX(200%)";
};
const slidePageLeft = () => {
  widgetsPage.style.transform = "translateX(-200%)";
  defaultPage.style.transform = "translateX(-100%)";
  appsPage.style.transform = "translateX(0)";
};
const pageReset = () => {
  appsPage.style.transform = "translateX(100%)";
  widgetsPage.style.transform = "translateX(-100%)";
  defaultPage.style.transform = "translateX(0)";
};
const pageBtnReset = () => {
  if (appsPageBtn.classList.contains("active")) {
    appsPageBtn.classList.remove("active");
    defaultPageBtn.classList.add("active");
  }
  if (widgetsPageBtn.classList.contains("active")) {
    widgetsPageBtn.classList.remove("active");
    defaultPageBtn.classList.add("active");
  }
};

// Footer
const projectsFooterBtn = document.querySelector(".footer-projects");

projectsFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  projectsSection.classList.toggle("hidden");
  header.classList.add("header-black");
});

const aboutFooterBtn = document.querySelector(".footer-about");

aboutFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  aboutSection.classList.toggle("hidden");
  header.classList.add("header-black");
});

const contactFooterBtn = document.querySelector(".footer-contact");

contactFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  contactSection.classList.toggle("hidden");
  header.classList.add("header-black");
});
