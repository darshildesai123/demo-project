import { useState } from "react";
import { words } from "./App";
import "./Post.css";

function State() {
  const [text, setText] = useState("Success");

  return (
    <div>
      {/* <h1>{text}</h1> */}
      <h1 className="state" onMouseEnter={()=> setText("Success")}>Success</h1>
      <h1 className="state" onMouseEnter={()=> setText("Hard Word")}>Hard Word</h1>
      <h1 className="state" onMouseEnter={()=> setText("Learning")}>Learning</h1>
      <h1 className="state" onMouseEnter={()=> setText("Believe")}>Believe</h1>
      <h1 className="state" onMouseEnter={()=> setText("Don't judge")}>Don't judge</h1>

      {/* <button onClick={()=> setText(words[Math.floor(Math.random() * words.length)])}>changeColor</button> */  }
    </div>
  );
}

export default State;
