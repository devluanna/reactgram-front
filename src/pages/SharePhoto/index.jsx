import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ShareBox,
  ShareArea,
  ImageArea,
  Label,
  Form,
  InputTextArea,
  Input,
  TitleInput,
  HeaderArea,
  SharePhotoTitle,
  Subtitle,
  BoxButton,
  ImgShare,
  SucessMessage,
} from "./styles";

// Hooks
import useFetchUsername from "../../hook/useFetchUsername";
import { useFetchShare } from "../../hook/useFetchShare";

// Assets
import ButtonDefault from "../../assets/ButtonDefault";

//Components
import Navbar from "../../components/Navbar";

function SharePhoto() {
  
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const idDashboard = localStorage.getItem("idDashboard");

  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const [registerSucess, setRegisterSucess] = useState(false);
  const [invalidError, setInvalidError] = useState(false);

  const [flagError, setFlagError] = useState(false);
  const [flagSucess, setFlagSucess] = useState(false);

  const userData = useFetchUsername(id);
  const { insertPhoto } = useFetchShare(id);

  const handleProfileClick = () => {
    navigate(`/${userData.login}`);
  };

  const createPhoto = async (event) => {
    event.preventDefault();
    const newPhoto = {
      description: description,
      file: selectedFile,
    };

    if (description && selectedFile) {
      insertPhoto(newPhoto);
      console.log(newPhoto);
      setRegisterSucess(true);
      setFlagSucess(true);
        setTimeout(() => {
          navigate(`/${userData.login}`);
        }, 2000);
    } else {
      setRegisterSucess(false);
      setFlagSucess(false);
      setFlagError(true);
    }
  };




  return (
    <>
      <Navbar />
      <Container>
        <ShareBox>
          <ImageArea>
            {" "}
            {selectedFile ? (
              <ImgShare
                src={URL.createObjectURL(selectedFile)}
                alt={selectedFile.name}
              />
            ) : (
              <span>No file selected</span>
            )}
          </ImageArea>

          <ShareArea>
            <HeaderArea>
              <SharePhotoTitle>
                Share your photo
                <Subtitle>Share your photos around the world!</Subtitle>
              </SharePhotoTitle>
            </HeaderArea>

            <Form onSubmit={createPhoto}>
              <Label>
                <TitleInput>Choose your image</TitleInput>

                <Input
                  required
                  type="file"
                  placeholder="React Gram"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setSelectedFile(file);
                  }}
                />
              </Label>

              <Label>
                <TitleInput>Description</TitleInput>
                <InputTextArea
                  required
                  type="text"
                  placeholder="reactgram"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Label>

              {setRegisterSucess && flagSucess && (
                <SucessMessage>
                  <span>Photo was shared successfully, please wait.</span>
                </SucessMessage>
              )}

              <Label>
                <BoxButton>
                  <ButtonDefault
                    name={"share"}
                    type={"share"}
                    sizeFont={"1.3em"}
                    sizeWidth={"411px"}
                    sizeHeight={"36px"}
                  ></ButtonDefault>

                  <ButtonDefault
                    onClick={handleProfileClick}
                    name={"cancel"}
                    type={"cancel"}
                    sizeFont={"1.3em"}
                    sizeWidth={"411px"}
                    sizeHeight={"36px"}
                  ></ButtonDefault>
                </BoxButton>
              </Label>
            </Form>
          </ShareArea>
        </ShareBox>
      </Container>
    </>
  );
}

export default SharePhoto;
