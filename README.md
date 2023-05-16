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