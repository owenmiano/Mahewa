import React,{useContext} from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Products from '../components/Products'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ProductContext } from '../context/ProductsContext';

function HomeScreen() {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const {isLoading,errors,products}=useContext(ProductContext)
  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
      <Text>category list</Text>
      </View>
    );
  };

  return (
    <View style={{flex:1,backgroundColor:'#fff',paddingHorizontal:10}}>
       <View style={styles.header}>
          <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color:'#0096FF', fontWeight: 'bold'}}>Mahewa</Text>
          </View>
          <Icon name="shopping-cart" size={28} />
       </View>

        <Products/>
        
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
  marginTop:20,
  flexDirection:'row',
  justifyContent:'space-between',    
  },
 
})

export default HomeScreen