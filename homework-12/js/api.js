// https://digimon-api.vercel.app/api/digimon

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

  try {
    const digiResp = await fetch("https://digimon-api.vercel.app/api/digimons");

    const digiData = await digiResp.json();

    console.log(digiData);

    console.log("End of function");
  } catch (err) {
    console.warn(err);
  }
}

getDigimon();
