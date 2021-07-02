const counter = {
  minus: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
  plus: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;
const decrement = () => {
  if (counterValue === 0) {
    return;
  };
  counterValue -= 1;
  return counter.value.textContent = counterValue;
};
const increment = () => {
  counterValue +=1;
  return counter.value.textContent = counterValue;
};

counter.minus.addEventListener('click', decrement);
counter.plus.addEventListener('click', increment);