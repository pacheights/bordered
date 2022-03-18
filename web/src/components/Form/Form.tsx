import { ReactElement, useState } from 'react';
import { FormView } from './FormView';

export type Image = string | null;

export function Form(): ReactElement {
  const [imgs, setImgs] = useState([null] as Image[]);

  const onPhotoUpload = (e: any, i: number) => {
    try {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = e.target.result;
        const newImgs = [...imgs];
        newImgs[i] = img;
        setImgs(newImgs);
      };
      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const addPhoto = () => setImgs((imgs) => [...imgs, null]);

  const deletePhoto = (i: number) =>
    setImgs((imgs) => [...imgs.slice(0, i), ...imgs.slice(i + 1)]);

  const onFormSubmit = (e: any) => {
    e?.preventDefault();
    console.log(e);
  };

  return (
    <FormView
      onPhotoUpload={onPhotoUpload}
      imgs={imgs}
      addPhoto={addPhoto}
      deletePhoto={deletePhoto}
      onFormSubmit={onFormSubmit}
    />
  );
}
