const userButton = document.querySelector('.user-button');
const subMenu = document.querySelector('.sub-menu');

userButton.addEventListener('click', () => {
  subMenu.classList.toggle('show');
});
