import styled from 'styled-components';
import logo from '../assets/logo-horizontal.png';

function Logo() {
  const StyledLogo = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <StyledLogo>
      <img src={logo} alt="WealthHealth" />
      <p>- HRnet</p>
    </StyledLogo>
  );
}

export default Logo;
