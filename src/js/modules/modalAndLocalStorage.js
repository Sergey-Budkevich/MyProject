const main = document.querySelector('.main');
const formBtn = document.querySelector('.subscription__form-btn');
const inputUserName = document.querySelector('.subscription__input-username');

const inputUserEmail = document.querySelector('.subscription__input-email');

const clickFormBtn = () => {
    formBtn.addEventListener('click',() => {
        if(inputUserName.value.trim() == ''){
            inputUserName.style.border = '3px solid red';
        }else if(inputUserEmail.value.trim() == ''){
            inputUserEmail.style.border = '3px solid red';
        } else {
            let userInfo = {
                userName : inputUserName.value,
                userEmail : inputUserEmail.value
            }
            localStorage.setItem('userInfo',JSON.stringify(userInfo))
            let userName = JSON.parse(localStorage.getItem("userInfo")).userName;
            createModal(userName)
        }
    })
}

const createModal = (name = 'Гость') => {
    const modalBlock = document.createElement('div');
    modalBlock.classList.add('modal');

    const modalText = document.createElement('p');
    modalText.classList.add('modal__text');
    modalText.textContent = `Добро пожаловать, `;

    const modalUSerName = document.createElement('span')
    modalUSerName.classList.add('modal__user-name');
    modalUSerName.textContent = name;

    modalText.append(modalUSerName);
    modalBlock.append(modalText);
    main.append(modalBlock);
    modalBlock.style.opacity = 0;
    setTimeout(() => {
        modalBlock.style.opacity = 1;
    },10)
    setTimeout(() => {
        modalBlock.style.opacity = 0;
        modalBlock.style.visibility = 'hidden';
    },7000)
}


export {
    clickFormBtn,
    createModal,
}
