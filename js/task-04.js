const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('span[id="value"]');

let counterValue = 0;

decrementButton.addEventListener('click', decreasingCounter);
incrementButton.addEventListener('click', increasingCounter);

function decreasingCounter() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function increasingCounter() {
  counterValue += 1;
  counter.textContent = counterValue;
}