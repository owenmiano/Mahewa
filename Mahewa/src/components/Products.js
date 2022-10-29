import React,{useContext} from 'react'
import { FlatList, Text, View,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import { ProductContext } from '../context/ProductsContext'
import {numberWithCommas} from '../components/format'

function Products() {
  const {isLoading,errors,products}=useContext(ProductContext)
  
 
  
  return (
    <View style={styles.container}>
      <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={product => product._id}
      renderItem={({item: product}) => (
        <TouchableOpacity>
          <View
            style={styles.item}>
              <Image style={{width:80,height:80}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} alt="product x" resizeMode="contain"/>
            <Text style={{fontSize:18}}>{product.title}</Text>
            <Text style={{fontSize:18}}>{product.category}</Text>
            <Text style={{fontSize:18}}>Ksh {numberWithCommas(product.price)}</Text>
          </View>
        </TouchableOpacity>
      )}
      />
        
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  item: {
   padding:30,
   borderWidth:0.75,
   margin:'1%',
  //  alignItems:'center',
  },

})
export default Products