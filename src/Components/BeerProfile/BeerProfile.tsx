import { Beer } from "../../Types/Types";
import { useParams } from "react-router-dom";

type BeerProfileProps = {
  beers: Beer[];
};

const BeerProfile = ({ beers }: BeerProfileProps) => {
  const { beerId } = useParams();

  const beerInfor = beers.find((beer) => beer.id === Number(beerId));

  return (
    <div className="beer-profile-card">
      <h1>{beerInfor?.name}</h1>
      <img src={beerInfor?.image_url} alt={beerInfor?.name} />
      <h2>{beerInfor?.tagline}</h2>
      <h3>First Brewed:{beerInfor?.first_brewed}</h3>
      <h3>Description:{beerInfor?.description}</h3>
      <ul>
        <li>ABV: {beerInfor?.abv}</li>
        <li>PH: {beerInfor?.ph}</li>
        <li>IBU: {beerInfor?.ibu}</li>
        <li>Attenuation Level: {beerInfor?.attenuation_level}</li>
      </ul>
    </div>
  );
};

export default BeerProfile;
