import tacos1 from './images/tacos1.png';
import tacos2 from './images/tacos2.png';
import tacos3 from './images/tacos3.png';
import tacos4 from './images/tacos4.png';

const foodMenu = () => {

  const content = document.getElementById('content');
  const itemsDiv = document.createElement('div');
  content.appendChild(itemsDiv);

  const menuItem1 = document.createElement('img');
  menuItem1.src = tacos1;
  menuItem1.alt = 'Chorizo';
  menuItem1.classList.add('menuImage');

  const menuItem2 = document.createElement('img');
  menuItem2.src = tacos2;
  menuItem2.alt = 'Asada';
  menuItem2.classList.add('menuImage');

  const menuItem3 = document.createElement('img');
  menuItem3.src = tacos3;
  menuItem3.alt = 'Birria';
  menuItem3.classList.add('menuImage');

  const menuItem4 = document.createElement('img');
  menuItem4.src = tacos4;
  menuItem4.alt = 'cabeza';
  menuItem4.classList.add('menuImage');

  itemsDiv.classList.add('foodImages');

  itemsDiv.appendChild(menuItem1);
  itemsDiv.appendChild(menuItem2);
  itemsDiv.appendChild(menuItem3);
  itemsDiv.appendChild(menuItem4);

  return itemsDiv;
}

export default foodMenu;
