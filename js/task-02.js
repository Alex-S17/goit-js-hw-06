const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('#ingredients');
const arrayOfItems = [];

for (const ingredient of ingredients) {
  const currentItem = document.createElement('li');
  currentItem.textContent = ingredient;
  currentItem.classList.add('item');
  arrayOfItems.push(currentItem);
}

list.append(...arrayOfItems);
