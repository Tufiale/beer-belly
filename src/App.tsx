import { useState } from "react";
import "./App.scss";
import { Beer } from "./Types/Types";
import { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import FilterPage from "./Containers/FilterPage/FilterPage";
import BeerProfile from "./Components/BeerProfile/BeerProfile";
import Header from "./Components/Header/Header";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const gettingBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data: Beer[] = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    gettingBeers();
  }, []);

  return (
    <HashRouter>
      <div className="app">
        <NavBar />
        <Header />
        <Routes>
          <Route
            path="/beer-belly/"
            element={<FilterPage beerlist={beers} />}
          />
          <Route path="/beer/:beerId" element={<BeerProfile beers={beers} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
