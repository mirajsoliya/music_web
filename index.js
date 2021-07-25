
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
//.................
// const play = document.getElementById("play");
const title = document.getElementById("hadding");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "tere-naal",
        sname: "TERE NAAL",
    },
    {
        name: "jeene-laga",
        sname: "JEENE LAGA",
    },
    {
        name: "zara-zara",
        sname: "ZARA-ZARA",
    },


    {
        name: "wajah",
        sname: "TUM HO..",
    },
    {
        name: "yara",
        sname: "YARI..",
    },

    {
        name: "love",
        sname: "LOVE..",
    },


    {
        name: "asal",
        sname: "ASAL MAI..",
    },


    {
        name: "tuje",
        sname: "CHAHAT..",
    },

    {
        name: "yeh",
        sname: "YEH AINA..",
    },

    {
        name: "duniya",
        sname: "DUNIYA..",
    },


    {
        name: "sanam",
        sname: "KASAM..",
    },



    {
        name: "pal",
        sname: "PAL PAL",
    },



]
let isplaying = false;
// for play function.......
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function.......................
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};


play.addEventListener('click', () => {

    isplaying ? pausemusic() : playmusic();
});

// changing music data..........
const loadsong = (songs) => {
    title.textContent = songs.sname;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg"
};
// loadsong(songs[2]);
songIndex = 0;
const nextsong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};
const prevsong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);