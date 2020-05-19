'use strict';
let nextId = 1;
const rootEl = document.getElementById('root');
const purchases = [];

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
totalEl.textContent = 'Итоговый кэшбэк: ';
rootEl.appendChild(totalEl);

const totalCash = document.createElement('span');
totalCash.dataset.id = 'total-cashback';
totalCash.textContent = '0 с.';
totalEl.appendChild(totalCash);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
formEl.insertBefore(errorEl, formEl.firstElementChild);

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
    if (purchase.price * 0.5 / 100 < 0.01) {
      listEl.textContent = `${purchase.name} на сумму ${purchase.price} с. (кэшбек - ${0} с.)`
    } else {
      listEl.textContent = `${purchase.name} на сумму ${purchase.price} с. (кэшбек - ${purchase.price * 0.5 / 100} с.)`;
    }
    ulEl.prepend(listEl);

    const sum = purchases.reduce((prev, curr) => prev + +(curr.price * 0.5 / 100), 0);
    totalCash.textContent = `${sum} с.`;
    purchases.push(purchase);
    inputNameEl.focus();
    formEl.reset();
}
