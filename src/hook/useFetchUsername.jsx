import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function useFetchUsername(id) {
  const [userData, setUserData] = useState({
    login: "",
    name: "",
    bio: "",
    profileImage: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/user/${id}`)
        .then((response) => {
          if (response.data) {
            setUserData({
              login: response.data.login || "",
              name: response.data.name || "",
              bio: response.data.bio || "",
              profileImage: response.data.profileImage || ""
            });
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar o username:", error);
        });
    }
  }, [id]);

  return useMemo(() => userData, [userData]);
}

export default useFetchUsername;
