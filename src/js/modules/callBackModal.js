const callBackBtn = document.querySelector('.call-back-btn');
const callBackBtn2 = document.querySelector('.callback__btn');

function callBackModal(){
    callBackBtn.addEventListener('click',() => {
    createCallBackModal()
    // callBackSubmit(inputName,inputTel,inputDate,inputTime,btnSubmit)
});
    callBackBtn2.addEventListener('click',() => {
        createCallBackModal()
        // callBackSubmit(inputName,inputTel,inputDate,inputTime,btnSubmit)
});
}

function callBackSubmit(inputName,inputTel,inputDate,inputTime,btnSubmit){
    btnSubmit.addEventListener('click',() => {
        let userCallBack = {
            userName : inputName.value,
            userPhone : inputTel.value,
            dateForCall : inputDate.value,
            timeForCall : inputTime.value
        }
    localStorage.setItem('userCallBack',JSON.stringify(userCallBack));
    callBackBlock.style.visibility = 'hidden';
});
}

const createCallBackModal = () => {
    const callBackBlock = document.createElement('div');
    callBackBlock.classList.add('call-back-modal');

    const callBackForm = document.createElement('form');
    callBackForm.classList.add('call-back-modal__form');

    const btnClose = document.createElement('button');
    btnClose.classList.add('btn-close', 'btn');
    btnClose.setAttribute('type','button');
    btnClose.textContent = 'X';

    const callBackTitle = document.createElement('h2');
    callBackTitle.classList.add('call-back-modal__title', 'title');
    callBackTitle.textContent = 'Заполните поля для обратной связи';

    const inputBlockName = document.createElement('div');
    inputBlockName.classList.add('input-block', 'input-block--name');
    const inputName = document.createElement('input');
    inputName.setAttribute('type','name');
    inputName.setAttribute('placeholder','Имя');
    inputName.setAttribute('name','name');
    const inputNameTitle = document.createElement('label');
    inputNameTitle.setAttribute('for','name');
    inputNameTitle.textContent = 'Введите ваше имя';
    inputBlockName.append(inputName,inputNameTitle)

    const inputBlockTel = document.createElement('div');
    inputBlockTel.classList.add('input-block', 'input-block--tel');
    const inputTel = document.createElement('input');
    inputNameTitle.setAttribute('name','tel');
    inputTel.setAttribute('type','tel');
    inputTel.setAttribute('name','tel');
    inputTel.setAttribute('placeholder','Номер телефона');
    const inputTelTitle = document.createElement('label');
    inputTelTitle.setAttribute('for','tel');
    inputTelTitle.textContent = 'Введите ваш номер телефона';
    inputBlockTel.append(inputTel,inputTelTitle)

    const inputBlockDate = document.createElement('div');
    inputBlockDate.classList.add('input-block', 'input-block--date');
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type','date');
    inputDate.setAttribute('name','date');
    const inputDateTitle = document.createElement('label');
    inputDateTitle.setAttribute('for','date');
    inputDateTitle.textContent = 'Выберите дату для обратной связи';
    inputBlockDate.append(inputDate,inputDateTitle)

    const inputBlockTime = document.createElement('div');
    inputBlockTime.classList.add('input-block', 'input-block--time');
    const inputTime = document.createElement('input');
    inputTime.setAttribute('type','time');
    inputTime.setAttribute('name','time');
    const inputTimeTitle = document.createElement('label');
    inputTimeTitle.setAttribute('for','time');
    inputTimeTitle.textContent = 'Укажите удобное время для звонка';
    inputBlockTime.append(inputTime,inputTimeTitle)

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('call-back-form__btn', 'btn');
    btnSubmit.setAttribute('type','submit');
    btnSubmit.textContent = 'Отправить';
    
    callBackForm.append(btnClose,callBackTitle,inputBlockName,inputBlockTel,inputBlockDate,inputBlockTime,btnSubmit);
    callBackBlock.append(callBackForm);
    document.querySelector('main').append(callBackBlock)

    callBackSubmit(inputName,inputTel,inputDate,inputTime,btnSubmit)
}

export {
    callBackModal
}