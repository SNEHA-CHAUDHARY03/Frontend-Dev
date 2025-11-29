/*
 Q5 - Boolean Logic Access System
 Requirements:
 - Variables: isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside
 - Access granted only if alarm is on AND door && window closed AND owner inside
 - Print "Secure" or "Unsafe"
 - Test multiple outcomes
*/

console.log('\n=== Q5 - Boolean Logic Access System ===\n');

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Access is granted only when all conditions satisfied
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  console.log('Conditions:' +
    ` alarm=${isAlarmOn}, doorLocked=${isDoorLocked}, windowClosed=${isWindowClosed}, ownerInside=${isOwnerInside}`);

  if (secure) {
    console.log('Status: ✅ Secure');
  } else {
    console.log('Status: ⚠️ Unsafe');
  }
  console.log('');
  return secure;
}

// Tests
checkSecurity(true, true, true, true);   // Secure
checkSecurity(true, false, true, true);  // Unsafe (window open)
checkSecurity(true, true, false, true);  // Unsafe (alarm off)
checkSecurity(false, true, true, false); // Unsafe (door open & owner outside)

console.log('=== End Q5 ===\n');