const clickMePulls = document.getElementById("clickMeText");
const clickMeImg = document.getElementById("clickMeImg");
let pullCount = 0;


clickMePulls.textContent = '"Pull Me," Alice read softly';

clickMeImg.addEventListener("click", () => {
  pullCount++;
  if (pullCount === 1) {
    clickMePulls.textContent = "Once...";
  } else if (pullCount === 2) {
    clickMePulls.textContent = "Twice...";
  }
  else if (pullCount === 3) {
    window.location.href = "lobby.html";
  }
});