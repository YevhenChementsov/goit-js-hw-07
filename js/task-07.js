const fontSizeControlRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');

const inputFontSizeChangeRef = () => inputTextRef.style.fontSize = fontSizeControlRef.value + 'px';

fontSizeControlRef.addEventListener('input', inputFontSizeChangeRef);
console.dir(fontSizeControlRef)