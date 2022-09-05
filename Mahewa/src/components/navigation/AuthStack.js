import React from 'react'
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen
          name="Login" 
          component={LoginScreen} 
        />

         <Stack.Screen 
         name="Register" 
         component={RegisterScreen}
          />

    </Stack.Navigator>

  )
}

export default AuthStack