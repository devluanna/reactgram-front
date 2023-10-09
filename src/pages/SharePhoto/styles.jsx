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
  margin-top:2%;
  width: 75%;
  display: grid;
  min-width: 450px;
  position: relative;
  align-items: center;
  grid-template-columns:50% 50%;
  border: 1px solid #e4e2dd;
  @media (min-width: 50px) and (max-width: 1200px) {
    grid-template-columns:100%;
    grid-template-rows:50% 50%;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;
    height: 95%;
    margin-top:25%;
  }
`;

// Area Image
export const ImageArea = styled.div`
  grid-column:1;
  width: 100%;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  span {
    color:#2b2b2b;
    font-family: ImportedSimple;
    font-size:1.5rem;
  }
  @media (min-width: 50px) and (max-width: 1200px) {
    grid-column:1;
    grid-row:1;
    span {
      margin-top:5%;
      color:#2b2b2b;
      font-family: ImportedSimple;
      font-size:1.5rem;
    }
  }
`;

export const ImgShare = styled.img`
  width:100%;
  height: 100%;
  display: grid;
  position:relative;
  border-radius:0px;
  margin-left:5%;
  @media (min-width: 50px) and (max-width: 600px) {
    position:relative;
    width:100%;
    height: 100%;
    margin-left:0%;
    
  }
  @media (min-width: 601px) and (max-width: 1201px) {
    position:relative;
    margin-left:0%;
    width:450px;
    height:450px;
    align-items: center;
    justify-content: center;
  }
`;


// Titles Box

export const HeaderArea = styled.div`
  position: relative;
  color: #2b2b2b;
  height: 100%;
  width: 100%;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 50px) and (max-width: 600px) {
    margin-top:5%;
  }
  @media (min-width: 601px) and (max-width: 1201px) {
    margin-top:5%;
  }
`;

export const SharePhotoTitle = styled.span`
  font-family: ImportedBold;
  display:block;
  font-size: 1.5rem;  
  font-weight: 900;
`;

export const Subtitle = styled.span`
  font-family: ImportedSimple;
  display:block;
  font-size: 1rem; 
`;


// Area Form
export const ShareArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column:2;
  @media (min-width: 50px) and (max-width: 1200px) {
    grid-column:1;
    grid-row:2;
  }
`;


export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 50px) and (max-width: 1300px) {
    width:100%;
    margin-top:5%;
  }
`;

// Inputs

export const Label = styled.label`
  width: 400px;
  margin-top:5%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column !important;
`;

export const TitleInput = styled.span`
  position: relative;
  margin-bottom: 1%;
  font-size: 19px;
  color: #2b2b2b;
  display: block;
  font-family: ImportedSimple;
`;

export const Input = styled.input`
  border-radius: 3px;
  position: relative;
  padding-left: 2%;
  width: 100%;
  font-family: Verdana;
  font-size: 1rem;
  height: 35px;
  background-color: #efefef;
  border: 1px solid #e4e2dd;
  justify-content: center;
  flex-direction: column !important;
  align-items: center;
`;

export const InputTextArea = styled.textarea`
  border-radius: 3px;
  position: relative;
  padding-left: 2%;
  width: 100%;
  font-family: Verdana;
  font-size: 1rem;
  height: 250px;
  background-color: #efefef;
  border: 1px solid #e4e2dd;
`;


// Box Button

export const BoxButton = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

// Messages Alerts

export const SucessMessage = styled.div`
 border-radius:5px;
 padding:4px;
 display:flex;
 align-items: center;
 justify-content: center;
 background-color: #137948;
 font-family: ImportedSimple;
 height:fit-content;
 margin-bottom:2%;
 span {
  align-items: center;
  justify-content: center;
  color:#fff;
  text-align:center;
  font-size:0.9em;
 }
 `;