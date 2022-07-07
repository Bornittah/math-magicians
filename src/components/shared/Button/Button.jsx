import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, value, onClick } = props;
  return (
    <button type="button" className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  className: null,
  value: null,
  onClick: null,
};
Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
