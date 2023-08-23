import { useState } from "react";
import "./App.scss";
import { Beer } from "./Types/Types";
import { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import FilterPage from "./Containers/FilterPage/FilterPage";

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
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home beerlist={beers} />} />
          <Route path="/filter" element={<FilterPage beerlist={beers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
