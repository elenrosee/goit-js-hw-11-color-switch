const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', changeBodyBackgroundColorRandom);
refs.stopBtn.addEventListener('click', stopChangeBodyBackgroundColor);

let intervalChangeColor = null;

const CHANGE_DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyBackgroundColorRandom() {
  refs.startBtn.disabled = true;
  refs.startBtn.classList.add('disabled');

  intervalChangeColor = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, CHANGE_DELAY);
}

function stopChangeBodyBackgroundColor() {
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('disabled');

  clearInterval(intervalChangeColor);
}
