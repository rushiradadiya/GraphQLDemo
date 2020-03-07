var CategrySchema = require('../Schema/CategrySchema');


const resolvers = {
    Query: {
        CourceAll: () => {
            return CategrySchema.findAll();
        },
        FetchOne: (root, args) => {
            return CategrySchema.findById(args.Category_id);
        }
    },
    Mutation: {
        addCource: (root, args) => {
            return new CategrySchema({
                Category_Name: args.Category_Name,
                active: 0
            }).save()
        },
        DeleteCource: (root,  args) => {
            if (CategrySchema.destroy({ where: { Category_id: args.Category_id } })) {
                message = { text: 'category ' + args.Category_id + ' is deleted' }
                return message;

            }
        },
        UpdateCource: (root, args) => {
            const data = { "Category_Name": args.Category_Name, "active": args.active }
            CategrySchema.update(data, { where: { Category_id: args.Category_id } })
            return CategrySchema.findById(args.Category_id);
        }
    }
};

module.exports = resolvers;
