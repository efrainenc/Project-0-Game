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
const feed = document.querySelector("#feed");
const sleep = document.querySelector("#sleep");
const play = document.querySelector("#play");

feed.addEventListener("click", (event) => {
    event.preventDefault()
    if(tamagotchi.Hunger > 0){
        tamagotchi.Hunger--;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
    }

});

sleep.addEventListener("click", (event) => {
    event.preventDefault();
    if(tamagotchi.Sleepiness > 0){
        tamagotchi.Sleepiness--;
        document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
    }
});

play.addEventListener("click", (event) => {
    event.preventDefault()
    if(tamagotchi.Boredom > 0){
        tamagotchi.Boredom--;
    document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;
    }
});


// Pet dies if Hunger, Boredom, or Sleepiness hits 10
// if(Hunger === 10 || Sleepiness === 10 || Boredom === 10){
//     //tamagotchi dies
// }


// set background to change on an interval to show time of day
// Day lasts 5 min, Night last 5 min

//Function to Increase metrics
function increaseMetric(metric){
    if(metric === "hunger"){
        tamagotchi.Hunger++;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
        console.log(tamagotchi.Hunger)
    }else if(metric === "sleepiness"){
        tamagotchi.Sleepiness++;
        document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
        console.log(tamagotchi.Sleepiness)
    }else if(metric === "boredom"){
        tamagotchi.Boredom++;
        document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;
        console.log(tamagotchi.Boredom)
    }else if(metric === "age"){
        tamagotchi.Age++;
        document.querySelector(".petAge").textContent = `Age: ${tamagotchi.Age}`;
        console.log(tamagotchi.Age)
    }
}

// set Hunger(1-10) to increase every 2 minutes
setInterval(increaseMetric("hunger"), 2000)

// set Sleepiness(1-10) to increase every 5min lights arent off at night
// once asleep set time to day
setInterval(increaseMetric("sleepiness"), 1000)

// set Boredom(1-10) to increase every minute you dont play with pet
setInterval(increaseMetric("boredom"), 5000)

// set Age(Days) to increase 1 every 5 minutes
setInterval(increaseMetric("age"), 10000)
