const inputEl = document.querySelector('input[id="font-size-control"]');
const textEl = document.querySelector('span[id="text"]');

inputEl.addEventListener('input', handleInputSlider);

function handleInputSlider(event) {
  // console.log(event.currentTarget.value);
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

