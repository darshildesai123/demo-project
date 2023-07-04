import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
