import { YtData } from "./utils/common";
import Ytsstyled from "./Youtube";
import "./App.css";
import { styled } from "styled-components";
import { Component, Suspense, useState } from "react";
import LazyLoading from "./lazyLoading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import Alert from "./Alert";

function App() {
  const [videoLink, setVideoLink] = useState("");
  const [show, setShow]= useState(true);

  // console.log(videoLink);

  // const link = videoLink.replace("watch?v=", "embed/");
  return (
    <>
      <div className="App">
      <Alert show={show} onClose={()=> setShow(false)}></Alert>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home setShow={()=> setShow(true)} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />}/>

             
          </Routes>
        </BrowserRouter>
        {/* <Maindiv>
        {YtData.map(yt => (
          <Ytsstyled {...yt} onClick={(link) => setVideoLink(link)} />

        ))}
      </Maindiv>
                                    
      {videoLink && <Iframe src={link} title="The BEST 5 Side Hustles (2023)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>}   */}
        {/* <Suspense fallback={<h1>...Loading</h1>}>
      <LazyLoading></LazyLoading>
      </Suspense> */}
      </div>
    </>
  );
}



const Maindiv = styled.div`
  width: 90%;
  gap: 25px;
  margin: auto;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Iframe = styled.iframe`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export default App;
