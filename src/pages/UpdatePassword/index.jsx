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
  TitleInput,
  UserPage,
  UserTitle,
  BoxButton,
  FooterBox,
  MessageValid,
  AlertMessage,
  SucessMessage,
} from "./styles";

// Hooks
import useFetchUsername from "../../hook/useFetchUsername";
import { useFetchPassword } from "../../hook/useFetchPassword";

//Components
import Navbar from "../../components/Navbar";

// Assets
import ButtonDefault from "../../assets/ButtonDefault";

function UpdatePassword() {
  //Storage
  localStorage.setItem("token", "");
  const id = localStorage.getItem("id");

  //Hook
  const { changePassword } = useFetchPassword(id);
  const userData = useFetchUsername(id);

  //Navigate
  const navigate = useNavigate();

  // Consts
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validPassword, setValidPassword] = useState(false);
  const [flagValidPassword, setFlagValidPassword] = useState(false);

  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [flagValidConfirmPassword, setFlagValidConfirmPassword] =
    useState(false);

  const [changeSucess, setChangeSucess] = useState(false);
  const [flagSucess, setFlagSucess] = useState(false);

  const buttonCancel = () => {
    localStorage.setItem("token", "");
    navigate(`/${userData.login}`);
  };

  const editPassword = async (event) => {
    event.preventDefault();

    if (password && confirmPassword) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

      if (password.length < 8 && !passwordRegex.test(password)) {
        setChangeSucess(false);
        setFlagSucess(false);
        setFlagValidPassword(true);
        setValidPassword(true);
        setTimeout(() => {
          setFlagValidPassword(false);
          setValidPassword(false);
        }, 5000);
      } else {
        setFlagValidPassword(false);
        setValidPassword(false);
      }

      {
        if (confirmPassword === password) {
          setChangeSucess(false);
          setFlagSucess(false);
          setFlagValidConfirmPassword(false);
          setValidConfirmPassword(false);
        } else {
          setFlagValidConfirmPassword(true);
          setValidConfirmPassword(true);
          setTimeout(() => {
            setFlagValidConfirmPassword(false);
            setValidConfirmPassword(false);
          }, 5000);
        }

        try {
          const newPass = {
            password: password,
            confirmPassword: confirmPassword,
          };
          await changePassword(newPass);
          setChangeSucess(true);
          setFlagSucess(true);
          setTimeout(() => {
            setChangeSucess(false);
            setFlagSucess(false);
            navigate(`/${userData.login}`);
          }, 3000);
        } catch (error) {
          console.error(
            "Error change password, check if the information is valid!",
            error
          );
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            console.error("Error", error.response.data.message);
          }
          //setInvalidError(true);
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <UserBox>
          <UserPage>
            <UserTitle>Change your password.</UserTitle>
          </UserPage>

          <Form onSubmit={editPassword}>
            <Label>
              <TitleInput>Password</TitleInput>
              <Input
                type="password"
                required
                placeholder="●●●●●●●●"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>

            <Label>
              <TitleInput>Confirm Password</TitleInput>
              <Input
                type="password"
                required
                placeholder="●●●●●●●●"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Label>

            {setChangeSucess && flagSucess && (
              <SucessMessage>
                <span>Your password has been changed successfully.</span>
              </SucessMessage>
            )}

            {setValidConfirmPassword && flagValidConfirmPassword && (
              <AlertMessage>
                <span>Passwords must be the same</span>
              </AlertMessage>
            )}

            {setValidPassword && flagValidPassword && (
              <AlertMessage>
                <span>
                  For the security of your account, your password needs to be
                  strong. Please see the requirements and follow them.
                </span>
              </AlertMessage>
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

                <ButtonDefault
                  onClick={buttonCancel}
                  name={"cancel"}
                  type={"cancel"}
                  sizeFont={"1.3em"}
                  sizeWidth={"411px"}
                  sizeHeight={"36px"}
                ></ButtonDefault>
              </BoxButton>
            </Label>

            <MessageValid>
              <span>
                Your password must contain:
                <br /> <br />
                - 8 Characters
                <br />
                - lowercase and uppercase letters
                <br />- Special characters.
              </span>
            </MessageValid>
          </Form>

          <FooterBox />
        </UserBox>
      </Container>
    </>
  );
}

export default UpdatePassword;
