const callBackBtn = document.querySelector('.call-back-btn');
const callBackBtn2 = document.querySelector('.call-back__btn');
const callBackBlock = document.querySelector('.call-back-modal');
const btnSubmit = document.querySelector('.call-back-form__btn');
const closeBtn = document.querySelector('.btn-close');

const inputName = document.querySelector('.input-name');
const inputTel = document.querySelector('.input-tel');
const inputDate = document.querySelector('.input-date');
const inputTime = document.querySelector('.input-time');

const nameError = document.querySelector('.input-name-error');
const telError = document.querySelector('.input-tel-error');


function callBackLogic(){
    callBackBtn.addEventListener('click',() => {
        callBackBlock.style.visibility = 'visible'
        sendData()
        closeModal()
});
    callBackBtn2.addEventListener('click',() => {
        callBackBlock.style.visibility = 'visible'
        sendData()
        closeModal()
        
});
}

const closeModal = () => {
    closeBtn.addEventListener('click',() => {
        clearInput()
        callBackBlock.style.visibility = 'hidden'
    })
    callBackBlock.addEventListener('click',(event) => {
        if (event.target.matches('form, input, label, span, h2, button:not(btn-close), button:not(call-back-form__btn)')){
            event.preventDefault()
        }else{
            clearInput()
            callBackBlock.style.visibility = 'hidden'
        }
        
    })
}

const sendData = () => {
    btnSubmit.addEventListener('click',(event) => {
        if(inputName.value.trim() == ''){
            inputName.style.border = '3px solid red';
            event.preventDefault()
            nameError.style.visibility = 'visible';
            nameError.style.opacity = 1;
            setTimeout(()=>{
                nameError.style.opacity = 0
            },3000)
        } else if(inputTel.value.trim() == ''){
            inputTel.style.border = '3px solid red';
            event.preventDefault()
            telError.style.visibility = 'visible';
            telError.style.opacity = 1;
            setTimeout(()=>{
                telError.style.opacity = 0
            },3000)
        }else {
            let userCallBack = {
                userName : inputName.value,
                userPhone : inputTel.value,
                dateForCall : inputDate.value,
                timeForCall : inputTime.value
            }
            localStorage.setItem('userCallBack',JSON.stringify(userCallBack));
            clearInput()
            callBackBlock.style.visibility = 'hidden';
        }
    })
}

const clearInput = () => {
    inputName.style.border = '1px solid black';
    inputTel.style.border = '1px solid black';
    inputName.value = '';
    inputTel.value = ''
    inputDate.value = ''
    inputTime.value = ''
}


export {
        sendData,
        closeModal,
        callBackLogic
}