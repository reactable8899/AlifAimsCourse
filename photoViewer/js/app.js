'use strict';

const photos = [
  {id: 5, src: './img/1.png',alt: '1.png',},
  {id: 6, src: './img/2.png',alt: '2.png',},
  {id: 7, src: './img/3.png',alt: '3.png',},
  {id: 8, src: './img/4.png',alt: '4.png',},
];

const prevButton = document.querySelector('[data-action="prev"]');
const nextButton = document.querySelector('[data-action="next"]');
const viewer = document.querySelector('[data-id="photo"]');

let n = 0;
nextButton.onclick = function() {
  prevButton.removeAttribute('disabled');
  n++;
  if (n === 3) {
    nextButton.setAttribute('disabled','disabled');
  }
  bindPhotoToViewer(photos);
};
prevButton.onclick = function() {
  nextButton.removeAttribute('disabled');
  n--;
  if (n === 0) {
    prevButton.setAttribute('disabled','disabled');
  }
  bindPhotoToViewer(photos);
};

function bindPhotoToViewer(photo, el) {
  viewer.id = photos[n].id;
  viewer.src = photos[n].src;
  viewer.alt = photos[n].alt;
  el = 1;
  console.log(viewer.src);
}
bindPhotoToViewer(photos);
