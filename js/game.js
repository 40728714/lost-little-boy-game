window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const timeDisplay = document.getElementById("time-value");

  let timeLeft = 10;

  // Timer logic (only run if there's a timer on the page)
  let countdown;
  if (timeDisplay) {
    countdown = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        location.href = "lose.html";
      }
    }, 1000);
  }

  // Navigation function
  window.choose = function(nextPage) {
    if (countdown) clearInterval(countdown);
    location.href = nextPage;
  };

  // Mute toggle function
  window.toggleSound = function() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      bgMusic.play();
      alert("Sound unmuted");
    } else {
      bgMusic.pause();
      alert("Sound muted");
    }
  };
});
