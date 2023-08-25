import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { Context } from "./globalContext";

function Header() {
  const globalContext = useContext(Context);
  const theme = useContext(ThemeContext);
  const [tab, setTeb] = useState("home");
  return (
    <>
      <Nav>
        <ul>
          <li
            className={tab === "home" && "active"}
            onClick={() => setTeb("home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={tab === "login" && "active"}
            onClick={() => setTeb("login")}
          >
            <Link to="/Login">Login</Link>
          </li>
          <li
            className={tab === "register" && "active"}
            onClick={() => setTeb("register")}
          >
            <Link to="/Register">Register</Link>
          </li>
          {/* {
          theme.mode==='light'?
          <li><Link onClick={()=> theme.setMode(theme.mode==='light'? 'dark' : 'light')} style={{color:'#212530'}}> <FaSun /></Link></li>:
          
          <li><Link onClick={()=> theme.setMode(theme.mode==='dark'? 'light' : 'dark')} style={{color:'#212530'}}> <FaMoon /></Link></li>
        } */}
          <SearchField
            type="search"
            onChange={(e) => globalContext.setSearchText(e.target.value)}
            placeholder="Search Here"
          />
          
          <Colorwrapper>
            <Color onClick={() => theme.setMode("red")} bgcolor={"red"}></Color>
            <Color
              onClick={() => theme.setMode("blue")}
              bgcolor={"blue"}
            ></Color>
            <Color
              onClick={() => theme.setMode("green")}
              bgcolor={"green"}
            ></Color>
            <Color
              onClick={() => theme.setMode("cyan")}
              bgcolor={"cyan"}
            ></Color>
          </Colorwrapper>
        </ul>
      </Nav>
      
    </>
  );
}

const SearchField = styled.input`
  ${"" /* height:40px; */}
  margin:0;
  width: 300px;
  padding-left: 10px;
`;

const Colorwrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

const Color = styled.div`
  background-color: ${(props) => props.bgcolor};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: 2px solid white;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  ul {
    list-style: none;
    display: flex;
    padding: 5px;
    margin: 20px;
    justify-content: center;
    gap: 25px;
  }

  li {
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: skyblue;
    border: 1px solid black;
    &.active {
      background-color: #fff;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default Header;
