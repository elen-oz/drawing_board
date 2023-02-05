const board = document.querySelector('#board');
const colors = [
  '#FF6400',
  '#FFA100',
  '#F30021',
  '#00A383',
  '#FF8B40',
  '#FFB840',
  '#F93E58',
  '#34D1B2',
  '#FFAA73',
  '#FFCB73',
  '#F97083',
  '#5ED1BA',
];
const SQUARES_NUMBER = 700;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
