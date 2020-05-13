'use strict';

function thanosEffect(el) {
  const list = el.querySelectorAll('[data-type="post"]');
  list.forEach(function(elem, index){
  if (index  % 2 == 0) {
    return list[index].style.visibility = 'hidden';
  }
});
}
const postsEl = document.querySelector('[data-id="posts"]');
thanosEffect(postsEl);
