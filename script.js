const like = document.querySelector(".fa-heart");
const modal_tugma = document.querySelector("#modal_tugma");
const modal = document.querySelector(".modal");
const chiqish = document.querySelector("#chiqish");
const playBtn = document.querySelector(".play");
const audio=document.querySelector("audio")
const mainImg=document.querySelector(".mainImg")

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

audio.src=`./music/${data[1].id}.mp3`
mainImg.src=`./img/${data[1].id}.jpg`



// modal tugma
modal_tugma.addEventListener("click", () => {
  modal.classList.add("active");
});
chiqish.addEventListener("click", () => {
  modal.classList.remove("active");
});
// modal tugma

// like
if (localStorage.getItem("likes") == "true") {
  like.classList.add("active");
}

like.addEventListener("click", () => {
  like.classList.toggle("active");

  localStorage.setItem("likes", like.classList.contains("active"));
});
// like

// play
playBtn.addEventListener("click", () => {
  playBtn.classList.toggle("active");
});
// play
