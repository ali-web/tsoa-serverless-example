# TSOA Serverless Example

Integrates the awesome [TSOA framework](https://github.com/lukeautry/tsoa) with Serverless for building sweet APIs in
Lambda with no cold starts and lots of strongly typed goodness!

## Run Locally

```npm run start``` - This runs the TSOA pipeline, then builds the typescript using [Serverless Webpack](https://github.com/elastic-coders/serverless-webpack) and serves it using [Serverless Offline](https://github.com/dherault/serverless-offline)!

```npm run debug``` - Same as start, but launches with the debugger available for connection on port 5858.  There's a launch.json for VSCode available that should allow you to just connect.

## Deploy to AWS

```npm run deploy-dev``` - Deploys everything out to AWS to play around with.  Obviously, this may cost you money.

## Swagger UI

I don't have Swagger UI set up in the project, mostly because I really don't want to handle serving real HTML/JS assets (at least for now).  If you want to play around with your API once you've got it up and running locally, just go to <http://petstore.swagger.io?url=http://localhost:3000/swagger.json>.