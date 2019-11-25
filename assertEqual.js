const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌❌❌Assertion Failed: " + actual + " !== " + expected);
  }
};
assertEqual("Jump", "Jump");
assertEqual(1, 111);
assertEqual(53, -53);
