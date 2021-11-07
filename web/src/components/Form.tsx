import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Photo } from '.';
import { PhotoBrand } from '../helpers/constants';
import { BrandSelect } from './BrandSelect';

export function Form(): ReactElement {
  const [img, setImg] = useState(null);
  const [brand, setBrand] = useState(PhotoBrand.Polaroid);

  const onPhotoUpload = (e: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onBrandSelect = (e: any) => setBrand(e.target.value as PhotoBrand);

  return (
    <form>
      <Input
        type='file'
        accept='image/png, image/jpeg'
        onInput={onPhotoUpload}
      />
      <BrandSelect onBrandSelect={onBrandSelect} />
      <Photo img={img} brand={brand} />
    </form>
  );
}

const Input = styled.input`
  width: 190px;
`;
