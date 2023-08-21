import { useContext  } from 'react'
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/Navbar";
import { AuthContextProvider } from './context/AuthContext';


function App() {
  // const {user,token,ToastContainer}=useContext(AuthContextProvider)
  return (
    <>
    <Container className="text-secondary">
    <NavBar/>
    {/* <ToastContainer/> */}
    <Routes>
      {/* <Route path="/register" element={<Register/>} /> */}
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/" element={<Home/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password/:userId" element={<ResetPassword/>} />
      <Route element={<PrivateRoutes token={token}/>}>
              <Route path="/users" element={<Users/>} />
              <Route path="/profile" element={<Profile/>} />
          </Route> */}

    </Routes>
    </Container>
      
    </>
    

  );
}

export default App;
