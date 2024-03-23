let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let listkountri = document.querySelector(".kountri");
btn.addEventListener("click", findLock);

function findLock() {
  let cou8ntruName = input.value;
  let myURL = `https://restcountries.com/v3.1/name/${cou8ntruName}`;
  console.log(myURL);
  fetch(myURL)
.then((data) => data.json())
.then((data) => {
      const listMarkUp = data.map((data) => {
        console.log(data);
        const listElem = `
  <div class="conteiner2">
   <img src="${data.flags.svg}" class="flagImg">
        <h2>${data.name.common}</h2>
        <div class="conteiner">
            <div class="data-conteiner">
                <h4>заходиться на континенті:</h4>
                <span>${data.continents}</span>
            </div>
        </div>
         <div class="conteiner">
            <div class="data-conteiner">
                <h4>Людей:</h4>
                <span>${data.population}</span>
            </div>
        </div>
        </div>
         <div class="conteiner">
            <div class="data-conteiner">
                <h4>МОва:</h4>
                <span>${data.languages[Object.keys(data.languages)]}
                  </span>
            </div>
        </div>
  </div>
      `;
        return listElem;
      });
      listkountri.innerHTML = listMarkUp;
      })
      .catch(() => {
        if (cou8ntruName == 0) {
          alert("Введіть коктне значеня")
        } else {
          alert("Введіть коктне значеня 22")
        }
     
    });
   
}
