import React, { useCallback } from 'react';

import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import TextInputComponent from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ForgotPassword, ForgotPasswordText } from './styles';

function SignIn() {
  const handleSignIn = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => handleSignIn(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Container>
          <View>
            <Title>Faça seu logon</Title>
          </View>

          <TextInputComponent
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail"
            returnKeyType="next"
            icon="mail"
            name="email"
            onChangeText={handleChange('email')}
            value={values.email}
          />

          <TextInputComponent
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            icon="lock"
            name="password"
            onChangeText={handleChange('password')}
            value={values.password}
          />

          <Button onPress={handleSubmit}>Entrar</Button>

          <ForgotPassword onPress={() => null}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      )}
    </Formik>
  );
}

export default SignIn;
