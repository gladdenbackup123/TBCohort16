let assert = require('assert');

// Example 1: Simple assertion
const actual = 5;
const expected = 5;

// This will pass as both values are equal
assert.strictEqual(actual, expected, 'The actual value is not equal to the expected value');

// // Example 2: Asserting with an error message
// const user = { name: 'Alice', age: 25 };

// // This will pass since the 'name' property exists
// assert.ok(user.name, 'User should have a name');

// // Example 3: Failing assertion
// const result = [1, 2, 3];

// // This will throw an error because result.length is 3, not 4
// assert.strictEqual(result.length, 4, 'Array length should be 4');
