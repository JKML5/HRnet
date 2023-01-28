import styled from 'styled-components';
import PropTypes from 'prop-types';

function FormInput({ id, className, type }) {
  const StyledInput = styled.input`
    font-size: 16px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #000000;
    outline: none;
    border-radius: 5px;

    &.half-width {
      width: 50%;
    }

    &:focus {
      border: none;
      outline: 2px solid #4e6701;
    }
  `;

  return <StyledInput type={type} id={id} className={className} />;
}

FormInput.defaultProps = {
  id: '',
  className: '',
  type: 'text',
};

FormInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
