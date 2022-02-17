const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = [
  'red',
  'blue',
  'orange',
  'green',
  'grey',
  'yellow',
  'brown',
  'purple',
  'white',
];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

const finishGame = () => {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет:<span class = "primary">${score}</span> </h1>`;
};

const createRandomCircle = () => {
  const color = getRandomColor();
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);

  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.background = color;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
