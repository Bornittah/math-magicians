import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, text } = props;
  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  text: '',
};
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
