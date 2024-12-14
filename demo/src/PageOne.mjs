// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;

// Named Export:
// You can have multiple named exports in a file.
// Must use the exact name while importing, or use as to rename.

// Default Export:
// You can have only one default export per file.
// The importing file can name it anything.