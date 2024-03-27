// setting up some stuff for the video and how loud it is
var video;
var volumeDisplay;

// when everything's ready to go, do this
window.addEventListener("load", function() {
    console.log("window's loaded up, nice!");
    video = document.getElementById("player1"); // got the video element here
    video.autoplay = false; // no auto-playing, we don't do that here
    video.loop = false; // and no looping, keep it simple
    volumeDisplay = document.getElementById("volume"); // where we'll show the volume
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%"; // setting the initial volume display
});

// when the play button gets clicked
document.getElementById("play").addEventListener("click", function() {
    console.log("let's get this video rolling");
    video.play(); // play the video
    // now let's make sure the volume's right
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
    console.log("cranking it up to: " + video.volume * 100 + "%");
});

// hitting the pause button
document.getElementById("pause").addEventListener("click", function() {
    console.log("and we're taking a break");
    video.pause(); // pause the video
});

// slowing things down a bit
document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9; // slow it down
    console.log("chill speed is now " + video.playbackRate);
});

// time to speed back up
document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9; // back to normal speed
    console.log("fast and furious at " + video.playbackRate);
});

// skip ahead in the video
document.getElementById("skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) { // if we're near the end
        video.currentTime = 0; // go back to the start
        console.log("back to the start we go");
    } else {
        video.currentTime += 10; // or just skip ahead 10 seconds
    }
    console.log("skipped to " + video.currentTime);
});

// mute toggle
document.getElementById("mute").addEventListener("click", function() {
    video.muted = !video.muted; // flip the mute state
    this.textContent = video.muted ? "Unmute" : "Mute"; // and update the button text
});

// changing the volume
document.getElementById("slider").addEventListener("input", function() {
    video.volume = this.value / 100; // set the new volume
    volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%"; // and show it
    console.log("shhh... volume's now " + video.volume);
});

// vintage look for the video
document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool"); // add the oldSchool class for that sepia look
});

// back to normal
document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool"); // remove the class, back to original
});
