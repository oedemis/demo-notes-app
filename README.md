SST makes it easy to build serverless applications by allowing developers to:

Define their infrastructure using AWS CDK
Test their applications live using Live Lambda Development
Set breakpoints and debug in Visual Studio Code
Web based dashboard to manage your apps
Deploy to multiple environments and regions
Use higher-level constructs designed specifically for serverless apps
Configure Lambda functions with JS and TS (using esbuild), Go, Python, C#, and F#

CDK and SST
SST comes with a list of higher-level CDK constructs designed to make it easy to build serverless apps. They are easy to get started with, but also allow you to customize them. It also comes with a local development environment that we’ll be relying on through this guide. So when you run:

- sst build, it runs cdk synth internally
- npm start or npx sst deploy, it runs cdk deploy

Remove from AWS
- npx sst remove API
- rm stacks/MyStack.ts packages/core/src/time.ts packages/functions/src/lambda.ts

Refactoring:
We want to make our Lambda function async, and simply return the results.
We want to simplify how we make calls to DynamoDB. We don’t want to have to create a new AWS.DynamoDB.DocumentClient().
We want to centrally handle any errors in our Lambda functions.
Finally, since all of our Lambda functions will be handling API endpoints, we want to handle our HTTP responses in one place.

-> Here we are creating a convenience object that exposes the DynamoDB client methods that we are going to need in this guide.

->
We are creating a handler function that we’ll use as a wrapper around our Lambda functions.
It takes our Lambda function as the argument.
We then run the Lambda function in a try/catch block.
On success, we JSON.stringify the result and return it with a 200 status code.
If there is an error then we return the error message with a 500 status code.

Promise

A Promise in JavaScript represents an operation that hasn't completed yet but is expected in the future. It's

Async/Await

The async and await keywords in JavaScript are used to work with Promises in a more comfortable synchronous manner. async and await help to write promise-based code as if it were synchronous, but without blocking the execution thread.

async is a keyword that is used to define an asynchronous function. Any function marked with the async keyword returns a Promise.

await can only be used inside an async function and makes JavaScript wait until that Promise settles and returns its result.



JavaScript uses an event-driven, non-blocking I/O model, which is particularly suitable for asynchronous operations. When you see something like:


await dynamoDb.put(params);

await does pause the execution of the current async function, which might give the impression of "blocking". But it's crucial to understand that it only blocks the code inside that specific async function. The rest of your JavaScript program will continue to run in the background.

This is because the JavaScript event loop, which handles asynchronous callbacks, continues to run while your code is waiting for the await to resolve. It can handle other tasks and operations.

So in essence, await pauses the execution of the async function until the Promise is resolved, but it does not block the execution of other functions or operations in your JavaScript code. This allows JavaScript to efficiently manage multiple operations concurrently, even though JavaScript is single-threaded.

Therefore, you can think of await as a way to tell JavaScript: "Continue executing other code, and come back to this function once the Promise resolves". It's a way to write asynchronous code that is easier to read and reason about, since it looks more like synchronous code.