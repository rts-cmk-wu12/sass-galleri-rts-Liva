const menuBtn = document.querySelector('#header__menu-container__menu-button');
const menuContainer = document.querySelector('#header__menu-container__menu');

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('is-active');
    menuContainer.classList.toggle('animate__fadeInLeft');
})