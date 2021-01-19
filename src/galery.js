import tacos1 from './images/tacos1.png';
import tacos2 from './images/tacos2.png';
import tacos3 from './images/tacos3.png';
import tacos4 from './images/tacos4.png';
import tacos5 from './images/aboutImage.png';

const galeryContent = () => {
  const content = document.getElementById('content');
  const mainGaleryDiv = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');

  const galeryItem1 = document.createElement('img');
  galeryItem1.src = tacos1;
  galeryItem1.alt = 'photo1';
  galeryItem1.classList.add('galeryImage');

  const galeryItem2 = document.createElement('img');
  galeryItem2.src = tacos2;
  galeryItem2.alt = 'photo 2';
  galeryItem2.classList.add('galeryImage');

  const galeryItem3 = document.createElement('img');
  galeryItem3.src = tacos3;
  galeryItem3.alt = 'photo 3';
  galeryItem3.classList.add('galeryImage');

  const galeryItem4 = document.createElement('img');
  galeryItem4.src = tacos4;
  galeryItem4.alt = 'photo 4';
  galeryItem4.classList.add('galeryImage');

  mainGaleryDiv.classList.add('mainGaleryDiv');

  div1.appendChild(galeryItem1);
  div1.appendChild(galeryItem2);
  div2.appendChild(galeryItem3);
  div2.appendChild(galeryItem4);
  mainGaleryDiv.appendChild(div1);
  mainGaleryDiv.appendChild(div2);
  content.appendChild(mainGaleryDiv);

  return mainGaleryDiv;
}

export default galeryContent;
