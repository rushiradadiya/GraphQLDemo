const Db = require('./db');
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';


const posts = new GraphQLObjectType({
    name: 'posts',
    description: 'Blog post',
    fields () {
        return {
            title: {
                type: GraphQLString,
                resolve (posts) {
                    return posts.title;
                }
            },
            content: {
                type: GraphQLString,
                resolve (posts) {
                    return posts.content;
                }
            },

        };
    }
});

// const Person = new GraphQLObjectType({
//     name: 'Person',
//     description: 'This represents a Person',
//     fields: () => {
//         return {
//             id: {
//                 type: GraphQLInt,
//                 resolve (person) {
//                     return person.id;
//                 }
//             },
//             firstName: {
//                 type: GraphQLString,
//                 resolve (person) {
//                     return person.firstName;
//                 }
//             },
//             lastName: {
//                 type: GraphQLString,
//                 resolve (person) {
//                     return person.lastName;
//                 }
//             },
//             email: {
//                 type: GraphQLString,
//                 resolve (person) {
//                     return person.email;
//                 }
//             },
//
//         };
//     }
// });

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: () => {
        return {
            // person: {
            //     type: new GraphQLList(Person),
            //     args: {
            //         id: {
            //             type: GraphQLInt
            //         },
            //         email: {
            //             type: GraphQLString
            //         }
            //     },
            //     resolve (root, args) {
            //         return Db.models.person.findAll({ where: args });
            //     }
            // },
            posts: {
                type: new GraphQLList(posts),
                args:{
                    title: {
                        type: GraphQLString,

                    },
                    content: {
                        type: GraphQLString,
                    },
                },
                resolve (root, args) {
                    return Db.models.posts.findAll({ where: args });
                }
            }
        };
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    description: 'Functions to set stuff',
    fields () {
        return {
            // addPerson: {
            //     type: Person,
            //     args: {
            //         firstName: {
            //             type: new GraphQLNonNull(GraphQLString)
            //         },
            //         lastName: {
            //             type: new GraphQLNonNull(GraphQLString)
            //         },
            //         email: {
            //             type: new GraphQLNonNull(GraphQLString)
            //         }
            //     },
            //     resolve (source, args) {
            //         return Db.models.person.create({
            //             firstName: args.firstName,
            //             lastName: args.lastName,
            //             email: args.email.toLowerCase()
            //         });
            //     }
            // },
            addPost: {
                type: posts,
                args: {
                    userId: {
                        type: GraphQLNonNull(GraphQLInt)
                    },
                    title: {
                        type: GraphQLNonNull(GraphQLString)
                    },
                    content: {
                        type: GraphQLNonNull(GraphQLString)
                    }
                },
                resolve (source, args) {

                    return Db.models.posts.create({
                        title: args.title,
                        content: args.content
                    });
                }
            }
        };
    }
});

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;
