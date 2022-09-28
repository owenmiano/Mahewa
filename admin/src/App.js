import Login from "./pages/login/Login";
import './app.css'
import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Missing from "./pages/Missing";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
         {/* Public routes */}
        <Route path="login" element={<Login/>} />
        
        {/* Private routes */}
        <Route element={<RequireAuth/>}>
          <Route path="/" element={<Home/>} />
        </Route>
        
       
        {/* catch all */}
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  );
}

export default App;
