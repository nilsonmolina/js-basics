/* eslint-env browser */
/* global db:true */
/*---------------------------
  VARIABLES
---------------------------*/
const form = document.querySelector('form');
const name = document.querySelector('#item-name');
const cost = document.querySelector('#cost');
// const error = document.querySelector('#error');

/*---------------------------
  EVENT LISTENERS
---------------------------*/
form.addEventListener('submit', addExpense);

/*---------------------------
  EVENT LISTENERS FUNCTIONS
---------------------------*/
function addExpense(e) {
  e.preventDefault();

  const item = {
    name: name.value,
    cost: parseInt(cost.value, 10),
  };

  db.collection('expenses').add(item).then(() => { form.reset(); });

  console.log(item);
}
