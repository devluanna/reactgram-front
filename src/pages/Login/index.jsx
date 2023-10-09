import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


import {
  Container,
  LoginBox,
  Label,
  Form,
  Input,
  TitleInput,
  LoginPage,
  LoginTitle,
  Subtitle,
  BoxButton,
  FooterBox,
  RegisterHere,
  SubtitleRegister,
  FooterSpan,
  Page,
  LogoGRAM,
  AlertMessage,
  AlertError
} from "./styles";

// Assets
import ButtonDefault from "../../assets/ButtonDefault";
import Logo from "../../assets/Logo";

// Context
import { useUserContext } from "../../context/useUserContext";

function Login() {

  const handleRegisterClick = () => {
    window.location.href = "/register";
  }; 

  let isServerError = false;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [invalidError, setInvalidError] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [flag, setFlag] = useState(false);

 localStorage.getItem("token");
 localStorage.getItem("id");
 localStorage.getItem("idDashboard");

 async function handleLogin(event) {
  event.preventDefault();

  if (login !== "" && password !== "") {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          login,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("idDashboard", response.data.idDashboard);
        window.location.href = "/home";
    
      } else {
        console.log("Incorrect login or password");
        setInvalidCredentials(true);
        setInvalidError(false);
        setFlag(true);
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Server error:",
          error.response.status,
          error.response.data
        );
        const isServerError = true; 
        setInvalidCredentials(false);
        setInvalidError(true);
        setFlag(true);
      } else if (error.request) {
        console.error("No response from server:", error.request);
        setFlag(true);
      }
    }
  }
}


  
  return (
    <Container>
      <LogoGRAM>
        <Logo />
      </LogoGRAM>

      <LoginBox>
        <LoginPage>
          <LoginTitle>Welcome!</LoginTitle>

          <Subtitle>log in and share your moments with the world!</Subtitle>
        </LoginPage>

        <Form onSubmit={handleLogin}>
          <Label>
            <TitleInput>Username</TitleInput>
            <Input
              type="text"
              required
              placeholder="reactgram"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </Label>

          <Label>
            <TitleInput>Password</TitleInput>
            <Input
              type="password"
              required
              placeholder="●●●●●●●●"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Label>

          {setInvalidCredentials && flag && !isServerError && (
            <AlertMessage>
              <span>Incorrect username or password! Try again.</span>
            </AlertMessage>
          )}

          {isServerError && flag && (
            <AlertError>
              <span>An error occurred, try again later.</span>
            </AlertError>
          )}

          <Label>
            <BoxButton>
              <ButtonDefault
                name={"Login"}
                type={"login"}
                sizeFont={"1.5em"}
                sizeWidth={"411px"}
                sizeHeight={"40px"}
              ></ButtonDefault>
            </BoxButton>
          </Label>
        </Form>

        <FooterBox>
          <RegisterHere>
            <SubtitleRegister>Do not have an account yet?</SubtitleRegister>

            <BoxButton>
              <ButtonDefault
                onClick={handleRegisterClick} 
                name={"Register now"}
                type={"buttonSimple"}
                sizeFont={"0.8em"}
                sizeWidth={"200px"}
                sizeHeight={"30px"}
              ></ButtonDefault>
            </BoxButton>
          </RegisterHere>
        </FooterBox>
      </LoginBox>

      <FooterSpan>© ReactGRAM - ReactGRAm for my first Full Stack project | Course React UDEMY</FooterSpan>
    </Container>
  );
}

export default Login;
