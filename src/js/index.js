import { productLogic,renderProductList} from "./modules/productLogic";
import { nextSlider,prevSlider } from "./modules/sliderLogic";
import { nextSliderBottom , prevSliderBottom} from "./modules/sliderLogicBottom";
import { clickFormBtn, createModal} from "./modules/modalAndLocalStorage";
import { callBackLogic } from "./modules/callBackModal";
import {SearcLogicBtn, searchLogicEnterKey} from  "./modules/search.js";
import { productList} from "./modules/products";

let bestsellerContainer = document.querySelector('.bestseller__products');
let searchContainer = document.querySelector('.search-result__container');

//большой слайдер(верхний). модуль sliderLogic
nextSlider()
prevSlider()

// маленький слайдер(низ страницы). модуль sliderLogicBottom
prevSliderBottom()
nextSliderBottom()

//форма внизу страницы. значения идут в localStorage и при входу на страницу отрисовывает приветсвие. либо при повторном заполнении формы.Если localStorage пуст то при отрисовке приветствия пишет "Гость" иначе имя
clickFormBtn()
setTimeout(() => {
    if( JSON.parse(localStorage.getItem("userInfo")) == null){
        createModal()
    }
    else {
        let userName = JSON.parse(localStorage.getItem("userInfo")).userName;
        createModal(userName)
    }
},2000)

//кнопки в секции хиты продаж.модуль productLogic
productLogic(bestsellerContainer)

//при изначальной загрузке страницы выводит весь ассортимент товаров
renderProductList(productList,bestsellerContainer);

//кнопки обратного звонка(хедер и футер результат идет в localStorage)
callBackLogic()

//панель поиска в хедере.Ищет товар по артикулу , названию товара и цене.Срабатывает при на жатии на кнопку либо на интер. если строка пустая кидает ошибку.можно писать с любого размера букв
SearcLogicBtn(searchContainer)
searchLogicEnterKey(searchContainer)