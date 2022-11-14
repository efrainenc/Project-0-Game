// create an object for my Tamagotchi
const tamagotchi = {
    petName: "Tamagotchi",
    Age: 0,
    Hunger: 0,
    Sleepiness: 0,
    Boredom: 0,
    isAlive: true,
    sleepTime: 0
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
    // Clear text box
    nameInput.value = '';
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
    if(metric === "hunger"){ // decreases Hunger
        tamagotchi.Hunger--;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
    }else if(metric === "sleepiness"){// decreases Hunger
        if(tamagotchi.Sleepiness > 0){
            tamagotchi.Sleepiness--;
            document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
        }
    }else if(metric === "boredom"){// decreases Hunger
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
    // turns button into toggle
    if(sleep.value==="ON" && tamagotchi.Sleepiness !== 0){
        sleep.value = "OFF";// toggle
        // decreases sleep every second
        tamagotchi.sleepTime = setInterval(decreaseMetric, 1000, "sleepiness");
        // Change button to wake up
        document.querySelector("#sleep").innerHTML = "Wake Up🌅";
        // changes to night time image
        document.body.style.backgroundImage = "url(https://i.imgur.com/3FA4btA.png)";
    }else if(sleep.value==="OFF" || tamagotchi.Sleepiness !== 0){
        sleep.value = "ON";// toggle
        // stop decrease when lights on
        clearInterval(tamagotchi.sleepTime);
        // change button back to sleep
        document.querySelector("#sleep").innerHTML = "Sleep💤";
        // changes back to day time image
        document.body.style.backgroundImage = "url(https://i.imgur.com/hWCRjKy.png)";
    }else if(tamagotchi.Sleepiness === 0){  // if not sleepy
        alert(`${tamagotchi.petName} is not sleepy`);
    }
});


// Decreases Boredom on button click
play.addEventListener("click", (event) => {
    event.preventDefault()
    if(tamagotchi.Boredom > 0){
        decreaseMetric("boredom");
    }else { // if boredom = 0
        alert(`${tamagotchi.petName} is not bored`)
    }
});


// Pet dies if Hunger, Boredom, or Sleepiness hits 10
function checkAlive(){
    if(tamagotchi.Hunger === 10 || tamagotchi.Sleepiness === 10 || tamagotchi.Boredom === 10){
        //tamagotchi dies
        tamagotchi.isAlive = false;
        //change to death image
        document.querySelector(".petImage").src ="https://prezigram-assets.prezicdn.net/96a0cf2fc8d665c6e127a5c4150cfcd059eae29c8359ddb251b3c408059f1dbdc71d3767d06899ef5e5fabad949d7e6d4c15148d31ca51d1c703fa81836fe0c1"
        // alert the player
        alert(`Your Tamagotchi "${tamagotchi.petName}" has passed away`);
        //stop increasing Metrics
        clearInterval(increaseHunger);
        clearInterval(increaseSleepy);
        clearInterval(increaseBoredom);
        clearInterval(increaseAge);
        // reset metrics
        tamagotchi.Age = 0;
        tamagotchi.Hunger = 0;
        tamagotchi.Sleepiness = 0;
        tamagotchi.Boredom = 0;
        // reset display
        document.querySelector(".petAge").textContent = `Age: ${tamagotchi.Age}`;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
        document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
        document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;
        reload();
    } 
}


//Function to Increase metrics
function increaseMetric(metric){
    if(metric === "hunger"){// increases Hunger
        tamagotchi.Hunger++;
        document.querySelector(".petHunger").textContent = `Hunger: ${tamagotchi.Hunger}`;
        console.log(tamagotchi.Hunger)
        checkAlive()
    }else if(metric === "sleepiness"){// increases Sleepiness
        tamagotchi.Sleepiness++;
        document.querySelector(".petSleepiness").textContent = `Sleepiness: ${tamagotchi.Sleepiness}`;
        console.log(tamagotchi.Sleepiness)
        checkAlive()
    }else if(metric === "boredom"){// increases Boredom
        tamagotchi.Boredom++;
        document.querySelector(".petBoredom").textContent = `Boredom: ${tamagotchi.Boredom}`;
        console.log(tamagotchi.Boredom)
        checkAlive()
    }else if(metric === "age"){// increases Age
        tamagotchi.Age++;
        document.querySelector(".petAge").textContent = `Age: ${tamagotchi.Age}`;
        console.log(tamagotchi.Age)
        checkAlive()
    }
}


// set Hunger(1-10) to increase every 2 minutes
let increaseHunger = setInterval(increaseMetric, 120000, "hunger");


// set Sleepiness(1-10) to increase every 5min lights arent off at night
// once asleep set time to day
let increaseSleepy = setInterval(increaseMetric, 300000, "sleepiness");


// set Boredom(1-10) to increase every 1.5 minutes you dont play with pet
let increaseBoredom = setInterval(increaseMetric, 90000, "boredom");


// set Age(Days) to increase 1 every 5 minutes
let increaseAge = setInterval(increaseMetric, 300000,"age");
