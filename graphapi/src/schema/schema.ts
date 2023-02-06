export const typeDefs = `#graphql
  type Dog {
    id: ID!
    name: String!
    imageFileName: String
  }
  type CatFact {
    fact: String,
    length: Int
  }
  type Query {
    dog(id: Int!): Dog
    dogs: [Dog]
    catFact: CatFact
  }
`;

export default typeDefs;
