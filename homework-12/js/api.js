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

  // img.onclick = likePlanet;
  // const planetIsLiked = JSON.parse(
  //   localStorage.getItem(currentPlanet.name));
  // if(planetIsLiked) {likeClass = "like";}

  try {
    const digiResp = await fetch("https://digimon-api.vercel.app/api/digimon");

    const digiData = await digiResp.json();

    digimonListRef.innerHTML = "";

    for (let i = 0; i < digiData.length; i++) {
      const currentDigimon = digiData[i];
      const digimonIsLiked = JSON.parse(
        localStorage.getItem(currentDigimon.name)) || false;

        console.log("Yes, this Digimon is Liked", digimonIsLiked);

      let likeClass = "";  

      if(digimonIsLiked) {
        likeClass = "like";
      }
      
        const newCard = document.createElement("div");
      newCard.classList.add("digimon-card");
      newCard.innerHTML += `
        <img src="${currentDigimon.img}" alt="${currentDigimon.name}"/>
        <h4>${currentDigimon.name}</h4>
        <button class="${likeClass}">&hearts;</button>
      `;

      newCard.dataset.name = currentDigimon.name;
      newCard.onclick = likeDigimon;

      digimonListRef.appendChild(newCard);

      // <div class="digimon-card">
      // </div>;
    }
  } catch (err) {
    console.warn(err);
  }

  console.log("End of function");
}

function likeDigimon(e) {
  const digimonName = e.currentTarget.dataset.name;

  console.log(digimonName);

  //   localStorage.setItem(digimonName.JSON.stringify(true));

  // Local Storage stores our data as a key value pair
  // localStorage.setItem("key", value);

  // 1. Store all liked digimon as an array
  // likedDigimon = ["Koromon", "Tsunomon"]

  // 2. Each digimon is a key
  // localStorage.getItem("Koromon"); // OUTPUT: "true"
  // localStorage.setItem("Koromon", JSON.stringify(true)) // OUTPUT: "true"

  const isDigimonLiked = JSON.parse(localStorage.getItem(digimonName));

  if(isDigimonLiked) {
    localStorage.removeItem(digimonName);
  } else {
    localStorage.setItem(digimonName, JSON.stringify(true));
  }

  getDigimon();
}

getDigimon();
