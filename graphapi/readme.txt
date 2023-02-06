**Development Task**

Build a lightweight full-stack web app, using the following technologies:

- Typescript
- React
- Gatsby.js (or Next.js, or similar static site builder)
- GraphQL (on Express, Apollo, or similar Node.js server)
- SQL (optional)
- Docker (optional)

The site should have two pages.

1. page should show random cat facts from this API: [https://catfact.ninja/fact](https://catfact.ninja/fact) and have a button to load a new fact.
2. page should show a picture of a dog and have a button to show a new dog picture.
    - The dog images should be served from a GraphQL backend.
    - The button should cycle through the dog pictures in a consistent (non-random) order
    - The page should be able to load a specific dog image, by using a path or url query with an id parameter.

Bonus tasks (for that sweet extra credit):

- Style the site using styled-components, css modules, or a similar modern styling solution
- Write automated tests of your code using a common testing library (jest, cypress, playwright, etc.)
- Store the dog images in a SQL database (MySQL, PostgreSQL, etc.)
- Containerize and bootstrap the stack (client, server, database) using Docker
- Deploy app on a cloud hosting provider (GCP, Heroku, Netlify, etc.)

Include a well written readme file, including instructions on how to build, run, and test your solution. Also consider including a few comments on the areas you prioritized while solving the challenge, and areas you would have spent more time if you could.

Please adhere to good code practice and make sure the code is clean and readable. Other than the above requirements, feel free to be as detailed or quick and dirty as you want and to focus on whatever aspects of the code you want.

Estimated work time: 1 - 4 hours


appollo server 4, others were depricated and i don't like to use depricated packages
usage with typescript
finding docs for how to use datasource, rosolvers, context with apollo server 4
setup with typescript.
static files from appollo/graphql
downloading dogs, description and images.
find dogs api, download dogs images, names, arranging them.
testing with jest.
