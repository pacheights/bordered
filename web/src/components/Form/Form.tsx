import { ReactElement, useState } from 'react';
import { FormView } from './FormView';

export function Form(): ReactElement {
  const [img, setImg] = useState(null);
  const [num, setNum] = useState(1); // TODO refactor

  const onPhotoUpload = (e: any) => {
    try {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormView
      onPhotoUpload={onPhotoUpload}
      img={img}
      setNum={setNum}
      num={num}
    />
  );
}
