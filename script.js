/*new Swiper ('.software__list', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 'auto'
})*/


let hiddenBlock = document.querySelector('.list__block--hidden')
let arrowButton = document.querySelector('.dropdown__button img')
let showHiddenHandler = document.querySelector('.dropdown__span')

showHiddenHandler.addEventListener('click', () => {
    if(showHiddenHandler.textContent === "Показать все"){
        hiddenBlock.style.display = 'flex'
        showHiddenHandler.textContent = 'Скрыть'
        arrowButton.style.transform = "rotate(180deg)"
    }else {
        hiddenBlock.style.display = 'none'
        showHiddenHandler.textContent = 'Показать все'
        arrowButton.style.transform = "rotate(0deg)" 
    }
})

