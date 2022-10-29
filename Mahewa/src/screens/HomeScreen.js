import React,{useContext} from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import Products from '../components/Products'

function HomeScreen() {

  return (
    <View style={styles.container}>
        <Products/>
        
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    
  }
})

export default HomeScreen