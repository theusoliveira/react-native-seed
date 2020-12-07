import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
