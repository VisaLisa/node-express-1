### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    - Callbacks
    - Promises
    - Async/await

- What is a Promise?
  - A promise is one-time guarantee of future value.


- What are the differences between an async function and a regular function?
  - An async function will always return a promise


- What is the difference between Node.js and Express.js?
  - Node is a way of writing command-line javascript
  - Express is a framework for creating server-side javascript code

- What is the error-first callback pattern?
  - The first argument of the callback is reserved for an error object. If an error occurred, it will be returned by the first err argument.

- What is middleware?
  - It is code that runs in the middle of the request / response cycle!

- What does the `next` function do?
  - calling next() tells express to move on to the next task (route handler, middleware, or error handler)

- What does `RETURNING` do in SQL? When would you use it?
  - avoids performing an extra database query to collect the data
  - allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  - No error handling
  - Could have been an async function with a promise 
  - Use Promise.all() 
