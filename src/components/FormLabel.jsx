import PropTypes from 'prop-types';
import styled from 'styled-components';

function FormLabel({ htmlFor, value }) {
  const StyledLabel = styled.label`
    display: block;
    margin: 20px 0 10px 0;
  `;

  return <StyledLabel htmlFor={htmlFor}>{value}</StyledLabel>;
}

FormLabel.defaultProps = {
  htmlFor: '',
  value: '',
};

FormLabel.propTypes = {
  htmlFor: PropTypes.string,
  value: PropTypes.string,
};

export default FormLabel;
