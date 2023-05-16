import './styles/style.css';

const hamburger = document.querySelector('#hamburgerButton');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const drawer = document.querySelector('#navigationDrawer');
const back = document.querySelector('.toggle-back');

const navbar = () => {
  hamburger.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });

  back.addEventListener('click', () => {
    drawer.classList.remove('open');
  });

  hero.addEventListener('click', () => {
    drawer.classList.remove('open');
  });

  main.addEventListener('click', () => {
    drawer.classList.remove('open');
  });
};

navbar();
