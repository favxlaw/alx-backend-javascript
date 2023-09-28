# Promises: How, Why, and What

This README provides an overview of Promises in JavaScript, including how to use the `then`, `resolve`, and `catch` methods, the `every` method of the Promise object, error handling with `throw` and `try`, and how to work with asynchronous functions using the `await` operator.

## Table of Contents
- [What Are Promises?](#what-are-promises)
- [How to Use `then`, `resolve`, and `catch`](#how-to-use-then-resolve-and-catch)
- [Using the `every` Method of the Promise Object](#using-the-every-method-of-the-promise-object)
- [Error Handling with `throw` and `try`](#error-handling-with-throw-and-try)
- [Working with Async Functions and `await`](#working-with-async-functions-and-await)

---

## What Are Promises?

Promises in JavaScript are a powerful way to handle asynchronous operations. They provide a cleaner and more structured approach to managing callbacks and handling asynchronous results. Promises represent a value that might not be available yet but will be at some point in the future. They are typically used for operations such as network requests, file reading, or other async tasks.

### Why Use Promises?
- Promises make asynchronous code more readable and maintainable.
- They allow you to handle success and error cases in a structured manner.
- Promises can be easily composed, making it possible to chain multiple asynchronous operations together.

### Basic Promise Structure
A promise has three states: pending, fulfilled (resolved), and rejected.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  if (operationIsSuccessful) {
    resolve(result); // Fulfilled
  } else {
    reject(error); // Rejected
  }
});
```
## How to Use then, resolve, and catch
The then and catch methods are used to handle the results of a promise.

Use then to specify what to do when the promise is fulfilled (resolved).
Use catch to specify what to do when the promise is rejected.



