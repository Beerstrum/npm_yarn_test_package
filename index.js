/**
 * This is a test function that sends a message to the console.
 */
exports.printMessage = function() {
  console.log('WARNING!  This function has been removed in version 3.');
  console.log('This is a message from the demo-test-package version 2.0.0 or higher.');
};

/**
 * This function greets the user by name.
 * @param name who to say hello to
 */
exports.printGreeting = function(name) {
  console.log(`Hello there ${name}!`);
};
