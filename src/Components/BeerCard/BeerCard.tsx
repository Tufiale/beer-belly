import "../BeerCard/BeerCard.scss";

type beerCardProps = {
  name: string;
  tagline: string;
  image: string;
  abv: number;
  ibu: number;
  description: string;
};

const BeerCard = ({
  name,
  tagline,
  image,
  abv,
  ibu,
  description,
}: beerCardProps) => {
  return (
    <>
      <div className="beer-card-container">
        <div className="beer-card__heading">
          <img className="beer-card__image" src={image} alt={name} />
          <h1 className="beer-card__name">{name}</h1>
          <h3 className="beer-card__tagline">{tagline}</h3>
        </div>
        <div className="beer-card__main">
          <h4 className="beer-card__description">{description}</h4>
          <h4 className="beer-card__abv">ABV:{abv}</h4>
          <h4 className="beer-card__ibu">IBU:{ibu}</h4>
          <h3>Click here for more information</h3>
        </div>
      </div>
    </>
  );
};

export default BeerCard;
