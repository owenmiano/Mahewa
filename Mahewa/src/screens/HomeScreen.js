import React,{useContext} from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'

function HomeScreen() {

  return (
    <View style={styles.container}>
        <Text >HomeScreen</Text>
        
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