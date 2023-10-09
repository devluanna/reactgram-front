import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.div`
  background-color:#fff;
  width:100%;
  height:60px;
  flex-directin:row;
  position:fixed;
  z-index:1000;
  border-bottom:1px solid #E4E2DD;
`;

export const Container = styled.div`
  width:100%;
  height:100%;
  display:grid;
  grid-template-columns:30% 40% 20%;
  @media (min-width: 50px) and (max-width: 700px) {
    grid-template-columns:34% 35% 50%;
  }
`;

// Logo

export const DivLogo = styled(Link)`
  justify-content:center;
  margin-left:40%;
  align-items:center;
  position:relative;
  display:flex;
  width:170px;
  height:100%;
  @media (min-width: 50px) and (max-width: 700px) {
    margin-left:0.5%;
  }
`;

// Search


export const SearchBox = styled.div`
  justify-content:center;
  align-items:center;
  display:flex;
  height:100%;
  margin:0;
  top:0;
`;

export const Form = styled.div`
  width:100%;
  justify-content:center;
  align-items:center;
  display:flex;
  svg {
    position:relative;
    left:25px;
  }
  @media (min-width: 50px) and (max-width: 700px) {
    justify-content:left;
  }
`;

export const Input = styled.input`
  background-color:#E6E6E6;
  width:50%;
  height:30px;
  padding-left:6%;
  border-radius: 5px;
  border: 1px solid #E4E2DD;
  @media (min-width: 50px) and (max-width: 700px) {
    width:100%;
    padding-left:17%;
    align-items:flex-start;
  }
`;

// Links

export const BoxLinks = styled.div`
  justify-content:flex-end;
  align-items:center;
  display:flex;
  height:100%;
  margin:0;
  top:0;
  @media (min-width: 50px) and (max-width: 700px) {
    justify-content:flex-start;
  }
`;


export const NavLink = styled(Link)`
  padding: 0;
  right:35px;
  margin: 12px;
  position:relative;
  text-decoration: none;
  svg {
    width:25px;
    height:25px;
    color:#2b2b2b;
  }
  @media (min-width: 50px) and (max-width: 700px) {
    margin: 8px;
    right:0px;
    svg {
      width:22px;
      height:22px;
    }
  }
`;

export const DivLogout = styled.div`
 position:relative;
 margin-left:20px;
 @media (min-width: 50px) and (max-width: 700px) {
  right:15px;
}
`;

