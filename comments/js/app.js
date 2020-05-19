'use strict';
let nextId = 1;
const comments = [];

const rootEl = document.getElementById('root');
const formEl = document.createElement('form');
formEl.dataset.id = 'comment-form';
rootEl.appendChild(formEl);

const textareaEl = document.createElement('textarea');
textareaEl.dataset.input = 'comment';
formEl.appendChild(textareaEl);

const buttonEl = document.createElement('button');
buttonEl.dataset.action = 'add';
buttonEl.textContent = 'Добавить';
formEl.appendChild(buttonEl);

const ulEl = document.createElement('ul');
ulEl.dataset.id = 'comment-list';
rootEl.appendChild(ulEl);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
formEl.insertBefore(errorEl, formEl.firstElementChild);

formEl.onsubmit = evt => {
  evt.preventDefault();

  errorEl.textContent = '';
  let error = null;
  const text = textareaEl.value.trim();
    if (text === '') {
      error = 'Значение поля не может быть пустым';
      errorEl.textContent = error;
      textareaEl.focus();
      return;
    }
    const comment = {
      id:nextId++,
      text,
    };

  const listEl = document.createElement('li');
  listEl.textContent = comment.text;
  listEl.dataset.commentId = comment.id;
  ulEl.appendChild(listEl);

  comments.push(comment);
  textareaEl.focus();
  formEl.reset();
};
