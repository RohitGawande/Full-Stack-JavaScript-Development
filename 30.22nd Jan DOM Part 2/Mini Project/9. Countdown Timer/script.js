let timeLeft = 10;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert("Time's up!");
  }
}, 1000);
