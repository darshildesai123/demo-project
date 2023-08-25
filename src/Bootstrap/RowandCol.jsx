import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

function RowCol() {
  return (
    // <Container>
    //   <Row>
    //     <Col style={{border: "1px solid red"}} lg={4} md={6}>1 of 2</Col>
    //     <Col style={{border: "1px solid red"}} lg={4} md={6}>2 of 2</Col>
    //     <Col style={{border: "1px solid red"}} lg={4} md={6} data-bs-theme="dark">2 of 2</Col>
    //   </Row>
    //   <Row>
    //     <Col style={{border: "1px solid red"}} lg={8}>1 of 3</Col>
    //     <Col style={{border: "1px solid red"}} lg={4}>2 of 3</Col>
    //   </Row>
    //   <Row>
    //     <Col style={{border: "1px solid red"}} lg={4}>2 of 3</Col>
    //     <Col style={{border: "1px solid red"}} lg={8}>1 of 3</Col>
    //   </Row>
    // </Container>
    <Stack direction="horizontal">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        soluta, ut nihil velit illum similique esse tempora quos iure dolore
        earum saepe, optio cupiditate a nemo dolores nam perspiciatis iste.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        soluta, ut nihil velit illum similique esse tempora quos iure dolore
        earum saepe, optio cupiditate a nemo dolores nam perspiciatis iste.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        soluta, ut nihil velit illum similique esse tempora quos iure dolore
        earum saepe, optio cupiditate a nemo dolores nam perspiciatis iste.
      </p>
    </Stack>
  );
}

export default RowCol;
