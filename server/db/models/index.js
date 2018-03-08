const User = require('./user')
const Order = require('./order')
const OrderItem = require('./orderitem')
const Base = require('./base')
const Blob = require('./blob')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Order.hasMany(OrderItem);
 Base.hasMany(OrderItem);
 Base.hasMany(Order);
 Base.hasMany(Blob);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  OrderItem,
  Base,
  Blob
}
