'use strict';

const nasiaEl = document.querySelector('[data-tab="nasia"]');
const alifmobiEl = document.querySelector('[data-tab="alifmobi"]');
const tabpanenasiaEl = document.querySelector('[data-tabpane="nasia"]');
const tabpanealifmobiEl = document.querySelector('[data-tabpane="alifmobi"]');

tabpanenasiaEl.style.display = '';
tabpanealifmobiEl.style.display = 'none';

nasiaEl.onclick = function() {
  tabpanenasiaEl.style.display = '';
  tabpanealifmobiEl.style.display = 'none';
};
alifmobiEl.onclick = function() {
  tabpanealifmobiEl.style.display = '';
  tabpanenasiaEl.style.display = 'none';
};
