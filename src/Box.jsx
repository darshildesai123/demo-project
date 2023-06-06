import "./Box.css";

function Box(props) {
  return (
    <>
      <div className="box" onClick={()=>props.onClick(props.index)} style={{backgroundColor:props.color}}></div>
    </>
  );
}

export default Box;
