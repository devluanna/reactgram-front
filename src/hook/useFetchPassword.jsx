import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const useFetchPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const id = localStorage.getItem("id");

  const changePassword = async (pass) => {
    const response = await axios.put(
      `http://localhost:8080/update/profile/password/${id}`,
      pass,
      {
        password: password,
        confirmPassword: confirmPassword,
      }
    );
    console.log("User updated successfully!", response.data);
  };

  return {
    changePassword,
  };
};
