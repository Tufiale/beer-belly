import "../FilterPage/FilterPage.scss";
import SearchBox from "../../Components/SearchBox/SearchBoxx";
import BeerList from "../../Components/BeerList/BeerCardList";
import { Beer } from "../../Types/Types";
import { useState, FormEvent } from "react";

type FilterPageProps = {
  beerlist: Beer[];
};

const FilterPage = ({ beerlist }: FilterPageProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    setSearchTerm(inputToLower);
  };

  const filteredBeers = beerlist.filter((beer) => {
    const nameMatches = beer.name.toLowerCase().includes(searchTerm);
    return nameMatches;
  });

  return (
    <>
      <SearchBox
        key="SearchBox"
        label="Search Tickets Here:"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />

      <BeerList beerlist={filteredBeers} />
    </>
  );
};

export default FilterPage;
