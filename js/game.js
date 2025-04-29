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
  const bgMusic = document.getElementById("bg-music");
  const muteButton = document.getElementById("mute-button");

  const isMuted = localStorage.getItem("mute") === "true";

  if (bgMusic) {
    if (isMuted) {
      bgMusic.pause();
    } else {
      bgMusic.play().catch(() => {});
    }
  }

  if (muteButton) {
    muteButton.textContent = isMuted ? "Unmute" : "Mute";
  }

  // Attach toggleSound with safety check
  window.toggleSound = () => {
    const isCurrentlyMuted = bgMusic.paused;

    if (isCurrentlyMuted) {
      bgMusic.play();
      localStorage.setItem("mute", "false");
      muteButton.textContent = "Mute";
    } else {
      bgMusic.pause();
      localStorage.setItem("mute", "true");
      muteButton.textContent = "Unmute";
    }
  };
});




