document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})

let card  = document.querySelector('.menu__item-shop');
let cardfield  = document.querySelector('.reproduction__content-inner');
let button = document.getElementsByClassName('reproduction__btn');

for(let but of button) {
    but.onclick = e=> {
        let item = Number(card.getAttribute("data-count") || 0 );
        card.setAttribute('data-count', item + 1);
        card.classList.add('on');
    }
};

const tabItem = document.querySelectorAll('.reproduction__link-text');
const tabContent = document.querySelectorAll('.reproduction__cards');

tabItem.forEach(function(element) {
    element.addEventListener('click', open)
})

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('reproduction__link-text--active')
    });

    tabTarget.classList.add('reproduction__link-text--active');

    tabContent.forEach(function(item) {
        item.classList.remove('reproduction__cards--active');
    });

    document.querySelector(`#${button}`).classList.add('reproduction__cards--active');
}