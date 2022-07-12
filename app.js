const button = document.querySelector('button');
const error = document.querySelector('.error');
const errorLabel = document.querySelector('.error-label');
const email = document.querySelector('.email');
const form = document.querySelector('form');
const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

error.classList.add('visible')
errorLabel.classList.add('visible')

button.addEventListener('click', (e) => {
  if (email.value == '' || !(regex.test(email.value))) {
    e.preventDefault();
    error.classList.remove('visible');
    errorLabel.classList.remove('visible');
    form.style.border = '2px solid hsl(0, 93%, 68%)';
  }
  else {
    error.classList.add('visible')
    errorLabel.classList.add('visible')
  }
})
