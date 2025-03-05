const contentStart = document.querySelector('#contentStart');

const monthly = document.createElement('div');
monthly.classList.add('monthly');

contentStart.appendChild(monthly);

const monthlyTxt = document.createElement('div');
monthlyTxt.classList.add('monthlyTxt');
monthly.appendChild(monthlyTxt);

const monthlyTxtHeading = document.createElement('h3');
monthlyTxtHeading.textContent = 'Monthly Cocktail name goes HERE';

const monthlyTxtDescription = document.createElement('p');
monthlyTxtDescription.textContent = 'Description of monthly cocktail testing. Place words HERE.';

monthlyTxt.appendChild(monthlyTxtHeading);
monthlyTxt.appendChild(monthlyTxtDescription);


const monthlyImg = document.createElement('div');
monthlyImg.classList.add('monthlyImg');
monthlyImg.textContent = 'image of monthly cocktail goes here all tasty looking';
monthly.appendChild(monthlyImg);
