import Header from "./components/layout/header";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "./utils/context/context";
import GlobalStyles from "./utils/styles/global";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exactpath="/" element={<Home />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
