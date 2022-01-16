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
  mainNav.classList.toggle("scale-zero");
});
emailBtn.addEventListener("click", () => {
  if (!mainNav.classList.contains("scale-zero")) {
    mainNav.classList.toggle("scale-zero");
  }
  expandedSectionReset();
  pageReset();
  pageBtnReset();
  appsPageReset();
  contactSection.classList.toggle("hidden");
});
mainNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    mainNav.classList.toggle("scale-zero");
    expandedSectionReset();
    pageReset();
    pageBtnReset();
    appsPageReset();
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
const expandedSections = document.querySelectorAll(
  ".default-page .section-container"
);
function expandedSectionReset() {
  expandedSections.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
}

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
  currentPage = defaultPageBtn;
};

// Footer
const projectsFooterBtn = document.querySelector(".footer-projects");
const aboutFooterBtn = document.querySelector(".footer-about");
const contactFooterBtn = document.querySelector(".footer-contact");

projectsFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  projectsSection.classList.toggle("hidden");
});

aboutFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  aboutSection.classList.toggle("hidden");
});

contactFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  contactSection.classList.toggle("hidden");
});

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

// Expanded Section: Music
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const songImg = document.querySelector(".song-img");
const songAudio = document.querySelector(".song-audio");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

const songs = [
  {
    title: "Beach",
    artist: "KV",
    img: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    src: "media/music/kv-beach.mp3",
  },
  {
    title: "Early Bird",
    artist: "FSM Team feat. < e s c p >",
    img: "https://images.unsplash.com/photo-1450859018738-29f67b1a6102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
    src: "media/music/fsm-team-escp-early-bird.mp3",
  },
  {
    title: "Tropical Yearnings",
    artist: "Ron Gelinas Chillout Lounge",
    img: "https://images.unsplash.com/photo-1486334803289-1623f249dd1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
    src: "media/music/ron-gelinas-chillout-lounge-tropical-yearnings.mp3",
  },
];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  songTitle.innerText = song.title;
  songArtist.innerText = song.artist;
  songImg.src = song.img;
  songAudio.src = song.src;
}
function playSong() {
  songAudio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}
function pauseSong() {
  songAudio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = songAudio.duration;

  songAudio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener("click", () => {
  if (playBtn.firstElementChild.classList.contains("fa-play")) {
    playSong();
  } else if (playBtn.firstElementChild.classList.contains("fa-pause")) {
    pauseSong();
  }
});
prevBtn.addEventListener("click", () => prevSong());
nextBtn.addEventListener("click", () => nextSong());

songAudio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

songAudio.addEventListener("ended", nextSong);

// Widgets Page
// Weather Widget
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
  document.querySelector(".weather-search").value = "";
});

document.querySelector(".weather-search").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
    document.querySelector(".weather-search").value = "";
  }
});

weather.fetchWeather("Charlottesville");

// Apps Page

const appsPageSections = document.querySelectorAll(".apps-page .section-img");
const appsPageCloseBtns = document.querySelectorAll(
  ".apps-page .close-section"
);

appsPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.nextElementSibling.nextElementSibling.classList.remove(
      "scale-zero"
    );
  });
});
appsPageCloseBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("scale-zero")) {
      e.target.parentElement.classList.add("scale-zero");
    }
  });
});

// Task List App

const taskListApp = document.querySelector(".task-list-container");
const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector(".tasks");
const clearTasks = document.querySelector(".clear-tasks-btn");
const addTaskInput = document.querySelector("#add-task");

taskForm.addEventListener("submit", addTask);

function addTask(e) {
  if (addTaskInput.value === "") {
    alert("Task Title Required");
  } else {
    // create li
    const li = document.createElement("li");
    li.classList.add("task-list-item");
    li.appendChild(document.createTextNode(addTaskInput.value));

    // create remove icon
    const removeTask = document.createElement("a");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(removeTask);

    taskList.appendChild(li);
  }
  // clear input
  addTaskInput.value = "";
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.classList.contains("fa-times")) {
    e.target.parentElement.parentElement.remove();
  }
}
taskList.addEventListener("click", removeTask);

clearTasks.addEventListener("click", () => {
  taskList.innerHTML = "";
});

function appsPageReset() {
  appsPageSections.forEach((item) => {
    if (
      !item.nextElementSibling.nextElementSibling.classList.contains(
        "scale-zero"
      )
    ) {
      item.nextElementSibling.nextElementSibling.classList.add("scale-zero");
    }
  });
}

// News APP

const newsInput = document.querySelector(".news-input");
const newsSubmit = document.querySelector(".news-submit");
const newsList = document.querySelector(".news-list");
const newsForm = document.querySelector(".news-form");
const searchTerm = document.querySelector(".search-term");

newsForm.addEventListener("submit", getNews);

function getNews(e) {
  const keyword = newsInput.value;
  const apiKey = "7d846c5d829b42af8f61f7a9b2db8fd3";
  e.preventDefault();
  fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => displayNews(data));
}
function displayNews(data) {
  searchTerm.innerText = '"' + newsInput.value + '"';
  newsList.innerHTML = "";
  newsInput.value = "";
  data.articles.forEach((article) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");
    let a = document.createElement("a");

    li.classList.add("news-item");
    img.setAttribute("src", article.urlToImage);
    h4.innerText = article.title;
    h5.innerText = article.author;
    h6.innerText = article.source.name;
    a.setAttribute("href", article.url);
    a.setAttribute("target", "_blank");
    a.innerText = "View Article";

    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(a);
    li.appendChild(img);
    li.appendChild(div);
    newsList.appendChild(li);
  });
}
