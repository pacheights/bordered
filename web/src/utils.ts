import { Image } from './components';

const convertBase64ToBlob = async (b64: string) => {
  const base64Response = await fetch(b64);
  const blob = await base64Response.blob();
  return blob;
};

export const convertFormToReqBody = async (
  form: HTMLFormElement,
  imgs: Image[]
) => {
  const fd = new FormData(form);
  if (typeof imgs[0] == 'string')
    fd.append('img1', await convertBase64ToBlob(imgs[0]));
  if (typeof imgs[1] == 'string')
    fd.append('img2', await convertBase64ToBlob(imgs[1]));

  const body = {};
  // @ts-ignore
  for (let [key, value] of fd.entries()) {
    // @ts-ignore
    body[key] = value;
  }
  return body;
};
