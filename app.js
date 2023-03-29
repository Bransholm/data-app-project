"use strict";
console.log("Hi Javascript");
window.addEventListener("load", startApp);

async function startApp() {
  const characters = await getCharacters(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  characters.forEach(addCharacters);
}

async function getCharacters(url) {
  const response = await fetch(url);
  const charactersData = await response.json();
  return charactersData;
}

function addCharacters(characters) {
  const listCharacters = document.querySelector("#characters");
  listCharacters.insertAdjacentHTML(
    "beforeend",
    `<li>${characters.name} <br /><img src="${characters.image}" alt="The image of ${characters.name} isn't avaible" /></li>`
  );
}
//onerror="this.onerror=null; this.src='https://sw6315.sfstatic.io/upload_dir/shop/Banan-Oppustelig.jpg'"
