/**
 * @see https://projects.wojtekmaj.pl/react-date-picker/
 */

import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

function FormDatePicker({ id, onChange, value }) {
  return (
    <DatePicker
      id={id}
      onChange={onChange}
      value={value}
      clearAriaLabel="Clear date"
      calendarAriaLabel="Show calendar"
    />
  );
}

FormDatePicker.defaultProps = {
  id: '',
  onChange: () => {},
  value: '',
};

FormDatePicker.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

export default FormDatePicker;
