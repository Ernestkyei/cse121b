/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Ernest Nkansah Kyei",
  photo: "images/Ernest.jpg",
  favoriteFoods: ['Banku and Tilapia', 'Fufu and Light Soup', 'Waakye','Jollof Rice'],
  hobbies: ['Sports', 'Gaming', 'Meditation','Travelling'],
  placesLived: [{place:'Ofankor', length:'16'}]
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: 'Pokuase',
  length: '1 year'  
});


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name + "'s photo");

/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});


/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedDL = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  placesLivedDL.appendChild(dt);
  placesLivedDL.appendChild(dd);
});
