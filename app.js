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
        photosSection.classList.toggle("hidden");
        break;
      case "Music":
        musicSection.classList.toggle("hidden");
        break;
      case "Settings":
        settingsSection.classList.toggle("hidden");
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
const contactSection = document.querySelector(".section-contact");
const projectsSection = document.querySelector(".section-projects");
const skillsSection = document.querySelector(".section-skills");
const photosSection = document.querySelector(".section-photos");
const musicSection = document.querySelector(".section-music");
const githubSection = document.querySelector(".section-github");
const settingsSection = document.querySelector(".section-settings");

defaultPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("about")) {
      aboutSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("contact")) {
      contactSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("projects")) {
      projectsSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("skills")) {
      skillsSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("photos")) {
      photosSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("music")) {
      musicSection.classList.toggle("hidden");
    } else if (
      e.target.parentElement.parentElement.classList.contains("github")
    ) {
      githubSection.classList.toggle("hidden");
    } else if (e.target.parentElement.classList.contains("settings")) {
      settingsSection.classList.toggle("hidden");
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
});

const aboutFooterBtn = document.querySelector(".footer-about");

aboutFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  aboutSection.classList.toggle("hidden");
});

const contactFooterBtn = document.querySelector(".footer-contact");

contactFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  contactSection.classList.toggle("hidden");
});

// Weather

let weather = {
  apiKey: "0befe37e8723d02c8ab8360d2c402c36",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".weather-description").innerText = description;
    document.querySelector(".temp").innerText = `${temp} °F`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} mph`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".weather-search").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".weather-search").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Charlottesville");
