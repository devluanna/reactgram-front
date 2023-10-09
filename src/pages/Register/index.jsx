import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  RegisterBox,
  Label,
  Form,
  Input,
  TitleInput,
  RegisterPage,
  RegisterTitle,
  Subtitle,
  BoxButton,
  FooterBox,
  BackLogin,
  SubtitleBack,
  FooterSpan,
  LogoGRAM,
  AlertMessage,
  SucessMessage,
  MessageCredential,
  MessageValid,
} from "./styles";

// Assets
import ButtonDefault from "../../assets/ButtonDefault";
import Logo from "../../assets/Logo";

function Register() {
  const handleLoginClick = () => {
    window.location.href = "/";
  };

  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerSucess, setRegisterSucess] = useState(false);
  const [errorUsernameExists, setErrorUsernameExists] = useState(false);
  const [errorEmailExists, setErrorEmailExists] = useState(false);

  const [invalidError, setInvalidError] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);

  const [flagUsername, setFlagUsername] = useState(false);
  const [flagEmail, setFlagEmail] = useState(false);
  const [flagSucess, setFlagSucess] = useState(false);
  const [flagErrorUsername, setFlagErrorUsername] = useState(false);
  const [flagValidPassword, setFlagValidPassword] = useState(false);

  localStorage.setItem("token", "");

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

  const handleCreatedUser = async (event) => {
    event.preventDefault();

    if (name && email && login && password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

      if (password.length < 8 && !passwordRegex.test(password)) {
        setRegisterSucess(false);
        setFlagSucess(false);
        setFlagValidPassword(true);
        setValidPassword(true);
      } else {
        setTimeout(() => {
          setFlagValidPassword(false);
          setValidPassword(false);
        }, 2000);
      }
      if (login.includes(" ") || login.length < 3) {
        setRegisterSucess(false);
        setFlagSucess(false);
        setFlagErrorUsername(true);
        setInvalidUsername(true);
      } else {
        setTimeout(() => {
          setFlagErrorUsername(false);
          setInvalidUsername(false);
        }, 2000);
      }
      {
        const emailExists = users.some((user) => user.email === email);
        const loginExists = users.some((user) => user.login === login);
        if (emailExists) {
          setRegisterSucess(false);
          setFlagSucess(false);
          setFlagEmail(true);
          setErrorEmailExists(true);
        } else {
          setTimeout(() => {
            setErrorEmailExists(false);
            setFlagEmail(false);
          }, 2000);
        }
        if (loginExists) {
          setRegisterSucess(false);
          setFlagUsername(true);
          setFlagSucess(false);
          setErrorUsernameExists(true);
        } else {
          setTimeout(() => {
            setErrorUsernameExists(false);
            setFlagUsername(false);
          }, 2000);
        }
        if (!emailExists && !loginExists) {
          try {
            const response = await axios.post(
              "https://project-reactgram-production.up.railway.app/create",
              {
                name: name,
                email: email,
                login: login,
                password: password,
              }
            );
            console.log("User registered successfully!", response.data);
            setRegisterSucess(true);
            setFlagSucess(true);

            setTimeout(() => {
              setRegisterSucess(false);
              setFlagSucess(false);
              window.location.href = "/register";
            }, 2000);
            setFlagEmail(false);
            setFlagUsername(false);
            setInvalidError(false);
          } catch (error) {
            console.error(
              "Error creating user, check if the information is valid!",
              error
            );
            if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              console.error("Mensagem de erro:", error.response.data.message);
            }
            setInvalidError(true);
          }
        }
      }
    } else {
    }
  };

  return (
    <Container>
      <LogoGRAM>
        <Logo />
      </LogoGRAM>

      <RegisterBox>
        <RegisterPage>
          <RegisterTitle>Register</RegisterTitle>

          <Subtitle>Sign up to share photos around the world!</Subtitle>
        </RegisterPage>

        <Form onSubmit={handleCreatedUser}>
          <Label>
            <TitleInput>Name</TitleInput>
            <Input
              type="text"
              required
              placeholder="React Gram"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>

          <Label>
            <TitleInput>Username</TitleInput>
            <Input
              type="text"
              required
              placeholder="reactgram"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Label>

          <Label>
            <TitleInput>Email</TitleInput>
            <Input
              type="email"
              required
              placeholder="React Gram"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

          {setErrorUsernameExists && flagUsername && (
            <AlertMessage>
              <span>Username already exists, please choose another one.</span>
            </AlertMessage>
          )}

          {setErrorEmailExists && flagEmail && (
            <AlertMessage>
              <span>Email already exists, please choose another one.</span>
            </AlertMessage>
          )}

          {setRegisterSucess && flagSucess && (
            <SucessMessage>
              <span>User registered successfully!</span>
            </SucessMessage>
          )}

          {setValidPassword && flagValidPassword && (
            <MessageValid>
              <span>
                Your password must contain:
                <br />
                - 8 Characters
                <br />
                - lowercase and uppercase letters
                <br />- Special characters.
              </span>
            </MessageValid>
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
                name={"Register"}
                type={"register"}
                sizeFont={"1.3em"}
                sizeWidth={"411px"}
                sizeHeight={"36px"}
              ></ButtonDefault>
            </BoxButton>
          </Label>
        </Form>

        <FooterBox>
          <BackLogin>
            <SubtitleBack>Already have an account?</SubtitleBack>

            <BoxButton>
              <ButtonDefault
                onClick={handleLoginClick}
                name={"Login"}
                type={"buttonSimple"}
                sizeFont={"0.8em"}
                sizeWidth={"200px"}
                sizeHeight={"25px"}
              ></ButtonDefault>
            </BoxButton>
          </BackLogin>
        </FooterBox>
      </RegisterBox>

      <FooterSpan>
        © ReactGRAM - ReactGRAm for my first Full Stack project | Course React
        UDEMY
      </FooterSpan>
    </Container>
  );
}

export default Register;
