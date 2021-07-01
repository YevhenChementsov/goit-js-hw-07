const categoriesListRef = document.querySelector('#categories');
const categoriesListItemRef = categoriesListRef.querySelectorAll('.item');

console.log(`В списке ${categoriesListItemRef.length} категории.`);

categoriesListItemRef.forEach((category) => {
  console.log('Категория:', category.querySelector('h2').textContent);
  console.log('Количество элементов в категории:', category.querySelectorAll('li').length);
});
