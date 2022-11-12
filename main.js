// create an object for my Tamagotchi
const tamagotchi = {
    petName: "Tamagotchi",
    Age: 0,
    Hunger: 0,
    Sleepiness: 0,
    Boredom: 0,
    isAlive: true
}
let iterations = 0; // keep track of Interval iterations

//Displaying stored metrics
document.querySelector(".petAge").textContent = `Age: ${tamagotchi.Age}`;
document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;

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

// Decrease Metrics function
function decreaseMetric(metric){
    if(metric === "hunger"){
        tamagotchi.Hunger--;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
    }else if(metric === "sleepiness"){
        tamagotchi.Sleepiness--;
        document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
    }else if(metric === "boredom"){
        tamagotchi.Boredom--;
        document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;
    }
}

// Decreases Hunger on button click
feed.addEventListener("click", (event) => {
    event.preventDefault()
    if(tamagotchi.Hunger > 0){
        decreaseMetric("hunger");
    }else {
        alert(`${tamagotchi.petName} is not hungry`)
    }

});

// Decreases sleepiness on button click (also turn off lights/change bg to visually indicate sleep)
sleep.addEventListener("click", (event) => {
    event.preventDefault();
    if(tamagotchi.Sleepiness > 0){
        decreaseMetric("sleepiness");
        // change to this when sleep
        document.body.style.backgroundImage = "url(https://i.imgur.com/3FA4btA.png)";
    }else {
        // change back when done sleeping
        document.body.style.backgroundImage = "url(https://i.imgur.com/hWCRjKy.png)";
        alert(`${tamagotchi.petName} is not sleepy`)
    }
});

// Decreases Boredom on button click (can also add animation to show pet playing)
play.addEventListener("click", (event) => {
    event.preventDefault()
    if(tamagotchi.Boredom > 0){
        decreaseMetric("boredom");
    }else {
        alert(`${tamagotchi.petName} is not bored`)
    }
});


// Pet dies if Hunger, Boredom, or Sleepiness hits 10
// if(Hunger === 10 || Sleepiness === 10 || Boredom === 10){
//     //tamagotchi dies
// }

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
setInterval(increaseMetric, 120000, "hunger")

// set Sleepiness(1-10) to increase every 5min lights arent off at night
// once asleep set time to day
setInterval(increaseMetric, 300000, "sleepiness")

// set Boredom(1-10) to increase every 1.5 minutes you dont play with pet
setInterval(increaseMetric, 90000, "boredom")

// set Age(Days) to increase 1 every 5 minutes
setInterval(increaseMetric, 300000,"age")
