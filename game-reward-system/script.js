/* ========================================
   Game Reward System
   Purpose: Calculate coins earned and assign player rank
   ======================================== */

// Function to calculate player rewards
function calculatePlayerRewards(level, performanceScore, missionsCompleted) {
  
  // Rule 1: Calculate base coins
  // coins = (level * 50) + (performanceScore * 10)
  let coins = (level * 50) + (performanceScore * 10);
  
  // Rule 2: Double coins if all missions completed
  if (missionsCompleted === true) {
    coins *= 2;
    console.log(`✨ All missions completed: Coins doubled!`);
  }
  
  // Rule 3: Assign rank based on coins
  let rank = coins > 1000 ? "Elite" : "Regular";
  
  return {
    level: level,
    performanceScore: performanceScore,
    missionsCompleted: missionsCompleted,
    coins: coins,
    rank: rank
  };
}

// Test Case 1: Decent player without mission completion
console.log("\n========== GAME REWARD SYSTEM ==========\n");
console.log("--- Test Case 1: Regular Player (No Mission Bonus) ---");

let player1 = calculatePlayerRewards(5, 60, false);
console.log(`Level: ${player1.level}`);
console.log(`Performance Score: ${player1.performanceScore}`);
console.log(`Missions Completed: ${player1.missionsCompleted ? "✅" : "❌"}`);
console.log(`Base Coins Earned: ${(player1.level * 50) + (player1.performanceScore * 10)}`);
console.log(`Total Coins: ${player1.coins}`);
console.log(`Rank: ${player1.rank}`);

// Test Case 2: High level player with mission completion
console.log("\n--- Test Case 2: Elite Player (Mission Bonus) ---");

let player2 = calculatePlayerRewards(10, 80, true);
let baseCoinPlayer2 = (player2.level * 50) + (player2.performanceScore * 10);
console.log(`Level: ${player2.level}`);
console.log(`Performance Score: ${player2.performanceScore}`);
console.log(`Missions Completed: ${player2.missionsCompleted ? "✅" : "❌"}`);
console.log(`Base Coins Earned: ${baseCoinPlayer2}`);
console.log(`Coins After Doubling: ${player2.coins}`);
console.log(`Rank: 🌟 ${player2.rank}`);

// Test Case 3: Low level player with perfect performance
console.log("\n--- Test Case 3: Beginner with Perfect Score ---");

let player3 = calculatePlayerRewards(2, 100, true);
let baseCoinPlayer3 = (player3.level * 50) + (player3.performanceScore * 10);
console.log(`Level: ${player3.level}`);
console.log(`Performance Score: ${player3.performanceScore}`);
console.log(`Missions Completed: ${player3.missionsCompleted ? "✅" : "❌"}`);
console.log(`Base Coins Earned: ${baseCoinPlayer3}`);
console.log(`Coins After Doubling: ${player3.coins}`);
console.log(`Rank: ${player3.rank}`);

console.log("\n======================================\n");