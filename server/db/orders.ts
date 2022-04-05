import { OrderDbEntry, Photo } from 'types';

const knex = require('./knex');

export const insertOrder = (order: OrderDbEntry) =>
  knex('orders').insert(order);

export const getAllOrders = () => knex('orders').select('*');

export const getAllPhotos = async (): Promise<Photo[]> => {
  const photos: Photo[] = await knex('orders')
    .select('img1', 'img2', 'timestamp', 'photoInfoConsent', 'to', 'from')
    .whereNotNull('img1')
    .andWhere('photoWallConsent', 'true')
    .orderBy('timestamp', 'desc')
    .limit(10);

  const filteredPhotos = filterPhotos(photos);
  return filteredPhotos;
};

const filterPhotos = (photos: Photo[]): Photo[] => {
  const filteredPhotos = [];
  for (let i in photos) {
    if (i === '10') {
      return filteredPhotos;
    }

    const p = photos[i];
    const { img1, img2, timestamp, photoInfoConsent, to, from } = p;
    let photo: Partial<Photo> = { img1, timestamp };

    if (photoInfoConsent === 'true') {
      photo = { ...photo, to, from };
    }

    filteredPhotos.push(photo);

    if (img2) {
      const photo2 = { ...photo, img1: img2 };
      filteredPhotos.push(photo2);
    }
  }

  return filteredPhotos;
};

module.exports = {
  insertOrder,
  getAllOrders,
  getAllPhotos,
};
