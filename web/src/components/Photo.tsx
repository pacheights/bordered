import { ReactElement } from 'react';
import styled from 'styled-components';
import { BrandDimensions, PhotoBrand } from '../helpers/constants';

interface Props {
  img: string | null;
  brand: PhotoBrand;
}

export function Photo({ img, brand }: Props): ReactElement {
  return (
    <PhotoContainer brand={brand}>
      <Picture img={img} brand={brand} />
    </PhotoContainer>
  );
}

type PhotoContainerStyleProps = {
  brand: PhotoBrand;
};

type PictureStyleProps = {
  img: string | null;
  brand: PhotoBrand;
};

const PhotoContainer = styled.div<PhotoContainerStyleProps>`
  height: ${(props) => BrandDimensions[props.brand].container.height}in;
  width: ${(props) => BrandDimensions[props.brand].container.width}in;
  padding-top: ${(props) => BrandDimensions[props.brand].container.borderTop}in;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div<PictureStyleProps>`
  height: ${(props) => BrandDimensions[props.brand].picture.height}in;
  width: ${(props) => BrandDimensions[props.brand].picture.width}in;
  background-color: darkgray;
  background-image: url('${(props) => props.img || ''}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
