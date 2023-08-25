import { useState } from "react";

function ChildComponent({ title , getData }) {
  return (
    <>
      <h1 className="text-danger">Hello there</h1>
      <h1>{title}</h1>
      <button onClick={ () => getData("Good night")}>Click</button>
    </>
  );
}

function ParentComponent1() {
    const [greeting , setGreeting] = useState();
    function getData(data){
        setGreeting(data);
    }
  return (
    <>
      <h1>Hello Parent</h1>
      <ChildComponent title={"Good morning"} getData = {getData} />
      <h1>{greeting}</h1>
    </>
  );
}

export default ParentComponent1;
