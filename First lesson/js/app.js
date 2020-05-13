// 'use strict';
//
// function extractOwnerId(postId) {
//   const selector = `[data-id="${postId}"]`;
//   const get = document.querySelector(selector);
//   const ownerId = get.getAttribute('data-ownerId');
//   console.log(ownerId);
//   return ownerId;
// }
// extractOwnerId(1);

'use strict';

function extractOwnerId(postId) {
  const selector = `[data-id="${postId}"]`;
  console.log(selector)
  const postEl = document.querySelector(selector);
  console.log(postEl)
  var ownerId = postEl.getAttribute("data-type");
  console.log(ownerId);

  return ownerId;
};
// console.log(extractOwnerId(1));
// let id = document.querySelector('[data-id]');
