import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Components
import Navbar from "../../components/Navbar";
import ButtonDefault from "../../assets/ButtonDefault";

//hooks
import useFetchUsername from "../../hook/useFetchUsername";
import useFetchPhotos from "../../hook/useFetchPhotos";

import {
  Container,
  ProfileBox,
  ImageProfile,
  HeaderInfo,
  Username,
  DivInfo,
  DivImage,
  DivUsername,
  Name,
  Bio,
  QtdPhotos,
  Photos,
  DashPhotos,
  ImgProfile,
  Imgs,
  Message0,
} from "./styles";

const Profile = () => {
  const id = localStorage.getItem("id");
  const idDashboard = localStorage.getItem("idDashboard");

  const userData = useFetchUsername(id);
  const photos = useFetchPhotos(idDashboard);

  //Navigate
  const navigate = useNavigate();

  const buttonUpdate = () => {
    localStorage.setItem("token", "");
    navigate(`/update`);
  };


 // Profile Image
 const parts = userData.profileImage.split("\\");
 const fileName = parts[parts.length - 1];
 
 const profileImageUrl = fileName
   ? `http://localhost:8080/images/${fileName}`
   : `https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png`;

  return (
    <>
      <Navbar />

      <Container>
        <ProfileBox>
          <HeaderInfo>
            <DivInfo>
              <DivImage>
                <ImageProfile>
                <ImgProfile
                src={profileImageUrl}
                alt="Profile Image"
              />
            </ImageProfile>
              </DivImage>

              <DivUsername>
                <Username>
                  <span>{userData.login}</span>{" "}
                  <ButtonDefault
                    onClick={buttonUpdate}
                    name={"edit your profile"}
                    type={"editUser"}
                    sizeFont={"0.90rem"}
                    sizeWidth={"auto"}
                    sizeHeight={"auto"}
                  ></ButtonDefault>
                </Username>

                <Name>{userData.name}</Name>
                <Bio>
                  <span>{userData.bio}</span>
                </Bio>

                <QtdPhotos>
                  <span>{photos.length}</span>
                  <Photos>
                    <span>photos</span>
                  </Photos>
                </QtdPhotos>
              </DivUsername>
            </DivInfo>
          </HeaderInfo>

          <DashPhotos>
            {photos.length > 0 ? (
              photos.map((photo) => {
                const parts = photo.imagePath.split("\\");
                const namePhotos = parts[parts.length - 1];

                return (
                  <Link to={`/photos/${photo.idPhotoPosted}`}  key={photo.idPhotoPosted}>
                  <Imgs
                    src={`http://localhost:8080/images/${namePhotos}`}
                    alt={photo.description}
                  />
                  </Link>
                );
              })
            ) : (
              <Message0>
                <span>There are no photos at the moment</span>
              </Message0>
            )}
          </DashPhotos>
        </ProfileBox>
      </Container>
    </>
  );
};

export default Profile;
