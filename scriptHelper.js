require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ''){
      return "Empty";
     } else if (isNaN(testInput) === false){
      return "Is a Number";
     } else if (isNaN(testInput) === true){
      return "Not a Number";
      };
  }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel){
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            let randoPlanet = pickPlanet(0,5);
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${json[randoPlanet].name}</li>
                        <li>Diameter: ${json[randoPlanet].diameter}</li>
                        <li>Star: ${json[randoPlanet].star}</li>
                        <li>Distance from Earth: ${json[randoPlanet].distance}</li>
                        <li>Number of Moons: ${json[randoPlanet].moons}</li>
                    </ol>
                    <img src="${json[randoPlanet].image}">`
            });
        });

    return planetsReturned;
}

function pickPlanet(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
