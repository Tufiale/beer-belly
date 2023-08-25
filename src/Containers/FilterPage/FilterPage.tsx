import "../FilterPage/FilterPage.scss";
import SearchBox from "../../Components/SearchBox/SearchBoxx";
import BeerList from "../../Components/BeerList/BeerCardList";
import { Beer } from "../../Types/Types";
import { useState, FormEvent, ChangeEvent } from "react";
import RadioList from "../../Components/RadioList/RadioList";

type FilterPageProps = {
  beerlist: Beer[];
};

const FilterPage = ({ beerlist }: FilterPageProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRadioListFilter, setRadioSelected] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const inputToLower = event.currentTarget.value.toLowerCase();
    setSearchTerm(inputToLower);
  };

  const handleRadioList = (event: ChangeEvent<HTMLInputElement>) => {
    const radioOptionPicked = event.currentTarget.value;
    setRadioSelected(radioOptionPicked);
  };

  const filteredBeers = beerlist.filter((beer) => {
    const nameMatches = beer.name.toLowerCase().includes(searchTerm);
    return nameMatches;
  });

  const searchedBeers = beerlist.filter((beer) => {
    if (selectedRadioListFilter === "All") {
      return filteredBeers;
    }
    if (selectedRadioListFilter === "ABV over 3.0") {
      return beer.abv >= 3;
    }
    if (selectedRadioListFilter === "IBU over 50") {
      return beer.ibu >= 50;
    }
  });

  const options = ["All", "ABV over 3.0", "IBU over 50"];

  return (
    <>
      <SearchBox
        key="SearchBox"
        label="Search Tickets Here:"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />

      <RadioList
        label="What you looking for... "
        selected={selectedRadioListFilter}
        onChange={handleRadioList}
        options={options}
      />

      <BeerList
        beerlist={searchedBeers.length > 0 ? searchedBeers : filteredBeers}
      />
    </>
  );
};

export default FilterPage;
