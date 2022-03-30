import { Image } from './components';
import { endpoint } from './endpoint';

export const convertFormToReqBody = (fd: FormData, imgs: Image[]) => {
  if (!fd) return '{}';
  if (typeof imgs[0] == 'string') fd.append('img1', imgs[0]);
  if (typeof imgs[1] == 'string') fd.append('img2', imgs[1]);

  const body = getFormDataValues(fd);

  return JSON.stringify(body);
};

export const getFormDataValues = (fd: FormData) => {
  const body = {};
  // @ts-ignore
  for (let [key, value] of fd.entries()) {
    // @ts-ignore
    body[key] = value;
  }
  return body;
};

export const createOrder = async (
  formBody: string | null,
  clientSecret: string
) => {
  if (!formBody) return;

  const body = JSON.stringify({
    ...JSON.parse(formBody),
    pi: clientSecret,
  });

  await fetch(`${endpoint}/order`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};

const BODY_KEY = 'body';

export const getBody = (): string | null => {
  return window.sessionStorage.getItem(BODY_KEY);
};

export const setBody = (body: string) => {
  window.sessionStorage.setItem(BODY_KEY, body);
};

export const deleteBody = () => {
  window.sessionStorage.removeItem(BODY_KEY);
};
