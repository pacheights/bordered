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
    photoInfoConsent,
    address1,
    address2,
    city,
    state,
    zip,
    pi,
  } = body;

  to = to && sanitizer.sanitize.keepSpace(to);
  from = from ? sanitizer.sanitize.keepSpace(from) : '';
  note = note ? sanitizer.sanitize.keepSpace(note) : '';
  photoWallConsent = photoWallConsent
    ? sanitizer.sanitize.keepSpace(photoWallConsent)
    : 'false';
  photoInfoConsent = photoInfoConsent
    ? sanitizer.sanitize.keepSpace(photoInfoConsent)
    : 'false';
  address1 = address1 && sanitizer.sanitize.keepSpace(address1);
  address2 = address2 && sanitizer.sanitize.keepSpace(address2);
  city = city && sanitizer.sanitize.keepSpace(city);
  state = state && sanitizer.sanitize.keepSpace(state);
  zip = zip && sanitizer.sanitize.keepSpace(zip);
  pi = `pi_${sanitizer.sanitize(pi.substring(3))}`;

  return {
    to,
    from,
    note,
    photoWallConsent,
    photoInfoConsent,
    address1,
    address2,
    city,
    state,
    zip,
    pi,
  };
};

module.exports = { createOrderDbEntry };
