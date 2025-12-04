/* ========================================
   Q7. CUSTOMER FEEDBACK PROCESSOR
   
   Demonstrates string analysis methods:
   includes(), split() for sentiment analysis.
   ======================================== */

console.log("=== Q7: CUSTOMER FEEDBACK PROCESSOR ===\n");

// ===== TEST FEEDBACK SAMPLES =====
const feedbackSamples = [
  "Great product! Fast delivery and amazing sound quality!",
  "This product is bad and the delivery was poor.",
  "Good value for money. Excellent customer service!",
  "Terrible experience. Product broke after one day.",
  "Absolutely amazing! Love it!",
  "Poor quality, bad packaging, and slow delivery.",
  "Outstanding! Highly recommend to everyone."
];

console.log("═══════════════════════════════════════════════════\n");

// ===== PROCESS EACH FEEDBACK =====
feedbackSamples.forEach((feedback, index) => {
  console.log(`Feedback #${index + 1}:`);
  console.log(`"${feedback}"\n`);
  
  processFeedback(feedback);
  console.log("───────────────────────────────────────────────────\n");
});

/**
 * Process customer feedback for sentiment and content
 * @param {string} feedback - The feedback text to analyze
 */
function processFeedback(feedback) {
  // ===== ANALYSIS 1: WORD COUNT =====
  // Split by spaces and filter empty strings
  const words = feedback.split(" ").filter(word => word.length > 0);
  const wordCount = words.length;
  
  console.log(`📝 Word Count: ${wordCount} words`);
  console.log(`   Words: [${words.join(", ")}]\n`);
  
  // ===== ANALYSIS 2: CHECK FOR NEGATIVE WORDS =====
  // Convert to lowercase for case-insensitive search
  const lowerFeedback = feedback.toLowerCase();
  
  const hasBad = lowerFeedback.includes("bad");
  const hasPoor = lowerFeedback.includes("poor");
  const hasNegative = hasBad || hasPoor;
  
  console.log(`🔍 Sentiment Check:`);
  console.log(`   Contains "bad": ${hasBad}`);
  console.log(`   Contains "poor": ${hasPoor}`);
  console.log(`   Has negative words: ${hasNegative}\n`);
  
  // ===== ANALYSIS 3: SENTIMENT DETERMINATION =====
  let sentiment;
  let emoji;
  
  if (hasNegative) {
    sentiment = "Needs Improvement";
    emoji = "❌";
  } else {
    sentiment = "Positive Feedback";
    emoji = "✅";
  }
  
  console.log(`${emoji} Result: ${sentiment}`);
  console.log(`   Status: Feedback is ${sentiment.toLowerCase()}\n`);
  
  // ===== ADDITIONAL METRICS =====
  console.log(`📊 Additional Metrics:`);
  console.log(`   Character Count: ${feedback.length}`);
  console.log(`   Exclamation Marks: ${(feedback.match(/!/g) || []).length}`);
  console.log(`   Question Marks: ${(feedback.match(/\?/g) || []).length}\n`);
}

// ===== DETAILED EXAMPLE =====
console.log("═══════════════════════════════════════════════════");
console.log("DETAILED EXAMPLE");
console.log("═══════════════════════════════════════════════════\n");

const sampleFeedback = "Great product! Fast delivery and amazing sound quality!";

console.log(`Original Feedback:\n"${sampleFeedback}"\n`);

// Step-by-step breakdown
console.log("STEP-BY-STEP ANALYSIS:\n");

// Step 1: Split into words
const splitWords = sampleFeedback.split(" ");
console.log(`1. Split by spaces (split(" ")):`);
console.log(`   Result: [${splitWords.join(", ")}]`);
console.log(`   Total words: ${splitWords.length}\n`);

// Step 2: Check for negative words
console.log(`2. Check for negative words (includes("bad"), includes("poor")):`);
const checkBad = sampleFeedback.toLowerCase().includes("bad");
const checkPoor = sampleFeedback.toLowerCase().includes("poor");
console.log(`   Contains "bad": ${checkBad}`);
console.log(`   Contains "poor": ${checkPoor}`);
console.log(`   Result: No negative words found\n`);

// Step 3: Determine sentiment
console.log(`3. Determine Sentiment:`);
console.log(`   If NO negative words → "Positive Feedback" ✅`);
console.log(`   If negative words → "Needs Improvement" ❌\n`);

// Step 4: Final output
console.log(`4. Final Output:`);
console.log(`   Sentiment: ✅ Positive Feedback\n`);

// ===== BATCH PROCESSING FUNCTION =====
console.log("═══════════════════════════════════════════════════");
console.log("BATCH PROCESSING SUMMARY");
console.log("═══════════════════════════════════════════════════\n");

function analyzeBatch(feedbacks) {
  let positiveCount = 0;
  let negativeCount = 0;
  const results = [];
  
  feedbacks.forEach((feedback) => {
    const lower = feedback.toLowerCase();
    const hasNegative = lower.includes("bad") || lower.includes("poor");
    
    if (!hasNegative) {
      positiveCount++;
      results.push({
        text: feedback.substring(0, 50) + "...",
        sentiment: "✅ Positive"
      });
    } else {
      negativeCount++;
      results.push({
        text: feedback.substring(0, 50) + "...",
        sentiment: "❌ Needs Improvement"
      });
    }
  });
  
  return {
    total: feedbacks.length,
    positive: positiveCount,
    negative: negativeCount,
    results: results
  };
}

// Process all samples
const summary = analyzeBatch(feedbackSamples);

console.log(`Total Feedbacks: ${summary.total}`);
console.log(`✅ Positive: ${summary.positive}`);
console.log(`❌ Needs Improvement: ${summary.negative}`);
console.log(`Satisfaction Rate: ${((summary.positive / summary.total) * 100).toFixed(1)}%\n`);

console.log("Detailed Results:");
console.log("────────────────────────────────────────────────────────");
summary.results.forEach((result, i) => {
  console.log(`${i + 1}. ${result.sentiment}`);
  console.log(`   "${result.text}"`);
});

// ===== KEY METHODS USED =====
console.log("\n═══════════════════════════════════════════════════");
console.log("KEY STRING METHODS USED");
console.log("═══════════════════════════════════════════════════\n");

console.log("1. split(separator):");
console.log("   - Splits string into array");
console.log("   - Example: 'hello world'.split(' ') → ['hello', 'world']\n");

console.log("2. includes(searchString):");
console.log("   - Checks if string contains substring");
console.log("   - Returns boolean (true/false)");
console.log("   - Example: 'hello'.includes('ell') → true\n");

console.log("3. toLowerCase():");
console.log("   - Converts to lowercase");
console.log("   - Useful for case-insensitive comparisons");
console.log("   - Example: 'HELLO'.toLowerCase() → 'hello'\n");

console.log("4. length:");
console.log("   - Returns character count");
console.log("   - Example: 'hello'.length → 5\n");
