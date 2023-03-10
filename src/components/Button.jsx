import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #4e6701;
`;

function Button({ value, onClick }) {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {value}
    </StyledButton>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
