// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

/*
Product.hasOne(Category, {
  foreignKey: 'category_id', //Note: May want to delete forgien key and CASCADE for Product.hasOne(Category) instead
  onDelete: 'CASCADE'
});
*/
// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  
  through: 'tagged_aisle' });

  /*
  through: {
  model: ProductTag,
  unique: false,
},
 as: 'tagged_aisle'});
*/

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, { 

  through: 'category_code'});

  /*
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'category_code'}
);
*/

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};