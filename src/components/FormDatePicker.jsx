import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

function FormDatePicker({ id, onChange, value }) {
  return <DatePicker id={id} onChange={onChange} value={value} />;
}

FormDatePicker.defaultProps = {
  id: '',
  onChange: () => {},
  value: '',
};

FormDatePicker.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormDatePicker;
