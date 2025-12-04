"use strict";
// Q1 – Dynamic Data Parser
// Converts mixed API data into Number, Boolean, and String forms.
// Skips invalid numeric entries (NaN, blank strings, non-numeric like "100px").

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumberEntries = [];

// Helper: tests whether a string represents a plain numeric literal
function isNumericString(s) {
  // Accept integers and floats, optionally with leading +/-, but no trailing characters
  return typeof s === 'string' && /^[-+]?\d+(?:\.\d+)?$/.test(s.trim());
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // Convert forms
  const asString = String(raw);
  const asBoolean = Boolean(raw);
  const asNumber = Number(raw);

  // Determine whether to treat the number as valid
  // We treat blank strings and non-pure-numeric strings as invalid numbers
  const isBlankString = typeof raw === 'string' && raw.trim() === '';
  const numericOk = (typeof raw === 'number' && isFinite(raw)) || isNumericString(raw) || raw === null;

  if (numericOk && !Number.isNaN(asNumber)) {
    // null -> Number(null) === 0, accepted here as numeric
    validNumbers.push({ index: i, raw, asNumber, asBoolean, asString });
  } else {
    invalidNumberEntries.push({ index: i, raw, asNumber, asBoolean, asString, reason: isBlankString ? 'blank string' : 'non-numeric/NaN' });
  }
}

// Detailed report
console.log('--- Q1 Dynamic Data Parser Report ---');
console.log('Input:', apiData);
console.log('\nValid numeric conversions:');
for (const item of validNumbers) {
  console.log(`- [${item.index}] raw:`, item.raw, '| Number:', item.asNumber, '| Boolean:', item.asBoolean, '| String:', `'${item.asString}'`);
}

console.log('\nInvalid numeric entries (skipped for numeric array):');
for (const bad of invalidNumberEntries) {
  console.log(`- [${bad.index}] raw:`, bad.raw, '| asNumber:', bad.asNumber, '| reason:', bad.reason);
}

console.log('\nSummary:');
console.log('- Total items processed:', apiData.length);
console.log('- Valid numeric count:', validNumbers.length);
console.log('- Invalid numeric count:', invalidNumberEntries.length);
console.log('--- End Q1 Report ---\n');

// Notes:
// - We explicitly detect blank strings as invalid even though Number(' ') === 0.
// - "100px" and non-numeric strings will yield Number -> NaN and be logged as invalid.
// - All output is via console.log so it is easy to inspect in terminal or debugger.
