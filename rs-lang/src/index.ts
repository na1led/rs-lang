

import './assets/fonts/FontAwesome/stylesheet.css';
import './assets/fonts/Gilroy/stylesheet.css';


import './styles/font.css';
import './styles/style.scss';
import './styles/header.scss';
import './styles/header-bg.scss';
import './styles/about.scss';
import './styles/footer.scss';

import './components/pages/audiogame/audiogame.css';

import {
  setAppearAnimation,
  setSlideFromRightAnimation,
} from './components/app/animation';
import {
  MainCard,
  disableMain,
  enableMainMain,
  generateFooter,
  generateMain,
  generateSection,
  enableMain,
} from './components/app/main';

const sashaInfo: object = {
  avatarLink: 'assets/img/avatar-2.png',
  name: 'Саша',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/alexanderson0708',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Авторизация', 'Аудиовызов'],
};
const kostyaInfo: object = {
  avatarLink: 'assets/img/avatar-1.png',
  name: 'Костя',
  role: 'Team Lead | Frontend Dev',
  ghLink: 'https://github.com/na1led',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Главная страница', 'Спринт'],
};
const lizaInfo: object = {
  avatarLink: 'assets/img/avatar-3.png',
  name: 'Лиза',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/elizavetachizh',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Электронный учебник', 'Статистика'],
};

function buildMain() {
  const elementMain: HTMLElement = generateMain(),
    sectionAbout: HTMLElement = generateSection('about', 'Наша команда');

  elementMain.appendChild(sectionAbout);

  document.body.appendChild(elementMain);
}
buildMain();
generateFooter();

const sashaCard = new MainCard(sashaInfo),
  kostyaCard = new MainCard(kostyaInfo),
  lizaCard = new MainCard(lizaInfo);

sashaCard.createCard();
kostyaCard.createCard();
lizaCard.createCard();

setAppearAnimation('.section__title');
setAppearAnimation('.section__underline');
setAppearAnimation('.about__wrapper');

const aboutCards = document.querySelectorAll('.about__card');
setSlideFromRightAnimation('#about__card', aboutCards[0]);
setSlideFromRightAnimation('#about-card-1', aboutCards[1], 0.2);
setSlideFromRightAnimation('#about-card-2', aboutCards[2], 0.4);

import './components/pages/user/user.css';
import './components/pages/register/register.css';
import { User } from './components/pages/user/user';
import { Register } from './components/pages/register/register';

const loginRegList: HTMLElement = document.querySelector('#login-reg-list')

const loginLink: HTMLElement = document.querySelector('.header__nav_link-login'),
  regLink: HTMLElement = document.querySelector('.header__nav_link-reg')

  loginRegList.addEventListener('click', (e) => {
    if(e.target === loginLink){

      const loginObject = new User('user'),
      loginRendered = loginObject.render();
      
      document.body.appendChild(loginRendered)
    }else if(e.target === regLink){
      const regObject = new Register('user'),
      regRendered = regObject.render();
      
      document.body.appendChild(regRendered)
    }
  })

import { AudioGame } from './components/pages/audiogame/audiogame';

const headerNavList = document.getElementById('header-nav-links')

const audiogameLink = document.getElementById('audiogame')

const moduleWrapper = document.getElementById('module-wrapper'),
  headerContent = document.querySelector('.header__content')

headerNavList.addEventListener('click', (e)=> {
  if(e.target === audiogameLink){
    headerContent.classList.add('element-animated-out')
    setTimeout(() => {
      headerContent.classList.add('element-disabled')
      headerContent.classList.remove('element-animated-out')
      disableMain()

      const audiogameObject = new AudioGame('audio__game'),
      audiogameRendered = audiogameObject.render();
      
      moduleWrapper.appendChild(audiogameRendered)

    }, 300);

  }
})

const headerLogo = document.querySelector('.header__nav_logo')

headerLogo.addEventListener('click', ()=>{
  if(headerContent.classList.contains('element-disabled') && document.querySelector('.main').classList.contains('element-disabled')){
    console.log('232332323');
    
    headerContent.classList.remove('element-disabled')
    enableMain()

    const audioGame = document.getElementById('audio__game')
    audioGame.remove()
  }
})


import './components/pages/sprint/sprint.scss';

import { Sprint } from './components/pages/sprint/sprint';

const sprintBlock = new Sprint('sprint')
moduleWrapper.append(sprintBlock.generateStartPage())