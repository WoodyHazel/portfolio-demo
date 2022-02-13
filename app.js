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
const mainHeader = document.querySelector(".main-header");
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
  mainHeader.classList.add("header-alt");
});
mainNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    mainNav.classList.toggle("scale-zero");
    mainHeader.classList.add("header-alt");
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
  mainHeader.classList.toggle("header-alt");
});

aboutFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  aboutSection.classList.toggle("hidden");
  mainHeader.classList.toggle("header-alt");
});

contactFooterBtn.addEventListener("click", () => {
  if (currentPage !== defaultPageBtn) {
    pageReset();
    pageBtnReset();
    currentPage = defaultPageBtn;
  }
  contactSection.classList.toggle("hidden");
  mainHeader.classList.toggle("header-alt");
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
const settingsSection = document.querySelector(".section-settings");

defaultPageSections.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("about")) {
      aboutSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("contact")) {
      contactSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("projects")) {
      projectsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("skills")) {
      skillsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("photos")) {
      photosSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("music")) {
      musicSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    } else if (e.target.parentElement.classList.contains("settings")) {
      settingsSection.classList.toggle("hidden");
      mainHeader.classList.toggle("header-alt");
    }
  });
});

const closeSectionBtns = document.querySelectorAll(".close-section-btn");

closeSectionBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.add("hidden");
    mainHeader.classList.remove("header-alt");
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

// Expanded Section: Settings

const onBtn = document.querySelector(".on-btn");
const offBtn = document.querySelector(".off-btn");
const pageBackground = document.querySelector(".page-background");

onBtn.addEventListener("click", () => {
  pageBackground.style.animation =
    "scale-background 30s ease-in-out forwards infinite alternate";
  onBtn.style.backgroundColor = "green";
  offBtn.style.backgroundColor = "red";
});

offBtn.addEventListener("click", () => {
  pageBackground.style.animation = "none";
  offBtn.style.backgroundColor = "green";
  onBtn.style.backgroundColor = "red";
});

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
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = `${temp} °F`;
    document.querySelector(
      ".weather-icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".weather-description").innerText = description;
    document.querySelector(".high").innerText = `High: ${temp_max} °F`;
    document.querySelector(".low").innerText = `Low: ${temp_min} °F`;
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

// Fact Widget
const factBtn = document.querySelector(".fact-btn");
const fact = document.querySelector(".fact");

function fetchFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => (fact.innerText = data.text));
}
fetchFact();
factBtn.addEventListener("click", fetchFact);

// WOD Widget

const word = document.querySelector(".word");
const pos = document.querySelector(".pos");
const definition = document.querySelector(".definition");
const wodBtn = document.querySelector(".wod-btn");
let wod;

function fetchWOD() {
  fetch("https://random-word-api.herokuapp.com/word?number=1&swear=0")
    .then((response) => response.json())
    .then((data) => {
      word.innerText = data[0];
      wod = data[0];
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wod}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.title) {
            fetchWOD();
          } else {
            pos.innerText = `(${data[0].meanings[0].partOfSpeech})`;
            definition.innerText =
              data[0].meanings[0].definitions[0].definition;
          }
        });
    });
}
wodBtn.addEventListener("click", fetchWOD);
fetchWOD();

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
    mainHeader.classList.toggle("header-alt");
  });
});
appsPageCloseBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("scale-zero")) {
      e.target.parentElement.classList.add("scale-zero");
    }
    mainHeader.classList.remove("header-alt");
  });
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
// Task List App

const taskListApp = document.querySelector(".task-list-container");
const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector(".tasks");
const clearTasks = document.querySelector(".clear-tasks-btn");
const addTaskInput = document.querySelector("#add-task");

document.addEventListener("DOMContentLoaded", getTasks);

taskForm.addEventListener("submit", addTask);

function addTask(e) {
  if (addTaskInput.value === "") {
    alert("Task Title Required");
    e.preventDefault();
  } else {
    const li = document.createElement("li");
    li.classList.add("task-list-item");
    li.appendChild(document.createTextNode(addTaskInput.value));
    const removeTask = document.createElement("a");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(removeTask);
    taskList.appendChild(li);

    storeTask(addTaskInput.value);

    addTaskInput.value = "";
  }
  e.preventDefault();
}

function storeTask(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-list-item");
    li.appendChild(document.createTextNode(task));
    const removeTask = document.createElement("a");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(removeTask);
    taskList.appendChild(li);
  });
}

function removeTask(e) {
  if (e.target.classList.contains("fa-times")) {
    e.target.parentElement.parentElement.remove();
    removeFromStorage(e.target.parentElement.parentElement);
  }
}

function removeFromStorage(li) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (li.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskList.addEventListener("click", removeTask);

clearTasks.addEventListener("click", () => {
  taskList.innerHTML = "";
  localStorage.clear();
});

// Blackjack

const deck = [
  {
    value: 11,
    img: "media/imgs/PNG-cards-1.3/ace_of_hearts.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/king_of_hearts.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/queen_of_hearts.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/jack_of_hearts.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/10_of_hearts.png",
  },
  {
    value: 9,
    img: "media/imgs/PNG-cards-1.3/9_of_hearts.png",
  },
  {
    value: 8,
    img: "media/imgs/PNG-cards-1.3/8_of_hearts.png",
  },
  {
    value: 7,
    img: "media/imgs/PNG-cards-1.3/7_of_hearts.png",
  },
  {
    value: 6,
    img: "media/imgs/PNG-cards-1.3/6_of_hearts.png",
  },
  {
    value: 5,
    img: "media/imgs/PNG-cards-1.3/5_of_hearts.png",
  },
  {
    value: 4,
    img: "media/imgs/PNG-cards-1.3/4_of_hearts.png",
  },
  {
    value: 3,
    img: "media/imgs/PNG-cards-1.3/3_of_hearts.png",
  },
  {
    value: 2,
    img: "media/imgs/PNG-cards-1.3/2_of_hearts.png",
  },
  {
    value: 11,
    img: "media/imgs/PNG-cards-1.3/ace_of_spades.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/king_of_spades.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/queen_of_spades.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/jack_of_spades.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/10_of_spades.png",
  },
  {
    value: 9,
    img: "media/imgs/PNG-cards-1.3/9_of_spades.png",
  },
  {
    value: 8,
    img: "media/imgs/PNG-cards-1.3/8_of_spades.png",
  },
  {
    value: 7,
    img: "media/imgs/PNG-cards-1.3/7_of_spades.png",
  },
  {
    value: 6,
    img: "media/imgs/PNG-cards-1.3/6_of_spades.png",
  },
  {
    value: 5,
    img: "media/imgs/PNG-cards-1.3/5_of_spades.png",
  },
  {
    value: 4,
    img: "media/imgs/PNG-cards-1.3/4_of_spades.png",
  },
  {
    value: 3,
    img: "media/imgs/PNG-cards-1.3/3_of_spades.png",
  },
  {
    value: 2,
    img: "media/imgs/PNG-cards-1.3/2_of_spades.png",
  },
  {
    value: 11,
    img: "media/imgs/PNG-cards-1.3/ace_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/king_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/queen_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/jack_of_diamonds.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/10_of_diamonds.png",
  },
  {
    value: 9,
    img: "media/imgs/PNG-cards-1.3/9_of_diamonds.png",
  },
  {
    value: 8,
    img: "media/imgs/PNG-cards-1.3/8_of_diamonds.png",
  },
  {
    value: 7,
    img: "media/imgs/PNG-cards-1.3/7_of_diamonds.png",
  },
  {
    value: 6,
    img: "media/imgs/PNG-cards-1.3/6_of_diamonds.png",
  },
  {
    value: 5,
    img: "media/imgs/PNG-cards-1.3/5_of_diamonds.png",
  },
  {
    value: 4,
    img: "media/imgs/PNG-cards-1.3/4_of_diamonds.png",
  },
  {
    value: 3,
    img: "media/imgs/PNG-cards-1.3/3_of_diamonds.png",
  },
  {
    value: 2,
    img: "media/imgs/PNG-cards-1.3/2_of_diamonds.png",
  },
  {
    value: 11,
    img: "media/imgs/PNG-cards-1.3/ace_of_clubs.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/king_of_clubs.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/queen_of_clubs.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/jack_of_clubs.png",
  },
  {
    value: 10,
    img: "media/imgs/PNG-cards-1.3/10_of_clubs.png",
  },
  {
    value: 9,
    img: "media/imgs/PNG-cards-1.3/9_of_clubs.png",
  },
  {
    value: 8,
    img: "media/imgs/PNG-cards-1.3/8_of_clubs.png",
  },
  {
    value: 7,
    img: "media/imgs/PNG-cards-1.3/7_of_clubs.png",
  },
  {
    value: 6,
    img: "media/imgs/PNG-cards-1.3/6_of_clubs.png",
  },
  {
    value: 5,
    img: "media/imgs/PNG-cards-1.3/5_of_clubs.png",
  },
  {
    value: 4,
    img: "media/imgs/PNG-cards-1.3/4_of_clubs.png",
  },
  {
    value: 3,
    img: "media/imgs/PNG-cards-1.3/3_of_clubs.png",
  },
  {
    value: 2,
    img: "media/imgs/PNG-cards-1.3/2_of_clubs.png",
  },
];
const dCard1 = document.querySelector(".dealer-card-1");
const dCard2 = document.querySelector(".dealer-card-2");
const dCard3 = document.querySelector(".dealer-card-3");
const dCard4 = document.querySelector(".dealer-card-4");
const pCard1 = document.querySelector(".player-card-1");
const pCard2 = document.querySelector(".player-card-2");
const pCard3 = document.querySelector(".player-card-3");
const pCard4 = document.querySelector(".player-card-4");

const playingCards = document.querySelectorAll(
  ".blackjack-game-container .card"
);

const gameOver = document.querySelector(".gameover");
const gameResult = document.querySelector(".game-result");

const hit = document.querySelector(".hit");
const stand = document.querySelector(".stand");
const startGameBtn = document.querySelector(".start");

const newGameBtn = document.querySelector(".new-game");

let dealerSum = 0;
let playerSum = 0;

let randIndex;
let currentDeck;

let hitClicked = false;

startGameBtn.addEventListener("click", startGame);
newGameBtn.addEventListener("click", startGame);

hit.addEventListener("click", () => {
  if (hitClicked == false) {
    setPCard3();
    hitClicked = true;
    if (playerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "You got Blackjack! You win!";
    } else if (playerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Player bust. You lose.";
    }
  } else if (hitClicked) {
    setPCard4();
    if (playerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "You got Blackjack! You win!";
    } else if (playerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Player bust. You lose.";
    }
  }
});
stand.addEventListener("click", () => {
  setDCard2();
  if (dealerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer got Blackjack. You lose.";
  } else if (dealerSum > 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer bust. You win!";
  } else if (dealerSum > playerSum) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer wins.";
  } else if (dealerSum <= playerSum) {
    setDCard3();
    if (dealerSum == 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer got Blackjack. You lose.";
    } else if (dealerSum > 21) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer bust. You win!";
    } else if (dealerSum > playerSum) {
      gameOver.classList.toggle("scale-zero");
      gameResult.innerText = "Dealer wins.";
    } else if (dealerSum <= playerSum) {
      setDCard4();
      if (dealerSum == 21) {
        gameOver.classList.toggle("scale-zero");
        gameResult.innerText = "Dealer got Blackjack. You lose.";
      } else if (dealerSum > 21) {
        gameOver.classList.toggle("scale-zero");
        gameResult.innerText = "Dealer bust. You win!";
      }
    }
  }
});

function gameReset() {
  dealerSum = 0;
  playerSum = 0;
  if (!gameOver.classList.contains("scale-zero")) {
    gameOver.classList.toggle("scale-zero");
  }
  currentDeck = [...deck];
  hitClicked = false;
  playingCards.forEach((card) => {
    card.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    );
  });
}

function startGame() {
  gameReset();
  setDCard1();
  setPCard1();
  setPCard2();
  if (playerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "You got Blackjack! You win!";
  } else if (playerSum > 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Player bust. You lose.";
  } else if (dealerSum == 21) {
    gameOver.classList.toggle("scale-zero");
    gameResult.innerText = "Dealer got Blackjack. You Lose.";
  }
}

function setDCard1() {
  const { cardImg, cardValue } = getRandCard();
  dCard1.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard2() {
  const { cardImg, cardValue } = getRandCard();
  dCard2.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard3() {
  const { cardImg, cardValue } = getRandCard();
  dCard3.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setDCard4() {
  const { cardImg, cardValue } = getRandCard();
  dCard4.setAttribute("src", cardImg);
  dealerSum += cardValue;
  updateDeck();
}
function setPCard1() {
  const { cardImg, cardValue } = getRandCard();
  pCard1.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard2() {
  const { cardImg, cardValue } = getRandCard();
  pCard2.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard3() {
  const { cardImg, cardValue } = getRandCard();
  pCard3.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}
function setPCard4() {
  const { cardImg, cardValue } = getRandCard();
  pCard4.setAttribute("src", cardImg);
  playerSum += cardValue;
  updateDeck();
}

function getRandCard() {
  randIndex = Math.floor(Math.random() * currentDeck.length);
  return {
    cardImg: currentDeck[randIndex].img,
    cardValue: currentDeck[randIndex].value,
  };
}

function updateDeck() {
  return currentDeck.splice(randIndex, 1);
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
