const $ = (selector) => document.querySelector(selector);
const counterSelector = $('#counterSelector');
const counterValue =$('#counterValue')

let currentValue = 0;

counterSelector.addEventListener('click', (e) =>{
    if (!e.target.matches('button[data-action]')) return;
    const action = e.target.dataset.action;
    currentValue += action === '+' ? 1 : -1;
    counterValue.textContent = currentValue;
});

console.log(currentValue);
