// create an object for my Tamagotchi
const tamagotchi = {
    petName: "Tamagotchi",
    Age: 0,
    Hunger: 0,
    Sleepiness: 0,
    Boredom: 0,
    isAlive: true
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

// Add buttons to the screen to feed your pet, 
// turn off the lights, and play with your pet.

// Pet dies if Hunger, Boredom, or Sleepiness hits 10
// if(Hunger === 10 || Sleepiness === 10 || Boredom === 10){
//     //tamagotchi dies
// }


// set background to change on an interval to show time of day
// Day lasts 5 min, Night last 5 min

//Function to Increase metrics
function increaseMetric(metric){
    if(metric === Hunger){
        tamagotchi.Hunger++;
    }else if(metric === Sleepiness){
        tamagotchi.Sleepiness
    }else if(metric === Boredom){
        tamagotchi.Boredom++
    }else if(metric === Age){
        tamagotchi.Age++;
    }
}

// set Hunger(1-10) to increase every 2 minutes
setInterval(increaseMetric(Hunger), 120000)

// set Sleepiness(1-10) to increase every 5min lights arent off at night
// once asleep set time to day
setInterval(increaseMetric(Sleepiness), 300000)


// set Boredom(1-10) to increase every minute you dont play with pet
setInterval(increaseMetric(Boredom), 60000)

// set Age(Days) to increase 1 every 5 minutes
setInterval(increaseMetric(Age), 300000)
