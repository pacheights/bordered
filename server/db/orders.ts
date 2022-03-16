const knex = require('./knex');

const insertOrder = (order) => knex('orders').insert(order);
const getAllOrders = () => knex('orders').select('*');

module.exports = {
  insertOrder,
  getAllOrders,
};
