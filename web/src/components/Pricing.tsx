import styled from 'styled-components';
import { Icon } from '.';
import { PRICES } from '../utils';

export const Pricing = () => (
  <PriceContainer>
    <PriceOption>
      <FlexContainer>
        <Icon scale={1.5} />
        <p>...</p>
      </FlexContainer>
      <Price>{PRICES[1]}</Price>
    </PriceOption>
    <PriceOption>
      <FlexContainer>
        <Icon scale={1.5} />
        <Icon scale={1.5} />
        <p>...</p>
      </FlexContainer>
      <Price>{PRICES[2]}</Price>
    </PriceOption>
  </PriceContainer>
);

const PriceContainer = styled.div`
  margin: 36px 0;
`;

const PriceOption = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin-bottom: 12px;
  .photo-icon {
    margin-right: 8px;
  }
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
