/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    const templesElement = document.querySelector("#temples");
    const ul = document.createElement("ul");
    temples.forEach(temple =>{
        const li = document.createElement("li");
        li.innerHTML = temple.templeName;
        ul.appendChild(li)
    });
    templesElement.appendChild(ul);
}


/* async getTemples Function using fetch()*/


 async function getTemples(){
    const url ="https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const respone =  await  fetch(url);
    templesList = await respone.json()
    displayTemples(templesList)
}

/* reset Function */





/* filterTemples Function */

  

  

getTemples();

/* Event Listener */
