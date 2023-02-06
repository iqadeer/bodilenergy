Estimated work time: 1 - 4 hours

## Developer Name: Imran qadeer

# clone the git repository from https://github.com/iqadeer/bodilenergy.git

# The cloned directory will contain 3 folders
 - graphapi, contains graph backend to serv catfacts and dogs with images
 - graph-client, contains react application that consumes the graph api and display the facts
   as per code challenge requirements.
 - .docker, contains docker files for containerizing both api and client applicaitons.

# To run using docker (docker desktop is required)
 - navigate to the root folder on your pefferred shell/command prompt and run following commands
   1. docker-compose build
   2. docker-compose up
   3. open http://localhost:3000 on the browser for client app.
   4. open http://localhost:5601/graphql on the browser for graphapi

# To run without docker
  1. graphapi: navigate to graphapi folder using terminal and run npm start and open http://localhost:3000
  2. graph-client: navigate to graph-client folder using terminal and run npm start and open http://localhost:5601/graphql

# To run unit tests
  1. graphapi: navigate to graphapi folder using terminal and run npm test
  2. graph-client: navigate to graph-client folder using terminal and run npm test

# Main tech used
  1. graphapi: graphql, apollo server 4, node, express, jest, typescript, lodash, nodemon, ts-node
  2. graph-client: react, typescript, react query, jest.

I beleive that you will be able to run the applications follwing the instruction give above, in the case of
  any issues, please contact me via email or phone.

I was not able to deploy to the web due to non availability of the VMs and shortage of time.

Thanks,

Imran qadeer
