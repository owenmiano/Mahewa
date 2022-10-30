import React,{useContext} from 'react'
import { FlatList, Text, View,StyleSheet, TouchableOpacity ,Image, Dimensions} from 'react-native'
import { ProductContext } from '../context/ProductsContext'
import {numberWithCommas} from '../components/format'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { BASE_URL } from './config'
const width =Dimensions.get("screen").width/2-20

function Products() {
  const {isLoading,errors,products}=useContext(ProductContext)
 
  
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      columnWrapperStyle={{justifyContent:'space-between'}}
      contentContainerStyle={{
        marginTop:10,
        paddingBottom:50
      }}
      data={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={product => product._id}
      renderItem={({item: product}) => (
        <TouchableOpacity
        // onPress={() => navigation.navigate('Details',product)}
        >
          <View
            style={styles.item}>
            <View style={{height:100,alignItems:'center'}}>
            <Image style={{width:'100%',height:'100%'}} source={{uri: `${BASE_URL}/${product.image}`}} alt="product x" resizeMode="contain"/>
           
            </View>
            <View style={{marginTop:5,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:13,fontWeight:'bold',color:'#0096FF'}}>{product.title}</Text>
            <Text style={{fontSize:13,fontWeight:'bold'}}>{product.brand}</Text>
            <Text style={{fontSize:13,fontWeight:'bold'}}>Ksh {numberWithCommas(product.price)}</Text>
            </View>
            <View style={{marginTop:15,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity 
               style={{
                      backgroundColor:'blue',
                      padding:5,
                      borderRadius:10,
                      marginBottom:5
                      }}>
            <Text style={{textAlign:'center',fontSize:10,color:'white'}}>Add to cart</Text>
         </TouchableOpacity>
            </View>
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
    height:250,
    width,
    marginHorizontal:5,
    borderRadius:10,
    marginBottom:20,
    padding:10,
    backgroundColor:'gray'
  //   flex:1,
  //  padding:5,
  //  borderWidth:0.75,
  //  margin:'1%',
  // //  alignItems:'center',
  },

})
export default Products