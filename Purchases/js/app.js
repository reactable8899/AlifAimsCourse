'use strict';
let nextId = 1;
const rootEl = document.getElementById('root');
const purchases = [];
let maxIndex = 0;

const formEl = document.createElement('form');
formEl.dataset.id = 'purchase-form';
rootEl.appendChild(formEl);

const inputNameEl = document.createElement('input');
inputNameEl.dataset.input = 'name';
formEl.appendChild(inputNameEl);

const inputPriceEl = document.createElement('input');
inputPriceEl.dataset.input = 'price';
inputPriceEl.type = 'number';
formEl.appendChild(inputPriceEl);

const buttonEl = document.createElement('button');
buttonEl.dataset.action = 'add';
buttonEl.textContent = 'Добавить';
formEl.appendChild(buttonEl);

const ulEl = document.createElement('ul');
ulEl.dataset.id = 'purchases-list';
rootEl.appendChild(ulEl);

const totalEl = document.createElement('div');
totalEl.textContent = 'Самая дорогая покупка: ';
rootEl.appendChild(totalEl);

const mostExpensive = document.createElement('span');
mostExpensive.dataset.id = 'most-expensive';
mostExpensive.textContent = 'нет покупок';
totalEl.appendChild(mostExpensive);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
formEl.insertBefore(errorEl, formEl.firstElementChild);
let maxPrice = 0;

formEl.onsubmit = evt => {
  evt.preventDefault();

  errorEl.textContent = '';
  let error = null;

  const name = inputNameEl.value.trim();
    if (name === '') {
      error = 'Значение поля не может быть пустым';
      errorEl.textContent = error;
      inputNameEl.focus();
      return;
    }
    const price = inputPriceEl.value.trim();
      if (price <= 0) {
        error = 'Значение поля не может отрицательным';
        errorEl.textContent = error;
        inputPriceEl.focus();
        return;
      }
      if (isNaN(price)) {
        error = 'не число';
        errorEl.textContent = error;
        inputPriceEl.focus();
        return;
      }

    const purchase = {
      id:nextId++,
      name,
      price,
    };

    const listEl = document.createElement('li');
    listEl.dataset.purchaseId = purchase.id;
    listEl.textContent = `${purchase.name} на сумму ${purchase.price} с. `;

    const buttonRemoveEl = document.createElement('button');
    buttonRemoveEl.dataset.actionRemove = 'remove';
    buttonRemoveEl.textContent = 'Удалить';

    listEl.appendChild(buttonRemoveEl);
    ulEl.prepend(listEl);
    purchases.push(purchase);
    maxCheck();

    function maxCheck() {
      if (purchases.length === 0) {
        mostExpensive.textContent = 'нет покупок';
      } else {
        maxPrice = purchases[0].price;
        for (let i = 0; i < purchases.length; i++) {
          if (purchases[i].price >= maxPrice) {
            maxPrice = purchases[i].price;
            mostExpensive.textContent = `${purchases[i].name} ${maxPrice} с.`;
          }
        }
      }
    }

    buttonRemoveEl.addEventListener('click', function(event) {
      const task = event.target.parentNode;
      maxIndex = task.getAttribute('data-purchase-id');
      console.log(maxIndex)
      purchases.splice(maxIndex - 1, 1)
      task.remove();
      console.log(purchases)
      maxCheck();
    });

    inputNameEl.focus();
    formEl.reset();
};
