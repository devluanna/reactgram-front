import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPhotos(idDashboard) {
  const [dashboard, setDashboard] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (idDashboard) {
      axios.get(`http://localhost:8080/dashboard/${idDashboard}`)
        .then((response) => {
          if (response.data.photos) {
            setPhotos(response.data.photos);
           
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar as fotos:", error);
        });
    }
  }, [idDashboard]);

  return photos;
}


export default useFetchPhotos;