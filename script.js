const like = document.querySelector(".fa-heart");
const modal_tugma = document.querySelector("#modal_tugma");
const modal = document.querySelector(".modal");
const chiqish = document.querySelector("#chiqish");
const playBtn = document.querySelector(".play");
const audio = document.querySelector("audio");
const mainImg = document.querySelector(".mainImg");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

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

let musicIndex = 0;
const writeMusic = (index) => {
  audio.src = `./music/${data[index].id}.mp3`;
  mainImg.src = `./img/${data[index].id}.jpg`;
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
    audio.play();
    playBtn.classList.add("active");
  } else {
    audio.pause();
    playBtn.classList.remove("active");
  }
  
});

nextBtn.addEventListener("click", () => {
  if (data.length - 1 > musicIndex) {
    musicIndex++;
    writeMusic(musicIndex);
  } else {
    musicIndex=0
    writeMusic(musicIndex);

  }
});

prevBtn.addEventListener("click", () => {
  if (musicIndex>0) {
    musicIndex--;
    writeMusic(musicIndex);
  }else{
    musicIndex=data.length-1
    writeMusic(musicIndex);

  }

  
});
