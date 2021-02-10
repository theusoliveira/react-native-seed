import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  rest: PropTypes.any,
};

const defaultProps = {
  rest: {},
};

function Button(props) {
  const { children, onPress, rest } = props;

  return (
    <Container {...rest} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
