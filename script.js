let invisibles = document.querySelectorAll('.invisible')
let arrowButton = document.querySelector('.dropdown__button img')
let showHiddenHandler = document.querySelector('.dropdown__span')

showHiddenHandler.addEventListener('click', () => {
    if(showHiddenHandler.textContent === "Показать все"){
        invisibles.forEach( item => {
            item.style.display = 'flex'
        })
        showHiddenHandler.textContent = 'Скрыть'
        arrowButton.style.transform = "rotate(180deg)"
    }else {
        if(window.innerWidth >= 768){
            invisibles.forEach( item => {
                item.style.display = 'none'
            })
        }
        showHiddenHandler.textContent = 'Показать все'
        arrowButton.style.transform = "rotate(0deg)" 
    }
})


const slider = document.querySelector('.swiper-container')

        const mobileSlider = () => {
            if(window.innerWidth < 768 && slider.dataset.mobile == 'false'){
                mySlider = new Swiper(slider, {
                slidesPerView: 1.19,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            })
                slider.dataset.mobile = 'true'
            }
            if(window.innerWidth >= 768){
                slider.dataset.mobile = 'false'
                if(slider.classList.contains('swiper-container-initialized')){
                    slider.classList.remove('swiper-container-horizontal')
                    mySlider.destroy()
                } 
            }
        }

        mobileSlider()

        window.addEventListener('resize', () => {
            mobileSlider();
        });




