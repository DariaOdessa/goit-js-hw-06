

const counterRef = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    counterRef.textContent = counterValue.value;

});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    counterRef.textContent = counterValue.value;
});