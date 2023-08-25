import { useState } from "react";
import { Col, FormText, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  const [color, setColor] = useState("");
  return (
    <>
      <Form className="p-4" style={{ backgroundColor: color }}>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Enter Name" /> <br />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="Enter Email" /> <br />
          </Col>
        </Row>
        <Form.Control type="password" placeholder="Enter Password" /> <br />
        <Form.Control type="file" /> <br />
        <Form.Control type="date" placeholder="Enter Password" /> <br />
        <Form.Control type="time" placeholder="Enter Password" /> <br />
        <Form.Control
          type="datetime-local"
          className="form-control"
          placeholder="Enter Password"
        />{" "}
        <br />
        <Form.Control
          type="color"
          onChange={(e) => setColor(e.target.value)}
          className="form-control"
          placeholder="Enter Password"
        />{" "}
        <br />
        <textarea as={"textarea"} rows={5} cols={10}></textarea>
        <br />
        <FormText muted>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          nihil laudantium quae sequi nam minima.
        </FormText>
        <br />
        <Form.Select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <br />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
        ))}
        <br />
        <Form.Range />
      </Form>
    </>
  );
}

export default BasicExample;
