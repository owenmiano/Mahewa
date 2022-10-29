import React,{createContext, useEffect,useContext,useState} from 'react'
import { BASE_URL } from '../components/config'
import { AuthContext } from './AuthContext'
import axios from 'axios'


export const ProductContext=createContext()


export const ProductProvider=({children})=>{
    const {userInfo}=useContext(AuthContext)

    const [isLoading,setIsLoading]=useState(false)
    const[products,setProducts]=useState({})
    const [errors,setErrors]=useState("")


    const allProducts=async()=>{
        try {
            setIsLoading(true)
            await axios.get(`${BASE_URL}/product`,
           
            ).then(res=>{
                let product=res.data
                console.log(product)
                setProducts(product)
                 setIsLoading(false)
                 
            })
        } catch (error) {
          setIsLoading(false)
          setErrors(error.response.data.message)
          console.log(error.response.data.message)
        }
      }

useEffect(()=>{
    allProducts();
},[])
return(
    <ProductContext.Provider 
        value={{
          isLoading,
          errors,
          products
          }}>
         {children}
      </ProductContext.Provider>
    )
}