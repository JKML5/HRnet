import PropTypes from 'prop-types';

function FormSelect({ id, onChange, value }) {
  return <DatePicker id={id} onChange={onChange} value={value} />;
}

FormSelect.defaultProps = {
  id: '',
  onChange: () => {},
  value: '',
};

FormSelect.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormSelect;
