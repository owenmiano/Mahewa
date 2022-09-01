import React,{useContext} from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'

function HomeScreen() {
  const {isLoading,userInfo,logout}=useContext(AuthContext)

  return (
    <View style={styles.container}>
       <Spinner visible={isLoading}/>
        <Text>HomeScreen</Text>
        <Text >Welcome,{userInfo.userName}</Text>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default HomeScreen