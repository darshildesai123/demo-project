import { YtData } from "./utils/common";
import Ytsstyled from "./Youtube";
import "./App.css";
import { styled } from "styled-components";
import { Component, Suspense, useEffect, useState } from "react";
import LazyLoading from "./lazyLoading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import Alert from "./Alert";
import CartoonCharacter from "./CartoonCharacter";
import ProductCard from "./E-Commerce/ProductCard";

// import data from "./db.json";
import Header from "./E-Commerce/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCartAction, getProductAction } from "./Redux/actions/ecommerceAction";
import Cartitem from "./E-Commerce/Cart-item";
import Cart from "./E-Commerce/Cart";

function App() {
  const [videoLink, setVideoLink] = useState("");
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ecommrece.products);

  useEffect(() => {
    dispatch(getProductAction());
    dispatch(getCartAction());
  }, []);

  // console.log(videoLink);

  // const link = videoLink.replace("watch?v=", "embed/");
  return (
    <>
      <div className="App">
        <Header />
        {/* <CartoonCharacter /> */}

        {/* <Alert show={show} onClose={() => setShow(false)}></Alert> */}
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route
              path="/"
              element={
                <CardWrapper>
                  {productData.map((ele, i) => (
                    <ProductCard productDetail={ele} />
                  ))}
                </CardWrapper>
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
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

const CardWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);
`;

export default App;
