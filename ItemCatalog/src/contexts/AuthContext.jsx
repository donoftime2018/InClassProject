import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {

    if (username === '' || password === '') {
      alert("Please fill in all fields");
    }

    else
    {
          axios.post("http://localhost:4000/login", {username: username, password: password}).then(
            (res)=>{
              if (res.status === 200)
              {
                setUser({ username});
              }
          }).catch((err)=>{
              console.log(err.response.data.message);
              alert(err.response.data.message);
          })
    }

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
