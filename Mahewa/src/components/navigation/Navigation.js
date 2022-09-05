import React,{useContext,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext} from '../../context/AuthContext'
import LoaderScreen from '../../screens/LoaderScreen';
import SplashScreen from 'react-native-splash-screen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


const Stack = createNativeStackNavigator();


function Navigation() {
  const {userInfo,splashLoading}=useContext(AuthContext)

  const onNavigationReady = () => {
    SplashScreen.hide(); // just hide the splash screen after navigation ready
}


  return (
  
    <NavigationContainer onReady={onNavigationReady}>
     
        {splashLoading ? (
          <Stack.Navigator>
            <Stack.Screen name="Loaders Screen" component={LoaderScreen} options={{headerShown:false}} />
          </Stack.Navigator>
        ):
        userInfo.token ?(
          <AppStack/>
        )
         
         : (
          <AuthStack/>
       )
        }
      
    </NavigationContainer>
  
  )
}

export default Navigation