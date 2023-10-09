import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import {
  Container,
  UserBox,
  Label,
  Form,
  Input,
  InputTextArea,
  ImgProfile,
  TitleInput,
  UserPage,
  UserTitle,
  BoxButton,
  FooterBox,
  BackLogin,
  AlertMessage,
  SucessMessage,
  MessageCredential,
} from "./styles";

// Hooks
import useFetchUsername from "../../hook/useFetchUsername";
import { useFetchUpdateUser } from "../../hook/useFetchUpdateUser";
import { useFetchImage } from "../../hook/useFetchImage";

//Components
import Navbar from "../../components/Navbar";

// Assets
import ButtonDefault from "../../assets/ButtonDefault";

function UpdateUser() {
  //Storage
  localStorage.setItem("token", "");
  const id = localStorage.getItem("id");

  //Hook
  const { updateInfoUser } = useFetchUpdateUser(id);
  const { updateImage } = useFetchImage(id);

  //Navigate
  const navigate = useNavigate();

  // User profile image
  const userData = useFetchUsername(id);
  const parts = userData.profileImage.split("\\");
  const fileName = parts[parts.length - 1];

  // Consts
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [updateSucess, setUpdateSucess] = useState(false);
  const [errorUsernameExists, setErrorUsernameExists] = useState(false);

  const [invalidError, setInvalidError] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);

  const [flagUsername, setFlagUsername] = useState(false);
  const [flagSucess, setFlagSucess] = useState(false);
  const [flagErrorUsername, setFlagErrorUsername] = useState(false);
  const [flagValidPassword, setFlagValidPassword] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://project-reactgram-production.up.railway.app/users"
      );
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const editUser = async (event) => {
    event.preventDefault();

    if (login && name && bio) {
      if (login.includes(" ") || login.length < 3) {
        setUpdateSucess(false);
        setFlagSucess(false);
        setFlagErrorUsername(true);
        setInvalidUsername(true);
        setTimeout(() => {
          setFlagErrorUsername(false);
          setInvalidUsername(false);
        }, 2000);
      } else {
        const isCurrentUser = userData.login === login;
        const loginExists = users.some((user) => user.login === login);
        if (!isCurrentUser && loginExists) {
          setUpdateSucess(false);
          setFlagSucess(false);
          setFlagUsername(true);
          setErrorUsernameExists(true);
          setTimeout(() => {
            setErrorUsernameExists(false);
            setFlagUsername(false);
          }, 2000);
        } else {
          try {
            const newUser = {
              login: login,
              name: name,
              bio: bio,
            };
            if (selectedFile) {
              const newPhoto = {
                file: selectedFile,
              };
            await updateImage(newPhoto);
            await updateInfoUser(newUser);
            setUpdateSucess(true);
            setFlagSucess(true);
            setTimeout(() => {
              setUpdateSucess(false);
              setFlagSucess(false);
              navigate(`/${userData.login}`);
            }, 2000);}

            await updateInfoUser(newUser);
            console.log(newUser);
            setUpdateSucess(true);
            setFlagSucess(true);
            setTimeout(() => {
              setUpdateSucess(false);
              setFlagSucess(false);
              navigate(`/${userData.login}`);
            }, 2000);

          } catch (error) {
            console.error(
              "Error updating user, check if the information is valid!",
              error
            );
            if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              setUpdateSucess(false);
              setFlagSucess(false);
              console.error("Error", error.response.data.message);
            }
            setInvalidError(true);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (userData) {
      setLogin(userData.login);
      setName(userData.name);
      setBio(userData.bio);
    }
  }, [userData]);

  const profileImageUrl = fileName
   ? `http://localhost:8080/images/${fileName}`
   : `https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png`;

   const buttonPassword = () => {
    localStorage.setItem("token", "");
    navigate(`/updatePassword`);
  };
  return (
    <>
      <Navbar />
      <Container>
        <UserBox>
          <UserPage>
            <UserTitle>Update your information:</UserTitle>
          </UserPage>

          <Form onSubmit={editUser}>
            {selectedFile ? (
              <ImgProfile
                src={URL.createObjectURL(selectedFile)}
                alt={selectedFile.name}
              />
            ) : (
              <ImgProfile
              src={profileImageUrl}
              alt="Profile Image"
              />
            )}

            <Label>
              <TitleInput>Image profile</TitleInput>
              <Input
                type="file"
                placeholder="React Gram"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setSelectedFile(file);
                }}
              />
            </Label>

            <Label>
              <TitleInput>Username</TitleInput>
              <Input
                type="text"
                required
                placeholder={userData.login}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Label>

            <Label>
              <TitleInput>Name</TitleInput>
              <Input
                type="text"
                required
                placeholder={userData.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Label>

            <Label>
              <TitleInput>Bio</TitleInput>
              <InputTextArea
                type="text"
                required
                placeholder={userData.bio}
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
            </Label>

            {setErrorUsernameExists && flagUsername && (
              <AlertMessage>
                <span>Username already exists, please choose another one.</span>
              </AlertMessage>
            )}

            {setUpdateSucess && flagSucess && (
              <SucessMessage>
                <span>Update your information!</span>
              </SucessMessage>
            )}


            {setInvalidUsername && flagErrorUsername && (
              <MessageCredential>
                <span>
                  Your username must contain 3 characters and cannot contain
                  spaces.
                </span>
              </MessageCredential>
            )}
            <Label>
              <BoxButton>
                <ButtonDefault
                  name={"Submit"}
                  type={"share"}
                  sizeFont={"1.3em"}
                  sizeWidth={"411px"}
                  sizeHeight={"36px"}
                ></ButtonDefault>
              </BoxButton>
            </Label>
          </Form>

          <FooterBox>
            <BackLogin>
              <BoxButton>
                <ButtonDefault
                 onClick={buttonPassword}
                  name={"change password"}
                  type={"buttonSimple"}
                  sizeFont={"0.8em"}
                  sizeWidth={"200px"}
                  sizeHeight={"25px"}
                ></ButtonDefault>
              </BoxButton>
            </BackLogin>
          </FooterBox>
        </UserBox>
      </Container>
    </>
  );
}

export default UpdateUser;
