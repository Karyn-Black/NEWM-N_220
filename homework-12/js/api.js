// https://digimon-api.vercel.app/api/digimon

function getDigimon() {
fetch("https://digimon-api.vercel.app/api/digimon").then(function (digiResp) {
    return digiResp,json ();
  });
  .then((digiData) => {
    console.log(digiData);
  })
  .catch(function (err) {
    console.warn(err);
  })
  .finally(() => {
    console.log("Fetch complete!");
    // Code to cleanup => do it here
  })};

const digiResp = await fetch ("https://digimon-api.vercel.app/api/digimon");

const digiData = await digiResp.json();

console.log(digiData);