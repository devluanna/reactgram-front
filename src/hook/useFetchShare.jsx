import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const useFetchShare = () => {

const id = localStorage.getItem("id");


  const insertPhoto = async (photo) => {
    try {
        const formData = new FormData();
        formData.append('file', photo.file);
        formData.append('description', photo.description);

      const response = await axios.post(
        `http://localhost:8080/upload/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Photo uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading photo', error);
    }
  };

  return {
    insertPhoto
  };
};
