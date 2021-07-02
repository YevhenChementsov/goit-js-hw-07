const inputRef = document.querySelector('#validation-input');
const maxSymbolsInputRef = Number(inputRef.getAttribute('data-length'));

const onInputBlur = () => inputRef.value.length === maxSymbolsInputRef ? inputRef.className = 'valid' : inputRef.className ='invalid';

inputRef.addEventListener('blur', onInputBlur);