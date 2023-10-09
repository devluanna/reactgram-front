import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
    userGetAll
  } from "../api/routesApi";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [userList, setUserList] = useState([]);
    const [token, setToken] = useState();
    const [usersGlobal, setUsersGlobal] = useState([]);
  

useEffect(() => {
    if (localStorage.getItem("token")) {
      loadUsers();
    }
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get(userGetAll, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsersGlobal(response.data.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loadUsers, token, setToken, usersGlobal, setUsersGlobal}}
    >
      {children}
    </UserContext.Provider>
  );
};