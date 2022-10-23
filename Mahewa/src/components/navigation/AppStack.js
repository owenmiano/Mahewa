import React from 'react'
import HomeScreen from '../../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../../screens/ProfileScreen';
import CustomDrawer from '../CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator 
    drawerContent={props=><CustomDrawer {...props}/>} 
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor:'#0096FF',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor:'#333',
      drawerLabelStyle:{
        marginLeft:-25,
        fontSize:15,
        fontFamily:'Roboto-Medium',
      }
    }}
    >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon:({color})=>(
           <Ionicons name="home-outline" size={22} color={color} />
        )
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon:({color})=>(
           <Ionicons name="person-outline" size={22} color={color} />
        )
      }}
    />
  </Drawer.Navigator>
  )
}

export default AppStack