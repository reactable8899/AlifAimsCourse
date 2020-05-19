'use strict';

const posts = [
  {
    id: 3,
    type: 'text',
    content: 'Final Week!',
  },
  {
    id: 2,
    type: 'image',
    content: './img/logo_js.svg',
  },
  {
    id: 1,
    type: 'video',
    content: './video/video.mp4',
  },
];

const rootEl = document.getElementById('root');

function makePostEl(post) {
const postEl = document.createElement('div');
postEl.dataset.id = post.id;
postEl.dataset.type = post.type;
rootEl.appendChild(postEl);

  if (post.type === 'text') {
    const textEl = document.createElement('div');
    textEl.textContent = post.content;
    postEl.appendChild(textEl);
  }
  if (post.type === 'image') {
    const imageEl = document.createElement('img');
    imageEl.src = post.content;
    postEl.appendChild(imageEl);
  }
  if (post.type === 'video') {
    const videoEl = document.createElement('video');
    videoEl.src = post.content;
    postEl.appendChild(videoEl);
  }
}

function makeWall(el, items) {
  items.map(makePostEl).forEach(element => console.log("ss"));
}
makeWall(rootEl, posts);
