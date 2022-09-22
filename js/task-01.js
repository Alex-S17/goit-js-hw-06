const nodesOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', nodesOfCategories.length);

for (const element of [...nodesOfCategories]) {
  const title = element.querySelector('h2').textContent;
  const quantityOfCategories = element.querySelectorAll('li').length;
  console.log('Category:', title);
  console.log('Elements:', quantityOfCategories);
}
