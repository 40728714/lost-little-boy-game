let timeLeft = 5;
let timerElement = document.getElementById("timer");

if (timerElement) {
  let countdown = setInterval(() => {
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
  // Insert audio logic here if background music is added
  alert(isMuted ? "Sound muted" : "Sound unmuted");
}
