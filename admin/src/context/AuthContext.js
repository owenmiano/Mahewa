import { createContext, useCallback, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASE_URL } from "../utils/services";
import { useNavigate} from 'react-router'

export const AuthContext = createContext("");

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("User")) || null
  );
  const [token, setToken] = useState(
  localStorage.getItem("Token") || null
  );
  const navigate=useNavigate();
  const [registerAdminSuccess, setRegisterAdminSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [admin, setAdmin] = useState([]);
  const [adminError, setAdminError] = useState(null);
  const [updateProfileError, setUpdatedProfileError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);
  const [adminLoading, setAdminLoading] = useState(false);
  // const [resetPasswordError, setResetPasswordError] = useState(null);
  // const [resetPasswordSuccess, setResetpasswordSuccess] = useState(null);
 
  const Token = token;
  useEffect(() => {
    const getUserAdmin = async () => {
      if(Token){
      try {
        setAdminLoading(true);
        setAdminError(null);
        const response = await axios.get(`${BASE_URL}/admin/find`, {
          headers: {
            token: `Bearer ${Token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setAdmin(response.data);
        setAdminLoading(false);
      } catch (error) {
        setAdminLoading(false);

        setAdminError(error.response.data.message);
      }
    }
    };
    getUserAdmin();
  }, [Token]);


  const registerUser = useCallback(async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register-user`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let userInfo = response.data;
      localStorage.setItem(
        "User",
        JSON.stringify({
          EmployeeName: userInfo.EmployeeName,
          isAdmin: userInfo.isAdmin,
          id: userInfo.id,
          email: userInfo.email,
        })
      );
      localStorage.setItem(
        "Token",
       userInfo.token
      );
      setIsLoading(false);
      setUser(userInfo);
      setToken(userInfo.token);
      navigate("/")
      toast.success(userInfo.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      setIsLoading(false);
      // If the call fails, show an error toast
      toast.error(error.userInfo.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });

  // LOGIN API

  const loginUser = useCallback(async (data) => {
    setIsLoading(true);
    setLoginError(null);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login-user`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let userInfo = response.data;
      localStorage.setItem(
        "User",
        JSON.stringify({
          EmployeeName: userInfo.EmployeeName,
          isAdmin: userInfo.isAdmin,
          id: userInfo.id,
          email: userInfo.email,
        })
      );
      localStorage.setItem(
        "Token",
        userInfo.token
      );
      setUser(userInfo);
      setToken(userInfo.token);
      setIsLoading(false);
      
        navigate("/")
        toast.success(userInfo.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });

  // LOGOUT USER

  const logoutUser = useCallback(async (e) => {
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    setUser(null);
    setToken(null);
  }, []);

  // Register Admin
  const registerAdmin = useCallback(async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/register-admin`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            token: `Bearer ${Token}`,
          },
        }
      );
      let result = response.data;
      setIsLoading(false);
      setRegisterAdminSuccess(result.message);
      setAdmin((prev) => [...prev, result]);
    } catch (error) {
      setIsLoading(false);
      // setRegisterError(error.result.message);
    }
  });


  // Delete Admin
  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/admin/delete/${id}`, {
        headers: {
          token: `Bearer ${Token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      let result = admin.filter((a) => a.id !== Number(id));
      setAdmin(result)
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // update User
  const updateUser = useCallback(async (data) => {
    if(Token){

    try {
      setIsLoading(true);
      setUpdatedProfileError(null);
      setUpdateSuccess(null)
      const response = await axios.put(
        `${BASE_URL}/auth/update-user/${user?.id}`,
        JSON.stringify(data),
        {
          headers: {
            "token": `Bearer ${Token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(Token)
      let updatedUser = response.data;
      console.log(updatedUser)
      let success = updatedUser.message;
      let currentStored = JSON.parse(localStorage.getItem('User'));
      localStorage.setItem('User',JSON.stringify({...currentStored,EmployeeName: updatedUser.EmployeeName,email:updatedUser.email,token:Token}))
     
      setIsLoading(false);
      setUpdateSuccess(success)
      setUser(updatedUser);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.data.message)
      setUpdatedProfileError(error.response.data.message);
    }
  }
  });

// Forgot Password
const forgotPassword = useCallback(async (data) => {
  setIsLoading(true);

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/forgot-password`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = response.data;
    setIsLoading(false);
   console.log(result)
  } catch (error) {
    setIsLoading(false);
console.log(error.response.data.message)
  }
});

// Reset Password
const resetPassword = useCallback(async (data,userId,token) => {
  setIsLoading(true);

  try {
    const response = await axios.put(
      `${BASE_URL}/auth/reset-password/${userId}/${token}`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = response.data;
    setIsLoading(false);
   console.log(result.message)
  } catch (error) {
    setIsLoading(false);
    // setResetPasswordError(error.response.data.message)
    console.log(error.response.data.message)
  }
});

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        token,
        user,
        registerAdminSuccess,
        ToastContainer,
        isLoading,
        loginError,
        logoutUser,
        loginUser,
        registerAdmin,
        admin,
        adminError,
        adminLoading,
        updateUser,
        updateProfileError,
        updateSuccess,
        deleteAdmin,
        forgotPassword,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};