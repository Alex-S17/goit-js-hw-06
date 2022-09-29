function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeCol = document.querySelector('.change-color');
const BackgroundColorName = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonChangeCol.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor() {
  const newColor = getRandomHexColor();
  BackgroundColorName.textContent = `${newColor}`;
  bodyEl.style.backgroundColor = `${newColor}`;
}



