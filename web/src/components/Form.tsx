import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Polaroid } from '.';

export function Form(): ReactElement {
  const [img, setImg] = useState(null);

  const onInput = (e: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <form>
      <Input type='file' accept='image/png, image/jpeg' onInput={onInput} />
      <Polaroid img={img} />
    </form>
  );
}

const Input = styled.input`
  width: 190px;
`;
