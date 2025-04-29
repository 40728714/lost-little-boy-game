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
function toggleSound() {
  isMuted = !isMuted;
  alert(isMuted ? "Sound muted" : "Sound unmuted");
}
