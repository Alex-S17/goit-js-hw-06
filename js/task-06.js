const inputEl = document.querySelector('input[id="validation-input"]');
const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', checkInputLength);

function checkInputLength(event) {

  if (event.currentTarget.value.length === inputLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    return inputEl;
  }
  inputEl.classList.remove('valid')
  inputEl.classList.add('invalid');

};



// ANOTHER SOLUTION - uses arrow function

// const inputEl = document.querySelector('input[id="validation-input"]');
// const inputLength = Number(inputEl.dataset.length);

// inputEl.addEventListener('blur', (event) => {
  
//   if (event.currentTarget.value.length === inputLength) {
//     inputEl.classList.remove('invalid');
//     inputEl.classList.add('valid');
//     return inputEl;
//   }
//   inputEl.classList.remove('valid')
//   inputEl.classList.add('invalid');

// });


