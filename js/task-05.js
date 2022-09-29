const inputEl = document.querySelector('[id="name-input"]');
const nameForOutput = document.querySelector('span[id = "name-output"]');

inputEl.addEventListener('input', nameOutputing);

function nameOutputing(event) {
  if (event.currentTarget.value === '') {
    nameForOutput.textContent = 'Anonymous';
    return;
  }
  nameForOutput.textContent = event.currentTarget.value;
}


// USES arrow function

// inputEl.addEventListener('input', (event) => {
//   if (event.currentTarget.value === '') {
//     nameForOutput.textContent = 'Anonymous';
//     return;
//   }
//   nameForOutput.textContent = event.currentTarget.value;
// } );