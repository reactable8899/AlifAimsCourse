'use strict';

const likeRateToDel = -10;

const rootEl = document.getElementById('root');

const formEl = document.createElement('form');
formEl.action = '';
formEl.dataset.id = 'comment-form';
rootEl.appendChild(formEl);

const areaEl = document.createElement('textarea');
areaEl.name = '';
areaEl.id = '';
areaEl.cols = 30;
areaEl.rows = 10;
areaEl.dataset.input = 'text';
formEl.appendChild(areaEl);

const addEl = document.createElement('button');
addEl.dataset.action = 'add';
addEl.textContent = 'Добавить';
formEl.appendChild(addEl);

const errorEl = document.createElement('div');
errorEl.dataset.id = 'message';
formEl.appendChild(errorEl);

const listEl = document.createElement('ul');
listEl.dataset.id = 'comments-list';
rootEl.appendChild(listEl);
const comments = [];
let nextId = 1;
formEl.onsubmit = (evt) => {
    evt.preventDefault();

    errorEl.textContent = '';
    let error = null;
    const commentText = areaEl.value.trim();
    if (commentText === '') {
        error = 'Заполните поле Комментарий';
        errorEl.textContent = error;
        areaEl.focus();
        return;
    }
    const comment = {
        id: nextId++,
        text: commentText,
        likes: 0,
    };
    comments.push(comment);

    formEl.reset();
    areaEl.focus();

    const commentEl = document.createElement('li');
    commentEl.dataset.commentId = comment.id;
    listEl.appendChild(commentEl);

    const textSpanEl = document.createElement('span');
    textSpanEl.dataset.info = 'text';
    textSpanEl.textContent = comment.text;
    commentEl.appendChild(textSpanEl);

    commentEl.innerHTML += ' heart';

    const likesSpanEl = document.createElement('span');
    likesSpanEl.dataset.info = 'likes';
    likesSpanEl.textContent = comment.likes;
    commentEl.appendChild(likesSpanEl);

    const likeBtnEl = document.createElement('button');
    likeBtnEl.dataset.action = 'like';
    likeBtnEl.textContent = '+';
    commentEl.appendChild(likeBtnEl);
    likeBtnEl.onclick = () => {
        likesSpanEl.textContent = ++comment.likes;
        if (comment.likes <= likeRateToDel) {
            listEl.removeChild(commentEl);
            const index = comments.indexOf(comment);
            comments.splice(index, 1);
        }
    };

    const dislikeBtnEl = document.createElement('button');
    dislikeBtnEl.dataset.action = 'dislike';
    dislikeBtnEl.textContent = '-';
    commentEl.appendChild(dislikeBtnEl);
    dislikeBtnEl.onclick = () => {
        likesSpanEl.textContent = --comment.likes;
        if (comment.likes <= likeRateToDel) {
            listEl.removeChild(commentEl);
            const index = comments.indexOf(comment);
            comments.splice(index, 1);
        }
    };
};
