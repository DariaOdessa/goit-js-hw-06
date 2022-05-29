function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');


createBtn.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtn.addEventListener('click', () => destroyBoxes());

function createBoxes(amount) {
  
  const startSize = 20;

  for (let i = 1; i <= amount; i += 1) {
       
    const div = document.createElement("div");
    const size = startSize + i * 10;
    div.style = `width: ${size}px; height: ${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(div);
  }
   
};
  
function destroyBoxes() {
  boxes.innerHTML = '';
  inputRef.value = '';
}






