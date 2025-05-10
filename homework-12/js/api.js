// https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimon-list");

async function getDigimon() {
  // fetch("https://digimon-api.vercel.app/api/digimon")
  //   .then(function (digiResp) {
  //     console.log(digiResp);
  //     return digiResp.json();
  //   })
  //   .then((digiData) => {
  //     console.log(digiData);
  //   })
  //   .catch(function (err) {
  //     console.warn(err);
  //   })
  //   .finally(() => {
  //     console.log("Fetch complete!");
  //     // Code to cleanup => do it here
  //   });

  // newCard.dataset.name = currentDigimon.name;
  // newCard.onclick = likeDigimon;

  try {
    const digiResp = await fetch("https://digimon-api.vercel.app/api/digimon");

    const digiData = await digiResp.json();

    digimonListRef.innerHTML = "";

    for (let i = 0; i < digiData.length; i++) {
      const currentDigimon = digiData[i];

      const newCard = document.createElement("div");
      newCard.classList.add("digimon-card");
      newCard.innerHTML += `
        <img src="${currentDigimon.img}" alt="${currentDigimon.name}"/>
        <h4>${currentDigimon.name}</h4>
        <button class="">&hearts;</button>
      `;

      digimonListRef.appendChild(newCard);

      // <div class="digimon-card">
      // </div>;
    }
  } catch (err) {
    console.warn(err);
  }

  console.log("End of function");
}

// function likeDigimon() {
//   const digimonName = e.currentTarget.dataset.name;
//   console.log(digimonName);
//   localStorage.setItem(digimonName.JSON.stringify(true));
// }

getDigimon();
