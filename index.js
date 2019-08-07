/**
 * This is a test function that sends a message to the console.
 */
exports.printMsg = function() {
  console.log('This is a message from the demo-test-package version 1.0.0');
};

/**
 * This function greets the user by name.
 * @param name who to say hello to
 */
exports.printGreeting = function(name) {
  console.log(`Hello there ${name}`);
};
