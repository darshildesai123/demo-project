import "./Box.css";

function Box(props) {
  return (
    <>
      <div className="box" onClick={props.onClick} style={{backgroundColor:props.color}}></div>
    </>
  );
}

export default Box;
