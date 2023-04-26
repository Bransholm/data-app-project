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
    <p class="character-name-headline">${characters.name}</p>
    <img src="${characters.image}" alt="The image of ${characters.name} isn't avaible" onerror="this.onerror=null; this.src='https://freesvg.org/img/north_park.png'"/><br>
    <p class="infotext">${characters.name} is a ${characters.gender} 
    that is ${characters.age} years old and the first appearance was 
    in ${characters.firstAppearance} and have so fare been seen in 
    ${characters.appearances} episodes</p>
    <button class="modal-button-open">See more details</button>
    </article>
    `
  );

  document
    .querySelector("#showCharacters2 article:last-child")
    .addEventListener("click", characterClicked);
  function characterClicked() {
    document.querySelector("dialog").showModal();
    document.querySelector("#dialog-name").textContent = characters.name;
    document.querySelector("#dialog-image").src = characters.image;
    document.querySelector("#dialog-name-normal").textContent = `Name: ${characters.name}`;
    document.querySelector("#dialog-gender").textContent = `Gender: ${characters.gender}`;
    document.querySelector("#dialog-age").textContent = `Age: ${characters.age}`;
    document.querySelector("#dialog-hair-color").textContent = `Hair color: ${characters.haircolor}`;
    document.querySelector("#dialog-nickname").textContent = `Nickname: ${characters.nickname}`
    document.querySelector("#dialog-occupation").textContent = `Occupation: ${characters.occupation}`;
    document.querySelector("#dialog-voicedBy").textContent = `Voiced by: ${characters.voicedBy}`;
    document.querySelector("#dialog-religion").textContent = `Religion: ${characters.religion}`;
    document.querySelector("#dialog-catchPhrase").textContent = `Catchphrase ${characters.catchPhrase}`;
    document.querySelector("#dialog-school-grade").textContent = `School grade: ${characters.schoolGrade}`;
    document.querySelector("#dialog-episodes").textContent = `Episodes: ${characters.episodes}`;
    document.querySelector("#dialog-appearances").textContent = `Appearances: ${characters.appearances}`;
    document.querySelector("#dialog-first-appearance").textContent = `First appearance: ${characters.firstAppearance}`;  
  }
}