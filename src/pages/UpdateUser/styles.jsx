import styled, { css } from "styled-components";

//Page

export const LogoGRAM = styled.span`
top:0;
padding-top:1.5%;
width:50%;
height:auto;
diplay:flex;
position: absolute;
align-items: flex-start;
`;


//Boxs
export const Container = styled.div`
  display: flex;
  margin: 0;
  background-color:#fff;
  width:100%;
  height:100vh;
  align-items:center;
  justify-content: center;
`;

export const UserBox = styled.div`
  display:grid;
  grid-template-rows: 10% 80% 10%;
  border-radius: 10px;
  border:1px solid #E4E2DD;
  width: 75%;
  min-width:500px;
  height:88%;
  margin-top:2%;
  position:relative;
  flex-direction: column;
  align-items:center;
`;


// Titles Box

export const UserPage = styled.div`
  position: relative;
  color:#2B2B2B;
  display:flex;
  grid-row:1;
  width:100%;
  height:100%;
  align-items:center;
  flex-direction: column;
  justify-content: center;
`;

export const UserTitle = styled.span`
  font-family: ImportedBold;
  font-size:1.5rem;
  font-weight:900;
`;

export const Subtitle = styled.span`
  font-family: ImportedSimple;
  font-size:1rem;
`;



// Form

export const Form = styled.form`
  width: 100%;
  height:100%;
  grid-row:2;
  display: flex;
  flex-direction: column !important;
  align-items:center;
`;



export const Label = styled.label`
 width:400px;
 margin-bottom:1.1%;
 display:flex;
 justify-content: center;
 flex-direction: column !important;
`;

export const TitleInput = styled.span`
  position: relative;
  margin-bottom:0.5%;
  font-size:19px;
  color:#2B2B2B;
  display:block;
  font-family:ImportedSimple;
`;

export const Input = styled.input`
  border-radius: 3px;
  position: relative;
  padding-left:2%;
  width:100%;
  font-family: Verdana;
  font-size:1rem;
  height: 30px;
  background-color:#EFEFEF;
  border: 1px solid #E4E2DD;
`;


export const InputTextArea = styled.textarea`
  border-radius: 3px;
  position: relative;
  padding-left: 2%;
  width: 100%;
  font-family: Verdana;
  font-size: 1rem;
  height: 120px;
  background-color: #efefef;
  border: 1px solid #e4e2dd;
`;

export const ImgProfile = styled.img`
  width: 120px;
  height: 120px;
  justify-content:center;
  align-items:center;
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

// Box Button
export const BoxButton = styled.div`
width:100%;
align-items:center;
justify-content: center;
`;

//Footer box
export const FooterBox = styled.div`
  width: 100%;
  height:100%;
  grid-row:3;
  display: flex;
  background: linear-gradient(to right, #5CE1E6 0%, #8C52FF 70%);
  flex-direction: column !important;
  align-items:center;
  justify-content: center;
`;

export const BackLogin = styled.div`
justify-content: center;
position:relative;
align-items:center;
text-align:center;
width:100%;
diplay:flex;
font-size:1.3rem;
font-family: ImportedSimple;
`;


export const SubtitleBack = styled.span`
  font-family: ImportedSimple;
  font-size:1.1rem;
  font-weight:600;
  diplay:flex;
  position:relative;
  bottom:5%;
`;

export const FooterSpan = styled.span`
  font-family: ImportedSimple;
  diplay:flex;
  bottom:0;
  color:#2b2b2b;
  margin-bottom:1%;
  position: absolute;
  align-items: flex-end;
  font-size:1.1rem;
  font-weight:500;
`;

// Alerts
export const AlertMessage = styled.div`
 background-color: rgba(187, 30, 0, 1);
 border-radius:5px;
 padding:2px;
 margin-bottom:2%;
 font-family: ImportedSimple;
 height:fit-content;
 span {
  color:#fff;
  text-align:center;
  font-size:0.9em;
 }
 `;

 export const AlertError = styled.div`
 background-color:#D6983A;
 border-radius:5px;
 padding:2px;
 font-family: ImportedSimple;
 height:fit-content;
 margin-bottom:2%;
 span {
  color:#fff;
  text-align:center;
  font-size:0.9em;
 }
 `;

 export const SucessMessage = styled.div`
 background-color: #137948;
 border-radius:5px;
 padding:4px;
 font-family: ImportedSimple;
 height:fit-content;
 margin-bottom:2%;
 span {
  color:#fff;
  text-align:center;
  font-size:0.9em;
 }
 `;

 export const MessageCredential = styled.div`
 background-color:#D6983A;
 padding:4px;
 border-radius:5px;
 font-family: Verdana;
 height:fit-content;
 margin-bottom:1%;
 span {
  color:#2b2b2b;
  text-align:center;
  font-size:0.9em;
 }
 `;

 export const MessageValid = styled.div`
 background-color:#fff;
 width:40%;
 font-family: Verdana;
 height:fit-content;
 margin-bottom:1%;
 span {
  color:#2b2b2b;
  text-align:center;
  font-size:0.9em;
  text-align: justify;
 }
 `;