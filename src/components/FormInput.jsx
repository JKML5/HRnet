// import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../css/FormInput.css';

function FormInput({ id, name, type, onChange, value }) {
  // const StyledInput = styled.input`
  //   font-size: 16px;
  //   width: 100%;
  //   height: 40px;
  //   padding: 0 10px;
  //   border: 1px solid #000000;
  //   outline: none;
  //   border-radius: 5px;

  //   &.half-width {
  //     width: 50%;
  //   }

  //   &:focus {
  //     border: none;
  //     outline: 2px solid #4e6701;
  //   }
  // `;

  return (
    <input
      type={type}
      id={id}
      className="inputText"
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

FormInput.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  onChange: () => {},
  value: '',
};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormInput;
