import React,{useContext,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from '../context/AuthContext'
import LoaderScreen from '../screens/LoaderScreen';
import SplashScreen from 'react-native-splash-screen';


const Stack = createNativeStackNavigator();


function Navigation() {
  const {userInfo,splashLoading}=useContext(AuthContext)

  const onNavigationReady = () => {
    SplashScreen.hide(); // just hide the splash screen after navigation ready
}


  return (
    <NavigationContainer onReady={onNavigationReady}>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen name="Loaders Screen" component={LoaderScreen} options={{headerShown:false}} />
        ):
        userInfo.token ?
         (
          <Stack.Screen
          name="Home"
          component={HomeScreen} 
          // options={{headerShown:false}}
          />
        ) : (
          <>
          <Stack.Screen
          name="Login" 
          component={LoginScreen} 
          options={{headerShown:false}}
          />

         <Stack.Screen 
         name="Register" 
         component={RegisterScreen}
         options={{headerShown:false}}
          />
          </>
       )
        }
       </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigation