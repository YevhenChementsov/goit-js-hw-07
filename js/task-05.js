const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const onInputChangeRef = (event) => nameInputRef.value === '' ? nameOutputRef.textContent = 'незнакомец' : nameOutputRef.textContent = event.currentTarget.value;

nameInputRef.addEventListener('input', onInputChangeRef);