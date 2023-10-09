import { useState, useEffect, useMemo } from "react";
import axios from "axios";

export const useFetchPhotoPosted = (id) => {
  const [photoDetails, setPhotoDetails] = useState();


  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/photos/${id}`)
        .then((response) => {
          if (response.data) {
            setPhotoDetails(response.data);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar os detalhes da foto:", error);
        });
    }
  }, [id]);


  useEffect(() => {
    console.log("Detalhes da foto:", photoDetails);
  }, [photoDetails]);

  return useMemo(() => photoDetails, [photoDetails]);
};
