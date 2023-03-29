"Use strict";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp: initApp.js is running");
  const harry = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  showCharacter(harry);

  const draco = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json"
  );
  showCharacter(draco);

  const ron = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json"
  );
  showCharacter(ron);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  console.log(character);

  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article>
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="" />
        </article>
`
  );
}
