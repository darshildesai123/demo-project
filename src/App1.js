import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Blogs from "./Blogs";
import GlobalContext from "./globalContext";
import Recap from "./Recap";
import UseReducer from "./UseReducer";
import UseCallback from "./UseCallback";
import ParentComponent from "./imperativeHandle";
import ParentComponent1 from "./parentTochild";
import RowCol from "./Bootstrap/RowandCol";
import BootstrapMain from "./Bootstrap/Main";
import CartoonCharacter from "./CartoonCharacter";

function App() {
  // const [today, setToday] = useState("");

  // useEffect(() => {
  //   setToday(`${dayjs().format("DD/MM/YYYY")}`);
  // }, []);
  return (
    <BrowserRouter>

    {/* <Routes>
      <Route path="/" element={<Recap />} />
      <Route path="/UseCAllback" element={<UseCallback />} />
      <Route path="/UseReducer" element={<UseReducer />} />
      <Route path="/Login" element={<Login />} />
    </Routes> */}
    {/* <ParentComponent /> */}
    {/* <ParentComponent1 /> */}
    {/* <BootstrapMain /> */}
      <GlobalContext>
        <ThemeProvider>
          <Header />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {today} */}
          <Blogs></Blogs>
          {/* <Recap /> */}
          {/* <CartoonCharacter /> */}
        </ThemeProvider>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
