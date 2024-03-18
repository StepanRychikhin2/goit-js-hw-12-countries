const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", findLock)

function findLock() {
  URLL =  `https://restcountries.com/v3.1/name/${input.value}` 
  return URLL;
}

const listkountri = document.querySelector(".kountri")
const URLL = `https://restcountries.com/v3.1/name/uk`

function fetchUsers(url) {
    
const data = fetch(url)
console.log(data)
return data;
}

fetchUsers(URLL).then((data) => data.json()).then((data) => createUserMapArt(data)).catch((error) => console.log(error))


function createUserMapArt(data) {
    console.log(data)
 const listMarkUp = data.map((user) => {
   const listElem = `
   <li >
   <img src="${user.flags.png}" alt="${user.type}">
   <p class="namelog">Назва:${user.name.common}</p>
   <p class="popuration">Популяція:${user.population}лудей</p>
   </li>`;
return listElem;
  })
  listkountri.innerHTML = listMarkUp;
   
  
}




