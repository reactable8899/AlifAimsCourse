'use strict';

const like = document.querySelector('[data-id="counter"]');
like['__counterValue'] = 0;

setInterval(() => {
  like['__counterValue'] += 10;
  like.textContent = like['__counterValue'];
}, 1000);
