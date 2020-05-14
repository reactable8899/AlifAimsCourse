'use strict';

const viewerEl = document.querySelector('[data-id="viewer"]');
const qtyEl = viewerEl.querySelector('[data-id="qty"]');
const incEl = viewerEl.querySelector('[data-action="inc"]');
const decEl = viewerEl.querySelector('[data-action="dec"]');
const messageEl = viewerEl.querySelector('[data-id="message"]');
const totalEl = viewerEl.querySelector('[data-id="total"]');

const viewerWidget = {
    rootEl: viewerEl,
    qtyEl,
    incEl,
    decEl,
    totalEl,
    messageEl,
};
const nokia = {
    id: 1,
    cost: 239,
    title: 'Nokia N8',
    url:1,
};

const order = {
    orderId: 1,
    articleId: nokia.id,
    qty: 1,
    costPerPiece: nokia.cost,
};


function bindArticleToEl(ordr, el) {
    el.totalEl.textContent = ordr.costPerPiece * ordr.qty + ' с.';
    el.qtyEl.textContent = ordr.qty;
}

bindArticleToEl(order, viewerWidget);

viewerWidget.incEl.onclick = () => {
    if (order.qty == 10) {
        messageEl.textContent = '10 шт - максимум в одни руки';
    } else {
        order.qty++;
        messageEl.textContent = '';
    }
    bindArticleToEl(order, viewerWidget);
};
viewerWidget.decEl.onclick = () => {
    if (order.qty == 1) {
        viewerWidget.messageEl.textContent = '1 шт - минимальный размер заказа';
    } else {
        order.qty--;
        messageEl.textContent = '';
    }
    bindArticleToEl(order, viewerWidget);
};
