/* eslint-env browser */
/* global db:true */

/*---------------------------
  DOM ELEMENTS
---------------------------*/
const buttonSection = document.querySelector('.btns');
const buttons = document.querySelectorAll('button');
const form = document.querySelector('form');
const formAct = document.querySelector('form span');
const input = document.querySelector('input');
const error = document.querySelector('.error');

/*---------------------------
  EVENT LISTENERS
---------------------------*/
buttonSection.addEventListener('click', handleButtonClick);
form.addEventListener('submit', handleFormSubmit);

/*---------------------------
  EVENT HANDLERS
---------------------------*/
function handleButtonClick(e) {
  // get activity
  const { activity } = e.target.dataset;
  if (!activity) return;
  // remove and add active class
  buttons.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  // set id of input field
  input.id = activity;
  // set text of form span
  formAct.textContent = activity;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const distance = parseInt(input.value, 10);
  if (distance) {
    db.collection('activities').add({
      distance,
      activity: input.id,
      date: new Date().toString(),
    }).then(() => {
      error.textContent = '';
      input.value = '';
    }).catch((err) => { error.textContent = `Error: ${err.message}`; });
  } else { error.textContent = 'Please enter a valid distance'; }
}
