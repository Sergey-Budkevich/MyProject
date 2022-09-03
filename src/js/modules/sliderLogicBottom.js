const btnNextReviews = document.querySelector('.slider__btn--right');
const  btnPrevReviews = document.querySelector('.slider__btn--left');
const sliderLineReviews = document.querySelector('.reviews__slider-line');
let itemWidth = parseInt(getComputedStyle(document.querySelector('.slider__item')).width) + 15;
let offset = 0;

function nextSliderBottom(){
    btnNextReviews.addEventListener('click',() => {
        offset += itemWidth;
        if (offset > itemWidth * 2){
            offset = 0 ;
        }
        sliderLineReviews.style.left = -offset + 'px';
    })
    
}

function prevSliderBottom(){
    btnPrevReviews.addEventListener('click',() => {
        offset -= itemWidth;
        if (offset < 0){
            offset = itemWidth * 2 ;
        }
        sliderLineReviews.style.left = -offset + 'px';
    })
    
}

export {
    nextSliderBottom,
    prevSliderBottom
}