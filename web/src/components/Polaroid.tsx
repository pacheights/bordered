import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  img: string | null;
}

export function Polaroid({ img }: Props): ReactElement {
  return (
    <PolaroidContainer>
      <Photo img={img} />
    </PolaroidContainer>
  );
}

const PolaroidContainer = styled.div`
  height: 4.1in;
  width: 4in;
  padding-top: 0.25in;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Photo = styled.div<{ img: string | null }>`
  width: 3.5in;
  height: 2.9in;
  background-color: darkgray;
  background-image: url('${(props) => props.img || ''}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
