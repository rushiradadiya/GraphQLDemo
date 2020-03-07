const { resolver } = require('graphql-sequelize')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql')
const { Category } = require('./CategrySchema')

const CategoryType = new GraphQLObjectType({
    name: 'Categaroy',
    description: 'An order',
    fields: {
        Category_id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The id of the order.',
        },
        Category_Name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'name of the order'
        },
        active: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The statas of the order.',
        },
    }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            users: {
                type: new GraphQLList(CategoryType),
                resolve: resolver(Category)
            }
        }
    })
})

module.exports = schema;