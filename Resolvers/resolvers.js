var User = require('../Schema/UserSchema');
var Brand = require('../Schema/BrandSchema')
var Product = require('../Schema/ProductSchema')
const resolvers = {
    Query: {
        UsersAll: () => {
            return User.findAll();
        },
        BrandAll: () => {
            return Brand.findAll();
        },
        ProductAll: () => {
            return Product.findAll();
        },
        FetchOneProduct: (root, args) => {
            return Product.findById(args.product_Id)
        },
        FetchOneBrands: (root, args) => {
            return Brand.findById(args.brand_Id)
        },
        CheckLoginData: (root,args) =>{
            return User.findOne({where:{email:args.email,password:args.password}})
        }
    },
    Mutation: {
        addUser: (root, args) => {
            return new User({
                email: args.email,
                fullName: args.fullName,
                userName: args.userName,
                password: args.password,

            }).save()
        },
        addBrand: (root, args) => {
            return new Brand({
                name: args.name,
                type: args.type,

            }).save()
        },
        addProduct:(root,args)=>{
            return new Product({
                title: args.title,
                category: args.category,
                images: args.images,
                brand: args.brand,
                price: args.price,
                cpu: args.cpu,
                camera: args.camera,
                size: args.size,
                weight: args.weight,
                battery: args.battery,
                memory: args.memory,
                description: args.description
            }).save()
        }
    }
};
module.exports = resolvers;
/*
FetchOne: (root, args) => {
            return CategrySchema.findById(args.Category_id);


            UpdateCource: (root, args) => {
            const data = { "Category_Name": args.Category_Name, "active": args.active }
            CategrySchema.update(data, { where: { Category_id: args.Category_id } })
            return CategrySchema.findById(args.Category_id);
 */
