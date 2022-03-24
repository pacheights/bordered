import { BaseOrder, OrderDbEntry, OrderRequest } from 'types';
const sanitizer = require('string-sanitizer');

export const createOrderDbEntry = async (body: OrderRequest) => {
  const sanitizedBody = getSanitizedBody(body);
  const { img1, img2 } = body;
  const timestamp = new Date().toISOString();
  const orderEntry = {
    ...sanitizedBody,
    timestamp,
  } as OrderDbEntry;

  if (img1) orderEntry.img1 = img1;
  if (img2) orderEntry.img2 = img2;

  return orderEntry;
};

export const getSanitizedBody = (body: OrderRequest): BaseOrder => {
  let {
    to,
    from,
    note,
    photoWallConsent,
    address1,
    address2,
    city,
    state,
    zip,
  } = body;

  to = sanitizer.sanitize.keepSpace(to);
  from = sanitizer.sanitize.keepSpace(from);
  note = sanitizer.sanitize.keepSpace(note);
  photoWallConsent = sanitizer.sanitize.keepSpace(photoWallConsent);
  address1 = sanitizer.sanitize.keepSpace(address1);
  address2 = sanitizer.sanitize.keepSpace(address2);
  city = sanitizer.sanitize.keepSpace(city);
  state = sanitizer.sanitize.keepSpace(state);
  zip = sanitizer.sanitize.keepSpace(zip);

  return {
    to,
    from,
    note,
    photoWallConsent,
    address1,
    address2,
    city,
    state,
    zip,
  };
};

module.exports = { createOrderDbEntry };
