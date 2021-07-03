const refs ={
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
  input: document.querySelector('input')
};

refs.render.addEventListener('click', countAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function countAmount () {
  const amount = refs.input.value;
  createBoxes (amount);
}

function createBoxes (amount) {
  const boxesCollection = [];
  for (let index = 0; index < amount; index += 1) {
    const newDivEl = document.createElement('div');
    newDivEl.setAttribute('style', `width: ${30 + index * 10}px; height: ${30 + index * 10}px; background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    boxesCollection.push(newDivEl);
  };
  refs.boxes.append(...boxesCollection);
};

function destroyBoxes () {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
};