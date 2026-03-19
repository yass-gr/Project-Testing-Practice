# Project-Testing-Practice

A JavaScript testing practice project using Jest.

## Functions

### Caesar Cipher (`scripts/caesarCipher.js`)
Encrypts text using the Caesar cipher algorithm with support for:
- Uppercase and lowercase letters
- Negative shifts
- Wrapping (z -> a)
- Special characters preservation

### Analyze Array (`scripts/analyzeArray.js`)
Analyzes an array of numbers and returns an object with:
- `average`: Mean of all numbers
- `min`: Minimum value
- `max`: Maximum value
- `length`: Number of elements

### Calculator (`scripts/calculator.js`)
Basic calculator object with operations:
- `add(a, b)`
- `subtract(a, b)`
- `divide(a, b)`
- `multiply(a, b)`

## Running Tests

```bash
npm test
```

Run specific test files:
```bash
npm test -- <test-name>
```
