import Login from "./pages/login/Login";
import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Missing from "./pages/Missing";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Routes>
      
         {/* Public routes */}
        <Route path="login" element={<Login/>} />
        
        {/* Private routes */}
        <Route  element={<Layout/>} >
        <Route  element={<RequireAuth/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/product" element={<Product/>} />
        </Route>
      </Route>

       {/* catch all */}
       <Route path="*" element={<Missing/>} />
    </Routes>
    
  );
}

export default App;
