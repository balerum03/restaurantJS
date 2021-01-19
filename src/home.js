import navBar from './nav';
const homePage = () => {
  const headDiv = document.createElement('div');
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');
  const mainPageH1 = document.createElement('h1');
  const textEx = document.createElement('p');
  const mainTextDiv = document.createElement('div');

  textEx.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  mainPageH1.innerHTML = "Welcome to my restaurant";
  mainTextDiv.appendChild(mainPageH1);
  mainTextDiv.appendChild(textEx);
  mainTextDiv.classList.add('mainTextDiv');
  headDiv.appendChild(navBar());
  content.appendChild(homeDiv);
  homeDiv.appendChild(headDiv);
  homeDiv.appendChild(mainTextDiv);

  textEx.classList.add('textIn');
  return content;
};

export default homePage;
