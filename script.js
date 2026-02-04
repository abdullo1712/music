const like = document.querySelector(".fa-heart");
const modal_tugma = document.querySelector("#modal_tugma");
const modal = document.querySelector(".modal");
const chiqish = document.querySelector("#chiqish");
const playBtn = document.querySelector(".play");
const audio = document.querySelector("audio");
const mainImg = document.querySelector(".mainImg");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const cover = document.querySelector(".cover");
const startTime = document.querySelector(".startTime");
const allTime = document.querySelector(".allTime");
const slider = document.querySelector(".slider");
const nuqta = document.querySelector(".nuqta");
const ism = document.querySelector(".ism");
const music = document.querySelector(".music");
const aftr = document.querySelector(".aftr");

let data = [
  {
    id: "2012",
    name: "MINOR-UZMIR-MAJOR ",
    musicName: "2012",
  },
  {
    id: "Boyvachcha",
    name: "Bojalar guruhi",
    musicName: "Boyvachcha",
  },
  {
    id: "go'zalsan",
    name: "Sarbon guruhi ",
    musicName: "Gulsan go'zalsan",
  },
  {
    id: "Ko'rdim_men_lola_ko'rdim",
    name: "Xudoyorxon Qalandarzoda ",
    musicName: "Koʻrdim men lola koʻrdim",
  },
  {
    id: "kutaman",
    name: "O`lmas Olloberganov  ",
    musicName: "Kutaman",
  },
  {
    id: "Oy_yuzingga",
    name: "Sherali Juraev ",
    musicName: "Oy yuzingga",
  },
  {
    id: "Sevgi_fazosi",
    name: "Samandar Hamroqulov ",
    musicName: "Sevgi fazosi",
  },
  {
    id: "yoshlik",
    name: "Xurshid Rasulov ",
    musicName: "Yoshlik",
  },
  {
    id: "Медуза",
    name: "MATRANG ",
    musicName: "Медуза",
  },
  {
    id: "На_дискотеку",
    name: "Султан-Ураган ",
    musicName: "На дискотеку!",
  },
];

let musicIndex = 7;
const writeMusic = (index) => {
  audio.src = `./music/${data[index].id}.mp3`;
  mainImg.src = `./img/${data[index].id}.jpg`;
  aftr.textContent = `${data[index].name}`;
  music.textContent = `${data[index].musicName}`;
};
writeMusic(musicIndex);

// modal tugma
modal_tugma.addEventListener("click", () => {
  modal.classList.add("active");
});
chiqish.addEventListener("click", () => {
  modal.classList.remove("active");
});

// like
if (localStorage.getItem("likes") == "true") {
  like.classList.add("active");
}

like.addEventListener("click", () => {
  like.classList.toggle("active");

  localStorage.setItem("likes", like.classList.contains("active"));
});

// play
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playMusic();
  } else {
    puseMusic();
  }
});

nextBtn.addEventListener("click", () => {
  nextMusic();
  playMusic();
});

prevBtn.addEventListener("click", () => {
  if (musicIndex > 0) {
    musicIndex--;
    writeMusic(musicIndex);
  } else {
    musicIndex = data.length - 1;
    writeMusic(musicIndex);
  }
  playMusic();
});

const nextMusic = () => {
  if (data.length - 1 > musicIndex) {
    musicIndex++;
    writeMusic(musicIndex);
  } else {
    musicIndex = 0;
    writeMusic(musicIndex);
  }
  playMusic();
};

const playMusic = () => {
  audio.play();
  playBtn.classList.add("active");
  cover.classList.add("active");
};

const puseMusic = () => {
  audio.pause();
  playBtn.classList.remove("active");
  cover.classList.remove("active");
};

audio.addEventListener("timeupdate", (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  let result = (currentTime * 100) / duration;

  nuqta.style = `width:${result}%`;

  allTime.textContent = timeFormat(duration);
  startTime.textContent = timeFormat(currentTime);
});

const timeFormat = (time) => {
  if (isNaN(time)) {
    return `00:00`;
  } else {
    let min =
      Math.floor(time / 60) >= 10
        ? Math.floor(time / 60)
        : "0" + Math.floor(time / 60);
    let sec =
      Math.floor(time % 60) >= 10
        ? Math.floor(time % 60)
        : "0" + Math.floor(time % 60);
    return `${min}:${sec}`;
  }
};

slider.addEventListener("click", (e) => {
  let clientWidth = e.currentTarget.clientWidth;
  let offsetX = e.offsetX;

  let time = (audio.duration * offsetX) / clientWidth;
  audio.currentTime = time;
});

audio.addEventListener("ended", () => {
  nextMusic();
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextMusic();
  } else if (e.key === "ArrowLeft") {
    prevMusic();
  } else if (e.key === "ArrowUp") {
    audio.volume = Math.min(audio.volume + 1, 100);
  } else if (e.key === "ArrowDown") {
    audio.volume = Math.max(audio.volume - 1, 0);
  } else if (e.code === "Space") {
    e.preventDefault();
    audio.paused ? playMusic() : puseMusic();
  }
});

function prevMusic() {
  musicIndex = musicIndex === 0 ? data.length - 1 : musicIndex - 1;
  writeMusic(musicIndex);
  playMusic();
}
