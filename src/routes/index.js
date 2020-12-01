import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Main" component={Main} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
