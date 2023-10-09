import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [userPermissions, setUserPermissions] = useState([]); 
  const [token, setToken] = useState(""); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    
    }
  }, []);

  const login = (token, userData, permissions) => {
    setToken(token);
    setUser(userData);
    setUserPermissions(permissions);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    setUserPermissions([]);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, userPermissions, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
