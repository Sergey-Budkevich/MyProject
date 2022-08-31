import { productList } from "./modules/products";
import { renderProductList } from "./modules/productLogic";

const productContainer = document.querySelector('.bestseller__products');
const btnBaths = document.querySelector('.btn--baths')
const btnSites = document.querySelector('.btn--sites')
const btnHouses = document.querySelector('.btn--houses')
const btnPergolas = document.querySelector('.btn--pergolas')
const btnBrands = document.querySelector('.btn--brands')
const btnGazebos = document.querySelector('.btn--gazebos')
let productListCopy = [...productList];

btnHouses.addEventListener('click',() => {
    productListCopy = productListCopy.filter((item) => {
        return item.type == 'houses';
    })
    renderProductList(productListCopy)
} );

btnBaths.addEventListener('click',()=>{
    productListCopy = productListCopy.filter((item) => {
        return item.type == 'baths';
    })
    renderProductList(productListCopy)
})

btnSites.addEventListener('click',()=>{
    productListCopy = productListCopy.filter((item) => {
        return item.type == 'sites';
    })
    renderProductList(productListCopy)
})

btnPergolas.addEventListener('click',()=>{
    productListCopy = productListCopy.filter((item) => {
        return item.type == 'pergolas';
    })
    renderProductList(productListCopy)
})

btnGazebos.addEventListener('click',()=>{
    productListCopy = productListCopy.filter((item) => {
        return item.type == 'gazebos';
    })
    renderProductList(productListCopy)
})