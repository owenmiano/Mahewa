import React from 'react'
import { StatusBar } from 'react-native'
import { AuthProvider } from './src/context/AuthContext'
import Navigation from './src/components/navigation/Navigation';
import { ProductProvider } from './src/context/ProductsContext';


function App() {
 
return (
  
         <AuthProvider>
            {/* <StatusBar backgroundColor="#06bcee"/> */}
            <ProductProvider>
              <Navigation/>
            </ProductProvider>
         
        
            
        </AuthProvider>
  )
}

export default App