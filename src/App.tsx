import { useState } from "react";
import "./App.scss";
import { Beer } from "./Types/Types";
import { useEffect } from "react";
import BeerList from "./Components/BeerList/BeerCardList";

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
    <>
      <BeerList beerlist={beers} />
    </>
  );
}

export default App;
