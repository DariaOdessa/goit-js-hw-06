
const slider = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

slider.addEventListener('input', (e) => {
    textRef.style.fontSize = slider.value + 'px';
});

