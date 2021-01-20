import logoImage from './logo';

const navBar = () => {
  const content = document.getElementById('content');
  const navDiv = document.createElement('div');
  const logoDiv = document.createElement('div');
  const menuSpan = document.createElement('span');
  const galerySpan = document.createElement('span');
  const aboutSpan = document.createElement('span');

  const menuText = document.createTextNode('Menu');
  const galeryText = document.createTextNode('Galery');
  const aboutText = document.createTextNode('About us');

  menuSpan.appendChild(menuText);
  galerySpan.appendChild(galeryText);
  aboutSpan.appendChild(aboutText);

  logoDiv.appendChild(logoImage());
  navDiv.appendChild(logoDiv);
  navDiv.appendChild(menuSpan);
  navDiv.appendChild(galerySpan);
  navDiv.appendChild(aboutSpan);
  content.appendChild(navDiv);

  menuSpan.setAttribute('id', 'menuSpan');
  galerySpan.setAttribute('id', 'galerySpan');
  aboutSpan.setAttribute('id', 'aboutSpan');

  menuSpan.classList.add('navItem');
  galerySpan.classList.add('navItem');
  aboutSpan.classList.add('navItem');

  logoDiv.classList.add('logoDiv');
  navDiv.classList.add('nav');

  menuSpan.onclick = () => {
    menuSpan.style.backgroundColor = '#F57C00';
    menuSpan.style.color = '#5D4037';
    galerySpan.style.backgroundColor = 'transparent';
    galerySpan.style.color = '#F57C00';
    aboutSpan.style.backgroundColor = 'transparent';
    aboutSpan.style.color = '#F57C00';
    const notHiden = document.getElementsByClassName('foodImages');
    notHiden[0].style.display = 'flex';
    const toHide1 = document.getElementsByClassName('mainTextDiv');
    toHide1[0].style.display = 'none';
    const toHide2 = document.getElementsByClassName('aboutWhole');
    toHide2[0].style.display = 'none';
    const toHide3 = document.getElementsByClassName('mainGaleryDiv');
    toHide3[0].style.display = 'none';
  };

  galerySpan.onclick = () => {
    galerySpan.style.backgroundColor = '#F57C00';
    galerySpan.style.color = '#5D4037';
    menuSpan.style.backgroundColor = 'transparent';
    menuSpan.style.color = '#F57C00';
    aboutSpan.style.backgroundColor = 'transparent';
    aboutSpan.style.color = '#F57C00';
    const notHiden = document.getElementsByClassName('mainGaleryDiv');
    notHiden[0].style.display = 'flex';
    const toHide1 = document.getElementsByClassName('mainTextDiv');
    toHide1[0].style.display = 'none';
    const toHide2 = document.getElementsByClassName('aboutWhole');
    toHide2[0].style.display = 'none';
    const toHide3 = document.getElementsByClassName('foodImages');
    toHide3[0].style.display = 'none';
  };

  aboutSpan.onclick = () => {
    aboutSpan.style.backgroundColor = '#F57C00';
    aboutSpan.style.color = '#5D4037';
    galerySpan.style.backgroundColor = 'transparent';
    galerySpan.style.color = '#F57C00';
    menuSpan.style.backgroundColor = 'transparent';
    menuSpan.style.color = '#F57C00';
    const notHiden = document.getElementsByClassName('aboutWhole');
    notHiden[0].style.display = 'flex';
    const toHide1 = document.getElementsByClassName('mainTextDiv');
    toHide1[0].style.display = 'none';
    const toHide2 = document.getElementsByClassName('foodImages');
    toHide2[0].style.display = 'none';
    const toHide3 = document.getElementsByClassName('mainGaleryDiv');
    toHide3[0].style.display = 'none';
  };

  return navDiv;
};
export default navBar;
