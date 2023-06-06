import { Component, useEffect, useState } from "react";
import { colors } from "./App";
// import "./Post.css";

function Button() {
  const [count, setCount] =useState(0);
  const [bgColor, setBgColor] = useState("skyblue");
  const [condition,setCondition] = useState(false);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count+1);
    },1000);
    return()=> clearInterval(interval);
  },[count]);

  return (
    <>
    <div className="button">
              <button
                onClick={() => {
                  // setBgColor(colors[Math.floor (Math.random()* colors.length)]);
                  //              setCondition(! condition);
                }}
                style={{ backgroundColor:"blue" ,  color:"white" }}
              >
               {this.props.title}
              </button>
            </div>
    </>
  );
}


// class Button extends Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return(
//             <div className="button">
//               <button
//                 onClick={() => {
//                   // setBgColor(colors[Math.floor (Math.random()* colors.length)]);
//                   //              setCondition(! condition);
//                 }}
//                 style={{ backgroundColor:"blue" ,  color:"white" }}
//               >
//                {this.props.title}
//               </button>
//             </div>

//     )
//   }
// }
export default Button;
