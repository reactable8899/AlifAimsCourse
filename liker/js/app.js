'use strict';

const post = {
  id: 0,
  userLiked: false,
};

button.onclick = function () {
  if (post.userLiked === false) {
    imgEl.src = './img/liked.svg';
    post.userLiked = true;
  } else {
    if (post.userLiked === true) {
      imgEl.src = './img/unliked.svg';
      post.userLiked = false;
    }
  }
};

const postEl = document.querySelector('[data-action="like"]');
const imgEl = postEl.querySelector('[data-type="image"]');
