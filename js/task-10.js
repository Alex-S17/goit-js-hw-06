function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const newBoxesArray = [];

createButton.addEventListener('click', createBoxes);

function createBoxes() {
  const numberOfElements = inputEl.value;

  if (numberOfElements === '') {
    alert('Enter the number of boxes');
  }

  for (let i = 0; i < numberOfElements; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = (30 + i * 10) + 'px';
    newBox.style.height = (30 + i * 10) + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxesArray.push(newBox); 
  }
  boxesEl.append(...newBoxesArray);
  // console.log(boxesEl);
}

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
  // console.log(boxesEl);
}




// ANOTHER SOLUTION: Destroing created boxes using iteration

// function destroyBoxes() {
//   for (let i = 0; i < newBoxesArray.length; i += 1) {
//     boxesEl.firstChild.remove();
//   }
//   console.log(boxesEl);
// }

