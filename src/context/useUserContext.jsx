import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    console.log("Contexto não encontrado");
  }
  return context;
};