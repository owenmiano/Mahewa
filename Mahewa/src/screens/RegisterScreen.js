import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import logo from '../assets/images/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../components/colors'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'


 
function RegisterScreen({navigation}) {
  const [userName,setUserName]=useState(null)
  const [email,setEmail]=useState(null)
  const [phoneNo,setphoneNo]=useState(null)
  const [password,setPassword]=useState(null)

  const {isLoading,register}=useContext(AuthContext)
  return (
     <SafeAreaView style={{flex:1,justifyContent:'center'}}>
      <Spinner visible={isLoading}/>
        <KeyboardAvoidingView>  
        <ScrollView 
        contentContainerStyle={{

            //  marginTop: StatusBar.currentHeight || 0,
            paddingHorizontal:25
        }}
        > 
        <View>
        {/* <Image source={logo} style={{height:300}}/> */}
        </View>
        <Text 
        style={{fontSize:28,
        fontWeight:'500',
        color:'#333',
        marginBottom:15
        }}>
        Register
        </Text>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='account-circle' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput
           placeholder='Enter your username'
           placeholderTextColor='#000'
           onChangeText={text=>setUserName(text)}
            />
          </View>
          <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='phone' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput 
          placeholder='Enter your Phone Number' 
          autoCapitalize = 'none'
          placeholderTextColor='#000'
          onChangeText={text=>setphoneNo(text)}
          />
          </View>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='email' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput 
          placeholder='Enter your email address' 
          keyboardType='email-address'
          placeholderTextColor='#000'
          onChangeText={text=>setEmail(text)}
          autoCapitalize = 'none'
          />

        </View>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='lock' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput 
          placeholder='Enter your password' 
          placeholderTextColor='#000'
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          autoCapitalize = 'none'
          />
          </View>
         
          <TouchableOpacity 
         style={{
           backgroundColor:'blue',
           padding:10,
           borderRadius:10,
           marginBottom:30
         }}
         onPress={()=>{
          register(password,email,userName,phoneNo)
         }}
         >
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'white'}}>Register</Text>
         </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text>Already Registered? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:COLORS.blue}}>Login</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
     </SafeAreaView>
  )
}

export default RegisterScreen