import { createProductblock,renderProductList } from "./productLogic";
import { productList } from "./products";

// let productContainer = document.querySelector('.search-result__container');
const input = document.querySelector('.search__input');

const searchBtn = document.querySelector('.search__btn ');



const searchLogicEnterKey = (container) => {
    input.addEventListener("keypress", (event) => {
        if (event.keyCode == 13) {
            searchResult(container)
        }
    });
}

const SearcLogicBtn = (container) => {
    searchBtn.addEventListener('click', () => {
        searchResult(container)
    })
}


const searchResult = (container) => {
    let productListCopy = [...productList];
    productListCopy = productListCopy.filter((item) => {
        let result = String(input.value.trim()).toLocaleLowerCase();
        const vendorCode = item.vendorCode.toLocaleLowerCase();
        const title = item.title.trim().toLocaleLowerCase();
        const price = String(item.price).toLocaleLowerCase();
        return vendorCode.includes(result) || title.includes(result) || price.includes(result)
    });
    if (input.value.trim() == ''){
        seachError()
    }else{
        input.style.border = 'none';
        renderProductList(productListCopy,container)
        input.value = '';
    }
}

const seachError = () => {
    const error = document.querySelector('.search-error');
    error.style.opacity = 1;
    input.style.border = '1px solid red';
    setTimeout(() => error.style.opacity = 0,3000)


}


export {
    SearcLogicBtn,
    searchLogicEnterKey
}

