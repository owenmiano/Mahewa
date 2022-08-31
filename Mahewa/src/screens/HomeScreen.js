import React,{useContext} from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

function HomeScreen() {
  const {isLoading,userInfo}=useContext(AuthContext)

  return (
    <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Text >Welcome,{userInfo.userName}</Text>
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