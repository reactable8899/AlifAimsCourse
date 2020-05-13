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
  n++;
  if (n === 4) {
    n = 0;
  }
  bindPhotoToViewer(photos);
};
prevButton.onclick = function() {
  if (n === 0) {
    n = 4;
  }
  n--;
  bindPhotoToViewer(photos);
};

function bindPhotoToViewer(photo) {
  viewer.id = photos[n].id;
  viewer.src = photos[n].src;
  viewer.alt = photos[n].alt;
}
bindPhotoToViewer(photos);
