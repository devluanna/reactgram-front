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

export const ShareBox = styled.div`
  border-radius: 10px;
  height: 85%;
  margin-top: 2%;
  width: 75%;
  display: grid;
  min-width: 450px;
  position: relative;
  align-items: center;
  border: 1px solid #e4e2dd;
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

  @media (min-width: 50px) and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;
    height: 95%;
    margin-top: 25%;
  }
`;

export const AreaPhoto = styled.div`
  align-items: center;
  justify-content:center;
  display:flex;
  width:100%
  height:100%;
  margin-top:1%;
  flex-direction:column;
`;

export const ImgShare = styled.img`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  border-radius: 0px;
  @media (min-width: 50px) and (max-width: 600px) {
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: 0%;
  }
  @media (min-width: 601px) and (max-width: 1201px) {
    position: relative;
    margin-left: 0%;
    width: 450px;
    height: 450px;
    align-items: center;
    justify-content: center;
  }
`;

// Profile
export const ImageProfile = styled.div`
  height: 100%;
  width: 50%;
  margin-bottom: 0.5%;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
  display: flex;
  @media (min-width: 50px) and (max-width: 1200px) {
    height: 100%;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const ImgProfile = styled.img`
  width: 50px;
  height: 50px;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  @media (min-width: 50px) and (max-width: 700px) {
    width: 50px;
    height: 50px;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  @media (min-width: 701px) and (max-width: 1500px) {
    width: 50px;
    height: 50px;
    position: relative;
  }
`;

// Profile
export const Info = styled.div`
  flex-direction: column;
  margin-left: 1%;
`;

export const UserName = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  margin-left: 1%;
  margin-bottom: 1%;
  span {
    margin-right: 1%;
  
    display: flex;
    font-family: ImportedBold;
    font-size: 1rem;
    font-weight: 900;
  }
`;

export const DataCreation = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: inline-block;
  margin-left:1%;
  span {
    align-items: center;
    inline-block;
    font-family: Verdana;
    font-size: 0.9rem;
  }
`;

export const DescriptionPhoto = styled.div`
  height: 100%;
  width: 50%;
  font-family: ImportedSimple;
  font-size: 0.9rem;
  p {
    font-family:Verdana;
  }
  @media (min-width: 50px) and (max-width: 1200px) {
    height: 100%;
    width: 96%;
  }
`;

export const DescriptionDetails = styled.div`
height: 100%;
width: 100%;
flex-direction:row;
  span { 
    margin-right:1%;
    font-family: ImportedBold;
    font-size:1rem;
  }

`;
// Messages Alerts

export const SucessMessage = styled.div`
  border-radius: 5px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #137948;
  font-family: ImportedSimple;
  height: fit-content;
  margin-bottom: 2%;
  span {
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-size: 0.9em;
  }
`;
