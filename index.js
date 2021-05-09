const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector(".body");

function changeBackgroundColor() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[index];
  let interval;
}

start.addEventListener("click", startBtn);

function startBtn() {
  start.setAttribute('disabled', false)
  interval = setInterval(() => {
    changeBackgroundColor(colors);
  }, 1000);
}

stop.addEventListener("click", stopBtn);

function stopBtn() {
  start.removeAttribute('disabled', false)
  clearInterval(interval)
}