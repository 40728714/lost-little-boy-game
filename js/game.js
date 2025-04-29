<!-- ✅ Working HTML Structure Example (story1.html or any page) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Story - Page 1</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <audio id="bg-music" loop autoplay>
    <source src="assets/background-music.mp3" type="audio/mpeg">
  </audio>

  <main>
    <img src="assets/azai.png" alt="Azai in the forest" class="azai-image">
    <p>Azai steps into the woods, each crunch of a twig beneath his feet echoing through the thickening silence. A fork in the path lies ahead.</p>
    <button onclick="choose('story2a.html')">Follow the trail marked with old lanterns</button>
    <button onclick="choose('story2b.html')">Venture into the dense underbrush</button>
    <div id="timer">Time left: 10</div>
  </main>

  <footer>
    <button onclick="location.href='index.html'">Restart</button>
    <button id="mute-button" onclick="toggleSound()">Mute</button>
    <button onclick="location.href='faq.html'">FAQ</button>
    <button onclick="location.href='credits.html'">Credits</button>
  </footer>

  <script src="js/game.js"></script>
</body>
</html>

<!-- ✅ game.js file (place in js/game.js) -->
<script>
window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const muteButton = document.getElementById("mute-button");
  const timerElement = document.getElementById("timer");
  let timeLeft = 10;

  // Handle stored mute preference
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

  window.toggleSound = () => {
    if (!bgMusic || !muteButton) return;
    if (bgMusic.paused) {
      bgMusic.play();
      localStorage.setItem("mute", "false");
      muteButton.textContent = "Mute";
    } else {
      bgMusic.pause();
      localStorage.setItem("mute", "true");
      muteButton.textContent = "Unmute";
    }
  };

  // Timer logic
  if (timerElement) {
    const countdown = setInterval(() => {
      timeLeft--;
      timerElement.textContent = "Time left: " + timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        location.href = "lose.html";
      }
    }, 1000);

    window.choose = function (nextPage) {
      clearInterval(countdown);
      location.href = nextPage;
    };
  }
});
</script>
