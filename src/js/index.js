import { productLogic} from "./modules/productLogic";
import { nextSlider,prevSlider } from "./modules/sliderLogic";
import { nextSliderBottom , prevSliderBottom} from "./modules/sliderLogicBottom";
import { clickFormBtn, createModal} from "./modules/modalAndLocalStorage";
import { callBackLogic } from "./modules/callBackModal";


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
productLogic()

//кнопки обратного звонка(хедер и футер результат идет в localStorage)
callBackLogic()