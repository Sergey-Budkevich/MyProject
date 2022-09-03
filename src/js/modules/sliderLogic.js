
const btnNext = document.querySelector('.slider-next');
const  btnPrev = document.querySelector('.slider-prev');
const sliderLine = document.querySelector('.slider-line');
let itemWidth = parseInt(getComputedStyle(document.querySelector('.slider-item')).width) + 22 * 2;
let offset = 0;


function nextSlider(){
    btnNext.addEventListener('click',() => {
        offset += itemWidth;
        if (offset > itemWidth * 3){
            offset = 0 ;
        }
        sliderLine.style.left = -offset + 'px';
    })
}

function prevSlider(){
    btnPrev.addEventListener('click',() => {
        offset -= itemWidth;
        if (offset < 0){
            offset = itemWidth * 3 ;
        }
        sliderLine.style.left = -offset + 'px';
    })
}




export {
    nextSlider,
    prevSlider
}