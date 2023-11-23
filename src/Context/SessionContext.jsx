import React, { createContext, useContext, useState } from "react";
import {
  login,
  logout,
  verify,
  register,
  update,
  forgotpassword,
  updatepassword
} from "../Services/Auth.services";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password, remember) => {
    try {
      // Suponiendo que login es una función asíncrona que devuelve una promesa
      const token = await login(email, password, remember);

      // Llamar a storeToken después de obtener el token con éxito
      storeToken(token);
    } catch (error) {
      // Manejar el error de inicio de sesión
      console.error("Error en el inicio de sesión:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const browserToken = localStorage.getItem("authToken");
      //console.log(browserToken)
      const desco = await logout(browserToken);
      console.log(desco);
      //para que quiero validar el token?
      //si la desconexion es fallida, no se va a deslogear :)
      localStorage.removeItem("authToken");
      console.log("CHAO");
      setIsLoggedIn(false);
    } catch (error) {
      // Manejar el error de cierre de sesión
      console.error("Error en el cierre de sesión:", error);
    }
  };

  const getToken = async () => {
    const browserToken = localStorage.getItem("authToken");
    if (!browserToken) {
      handleLogout();
    }
    return browserToken;
  };

  const handleRegister = async (email, password, fullname, username) => {
    try {
      const goregister = await register(email, password, fullname, username);
      if (goregister) {
        return true;
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  const handleUpdate = async (email, password, fullname) => {
    try {
      const browserToken = localStorage.getItem("authToken");
      const goUpdate = await update(email, password, fullname, browserToken);
      //el update foto olvidate de hacerlo 1 por 1, en back haz toda la logica y ya esta.
      if (goUpdate) {
        //actualizar actualiza, pero tengo que actualizar la data del user, si quiero hacer eso tengo que
        // actualizar el token y volver a decodificarlo y volver a setearlo
        //seria tan sencillo como en el endpoint firmarlo otra vez y decodificarlo pero es una movida.
        //valorar no tener avatar porque cambiar el codigo para que no de error... me da igual.

        return true;
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };
  const forgotPassword = async (email) => {
    const checkUser = await forgotpassword(email)
  
    if (checkUser){
      return true;
    }
  };
  const updatePassword = async (email,password) => {
    const newPass = await updatepassword(email,password)
    if (newPass){
      return true;
    }
  };

  const storeToken = async (token) => {
    console.log(token);
    localStorage.setItem("authToken", token); //aqui ya lo meto
    console.log("Token insertado");
    authenticateUser();
  };

  const authenticateUser = async () => {
    // verificar lo que te ha devuelto
    const browserToken = localStorage.getItem("authToken");
    //console.log(browserToken);
    if (!browserToken) {
      handleLogout();
    }
    const data = await verify(browserToken);
    console.log(data);
    setUser(data);
    setIsLoggedIn(true);
    return data;
  };

  if (!isLoggedIn && !user && localStorage.getItem("authToken")) {
    authenticateUser();
  }

  const authContextValue = {
    isLoggedIn,
    handleLogin,
    handleLogout,
    authenticateUser,
    storeToken,
    user,
    handleRegister,
    handleUpdate,
    getToken,
    forgotPassword,
    updatePassword
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
