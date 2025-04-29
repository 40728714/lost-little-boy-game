let timeLeft = 7;
let timerElement = document.getElementById("timer");

if (timerElement) {
  const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = "Time left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      location.href = "lose.html"; // Time ran out
    }
  }, 1000);
}

function choose(nextPage) {
  location.href = nextPage;
}

let isMuted = false;
const bgMusic = document.getElementById("bg-music");

// Apply stored mute state on page load
const bgMusic = document.getElementById("bg-music");
const muteButton = document.getElementById("mute-button");

window.addEventListener("DOMContentLoaded", () => {
  const isMuted = localStorage.getItem("mute") === "true";
  if (bgMusic) {
    if (isMuted) {
      bgMusic.pause();
    } else {
      bgMusic.play();
    }
  }

  if (muteButton) {
    muteButton.textContent = isMuted ? "Unmute" : "Mute";
  }
});

function toggleSound() {
  const isCurrentlyMuted = bgMusic.paused;

  if (isCurrentlyMuted) {
    bgMusic.play();
    localStorage.setItem("mute", "false");
    if (muteButton) muteButton.textContent = "Mute";
    alert("Sound unmuted");
  } else {
    bgMusic.pause();
    localStorage.setItem("mute", "true");
    if (muteButton) muteButton.textContent = "Unmute";
    alert("Sound muted");
  }
}



