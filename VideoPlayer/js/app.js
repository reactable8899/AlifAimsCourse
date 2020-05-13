'use strict';

const play = document.querySelector('[data-action="play"]');
const pause = document.querySelector('[data-action="pause"]');
const volumePlus = document.querySelector('[data-action="volume-plus"]');
const volumeMinus = document.querySelector('[data-action="volume-minus"]');
const video = document.querySelector('[data-id="video"]');

play.onclick = function() {
  video.play();
};
pause.onclick = function() {
  video.pause();
};
volumePlus.onclick = function() {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
};
volumeMinus.onclick = function() {
  if (video.volume > 0) {
    video.volume -= 0.1;
  }
};
