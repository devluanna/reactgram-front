import React from "react";
import axios from "axios";

export const useFetchImage = () => {
  const id = localStorage.getItem("id");

  const updateImage = async (photo) => {
    try {
        const formData = new FormData();
        formData.append('file', photo.file);

      const response = await axios.put(
        `http://localhost:8080/update/profile/image/${id}`,
        formData,
      );
      console.log('Photo uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading photo', error);
    }
  };


  return {
    updateImage
  };
};