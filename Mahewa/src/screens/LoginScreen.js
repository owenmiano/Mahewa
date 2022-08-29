import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import logo from '../assets/images/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../components/colors'

 
function LoginScreen() {
  return (
     <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <KeyboardAvoidingView>  
        <View style={{paddingHorizontal:25}}> 
        <View>
        {/* <Image source={logo} style={{height:300}}/> */}
        </View>
        <Text 
        style={{fontSize:28,
        fontWeight:'500',
        color:'#333',
        marginBottom:30
        }}>
        Login
        </Text>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='email' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput placeholder='Enter your email address' keyboardType='email-address'/>
        </View>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='lock' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput placeholder='Enter your password' secureTextEntry={true}/>
          </View>
         
          <TouchableOpacity 
         style={{
           backgroundColor:'blue',
           padding:10,
           borderRadius:10,
           marginBottom:30
         }}>
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'white'}}>Login</Text>
         </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
                <Text style={{color:COLORS.blue}}>Register</Text>
            </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
     </SafeAreaView>
  )
}

export default LoginScreen