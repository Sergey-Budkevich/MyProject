import { productList } from "./modules/products";
import { renderProductList} from "./modules/productLogic";
import { nextSlider,prevSlider } from "./modules/sliderLogic";

const productContainer = document.querySelector('.bestseller__products');
const btnPanel = document.querySelector('.bestseller__button-panel');
const btnAdBtnPanel = document.querySelectorAll('.button-panel__btn');

//большой слайдер(верхний). модуль sliderLogic
nextSlider()
prevSlider()

//кнопки в секции хиты продаж.модуль productLogic
btnPanel.addEventListener('click',(event => {
    let target = event.target
    let productListCopy = [...productList];
    productListCopy = productListCopy.filter((item) => {
        return item.type == target.getAttribute('btn-id');
    });
    for(let i = 0; i < btnAdBtnPanel.length; i++ ){
        btnAdBtnPanel[i].classList.remove('active');
        productContainer.innerHTML = "";
    }
    target.classList.add('active');
    renderProductList(productListCopy);
}))

