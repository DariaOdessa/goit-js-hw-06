
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body:document.querySelector('body'),
  button: document.querySelector('button'),
  colorDescription: document.querySelector(".color"),
}


refs.button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.colorDescription.textContent = newColor;
   
});

