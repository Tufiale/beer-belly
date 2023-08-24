import "../BeerList/BeerCardList.scss";
import { Beer } from "../../Types/Types";
import BeerCard from "../BeerCard/BeerCard";
import { Link } from "react-router-dom";

type BeerListProps = {
  beerlist: Beer[];
};

const BeerList = ({ beerlist }: BeerListProps) => {
  return (
    <>
      <section className="beerlist-container">
        {beerlist.map((beer) => (
          <Link to={`/beer/${beer.id}`}>
            <BeerCard
              key={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
              abv={beer.abv}
              ibu={beer.ibu}
              description={beer.description}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default BeerList;
