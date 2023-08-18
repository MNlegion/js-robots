var playerName = window.prompt("What is your fighter's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Optimus";
var enemyHealth = 40;
var enemyAttack = 8;

var fight = function () {
  window.alert("Welcome to the Arena!");

  // Player Attack Enemy
  enemyHealth = enemyHealth - playerAttack;

  console.log(
    playerName +
      " attacked " +
      enemyName +
      "! " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  // Check Enemy Health is > 0
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " has " + enemyHealth + " health remaining!");
  }

  // Enemy Attack Player
  playerHealth = playerHealth - enemyAttack;

  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

fight();
