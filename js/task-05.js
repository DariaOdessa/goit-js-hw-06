const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', (Event) => {
 
    nameOutputRef.textContent = Event.currentTarget.value.trim() === "" ? "Anonymus" :
    Event.currentTarget.value.trim();
    
});