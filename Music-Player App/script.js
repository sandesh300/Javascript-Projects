// Get references to DOM elements
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set up event handler for when the metadata of the audio is loaded
song.onloadedmetadata = function () {
    // Set the maximum value of the progress bar to the total duration of the audio
    progress.max = song.duration;
    // Set the initial value of the progress bar to the current playback time
    progress.value = song.currentTime;
}

// Function to toggle play/pause when the play/pause button is clicked
function playPause() {
    // Check if the play/pause button currently has the "fa-pause" class
    if (ctrlIcon.classList.contains("fa-pause")) {
        // If paused, pause the audio, change the icon to play
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        // If playing, play the audio, change the icon to pause
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Set up interval to update the progress bar based on the current playback time
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

// Event handler for when the user manually changes the progress bar value
progress.onchange = function () {
    // Start playing the audio from the new progress bar value
    song.play();
    song.currentTime = progress.value;
    // Change the icon to pause
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
