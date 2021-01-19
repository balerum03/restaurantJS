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


  mainGaleryDiv.appendChild(div1);
  mainGaleryDiv.appendChild(div2);
  content.appendChild(mainGaleryDiv);

  return galeryDiv;
}

export default galeryContent;
