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

function toggleSound() {
  if (!bgMusic) return; // In case music tag is missing

  isMuted = !isMuted;

  if (isMuted) {
    bgMusic.pause();
    alert("Sound muted");
  } else {
    bgMusic.play();
    alert("Sound unmuted");
  }
}

