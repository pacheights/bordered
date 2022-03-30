import styled from 'styled-components';
import { Logo } from './Logo';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo />
      <p className='subtitle'>
        Real instant prints. Printed with chemicals and everything.
      </p>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  margin-bottom: 48px;
`;
