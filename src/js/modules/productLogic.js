import { productList } from "./products";
import { sendData,closeModal } from "./callBackModal";

const callBackBlock = document.querySelector('.call-back-modal');
const btnPanel = document.querySelector('.bestseller__button-panel');
const btnAdBtnPanel = document.querySelectorAll('.button-panel__btn');



const createProductblock = ({vendorCode,title,size,square,capacity,warranty,price,image,type},container) => {
    const productBlock = document.createElement('div');
    productBlock.classList.add('bestseller__product');
    productBlock.setAttribute('product-type',type);
    
    const productImageBlock = document.createElement('div');
    productImageBlock.classList.add('product__image-box');
    const productImage = document.createElement('img');
    productImage.src = image;
    productImage.setAttribute('alt', 'product');
    productImageBlock.append(productImage);
    
    const productVendorCode = document.createElement('p');
    productVendorCode.classList.add('product__vendor-code');
    productVendorCode.textContent = 'Артикул:';
    const productVendorCodeNumb = document.createElement('span');
    productVendorCodeNumb.textContent = vendorCode;
    productVendorCode.append(productVendorCodeNumb);
    
    const productTitle = document.createElement('h3');
    productTitle.classList.add('product__title');
    productTitle.textContent = title;
    
    const productSizeBlock = document.createElement('div');
    productSizeBlock.classList.add('product-size');
    const productSizeText = document.createElement('p');
    productSizeText.classList.add('product-size__text', 'text');
    productSizeText.textContent = 'Размеры:';
    const productSize = document.createElement('span');
    productSize.textContent = `${size}м.`;
    productSizeText.append(productSize);
    productSizeBlock.append(productSizeText);
    
    const productSquareBlock = document.createElement('div');
    productSquareBlock.classList.add('product-square');
    const productSquareText = document.createElement('p');
    productSquareText.classList.add('product-square__text', 'text');
    productSquareText.textContent = 'Площадь:';
    const productSquare = document.createElement('span');
    productSquare.textContent = `${square}м2`;
    productSquareText.append(productSquare);
    productSquareBlock.append(productSquareText);
    
    const productCapacityBlock = document.createElement('div');
    productCapacityBlock.classList.add('product-capacity');
    const productCapacityText = document.createElement('p');
    productCapacityText.classList.add('product-capacity__text', 'text');
    productCapacityText.textContent = 'Вместимость:';
    const productCapacity = document.createElement('span');
    productCapacity.textContent = `${capacity}чел.`;
    productCapacityText.append(productCapacity);
    productCapacityBlock.append(productCapacityText);
    
    const productWarrantyBlock = document.createElement('div');
    productWarrantyBlock.classList.add('product-warranty');
    const productWarrantyText = document.createElement('p');
    productWarrantyText.classList.add('produc-warranty__text', 'text');
    productWarrantyText.textContent = 'Гарантия:';
    const productWarranty = document.createElement('span');
    productWarranty.textContent = `${warranty}лет`;
    productWarrantyText.append(productWarranty);
    productWarrantyBlock.append(productWarrantyText);
    
    const productFooterBlock = document.createElement('div');
    productFooterBlock.classList.add('product-footer');
    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    const productPriceText = document.createElement('p');
    productPriceText.classList.add('product-price__text');
    productPriceText.textContent = `${price} ₽`;
    productPrice.append(productPriceText);
    const productBtn= document.createElement('button');
    productBtn.classList.add('product-footer__btn','btn');
    productBtn.textContent = 'Купить';
    productFooterBlock.append(productPrice,productBtn);
    
    productBlock.append(productImageBlock, productVendorCode, productTitle, productSizeBlock, productSquareBlock, productCapacityBlock, productWarrantyBlock, productFooterBlock);
    container.append(productBlock);

    productBtn.addEventListener('click',() => {
        callBackBlock.style.visibility = 'visible';
        sendData()
        closeModal()
    })

}


const renderProductList = (list,container) => {
    container.innerHTML = "";
    list.forEach((item) => {
        createProductblock(item,container);
    });
}

const productLogic = (container) => {
    btnPanel.addEventListener('click',(event => {
        let target = event.target
        let productListCopy = [...productList];
        productListCopy = productListCopy.filter((item) => {
            return item.type == target.getAttribute('btn-id');
        });
        for(let i = 0; i < btnAdBtnPanel.length; i++ ){
            btnAdBtnPanel[i].classList.remove('active');
            container.innerHTML = "";
        }
        target.classList.add('active');
        renderProductList(productListCopy,container);
    }))
}

export {
    productLogic,
    createProductblock,
    renderProductList
}