import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, value, onClick } = this.props;
    return (
      <button
        type="button"
        className={className}
        value={value}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
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
