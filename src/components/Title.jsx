import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 2px solid #eeeee;
  margin-bottom: 20px;
`;

function Title({ value }) {
  return <StyledTitle>{value}</StyledTitle>;
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
