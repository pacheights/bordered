import { PhotoBrand } from '../helpers/constants';
import styled from 'styled-components';

interface Props {
  onBrandSelect: (e: any) => void;
}

export function BrandSelect({ onBrandSelect }: Props) {
  const getBrandRadioProps = (brand: PhotoBrand) => ({
    type: 'radio',
    value: brand,
    id: brand,
    onChange: onBrandSelect,
    name: 'brand',
  });

  return (
    <BrandSelectContainer>
      <div>
        <label htmlFor={PhotoBrand.Polaroid}>Polaroid</label>
        <input {...getBrandRadioProps(PhotoBrand.Polaroid)} />
      </div>
      <div>
        <label htmlFor={PhotoBrand.FujiFilm}>FujiFilm</label>
        <input {...getBrandRadioProps(PhotoBrand.FujiFilm)} />
      </div>
    </BrandSelectContainer>
  );
}

const BrandSelectContainer = styled.div`
  margin-top: 30px;
  div {
    display: flex;
    width: 100px;
    justify-content: space-between;
    margin: 0 auto;
  }
`;
