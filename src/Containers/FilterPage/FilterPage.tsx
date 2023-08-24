import "../FilterPage/FilterPage.scss";
import SearchBox from "../../Components/SearchBox/SearchBoxx";
import BeerList from "../../Components/BeerList/BeerCardList";
import { Beer } from "../../Types/Types";
import { useState, FormEvent, ChangeEventHandler } from "react";
import RadioList from "../../Components/RadioList/RadioList";

type FilterPageProps = {
  beerlist: Beer[];
  handleChange: ChangeEventHandler<HTMLInputElement>;
  selected: string;
  options: string[];
};

const FilterPage = ({
  beerlist,
  handleChange,
  selected,
  options,
}: FilterPageProps) => {
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

      <RadioList
        label="Let's see what we can find..."
        selected={selected}
        onChange={handleChange}
        options={options}
      />

      <BeerList beerlist={filteredBeers} />
    </>
  );
};

export default FilterPage;
