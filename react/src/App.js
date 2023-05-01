/*Import des routes*/
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

/*Import pour le style générique ainsi que le context*/
import { ThemeProvider } from "./utils/context/context";
import GlobalStyles from "./utils/styles/global";

/*Import des pages*/
import Home from "./pages/Home/Home";
import Map from "./pages/Map/map";
import Evenements from "./pages/Evenements/evenements";
import Profil from "./pages/Profil/profil";
import Etablissement from "./pages/Etablissement/Etablissement";

/*Import des layout*/
import Header from "./components/layout/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/map" element={<Map/>} />
          <Route exact path="/evenements" element={<Evenements/>} />
          <Route exact path="/profil" element={<Profil/>}/>
          <Route exact path="/etablissement/:id" element={<Etablissement/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
