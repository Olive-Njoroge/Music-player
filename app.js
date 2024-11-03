let currentMusic = 0;
const songs =[
    {path:"/WhatsApp Audio 2024-10-31 at 16.54.39_eb4de9ee.mp3", name:"A whole new World", artist: "Peabo Bryson and Regina Belle"},
    {path:"/WhatsApp Audio 2024-11-03 at 12.26.12_3694c508.mp3", name:"Until I found you", artist: "Stephen Sanchez"},
    {path:"/WhatsApp Audio 2024-11-03 at 12.26.13_20f9359e.mp3", name:"Sweet Caroline", artist: "Neil Diamond"},
    {path:"/WhatsApp Audio 2024-11-03 at 12.26.13_74ed5633.mp3", name:"I think they call this love", artist: "Elliot James Reay"}
];
const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

// Load song
const loadSong = (index) => {
    audio.src = songs[index].path;
    songName.textContent = songs[index].name;
    artistName.textContent = songs[index].artist;
    audio.load();
};

// Play song
const playSong = () => {
    audio.play();
    playBtn.classList.remove("pause");
};

// Pause song
const pauseSong = () => {
    audio.pause();
    playBtn.classList.add("pause");
};

// Toggle play/pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

// Next song
const nextSong = () => {
    currentMusic = (currentMusic + 1) % songs.length;
    loadSong(currentMusic);
    playSong();
};

// Previous song
const prevSong = () => {
    currentMusic = (currentMusic - 1 + songs.length) % songs.length;
    loadSong(currentMusic);
    playSong();
};

// Forward and backward button functionality
forwardBtn.addEventListener("click", nextSong);
backwardBtn.addEventListener("click", prevSong);

// Update seek bar and time
audio.addEventListener("timeupdate", () => {
    seekBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
    musicDuration.textContent = formatTime(audio.duration);
});

// Play the next song when the current one ends
audio.addEventListener("ended", nextSong);

// Format time function
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) sec = `0${sec}`;
    return `${min}:${sec}`;
};

// Initialize the first song
loadSong(currentMusic);

