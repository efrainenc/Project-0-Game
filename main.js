// create an object for my Tamagotchi
const tamagotchi = {
    petName: "Tamagotchi",
    Age: 0,
    Hunger: 0,
    Sleepiness: 0,
    Boredom: 0,
}

// Change Pet name
const form = document.querySelector("#nameForm")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // take name input
    let nameInput = document.querySelector(".newName");
    // store name input
    tamagotchi.petName = nameInput.value;
     // show new name
    document.querySelector(".petName").textContent = `Name: ${tamagotchi.petName}`;
});


// set background to change on an interval to show time of day

// Add buttons to the screen to feed your pet, 
// turn off the lights, and play with your pet.
// If Hunger, Boredom, or Sleepiness hits 10 pet dies


// set Hunger(1-10) to increase every 2 minutes


// set Sleepiness(1-10) to increase every 30sec lights arent off at night
// once asleep set time to day


// set Boredom(1-10) to increase every minute you dont play with pet


// set Age(Days) to increase .5 every 2.5 minutes
