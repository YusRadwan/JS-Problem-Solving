const buttonElement = document.querySelector('#button');
const result = document.querySelector('#result');

buttonElement.addEventListener('click', (e) => {
  const inputElement = parseInt(document.getElementById('input').value);  
  if(inputElement >= 2) {
    for(let i = 2; i <= Math.sqrt(inputElement); i++) {
      if(inputElement % i === 0) {
        result.textContent = `${inputElement} is a Non-Prime Number.`;
        result.style.color = 'red';
        break;
      } else {
        result.textContent = `${inputElement} is a Prime Number.`;
        result.style.color = 'green';
      }
    }
  }
});