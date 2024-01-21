/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Kyei Ernest Nkansah';
const currentYear = new Date().getFullYear();
const profilePicture = "images/Ernest.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let favFoods = ['Beans', 'Rice with Stew', 'Fufuo with light soap'];
let newFavorite = 'Pizza';

favFoods.push(newFavorite); 
favFoods.shift(); 
favFoods.pop(); 
foodElement.innerHTML = favFoods.join('<br>');




