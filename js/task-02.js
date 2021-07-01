const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);

const allIngredients = ingredients.map((ingredient) => {
  const ingredientsListItemRef = document.createElement('li');
  ingredientsListItemRef.textContent = ingredient;
  return ingredientsListItemRef;
});

ingredientsListRef.append(...allIngredients);