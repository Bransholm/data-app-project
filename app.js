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
  const listCharacters = document.querySelector(".showCharacters");
  listCharacters.insertAdjacentHTML(
    "beforeend",
    `
    <article class="grabcharacters" align="center">
    ${characters.name}<br>
    <img src="${characters.image}" alt="The image of ${characters.name} isn't avaible" onerror="this.onerror=null; this.src='https://freesvg.org/img/north_park.png'"/><br>
    <p class="infotext">${characters.name} frerfre erf errffrref refrfrferf rferfefr  frerfeferfer ferfreerffrer ferfrefrer erfferferf</p>
    </article>
    `
  );

  document
    .querySelector("#showCharacters2 article:last-child")
    .addEventListener("click", characterClicked);
  function characterClicked() {
    document.querySelector("dialog").showModal();
    document.querySelector("#dialogimage").src = characters.image;
    document.querySelector("#dialogname").textContent = characters.name;
    console.log("Her er vi");
  }
}
//onerror="this.onerror=null; this.src='https://sw6315.sfstatic.io/upload_dir/shop/Banan-Oppustelig.jpg'"
