import PropTypes from 'prop-types';

const Button = ({ ButtonName, color, wide }) => (
  <button
    type="button"
  >
    {ButtonName}
  </button>
);

Button.defaultProps = {
  ButtonName: ' ',
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  ButtonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
