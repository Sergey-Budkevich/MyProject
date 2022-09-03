import { productList } from "./modules/products";
import { renderProductList} from "./modules/productLogic";
import { nextSlider,prevSlider } from "./modules/sliderLogic";
import { nextSliderBottom , prevSliderBottom} from "./modules/sliderLogicBottom";
import { clickFormBtn, createModal} from "./modules/modalAndLocalStorage";


const productContainer = document.querySelector('.bestseller__products');
const btnPanel = document.querySelector('.bestseller__button-panel');
const btnAdBtnPanel = document.querySelectorAll('.button-panel__btn');

//большой слайдер(верхний). модуль sliderLogic
nextSlider()
prevSlider()

// маленький слайдер(низ страницы). модуль sliderLogicBottom
prevSliderBottom()
nextSliderBottom()

//форма внизу страницы. значения идут в localStorage и при входу на страницу отрисовывает приветсвие. либо при повторном заполнении формы
clickFormBtn()
setTimeout(() => {
    let userName = JSON.parse(localStorage.getItem("userInfo")).userName;
    createModal(userName);
},2000)


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





