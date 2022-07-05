import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, text } = this.props;
    return (
      <button type="submit" className={className}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  text: '',
};
Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
