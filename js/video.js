// Initialize variables for video and volume display
var video;
var volumeDisplay;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
    volumeDisplay = document.getElementById("volume");
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
});

document.getElementById("play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    // Update the volume display here to ensure it reflects the current volume when the video plays
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
    console.log("Volume is: " + video.volume * 100 + "%");
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
        console.log("Going back to the beginning");
    } else {
        video.currentTime += 10;
    }
    console.log("New location " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
});

document.getElementById("slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
    console.log("Volume is " + video.volume);
});

document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

