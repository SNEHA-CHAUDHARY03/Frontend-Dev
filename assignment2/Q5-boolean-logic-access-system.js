/* ========================================
   Q5. BOOLEAN LOGIC ACCESS SYSTEM
   
   Demonstrates boolean operators: &&, ||, !
   for smart home security system logic.
   ======================================== */

console.log("=== Q5: BOOLEAN LOGIC ACCESS SYSTEM ===\n");

/**
 * Check home security status
 * @param {boolean} isDoorLocked - Door lock status
 * @param {boolean} isWindowClosed - Window status
 * @param {boolean} isAlarmOn - Alarm status
 * @param {boolean} isOwnerInside - Owner presence
 */
function checkSecurityStatus(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  console.log("--- SECURITY CHECK ---");
  console.log(`Door Locked: ${isDoorLocked}`);
  console.log(`Window Closed: ${isWindowClosed}`);
  console.log(`Alarm On: ${isAlarmOn}`);
  console.log(`Owner Inside: ${isOwnerInside}\n`);
  
  // Security condition: ALL must be true
  // Alarm ON AND Door locked AND Window closed AND Owner inside
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  
  // Alternative check using NOT operator
  const hasVulnerability = !(isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside);
  
  if (isSecure) {
    console.log("✓ Status: SECURE - All conditions met\n");
  } else {
    console.log("✗ Status: UNSAFE - Security breach detected\n");
    
    // Show which condition failed
    if (!isAlarmOn) console.log("⚠ Alert: Alarm is OFF");
    if (!isDoorLocked) console.log("⚠ Alert: Door is UNLOCKED");
    if (!isWindowClosed) console.log("⚠ Alert: Window is OPEN");
    if (!isOwnerInside) console.log("⚠ Alert: Owner is OUTSIDE");
    console.log();
  }
  
  return isSecure;
}

// ===== TEST CASE 1: ALL CONDITIONS TRUE (SECURE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 1: All Conditions Met");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(true, true, true, true);

// ===== TEST CASE 2: ALARM OFF (UNSAFE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 2: Alarm Off");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(true, true, false, true);

// ===== TEST CASE 3: DOOR UNLOCKED (UNSAFE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 3: Door Unlocked");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(false, true, true, true);

// ===== TEST CASE 4: WINDOW OPEN (UNSAFE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 4: Window Open");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(true, false, true, true);

// ===== TEST CASE 5: OWNER OUTSIDE (UNSAFE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 5: Owner Outside");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(true, true, true, false);

// ===== TEST CASE 6: MULTIPLE FAILURES (UNSAFE) =====
console.log("═══════════════════════════════════");
console.log("TEST CASE 6: Multiple Failures");
console.log("═══════════════════════════════════\n");
checkSecurityStatus(false, false, true, true);

// ===== BOOLEAN LOGIC EXPLANATION =====
console.log("═══════════════════════════════════");
console.log("BOOLEAN LOGIC EXPLANATION");
console.log("═══════════════════════════════════\n");

console.log("AND Operator (&&):");
console.log("  true && true = true");
console.log("  true && false = false");
console.log("  false && false = false");
console.log("  (ALL must be true)\n");

console.log("OR Operator (||):");
console.log("  true || false = true");
console.log("  false || false = false");
console.log("  (AT LEAST ONE must be true)\n");

console.log("NOT Operator (!):");
console.log("  !true = false");
console.log("  !false = true");
console.log("  (Reverses the value)\n");

// ===== SECURITY FORMULA =====
console.log("═══════════════════════════════════");
console.log("SECURITY FORMULA");
console.log("═══════════════════════════════════\n");

console.log("isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside");
console.log("\nFor home to be SECURE:");
console.log("✓ Alarm MUST be ON");
console.log("✓ Door MUST be LOCKED");
console.log("✓ Window MUST be CLOSED");
console.log("✓ Owner MUST be INSIDE");
console.log("\nIf ANY of these is false → Home is UNSAFE");

// ===== TRUTH TABLE =====
console.log("\n═══════════════════════════════════");
console.log("SIMPLIFIED TRUTH TABLE");
console.log("═══════════════════════════════════\n");

const scenarios = [
  { alarm: true, door: true, window: true, owner: true },
  { alarm: true, door: true, window: true, owner: false },
  { alarm: true, door: false, window: true, owner: true },
  { alarm: false, door: true, window: true, owner: true },
];

scenarios.forEach((scenario, index) => {
  const result = scenario.alarm && scenario.door && scenario.window && scenario.owner;
  console.log(`Scenario ${index + 1}: ${result ? "✓ SECURE" : "✗ UNSAFE"}`);
});
