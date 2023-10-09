import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const useFetchUpdateUser = () => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState("");

  const id = localStorage.getItem("id");

  const updateInfoUser = async (user) => {
    const response = await axios.put(
      `http://localhost:8080/update/profile/${id}`,
      user,
      {
        login: login,
        name: name,
        bio: bio,
      }
    );
    console.log('User updated successfully!', response.data);
  }



  return {
    updateInfoUser
  };
};