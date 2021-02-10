import React, { useState, useCallback, useRef } from 'react';

import PropTypes from 'prop-types';

import { Container, Icon, TextInput } from './styles';

const propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  value: '',
  defaultValue: '',
  icon: '',
  error: '',
};

function TextInputComponent(props) {
  const { value, error, defaultValue, icon, ...rest } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputValueRef = useRef({ value: defaultValue });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container isErrored={!!error} isFocused={isFocused}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />
      <TextInput
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        value={value}
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
}

TextInputComponent.propTypes = propTypes;
TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;
