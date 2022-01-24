import { ReactElement, useState } from 'react';
import { FormView } from './FormView';

export function Form(): ReactElement {
  const [img, setImg] = useState(null);

  const onPhotoUpload = (e: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return <FormView onPhotoUpload={onPhotoUpload} img={img} />;
}
