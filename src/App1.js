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

function App() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(`${dayjs().format("DD/MM/YYYY")}`);
  }, []);
  return (
    <BrowserRouter>
      <GlobalContext>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {today}
          <Blogs></Blogs>
        </ThemeProvider>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
