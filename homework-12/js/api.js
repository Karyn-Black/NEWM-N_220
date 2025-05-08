// https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimonList");

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
