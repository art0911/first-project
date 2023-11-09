let elimLi = document.createElement('li')
elimLi.classList.add('gds__item')
let elimList = document.querySelector('.gds__list')
let elimeName = document.createElement('h3')
let elimeNameText = document.createTextNode('Iphone 15')
elimeName.appendChild(elimeNameText)
let elimImg = document.createElement("img")
elimImg.src = 'img/tovar.jpg'
elimImg.style.width = '250px'
let elimPrice = document.createElement('p')
let elimPriceText = document.createTextNode('120 000 руб')
elimPrice.appendChild(elimPriceText)

let elimBtn = document.createElement('btn')
let elimBtnText = document.createTextNode('удалить')
elimBtn.appendChild(elimBtnText)
elimBtn.setAttribute('onclick', 'del()')

let firstLi = document.querySelectorAll('.gds__item')[0]

function update(){
    elimLi.appendChild(elimeName)
    elimLi.appendChild(elimImg)
    elimLi.appendChild(elimPrice)
    elimLi.appendChild(elimBtn)
    firstLi.classList.add('none')

    elimList.appendChild(elimLi)
}

function del(){
    elimBtn.parentNode.remove()
    firstLi.classList.remove('none')
}