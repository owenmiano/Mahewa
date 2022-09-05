import React, { useContext } from 'react'
import { StatusBar } from 'react-native'
import { AuthProvider } from './src/context/AuthContext'
import Navigation from './src/components/navigation/Navigation';


function App() {
 
return (
  
         <AuthProvider>
            {/* <StatusBar backgroundColor="#06bcee"/> */}
          <Navigation/>
        
            
        </AuthProvider>
  )
}

export default App