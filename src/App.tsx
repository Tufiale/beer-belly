import { useState } from "react";
import "./App.scss";
import { Beer } from "./Types/Types";
import { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";
import FilterPage from "./Containers/FilterPage/FilterPage";
import { ChangeEvent } from "react";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filter, setFilter] = useState({ radioSelect: "All" });

  const gettingBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data: Beer[] = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    gettingBeers();
  }, []);

  const handleRadioList = (event: ChangeEvent<HTMLInputElement>) => {
    const userSelection = event.currentTarget.value;
    setFilter({ ...filter, radioSelect: userSelection });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home beerlist={beers} />} />
          <Route
            path="/filter"
            element={
              <FilterPage
                handleChange={handleRadioList}
                selected={filter.radioSelect}
                options={["All", "ABV over 3.0", "IBU over 5.0"]}
                beerlist={beers}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
