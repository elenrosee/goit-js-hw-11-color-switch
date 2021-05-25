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

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const intervalFu = setInterval(changeBodyBackgroundColorRandom, 1000);

function changeBodyBackgroundColorRandom() {
  refs.startBtn.disabled = true;

  const randomColorId = randomIntegerFromInterval(0, 5);

  refs.body.style.backgroundColor = colors[randomColorId];
}

function stopChangeBodyBackgroundColor() {
  refs.startBtn.disabled = false;

  clearInterval(intervalFu);
}
