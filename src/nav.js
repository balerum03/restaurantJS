import logoImage from './logo'
const navBar = () => {

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

menuSpan.classList.add('navItem');
galerySpan.classList.add('navItem');
aboutSpan.classList.add('navItem');

logoDiv.classList.add('logoDiv')
navDiv.classList.add('nav');

return navDiv;
}
export default navBar;
