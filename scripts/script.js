var buyf = 0
const btn = document.getElementById('btn')
let basket = 0
let price = btn.previousSibling.previousSibling.textContent
price = price.replace(' ', '')
price = parseInt(price)
const basketPrice = document.querySelector('.price')


if (localStorage.getItem('basket') !== null) {

    basket = localStorage.getItem('basket')
    basketPrice.textContent = basket
}

if (localStorage.getItem('buyf') !== null) {
    buyf = localStorage.getItem('buyf')
    buyf = parseInt(buyf)
    if (buyf == false) {
        btn.style.background = 'Silver';
        btn.innerHTML = ' Купить';
    } else {
        btn.style.background = 'lime';
        btn.innerHTML = 'В корзине';
    }
}

function buy() {
    if (!buyf) {
        btn.style.background = 'lime';
        btn.innerHTML = 'В корзине';
        buyf = 1
        basket = parseInt(basket) + price

    } else {
        btn.style.background = 'Silver';
        btn.innerHTML = ' Купить';
        buyf = 0
        basket = parseInt(basket) - price
    }

    basketPrice.textContent = basket


    localStorage.setItem('basket', basket)
    localStorage.setItem('buyf', buyf)
}

