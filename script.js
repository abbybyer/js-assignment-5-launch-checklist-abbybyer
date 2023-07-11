// Write your JavaScript code here!

//displays the Mission Destination
window.addEventListener("load", function() {

   let listedPlanets;
   //i don't understand what listedPlanets is supposed to be doing here? Also in line 8 & 9 how can you have a parameter that will never have an argument? Like, what is result supposed to be? Where am I supposed to get it from? 
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

// validates all fields are filled in
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === ''){
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});

// Validated fields are correct type of input (number vs string)
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotNameValid = document.querySelector("input[name=pilotName]");
        let copilotNameValid = document.querySelector("input[name=copilotName]");
        let fuelLevelValid = document.querySelector("input[name=fuelLevel]");
        let cargoMassValid = document.querySelector("input[name=cargoMass]");
        const stringArray = [pilotNameValid.value, copilotNameValid.value];
        const numberArray = [fuelLevelValid.value, cargoMassValid.value];

        for(i=0; i <= stringArray.length; i++){
            if(!isNaN(stringArray[i])){
                alert(stringArray[i] + " must be a name");
                event.preventDefault();
            } 
        }   
        
        for(i=0; i < numberArray.length; i++){
            if(isNaN(numberArray[i])){
                alert(numberArray[i] + " must be a number");
                event.preventDefault();
            } 
        }  
    });
});

// Adds entered information into "Awaiting Information Before Launch" section 
function displayInfo() {
        document.getElementById("faultyItems").style.visibility = "visible";
        
        let pilotStatus = document.getElementById("pilotStatus");
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`

        let copilotStatus = document.getElementById("copilotStatus");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        copilotStatus.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch.`

        let fuelStatus = document.getElementById("fuelStatus");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        if(fuelLevelInput.value < 10000){
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            return false;
        };

        let cargoStatus = document.getElementById("cargoStatus");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if(cargoMassInput.value > 10000){
            cargoStatus.innerHTML = 'Cargo mass too high for launch';
            return false;
        }
    }

// Change Launch Status to ready(green) or not ready(red)
window.addEventListener("submit", function(event) {
    displayInfo();
    let launchStatus = document.getElementById("launchStatus");
    if(displayInfo() === false){
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
    }else{
        launchStatus.innerHTML = `Shuttle ready for launch!`;
        launchStatus.style.color = "green";
    }
    event.preventDefault();
});