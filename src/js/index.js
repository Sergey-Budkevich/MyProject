import { productList } from "./modules/products";
import { renderProductList} from "./modules/productLogic";

const productContainer = document.querySelector('.bestseller__products');
const btnPanel = document.querySelector('.bestseller__button-panel');
const btnAdBtnPanel = document.querySelectorAll('.button-panel__btn');


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



