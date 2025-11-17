/* ========================================
   Weather Alert System
   Purpose: Check event safety and provide weather recommendations
   ======================================== */

// Function to evaluate event safety
function checkWeatherSafety(temperature, humidity, windSpeed) {
  let eventStatus = "";
  
  // Rule 1: Heat alert - temperature > 35°C AND humidity > 70%
  if (temperature > 35 && humidity > 70) {
    eventStatus = "❌ Cancel: Heat Alert";
  }
  // Rule 2: Cold/Windy alert - temperature < 10°C OR windSpeed > 40 km/h
  else if (temperature < 10 || windSpeed > 40) {
    eventStatus = "❌ Cancel: Cold/Windy Alert";
  }
  // Rule 3: Otherwise approved
  else {
    eventStatus = "✅ Event Approved";
  }
  
  return eventStatus;
}

// Function to provide temperature-based recommendation
function getTemperatureAdvice(temperature) {
  if (temperature < 20) {
    return "🧥 Recommendation: Wear Jacket";
  } else if (temperature >= 20 && temperature <= 30) {
    return "😊 Recommendation: Comfortable";
  } else {
    return "💧 Recommendation: Stay Hydrated";
  }
}

// Function to provide detailed weather analysis
function analyzeWeather(temperature, humidity, windSpeed) {
  let eventStatus = checkWeatherSafety(temperature, humidity, windSpeed);
  let temperatureAdvice = getTemperatureAdvice(temperature);
  
  return {
    temperature: temperature,
    humidity: humidity,
    windSpeed: windSpeed,
    eventStatus: eventStatus,
    temperatureAdvice: temperatureAdvice
  };
}

// Test Case 1: Hot and humid (Heat Alert)
console.log("\n========== WEATHER ALERT SYSTEM ==========\n");
console.log("--- Test Case 1: Hot & Humid Weather ---");

let weather1 = analyzeWeather(38, 75, 25);
console.log(`Temperature: ${weather1.temperature}°C`);
console.log(`Humidity: ${weather1.humidity}%`);
console.log(`Wind Speed: ${weather1.windSpeed} km/h`);
console.log(`Status: ${weather1.eventStatus}`);
console.log(`${weather1.temperatureAdvice}`);

// Test Case 2: Cold and windy (Cold/Windy Alert)
console.log("\n--- Test Case 2: Cold & Windy Weather ---");

let weather2 = analyzeWeather(5, 60, 45);
console.log(`Temperature: ${weather2.temperature}°C`);
console.log(`Humidity: ${weather2.humidity}%`);
console.log(`Wind Speed: ${weather2.windSpeed} km/h`);
console.log(`Status: ${weather2.eventStatus}`);
console.log(`${weather2.temperatureAdvice}`);

// Test Case 3: Ideal weather (Approved)
console.log("\n--- Test Case 3: Ideal Weather ---");

let weather3 = analyzeWeather(25, 50, 20);
console.log(`Temperature: ${weather3.temperature}°C`);
console.log(`Humidity: ${weather3.humidity}%`);
console.log(`Wind Speed: ${weather3.windSpeed} km/h`);
console.log(`Status: ${weather3.eventStatus}`);
console.log(`${weather3.temperatureAdvice}`);

// Test Case 4: Borderline condition (High humidity but temp ok)
console.log("\n--- Test Case 4: High Humidity but Moderate Temp ---");

let weather4 = analyzeWeather(32, 72, 30);
console.log(`Temperature: ${weather4.temperature}°C`);
console.log(`Humidity: ${weather4.humidity}%`);
console.log(`Wind Speed: ${weather4.windSpeed} km/h`);
console.log(`Status: ${weather4.eventStatus} (temp ≤35 but humidity > 70)`);
console.log(`${weather4.temperatureAdvice}`);

console.log("\n========================================\n");