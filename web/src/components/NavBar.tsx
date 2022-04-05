import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from './Logo';

export const NavBar = () => {
  return (
    <NavBarContainer className='nav-bar-container'>
      <div>
        <Link to='/'>
          <Logo />
        </Link>
        <p className='subtitle'>
          Real instant film. Printed with chemicals and everything.
        </p>
      </div>
      <Nav className='nav'>
        <Link to='/about'>
          <p>About</p>
        </Link>
        <Link to='/feedback'>
          <p>Feedback</p>
        </Link>
      </Nav>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const Nav = styled.div`
  display: flex;
  p {
    margin-right: 18px;
    color: rgb(255, 56, 93);
    font-size: 18px;
    &:hover {
      cursor: pointer;
      filter: brightness(150%);
    }
  }
`;
