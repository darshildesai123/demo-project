import logo from "./logo.svg";
import "./App.css";
import H1 from "./component";
import Btn from "./button";
import { click } from "@testing-library/user-event/dist/click";
import Box from "./Box";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState([{color:""},{color:""},{color:""},{color:""},{color:""},{color:""},]);

  // function onClick(index){
  //   const updateArray=color.map((ele.i)=>{
  //     if(index == i){
  //       return{
  //         color:colors[Math.floor(Map.random()*colors.length)]
  //       }
  //     }
  //     else(
  //       return ele
  //     )
  //   })
  // }
  // const duplicateArray = Array.from({ length: 100 });
  const colors = ["red", "blue", "green", "yellow", "skyblue", "cyan", "purple"];
  return (
    <div className="App">
      {/* <Post
        src={"https://tse4.mm.bing.net/th?id=OIP.cKTq4enAGO_Wg_Omp0ysngHaEK&pid=Api&P=0"}
        content={
          "As we all know, a paragraph is a group of sentences that are connected and make absolute sense. While writing a long essay or letter, we break them into paragraphs for better understanding and to make a well-structured writing piece. Paragraph writing on any topic is not only about expressing your thoughts on the given topic, but it is also about framing ideas about the topic and making it convenient for the readers to follow it. In English paragraph writing, it is essential to focus on the writing style, i.e., the flow and connection between the sentences.Therefore, a paragraph must be written in simple language in order to avoid any interruption while reading. In order to write a paragraph on any topic, you can refer to the samples given below and write a paragraph without any hindrance."
        }
      ></Post>
      <Post
        src={"https://wallpapercave.com/wp/wp2599594.jpg"}
        content={"efqhbjebqhjwfvbehjdf dgvjejb"}
      ></Post> */}

      {/* <Btn></Btn>
      <Btn content={"Click Now"}></Btn>
      <Btn content={"Reset"}></Btn>
      <Btn content={"Back"}></Btn> */}

      {color.map((ele) => (
        <Box color={ele.color} onclick={onclick}></Box>
      ))}

      {/* <h1>This button is {count} time Click</h1>

      <button onClick={() => setCount(count >=10 ? count: count + 1)}>Click me</button> */}
    </div>
  );
}

export default App;
