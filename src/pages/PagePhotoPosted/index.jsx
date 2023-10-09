import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  ShareBox,
  AreaPhoto,
  ImageProfile,
  ImgProfile,
  Info,
  UserName,
  DataCreation,
  DescriptionPhoto,
  DescriptionDetails,
  ImgShare,
  SucessMessage,
} from "./styles";

// Hooks
import { useFetchPhotoPosted } from "../../hook/useFetchPhotoPosted";

//Components
import Navbar from "../../components/Navbar";

function PagePhotoPosted() {
  const navigate = useNavigate();

  // IDs
  const { idPhotoPosted } = useParams(); 
  const photoDetails = useFetchPhotoPosted(idPhotoPosted);


  if (!photoDetails || !photoDetails.photoPosted) {
    return <p>Loading...</p>;
  }

  // Image Posted
  const imagePathParts =
    photoDetails && photoDetails.photoPosted.imagePath
      ? photoDetails.photoPosted.imagePath.split("\\")
      : [];
  const fileName =
    imagePathParts.length > 0
      ? imagePathParts[imagePathParts.length - 1]
      : null;
  const imagePosted = fileName
    ? `http://localhost:8080/images/${fileName}`
    : `https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png`;

  // Profile Image
  const profileImageParts =
    photoDetails && photoDetails.photoPosted.profileImage
      ? photoDetails.photoPosted.profileImage.split("\\")
      : [];
  const profileImageFileName =
    profileImageParts.length > 0
      ? profileImageParts[profileImageParts.length - 1]
      : null;
  const profileImageUrl = profileImageFileName
    ? `http://localhost:8080/images/${profileImageFileName}`
    : `https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png`;

  return (
    <>
      <Navbar />
      <Container>
        <ShareBox>
          <AreaPhoto>
            <ImageProfile>
              {photoDetails && photoDetails.photoPosted && (
                <ImgProfile src={profileImageUrl} />
              )}

              <Info>
                <UserName>
                  @<span>{photoDetails.photoPosted.uploadedBy}</span>
                </UserName>

                <DataCreation>
                  <span>{photoDetails.photoPosted.creationDate}</span>
                </DataCreation>
              </Info>
            </ImageProfile>

            {photoDetails && photoDetails.photoPosted && (
              <ImgShare src={imagePosted} />
            )}

            <DescriptionPhoto>
              <DescriptionDetails>
                {photoDetails && photoDetails.photoPosted && (
                  <p>
                    @<span>{photoDetails.photoPosted.uploadedBy}</span>
                    {photoDetails.photoPosted.description}
                  </p>
                )}
              </DescriptionDetails>
            </DescriptionPhoto>
          </AreaPhoto>
        </ShareBox>
      </Container>
    </>
  );
}

export default PagePhotoPosted;
