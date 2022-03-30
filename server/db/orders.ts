import { OrderDbEntry } from 'types';

const knex = require('./knex');

export const insertOrder = (order: OrderDbEntry) =>
  knex('orders').insert(order);

export const getAllOrders = () => knex('orders').select('*');

export const getAllPhotos = () =>
  knex('orders')
    .select('img1')
    .whereNotNull('img1')
    .andWhere('photoWallConsent', 'true');

module.exports = {
  insertOrder,
  getAllOrders,
  getAllPhotos,
};
