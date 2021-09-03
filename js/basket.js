'use strict';
let productArr = [{}];

// формируем массив объектов товаров на странице

let titleEl = document.getElementsByClassName('title');
let priceEl = document.getElementsByClassName('price');
let itemEl = document.getElementsByClassName('item');

// шаблон объекта
// {
//     title: '',
//     quantity: 0,
//     price: 0.00,
// }

for (let i = 0; i < itemEl.length; i++) {
    let quantity = 0;
    productArr[i] = {
        title: titleEl[i].outerText,
        quantity: quantity,
        price: parseFloat(priceEl[i].outerText),
    };
    // обработчик нажатия на кнопку Add to Card
    itemEl[i].addEventListener('click', function (event) {
        if (i == itemEl[i].dataset.item) {
            productArr[i].quantity++;
        }
        // вывод
        general(productArr);
        event.preventDefault();
    });
}

/** вывод на страницу на основе данных массива объектов
 * 
 * @param {object} массив объектов товаров 
 */
function general(products) {
    // формирование строки для вставки, общее количество товара и общая сумма
    let rowProduct = '<div class="first-line"><span class="nameProduct"><strong>Название товара</strong></span><span class="quantityProduct"><strong>Количество</strong></span><span class="priceProduct"><strong>Цена за шт.</strong></span><span class="resultProduct"><strong>Итого</strong></span></div>';
    let quantityTxt = 0;
    let summ = 0;

    for (let i = 0; i < products.length; i++) {
        let title = products[i].title;
        let quantity = parseInt(products[i].quantity);
        let price = products[i].price.toFixed(2);
        let result = (quantity * price).toFixed(2);
        summ += Number(result);
        quantityTxt += quantity;

        if (quantity != 0) {
            rowProduct += `
            <div class="line-product"><span class="nameProduct">${title}</span>
            <span class="quantityProduct">${quantity}</span>
            <span class="priceProduct">\$${price}</span>
            <span class="resultProduct">\$${result}</span></div>`;
        }
    }
    rowProduct += '<div><span class="summProduct"><strong>Товаров в корзине на сумму</strong></span><strong class="summ"></strong></div></div>';

    // вставка сформированной строки в targetEntry
    let targetEntry = document.querySelector('.targetEntry');
    targetEntry.innerHTML = rowProduct;

    // вставка общего количества товара в кружочек
    let quantityTxtEl = document.querySelector('.quantityTxt');
    quantityTxtEl.innerHTML = quantityTxt;

    // вставка общего количества товара в кружочек
    let summEl = document.querySelector('.summ');
    summEl.innerText = '\$' + summ.toFixed(2);
}

// открываем содержимое корзины по клику
let basket = document.querySelector('.basket');
let basketBlock = document.querySelector('.basket-block');
basket.addEventListener('click', function (event) {
    if (basketBlock.style.display == 'none') {
        basketBlock.style.display = 'block';
    } else {
        basketBlock.style.display = 'none';
    }
    event.preventDefault();
});