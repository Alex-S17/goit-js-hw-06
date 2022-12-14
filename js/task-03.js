const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('.gallery');

const arrayOfItems = images.map(image => {
  const currentItem = document.createElement('li');
  const imageString = `<img src="${image.url}" alt="${image.alt}" width="500" />`;
  currentItem.insertAdjacentHTML("beforeend", imageString);
  return currentItem;
})

list.append(...arrayOfItems);





// ANOTHER solution: it uses "for...off" for making iteration of array

// const arrayOfItems = [];
// const list = document.querySelector('.gallery');

// for (const image of images) {
//   const currentItem = document.createElement('li');
//   const imageString = `<img src="${image.url}" alt="${image.alt}" width="500" />`;
//   currentItem.insertAdjacentHTML("beforeend", imageString);
//   arrayOfItems.push(currentItem);
// }
