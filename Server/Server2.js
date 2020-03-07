const {ApolloServer, gql} = require('apollo-server/dist/index');

const resolvers = require('../Resolvers/resolvers');

const typeDefs = gql`
    type User{
        user_Id: Int
        email: String
        fullName: String
        userName: String
        password: String
    }
    type Brands
    {
        brand_Id: Int
        name: String
        type: String
    }
    type Product
    {
        product_Id: Int
        title: String
        category: String
        images: String
        brand: String
        price: String
        cpu: String
        camera: String
        size: String
        weight: String
        battery: String
        memory: String
        description: String
    }
    
     type Query
     {
         UsersAll:[User]
         BrandAll:[Brands]
         ProductAll:[Product]
         FetchOneProduct(product_Id:Int!):Product
         FetchOneBrands(brand_Id:Int!):Brands
         CheckLoginData(email: String,password: String):User
     }
    type Mutation {
        addUser(user_Id: Int,email: String,fullName: String,userName: String,password: String):User
        addBrand(brand_Id: Int, name: String, type: String):Brands
        addProduct(title:String,category:String,images:String,brand:String, price: String,cpu: String,camera: String,size: String,weight: String,battery: String,memory: String,description: String):Product

    }
`;

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});
/*
ProductAll:[Product]
         BrandAll:[Brands]
         FetchOneProduct(product_Id:Int!):Product
         FetchOneBrands(brand_Id:Int!):Brands


         addProduct(title:String,category:String,images:String,brand:String, price: String,cpu: String,camera: String,size: String,weight: String,battery: String,memory: String,description: String):Product*/
