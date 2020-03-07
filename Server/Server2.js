const { ApolloServer, gql } = require('apollo-server/dist/index');

const resolvers = require('../Resolvers/resolvers');

const   typeDefs = gql`
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
}
type Message {
    id: ID!
    text: String
}
type CategrySchema {
    Category_id: Int
    Category_Name: String
    active: Int    
}  
type Query {
    CourceAll:[CategrySchema]
    FetchOne(Category_id:Int!):CategrySchema
},
type Mutation {
    addCource(Category_Name:String,active:Int):CategrySchema
    DeleteCource(Category_id:Int!):[Message]
    UpdateCource(Category_id:Int!,Category_Name:String,active:Int!):CategrySchema
}
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
