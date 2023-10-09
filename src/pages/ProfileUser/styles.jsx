import styled, { css } from "styled-components";

//Boxs
export const Container = styled.div`
  display: flex;
  margin: 0;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ProfileBox = styled.div`
  width: 75%;
  display: grid;
  margin-top: 10%;
  border-radius: 10px;
  grid-template-rows: 25% 75%;
  border: 1px solid #e4e2dd;
  padding-bottom: 1%;
  min-width: 500px;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  @media (min-width: 50px) and (max-width: 700px) {
    margin-top: 30%;
    min-width: 450px;
    grid-template-rows: 25% 65% 20%;
  }
  @media (min-width: 701px) and (max-width: 1500px) {
    margin-top: 15%;
  }
`;

export const HeaderInfo = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  @media (min-width: 50px) and (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 5%;
  }
`;

// Info User

export const DivInfo = styled.div`
  grid-template-columns: 10% 16% 69%;
  display: grid;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e4e2dd;
  @media (min-width: 50px) and (max-width: 900px) {
    grid-template-columns: 40% 60%;
  }
  @media (min-width: 701px) and (max-width: 1200px) {
    grid-template-columns: 30% 70%;
  }
`;

export const DivImage = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 50px) and (max-width: 700px) {
    grid-column: 1;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }
  @media (min-width: 701px) and (max-width: 1200px) {
    grid-column: 1;
  }
`;

export const ImageProfile = styled.div`
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-column: 2;
  width: 200px;
  height: 200px;
  @media (min-width: 50px) and (max-width: 700px) {
    margin-top: 10%;
    width: 100px;
    height: 100px;
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    width: 150px;
    height: 150px;
  }
`;

export const DivUsername = styled.div`
  position: relative;
  width: auto;
  height: 100%;
`;

export const Username = styled.div`
  height: 20px;
  width: auto;
  padding: 5px;
  grid-column: 3;
  margin-top: 2%;
  border-radius: 5px;
  span {
    margin-right: 2%;
    font-family: 1rem;
    color: #2b2b2b;
    font-weight: 600;
    font-family: Verdana;
  }
`;

export const Name = styled.div`
  height: 20px;
  width: auto;
  padding: 5px;
  grid-column: 3;
  margin-top: 2%;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2b2b2b;
  font-family: Verdana;
`;

export const Bio = styled.div`
  height: 20px;
  width: 30%;
  padding: 5px;
  grid-column: 3;
  border-radius: 5px;
  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: #2b2b2b;
    font-family: Verdana;
  }
  @media (min-width: 50px) and (max-width: 900px) {
    width: 100%;
  }
  @media (min-width: 901px) and (max-width: 1500px) {
    width: 100%;
  }
`;

export const QtdPhotos = styled.div`
  height: 20px;
  width: 30%;
  padding: 5px;
  grid-column: 3;
  border-radius: 5px;
  span {
    font-size: 1rem;
    font-weight: 900;
    color: #2b2b2b;
    font-family: Verdana;
  }
  @media (min-width: 50px) and (max-width: 700px) {
    width: 100%;
  }
`;

export const Photos = styled.div`
  height: 20px;
  width: 30%;
  grid-column: 3;
  border-radius: 5px;
  span {
    font-size: 0.95em;
    font-weight: 900;
    color: #2b2b2b;
    font-family: ImportedSimple;
  }
  @media (min-width: 50px) and (max-width: 700px) {
    width: 100%;
  }
`;

// Dashboard Photos
export const DashPhotos = styled.div`
  justify-content: center;
  align-items: center;
  grid-rows: 2;
  height: 100%;
  width: 100%;
  margin-top: 1%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    margin-right: 10px;
    float: right;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 5px black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: white;
    margin-top: 25px;
    padding-top: 0px;
  }

  &::-webkit-scrollbar-thumb {
    height: 80%;
    width: 15px;
    margin-left: 20px;
    background-color: white;
    border-right: 6px solid white;
  }
  @media (min-width: 50px) and (max-width: 700px) {
    margin-top: 8%;
  }
`;

// Images

export const Imgs = styled.img`
  cursor: pointer;
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 0px;
  margin-right: 5px;
  @media (min-width: 50px) and (max-width: 700px) {
    left: 2%;
    width: 210px;
    height: 210px;
  }
`;

export const ImgProfile = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 50px) and (max-width: 700px) {
    width: 150px;
    height: 150px;
    position: relative;
  }
  @media (min-width: 701px) and (max-width: 1500px) {
    width: 150px;
    height: 150px;
    position: relative;
  }
`;

// Message
export const Message0 = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  span {
    display: block;
    font-size: 1.7em;
    font-weight: 900;
    color: #2b2b2b;
    font-family: ImportedSimple;
  }
`;
