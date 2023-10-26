// import PropTypes from 'prop-types'
// import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick}) => {
  return (
    <button style={{ background: color }} className="btn" onClick={onClick} >
      {text}
    </button>
  );
};

Button.defaultProps = {
    color: 'steelblue'
}

// Button.ReactPropTypes = {
//     text: ReactPropTypes.string
// }


Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
  };

export default Button;
