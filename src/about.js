import aboutImage from './images/aboutImage.png';

const aboutUs = () => {
  const content = document.getElementById('content');
  const aboutMainDiv = document.createElement('div');
  const aboutImgDiv = document.createElement('div');
  const aboutDiv = document.createElement('div');
  const aboutH1 = document.createElement('h1');
  const aboutText = document.createElement('p');

  const aboutImg = document.createElement('img');
  aboutImg.src = aboutImage;
  aboutImg.alt = 'about cover image.';
  aboutImg.classList.add('aboutImg');

  aboutH1.innerHTML = 'About Us';
  aboutText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  content.appendChild(aboutMainDiv);
  aboutDiv.appendChild(aboutH1);
  aboutDiv.appendChild(aboutText);
  aboutImgDiv.appendChild(aboutImg);
  aboutDiv.appendChild(aboutImgDiv);
  aboutMainDiv.appendChild(aboutDiv);
  aboutMainDiv.appendChild(aboutImg);
  aboutMainDiv.classList.add('aboutWhole');
  aboutDiv.classList.add('aboutText');
  aboutImg.classList.add('aboutImg');

  return aboutDiv;
};

export default aboutUs;
