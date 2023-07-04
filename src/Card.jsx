import { useRef } from "react";
import "./Card.css";
import { colors } from "./App";

function Card({ name, grno, Course, dob, address }) {
  const cardRef = useRef();
  const changeColor = () => {
    cardRef.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      <div className="card" onClick={changeColor}>
        <div className="logo" ref={cardRef}>
          <img src="download-removebg-preview.png" />
          <br />
          <img
            src="DV__9101.JPG"
            style={{ borderRadius: "20px", width: "100px", height: "130px" }}
          />
          <br />
          <span>{name}</span> <br />
          <div className="mid">
            <label>GR NO:</label>
            <span>{grno}</span> <br />
            <label>Course:</label>
            <span>{Course}</span> <br />
            <label>DOB:</label>
            <span>{dob}</span> <br />
            <label>Address:</label>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
