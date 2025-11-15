import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
    axios.post(`${import.meta.env.VITE_SERVER_URL}` + "/login", {username: username, password: password}).then(
      (res)=>{
        if (res.status === 200)
        {
          setUser({ username });
          return true;
        }
    }).catch((err)=>{
        alert(err.response.data.message);
        return false;
    })

  }
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
