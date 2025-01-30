let tomatoManHealth = 100; // The health of Tomato Man

// Function to simulate a battle scenario
function battleScenario() {
    // Block variable - this variable is only accessible within the scope of this function
    let enemyDamage = 20; // The damage dealt by the enemy

    // Perform a mathematical operation: reducing Tomato Man's health by enemy damage
    tomatoManHealth -= enemyDamage; // Subtract enemy damage from Tomato Man's health

    // Log Tomato Man's remaining health to the console
    console.log("Tomato Man's health after enemy attack: " + tomatoManHealth);
}

let tomatoManName = "Tomato Man"; // The name of the character

// Log the name to the console
console.log("Welcome to the game! You are playing as: " + tomatoManName);

const tomatoManStats = {
    name: tomatoManName,
    health: tomatoManHealth,
    attackPower: 15, // The attack power of Tomato Man
    defend: function() {
        console.log(tomatoManName + " is defending!");
    }
};

// Log Tomato Man's stats to the console
console.log("Character Stats:", tomatoManStats);

// Call the battle scenario function to simulate an attack
battleScenario();

// Tomato Man uses defend ability
tomatoManStats.defend();