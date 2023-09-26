# ES6 (ECMAScript 2015) Basics

ES6, also known as ECMAScript 2015, is a significant update to the JavaScript language, introducing numerous new features and improvements. This repository provides an introduction to the basics of ES6 and its key features.

## What is ES6?

ECMAScript 6 (ES6), commonly referred to as ES6 or ES2015, is the sixth major version of the JavaScript programming language. It was standardized by the Ecma International in 2015. ES6 introduced several new language features and syntactical enhancements that make JavaScript more powerful and expressive for modern web development.

## New Features Introduced in ES6

ES6 brought a wealth of new features and improvements to JavaScript, including:

1. **Arrow Functions**: A concise syntax for defining functions.
2. **Let and Const**: Variables with block-level scope.
3. **Template Literals**: Enhanced string interpolation.
4. **Classes**: A more structured way to define objects and constructors.
5. **Destructuring**: Extraction of values from objects and arrays.
6. **Default Function Parameters**: Set default values for function parameters.
7. **Rest and Spread Operators**: Flexible handling of function parameters and arrays.
8. **Modules**: A better way to organize and reuse code.
9. **Promises**: Improved handling of asynchronous operations.
10. **String Templating**: Multi-line strings with placeholders.
11. **Object Creation and Properties**: Simplified object creation and manipulation.
12. **Iterators and For-Of Loops**: Enhanced iteration over collections.

## Constants vs. Variables

- **Constants (`const`)**: Variables declared with `const` are immutable, meaning their values cannot be reassigned after declaration. They have block-level scope, making them useful for values that should not change within a block of code.

- **Variables (`let`)**: Variables declared with `let` are mutable, and their values can be reassigned. They also have block-level scope, allowing you to limit their availability to specific code blocks.

## Block-Scoped Variables

ES6 introduced `let` and `const`, which have block-level scope. This means they are only accessible within the block or statement where they are defined, improving code clarity and reducing potential bugs.

```javascript
if (true) {
  let blockScoped = 'I am block-scoped';
}
console.log(blockScoped); // Error: blockScoped is not defined
