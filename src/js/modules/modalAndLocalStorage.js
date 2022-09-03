const main = document.querySelector('.main');
const formBtn = document.querySelector('.subscription__form-btn');
const inputUserName = document.querySelector('.subscription__input-username');

const inputUserEmail = document.querySelector('.subscription__input-email');
// {userName}



const clickFormBtn = () => {
    formBtn.addEventListener('click',() => {
        let userInfo = {
                userName : inputUserName.value,
                userEmail : inputUserEmail.value
            }
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
        let userName = JSON.parse(localStorage.getItem("userInfo")).userName;
        createModal(userName)
    })
}

const createModal = (name) => {
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
