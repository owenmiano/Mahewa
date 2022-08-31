import React,{useState,useContext} from 'react'
import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import logo from '../assets/images/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../components/colors'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../context/AuthContext'

 
function LoginScreen({navigation}) {
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const {isLoading,login}=useContext(AuthContext)

  return (
     <SafeAreaView style={{flex:1,justifyContent:'center'}}>
      <Spinner visible={isLoading}/>
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
          <TextInput 
          placeholder='Enter your email address' 
          keyboardType='email-address'
          onChangeText={text=>setEmail(text)}
          placeholderTextColor='#000'
          autoCapitalize = 'none'
          />
        </View>
        <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25,alignItems:'center'}}>
          <Icon name='lock' style={{fontSize:24,color:"black",marginRight:5}}/>
          <TextInput 
          placeholder='Enter your password'
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          placeholderTextColor='#000'
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
          login(email,password)
         }}
         >
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'white'}}>Login</Text>
         </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={{color:COLORS.blue}}>Register</Text>
            </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
     </SafeAreaView>
  )
}

export default LoginScreen