let count = document.getElementById('count');
let incButton = document.getElementById('IncButton');
let decButton = document.getElementById('decButton');
let incCount = document.getElementById('incCount');
let decCount = document.getElementById('decCount');


let inc = 0, dec = 0, cou = 0;

incButton.addEventListener('click', () => {
    if (cou >= 0 && cou <= 32) count.textContent = ++cou;
    inc = inc >= 33 ? inc : ++inc;
    return incCount.textContent = inc;
});

decButton.addEventListener('click', () => {
    if (cou >= 0 && cou <= 33) cou--;
    count.textContent = cou;
    dec = dec >= 33 ? dec : ++dec;
    return decCount.textContent = dec;
});

