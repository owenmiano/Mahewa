import React,{useContext} from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Spinner from 'react-native-loading-spinner-overlay'

function CustomDrawer(props) {
    const {isLoading,userInfo,logout}=useContext(AuthContext)

  return (
    <View style={{flex:1}}>
        <Spinner visible={isLoading}/>
         <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#0096FF',}}>
            <View
            
            style={{padding:20}}
            >
            <Image
             source={require('../assets/images/userProfile.png')}
             style={{height:80,width:80,borderRadius:40,marginBottom:10}}
            />
            <Text style={{fontFamily:'Roboto-Medium',fontSize:15,fontWeight:'bold',color:'#fff'}}>Hi, {userInfo.userName}</Text>
            </View>

            <View style={{flex:1,backgroundColor:'#fff',paddingTop:10,borderTopWidth:1,borderTopColor:'#ccc'}}>
            <DrawerItemList {...props} />
            </View>
         </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
          <TouchableOpacity onPress={logout}>
             <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Ionicons name="exit-outline" size={22}/>
                 <Text
                 style={{
                    fontSize:15,
                    marginLeft:5,
                    fontWeight:'bold',
                    fontFamily:"Roboto-Mediu"
                 }}
                 >
                    Sign Out
                 </Text>
             </View>
          </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default CustomDrawer