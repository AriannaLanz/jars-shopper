const User = require('./user')
<<<<<<< HEAD
=======
const Review = require('./review')
>>>>>>> origin/issue5
const Product = require('./product')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Review.belongsTo(User);
 Review.belongsTo(Product);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

 Product.hasMany(Reviews);
 Product.belongsToMany(Categories);

module.exports = {
  User,
  Product,
  Order,
  Category,
  Review
}

Order.belongsTo(User);
