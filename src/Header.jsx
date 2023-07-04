import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const theme = useContext(ThemeContext);
  const [tab, setTeb] = useState("home");
  return (
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
        <Colorwrapper>
          <Color></Color>
        </Colorwrapper>
      </ul>
    </Nav>
  );
}

const Colorwrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`

const Color = styled.div`
  background-color: ${(props)=> props.color} ;
  height: 30px;
  width: 30px;
`

const Nav = styled.nav`
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
