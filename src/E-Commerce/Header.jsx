import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Header() {
  const cartsData = useSelector((state) => state.ecommrece.cart)
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <div className="position-relative">
            <BsCartFill style={{ color: "#fff" }} />
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "0.8rem",
                background: "red",
                borderRadius: "50%",
                width: "17px",
                height: "17px",
                color: "#fff",
              }}
            >
              {cartsData.length}
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
