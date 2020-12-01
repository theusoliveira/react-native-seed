import React from 'react';

import { Text } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};

function TextComponent({ text }) {
  return <Text>{text}</Text>;
}

TextComponent.propTypes = propTypes;
TextComponent.defaultProps = defaultProps;
export default TextComponent;
