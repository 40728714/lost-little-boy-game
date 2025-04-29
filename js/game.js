window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const timeDisplay = document.getElementById("time-value");

  let timeLeft = 10;
  let countdown;

  // Check localStorage for mute setting
  const isMuted = localStorage.getItem("mute") === "true";
  if (bgMusic) {
    if (isMuted) {
      bgMusic.pause();
    } else {
      bgMusic.play().catch(() => {});
    }
  }

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

  window.choose = function(nextPage) {
    if (countdown) clearInterval(countdown);
    location.href = nextPage;
  };

  window.toggleSound = function() {
    if (!bgMusic) return;

    if (bgMusic.paused) {
      bgMusic.play();
      localStorage.setItem("mute", "false");
      alert("Sound unmuted");
    } else {
      bgMusic.pause();
      localStorage.setItem("mute", "true");
      alert("Sound muted");
    }
  };
});
