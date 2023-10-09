import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import useFetchUsername from "../../hook/useFetchUsername";

// Components
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { MdLogout, MdPhotoCamera } from "react-icons/md";
import { RiSettings2Fill } from "react-icons/ri";
import Logo from "../../assets/Logo";
import {
  Nav,
  Container,
  DivLogo,
  SearchBox,
  Input,
  Form,
  NavLink,
  BoxLinks,
  DivLogout,
  LogoGRAM,
} from "./styles";

const NavBar = () => {
  const id = localStorage.getItem("id");
  const userData = useFetchUsername(id);
  
  const login = useFetchUsername(id);

  localStorage.setItem("token", "");

  const handleLogout = () => {
    localStorage.setItem("token", "");
    window.location.href = "/";
  };

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <Nav>
      <Container>
        <DivLogo to="/home">
          <Logo widthLogo="170px" />
        </DivLogo>

        <SearchBox>
          <Form onSubmit={handleSearch}>
            <BsSearch />
            <Input
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </SearchBox>

        <BoxLinks>
          <NavLink to={`/${userData.login}`}>
            <BsFillPersonFill />
          </NavLink>

          <NavLink to="/share">
            <MdPhotoCamera />
          </NavLink>

          <NavLink to="/update">
            <RiSettings2Fill />
          </NavLink>

          <DivLogout>
            <NavLink onClick={handleLogout}>
              <MdLogout />
            </NavLink>
          </DivLogout>
        </BoxLinks>
      </Container>
    </Nav>
  );
};

export default NavBar;
