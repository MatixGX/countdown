const dayText = document.getElementById("d");
const hourText = document.getElementById("h");
const minuteText = document.getElementById("m");
const secondText = document.getElementById("s");

const currentYear = new Date().getFullYear();
const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0, 0);

console.log(newYear);
function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

function refreshDisplay() {
  const now = Date.now();

  diff = newYear - now;

  const d = Math.floor((diff / 1000 / 60 / 60 / 24) % 365);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  dayText.innerHTML = d;
  hourText.innerHTML = padWithLeadingZeros(h, 2);
  minuteText.innerHTML = padWithLeadingZeros(m, 2);
  secondText.innerHTML = padWithLeadingZeros(s, 2);

  if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
    const body = document.body;
    body.style.background = "rgb(0, 0, 0)";
    document.title = `WELCOME ${newYear.getFullYear()}!`;
    body.innerHTML = `<img class="fireworks" src="https://i.pinimg.com/originals/ba/ce/57/bace57c5e51b79fa303026d754fef8b5.gif"><h1 class="title" id="title">IT'S ${newYear.getFullYear()}!!! WOHO!!!</h1><img class="fireworks" src="https://i.pinimg.com/originals/ba/ce/57/bace57c5e51b79fa303026d754fef8b5.gif">`;
    var colors = ["red", "yellow", "white"];
    var i = 0;
    setInterval(() => {
      document.getElementById("title").style.color = colors[i];
      i += 1;
      if (i == colors.length) {
        i = 0;
      }
    }, 1000);
  }
}

refreshDisplay();
setInterval(refreshDisplay, 1000);
