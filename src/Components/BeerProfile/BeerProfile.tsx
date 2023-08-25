import { Beer } from "../../Types/Types";
import { useParams } from "react-router-dom";
import "../BeerProfile/BeerProfile.scss";

type BeerProfileProps = {
  beers: Beer[];
};

const BeerProfile = ({ beers }: BeerProfileProps) => {
  const { beerId } = useParams();

  const beerInfor = beers.find((beer) => beer.id === Number(beerId));

  if (!beerInfor) {
    return (
      <>
        <h1>Sorry Mate</h1> <br /> <h1>Might be time to go home</h1>
      </>
    );
  }

  return (
    <div className="beer-profile-card">
      <section className="beer-profile-info">
        <h1 className="beer-profile__header">{beerInfor?.name}</h1>
        <img
          className="beer-profile__image"
          src={beerInfor?.image_url}
          alt={beerInfor?.name}
        />
        <h2 className="beer-profile__tagline">{beerInfor?.tagline}</h2>
        <h3>First Brewed:{beerInfor?.first_brewed}</h3>
        <h3>Description:{beerInfor?.description}</h3>
        <ul>
          <li>ABV: {beerInfor?.abv}</li>
          <li>PH: {beerInfor?.ph}</li>
          <li>IBU: {beerInfor?.ibu}</li>
          <li>Attenuation Level: {beerInfor?.attenuation_level}</li>
        </ul>
        <h3>Food Pairings: {beerInfor?.food_pairing} </h3>
      </section>
    </div>
  );
};

export default BeerProfile;
