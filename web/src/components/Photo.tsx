import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  img: string | null;
}

export function Photo({ img }: Props): ReactElement {
  return (
    <PhotoContainer>
      <Picture img={img} />
    </PhotoContainer>
  );
}

type PictureStyleProps = {
  img: string | null;
};

const PhotoContainer = styled.div`
  height: 3.9in;
  width: 3.4in;
  padding-top: 0.28in;

  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div<PictureStyleProps>`
  height: 2.95in;
  width: 2.95in;
  background-color: darkgray;
  background-image: url('${(props) => props.img || ''}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
