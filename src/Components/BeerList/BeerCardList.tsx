import "../BeerList/BeerCardList.scss";
import { Beer } from "../../Types/Types";
import BeerCard from "../BeerCard/BeerCard";

type BeerListProps = {
  beerlist: Beer[];
};

const BeerList = ({ beerlist }: BeerListProps) => {
  return (
    <>
      {beerlist.map((beer) => (
        <BeerCard
          key={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          image={beer.image_url}
          abv={beer.abv}
          ibu={beer.ibu}
          description={beer.description}
        />
      ))}
    </>
  );
};

export default BeerList;
